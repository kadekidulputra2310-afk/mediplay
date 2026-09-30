/* Board game: dadu, pion, kotak, pertanyaan, hasil */
// HALAMAN BOARD GAME
// Nomor permainan aktif. Naik setiap game baru agar timer game lama berhenti sendiri
let RUN = 0;

function game(id) {
  if (!id) return picker("Pilih Board Game", "game", "🎲 MAIN");
  const d = dz(id);
  RUN++; // hentikan animasi dadu/pion dari permainan sebelumnya
  hide();
  G = {
    d,
    pos: 0,
    score: 0,
    ans: 0,
    cor: 0,
    board: makeBoard(),
    qs: shuf(d.quiz),
    ts: shuf(d.tf),
    fs: shuf(d.facts),
    busy: 0,
    end: 0,
  };
  const order = [];
  for (let r = 0; r < 5; r++)
    for (let c = 0; c < 6; c++) order.push(r % 2 ? r * 6 + 5 - c : r * 6 + c);
  app.innerHTML = `<section class="wrap"><div class="panel" style="--tint:${d.tint}"><h1 class="gt" style="font-size:2rem">${d.name}: Learning Board</h1><div class="stats"><div class="card">Score<b id="sc">0</b></div><div class="card">Position<b id="ps">1/30</b></div><div class="card">Progress<b id="pg">0%</b></div></div>
<div class="board">${order.map((i) => `<div class="sq ${G.board[i]}" id="s${i}"><small>${i + 1}</small>${ICON[G.board[i]]}</div>`).join("")}</div>
<div class="row" style="justify-content:center"><button class="btn" id="rf">🔄 REFRESH GAME</button><a class="btn alt" href="#/game">Ganti penyakit</a></div><div class="ctl"><div class="die" id="die">🎲</div><button class="btn" id="roll">🎲 ROLL DICE</button></div>
<div class="card"><h3>How to Play</h3><ol class="how"><li>Roll the dice.</li><li>Move your token.</li><li>Complete the challenge.</li><li>Reach the finish.</li></ol><p style="margin:10px 0 0;color:var(--mut)">❓ Pertanyaan · 🎬 Video · ⭐ Bonus · 🎯 Challenge · 🧠 Fakta · ⚠️ Penalty</p></div></div></section>`;
  $("#roll").onclick = roll;
  $("#rf").onclick = () => {
    // Catatan: confirm() diblokir di beberapa tampilan (mis. pratinjau claude.ai), jadi pakai popup sendiri
    if ((G.pos > 0 || G.ans) && !G.end) {
      show(
        `<h2>🔄 Ulangi permainan?</h2><p>Skor dan posisi sekarang akan hilang. Soal dan papan akan diacak ulang.</p><div class="row"><button class="btn" id="yes">YA, ULANGI</button><button class="btn alt" id="no">BATAL</button></div>`,
      );
      $("#yes").onclick = () => {
        hide();
        game(G.d.id);
      };
      $("#no").onclick = hide;
      return;
    }
    game(G.d.id);
  };
  tok();
  stats();
}

function tok() {
  document.querySelectorAll(".tok").forEach((x) => x.remove());
  const e = document.createElement("div");
  e.className = "tok";
  e.textContent = "🧑‍⚕️";
  $("#s" + G.pos).appendChild(e);
}

function stats() {
  $("#sc").textContent = G.score;
  $("#ps").textContent = G.pos + 1 + "/30";
  $("#pg").textContent = pct(G.d.id) + "%";
}

// Lempar dadu
function roll() {
  if (G.busy || G.end) return;
  G.busy = 1;
  $("#roll").disabled = true;
  const die = $("#die");
  let n = 0;
  die.classList.add("roll");
  const my = RUN;
  const iv = setInterval(() => {
    if (my !== RUN) return clearInterval(iv);
    die.textContent = FACE[(Math.random() * 6) | 0];
    if (++n > 10) {
      clearInterval(iv);
      die.classList.remove("roll");
      const v = 1 + ((Math.random() * 6) | 0);
      die.textContent = FACE[v - 1];
      move(v, 0, 0);
    }
  }, 70);
}

// Gerakkan pion kotak demi kotak
function move(k, back, skip) {
  let i = 0;
  const my = RUN;
  const t = setInterval(() => {
    if (my !== RUN) return clearInterval(t);
    G.pos += back ? -1 : 1;
    tok();
    stats();
    if (++i >= k || G.pos >= 29 || G.pos <= 0) {
      clearInterval(t);
      setTimeout(() => my === RUN && land(skip), 300);
    }
  }, 260);
}

function done() {
  G.busy = 0;
  $("#roll").disabled = false;
  stats();
}

// Aksi sesuai jenis kotak yang diinjak
function land(skip) {
  const d = G.d,
    t = G.board[G.pos];
  if (G.pos >= 29) return finish();
  if (skip || t == "N" || t == "s") return done();
  const go = () => {
    hide();
    done();
  };
  if (t == "Q") return ask(nx("quiz"), "Knowledge Check");
  if (t == "C") return ask(G.ts.length ? nx("tf") : nx("quiz"), "Challenge 🎯");
  if (t == "K")
    show(
      `<h2>🧠 Did You Know?</h2><p>${nx("facts")}</p><button class="btn" id="c">CONTINUE</button>`,
    );
  if (t == "V")
    show(
      `<h2>🎬 Watch & Learn</h2><p>Pelajari kembali mekanisme penyakit melalui video.</p>${vid(d)}<p></p><button class="btn" id="c">CONTINUE</button>`,
    );
  if (t == "B")
    show(
      `<h2>⭐ Bonus!</h2><p>+50 poin dan maju 2 kotak.</p><button class="btn" id="c">CONTINUE</button>`,
    );
  if (t == "P")
    show(
      `<h2>⚠️ Penalty</h2><p>Kamu mundur 3 kotak. Ingat lagi materinya!</p><button class="btn" id="c">CONTINUE</button>`,
    );
  $("#c").onclick = () => {
    hide();
    if (t == "B") {
      G.score += 50;
      move(2, 0, 1);
    } else if (t == "P") move(3, 1, 1);
    else go();
  };
}

// Popup pertanyaan + feedback
function ask(q, title) {
  G.ans++;
  pd(G.d.id).ans++;
  show(
    `<h2>${title}</h2><p><b>${q.question}</b></p>${q.options.map((o, i) => `<button class="opt" data-i="${i}">${o}</button>`).join("")}<div id="fb"></div>`,
  );
  document.querySelectorAll(".opt").forEach(
    (b) =>
      (b.onclick = () => {
        const ok = +b.dataset.i == q.correctAnswer;
        document.querySelectorAll(".opt").forEach((x) => {
          x.disabled = true;
          if (+x.dataset.i == q.correctAnswer) x.classList.add("ok");
        });
        if (!ok) b.classList.add("bad");
        if (ok) {
          G.cor++;
          G.score += 100;
          pd(G.d.id).cor++;
        }
        sv();
        stats();
        $("#fb").innerHTML =
          `<div class="fb ${ok ? "ok" : "bad"}"><b>${ok ? "✓ Correct! +100 points" : "✕ Incorrect"}</b><p>${ok ? "" : "Jawaban benar: " + q.options[q.correctAnswer] + ". "}${q.explanation}</p><button class="btn" id="c2">CONTINUE</button></div>`;
        $("#c2").onclick = () => {
          hide();
          done();
        };
      }),
  );
}

// Layar hasil akhir
function finish() {
  G.end = 1;
  pd(G.d.id).done = 1;
  sv();
  stats();
  show(
    `<h2>🎉 Congratulations!</h2><p>Kamu telah menyelesaikan Disease Learning Game.</p><div class="res"><div>Score<b>${G.score}</b></div><div>Questions Answered<b>${G.ans}</b></div><div>Correct Answers<b>${G.cor}</b></div><div>Learning Progress<b>${pct(G.d.id)}%</b></div></div><div class="row"><button class="btn" onclick="game(${G.d.id});hide()">PLAY AGAIN</button><a class="btn alt" href="#/d/${G.d.id}">REVIEW MATERIAL</a><a class="btn alt" href="#/diseases">BACK TO DISEASES</a></div>`,
  );
}
