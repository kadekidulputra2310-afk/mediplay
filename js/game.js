/* BOARD GAME MULTI-PEMAIN (1 sampai 5 pemain, giliran bergantian seperti ludo).
   Alur: game(id) = layar pengaturan pemain -> begin() = mulai permainan.
   Dadu 6 = main lagi. Pemain pertama yang mencapai FINISH menang. */
const COLORS = ["🔴", "🟢", "🔵", "🟡", "🟣"]; // pion tiap pemain
let RUN = 0; // nomor game aktif; naik tiap game baru agar timer game lama berhenti sendiri

// Layar pengaturan: pilih jumlah pemain dan nama
function game(id) {
  if (!id) return picker("Pilih Board Game", "game", "🎲 MAIN");
  const d = dz(id);
  RUN++;
  hide();
  const names = ["Pemain 1", "Pemain 2", "Pemain 3", "Pemain 4", "Pemain 5"];
  let n = 2;
  const keep = () => document.querySelectorAll(".nm").forEach((e, i) => (names[i] = e.value));
  const draw = () => {
    app.innerHTML = `<section class="wrap"><div class="panel" style="--tint:${d.tint}"><h1 class="gt" style="font-size:2rem">${d.name}: Learning Board</h1><div class="card"><h3>Jumlah pemain</h3><div class="row">${[1, 2, 3, 4, 5].map((k) => `<button class="btn ${k == n ? "" : "alt"}" data-n="${k}">${k == 1 ? "1 (Solo)" : k + " Pemain"}</button>`).join("")}</div><h3 style="margin-top:18px">Nama pemain</h3><div class="sr">${names.slice(0, n).map((v, i) => `<input class="nm" value="${v}" maxlength="14" aria-label="Nama pemain ${i + 1}">`).join("")}</div><div class="row"><button class="btn" id="go">▶ MULAI GAME</button><a class="btn alt" href="#/game">Ganti penyakit</a></div></div></div></section>`;
    document.querySelectorAll("[data-n]").forEach(
      (b) =>
        (b.onclick = () => {
          keep();
          n = +b.dataset.n;
          draw();
        }),
    );
    $("#go").onclick = () => {
      keep();
      begin(d, names.slice(0, n));
    };
  };
  draw();
}

// Mulai permainan baru (papan dan soal diacak ulang)
function begin(d, names) {
  RUN++;
  hide();
  G = {
    d,
    names,
    pl: names.map((nm, i) => ({ name: nm.trim() || "Pemain " + (i + 1), ico: COLORS[i], pos: 0, score: 0, ans: 0, cor: 0 })),
    cur: 0, // indeks pemain yang sedang giliran
    board: makeBoard(),
    qs: shuf(d.quiz),
    ts: shuf(d.tf),
    fs: shuf(d.facts),
    busy: 0,
    end: 0,
    six: false,
  };
  const order = [];
  for (let r = 0; r < 5; r++) for (let c = 0; c < 6; c++) order.push(r % 2 ? r * 6 + 5 - c : r * 6 + c);
  app.innerHTML = `<section class="wrap"><div class="panel" style="--tint:${d.tint}"><h1 class="gt" style="font-size:2rem">${d.name}: Learning Board</h1><div class="stats" id="sb"></div><p class="tn" id="turn"></p>
<div class="board">${order.map((i) => `<div class="sq ${G.board[i]}" id="s${i}"><small>${i + 1}</small>${ICON[G.board[i]]}<div class="toks"></div></div>`).join("")}</div>
<div class="row" style="justify-content:center"><button class="btn" id="rf">🔄 REFRESH GAME</button><a class="btn alt" href="#/game">Ganti penyakit</a></div><div class="ctl"><div class="die" id="die">🎲</div><button class="btn" id="roll">🎲 ROLL DICE</button></div>
<div class="card"><h3>How to Play</h3><ol class="how"><li>Roll the dice.</li><li>Move your token.</li><li>Complete the challenge.</li><li>Reach the finish first. Dadu 6 = main lagi!</li></ol><p style="margin:10px 0 0;color:var(--mut)">❓ Pertanyaan · 🎬 Video · ⭐ Bonus · 🎯 Challenge · 🧠 Fakta · ⚠️ Penalty</p></div></div></section>`;
  $("#roll").onclick = roll;
  $("#rf").onclick = () => {
    // confirm() diblokir di beberapa tampilan (mis. pratinjau claude.ai), jadi pakai popup sendiri
    if (G.pl.some((p) => p.pos > 0 || p.ans) && !G.end) {
      show(
        `<h2>🔄 Ulangi permainan?</h2><p>Skor dan posisi semua pemain akan hilang. Soal dan papan diacak ulang.</p><div class="row"><button class="btn" id="yes">YA, ULANGI</button><button class="btn alt" id="no">BATAL</button></div>`,
      );
      $("#yes").onclick = () => begin(G.d, G.names);
      $("#no").onclick = hide;
      return;
    }
    begin(G.d, G.names);
  };
  tok();
  stats();
}

// Gambar semua pion di kotaknya masing-masing
function tok() {
  document.querySelectorAll(".toks").forEach((x) => (x.innerHTML = ""));
  G.pl.forEach((p, i) => {
    const e = document.createElement("span");
    e.className = "tk" + (i == G.cur && !G.end ? " act" : "");
    e.textContent = p.ico;
    e.title = p.name;
    $("#s" + p.pos + " .toks").appendChild(e);
  });
}

// Papan skor dan info giliran
function stats() {
  $("#sb").innerHTML = G.pl
    .map(
      (p, i) =>
        `<div class="card ${i == G.cur && !G.end ? "turn" : ""}">${p.ico} ${p.name}<b>${p.score} poin</b><small>Kotak ${p.pos + 1}/30</small></div>`,
    )
    .join("");
  const c = G.pl[G.cur];
  $("#turn").innerHTML = G.end ? "" : `Giliran: ${c.ico} <b>${c.name}</b>`;
}

// Lempar dadu
function roll() {
  if (G.busy || G.end) return;
  G.busy = 1;
  $("#roll").disabled = true;
  const die = $("#die"),
    my = RUN;
  let n = 0;
  die.classList.add("roll");
  const iv = setInterval(() => {
    if (my !== RUN) return clearInterval(iv);
    die.textContent = FACE[(Math.random() * 6) | 0];
    if (++n > 10) {
      clearInterval(iv);
      die.classList.remove("roll");
      const v = 1 + ((Math.random() * 6) | 0);
      die.textContent = FACE[v - 1];
      G.six = v == 6;
      move(v, 0, 0);
    }
  }, 70);
}

// Gerakkan pion pemain yang sedang giliran, kotak demi kotak
function move(k, back, skip) {
  let i = 0;
  const my = RUN,
    p = G.pl[G.cur];
  const t = setInterval(() => {
    if (my !== RUN) return clearInterval(t);
    p.pos += back ? -1 : 1;
    tok();
    stats();
    if (++i >= k || p.pos >= 29 || p.pos <= 0) {
      clearInterval(t);
      setTimeout(() => my === RUN && land(skip), 300);
    }
  }, 260);
}

// Selesai satu giliran: pindah ke pemain berikutnya (kecuali dapat dadu 6)
function done() {
  const extra = G.six && !G.end;
  G.six = false;
  if (!extra) G.cur = (G.cur + 1) % G.pl.length;
  G.busy = 0;
  $("#roll").disabled = false;
  tok();
  stats();
  if (extra) $("#turn").innerHTML += " · 🎲 Dadu 6, main lagi!";
}

// Aksi sesuai jenis kotak yang diinjak
function land(skip) {
  const d = G.d,
    p = G.pl[G.cur],
    t = G.board[p.pos],
    who = " · " + p.ico + " " + p.name;
  if (p.pos >= 29) return finish();
  if (skip || t == "N" || t == "s") return done();
  if (t == "Q") return ask(nx("quiz"), "Knowledge Check" + who);
  if (t == "C") return ask(G.ts.length ? nx("tf") : nx("quiz"), "Challenge 🎯" + who);
  if (t == "K") show(`<h2>🧠 Did You Know?${who}</h2><p>${nx("facts")}</p><button class="btn" id="c">CONTINUE</button>`);
  if (t == "V") show(`<h2>🎬 Watch & Learn${who}</h2><p>Pelajari kembali mekanisme penyakit melalui video.</p>${vid(d)}<p></p><button class="btn" id="c">CONTINUE</button>`);
  if (t == "B") show(`<h2>⭐ Bonus!${who}</h2><p>+50 poin dan maju 2 kotak.</p><button class="btn" id="c">CONTINUE</button>`);
  if (t == "P") show(`<h2>⚠️ Penalty${who}</h2><p>Mundur 3 kotak. Ingat lagi materinya!</p><button class="btn" id="c">CONTINUE</button>`);
  $("#c").onclick = () => {
    hide();
    if (t == "B") {
      p.score += 50;
      move(2, 0, 1);
    } else if (t == "P") move(3, 1, 1);
    else done();
  };
}

// Popup pertanyaan + feedback untuk pemain yang sedang giliran
function ask(q, title) {
  const p = G.pl[G.cur];
  p.ans++;
  pd(G.d.id).ans++;
  show(`<h2>${title}</h2><p><b>${q.question}</b></p>${q.options.map((o, i) => `<button class="opt" data-i="${i}">${o}</button>`).join("")}<div id="fb"></div>`);
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
          p.cor++;
          p.score += 100;
          pd(G.d.id).cor++;
        }
        sv();
        stats();
        $("#fb").innerHTML = `<div class="fb ${ok ? "ok" : "bad"}"><b>${ok ? "✓ Correct! +100 points" : "✕ Incorrect"}</b><p>${ok ? "" : "Jawaban benar: " + q.options[q.correctAnswer] + ". "}${q.explanation}</p><button class="btn" id="c2">CONTINUE</button></div>`;
        $("#c2").onclick = () => {
          hide();
          done();
        };
      }),
  );
}

// Layar hasil akhir: pemenang + klasemen
function finish() {
  G.end = 1;
  pd(G.d.id).done = 1;
  sv();
  tok();
  stats();
  const w = G.pl[G.cur];
  const rank = [w, ...G.pl.filter((p) => p != w).sort((a, b) => b.pos - a.pos || b.score - a.score)];
  show(`<h2>🎉 ${w.ico} ${w.name} menang!</h2><p>Mencapai FINISH lebih dulu dan menyelesaikan Disease Learning Game.</p><div class="res" style="grid-template-columns:1fr">${rank.map((p, i) => `<div>${i + 1}. ${p.ico} ${p.name}<b>${p.score} poin</b>Benar ${p.cor} dari ${p.ans} soal</div>`).join("")}</div><div class="row"><button class="btn" id="again">PLAY AGAIN</button><button class="btn alt" id="chg">GANTI PEMAIN</button><a class="btn alt" href="#/d/${G.d.id}">REVIEW MATERIAL</a><a class="btn alt" href="#/diseases">BACK TO DISEASES</a></div>`);
  $("#again").onclick = () => begin(G.d, G.names);
  $("#chg").onclick = () => game(G.d.id);
}
