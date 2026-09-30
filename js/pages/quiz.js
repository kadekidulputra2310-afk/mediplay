/* Halaman Kuis: soal acak dari bank soal penyakit, tanpa perlu main game. */
function quiz(id) {
  if (!id) return picker("Pilih Kuis", "quiz", "📝 MULAI");
  const d = dz(id),
    qs = shuf([...d.quiz, ...d.tf]).slice(0, QUIZ_LEN),
    wrong = [];
  let i = 0,
    score = 0;
  function question() {
    if (i >= qs.length) return result();
    const q = qs[i];
    // Soal benar/salah tetap urut; pilihan ganda diacak urutannya
    const opts = q.options.map((t, k) => ({ t, ok: k === q.correctAnswer })),
      list = q.options[0] === "Benar" ? opts : shuf(opts);
    app.innerHTML = `<section class="wrap"><div class="panel" style="--tint:${d.tint}"><h1 class="gt" style="font-size:2rem">Kuis: ${d.name}</h1><div class="bar"><i style="width:${(i / qs.length) * 100}%"></i></div><p style="margin:8px 0">Soal ${i + 1} dari ${qs.length} · Benar: ${score}</p><div class="card"><h3>${q.question}</h3>${list.map((o, n) => `<button class="opt" data-i="${n}">${o.t}</button>`).join("")}<div id="fb"></div></div><div class="row"><a class="btn alt" href="#/quiz">Ganti penyakit</a></div></div></section>`;
    const btns = [...document.querySelectorAll(".opt")];
    btns.forEach(
      (b) =>
        (b.onclick = () => {
          const ok = list[+b.dataset.i].ok,
            p = pd(d.id);
          btns.forEach((x, n) => {
            x.disabled = true;
            if (list[n].ok) x.classList.add("ok");
          });
          if (!ok) {
            b.classList.add("bad");
            wrong.push(q);
          } else {
            score++;
            p.cor++;
          }
          p.ans++;
          sv();
          $("#fb").innerHTML =
            `<div class="fb ${ok ? "ok" : "bad"}"><b>${ok ? "✓ Benar!" : "✕ Kurang tepat"}</b><p>${ok ? "" : "Jawaban benar: " + q.options[q.correctAnswer] + ". "}${q.explanation}</p><button class="btn" id="nx">${i + 1 < qs.length ? "SOAL BERIKUTNYA" : "LIHAT HASIL"}</button></div>`;
          $("#nx").onclick = () => {
            i++;
            question();
          };
        }),
    );
  }
  function result() {
    const pc = Math.round((score / qs.length) * 100);
    app.innerHTML = `<section class="wrap"><div class="panel" style="--tint:${d.tint}"><h1 class="gt">Hasil Kuis</h1><div class="card" style="text-align:center"><div class="ico">${pc >= 80 ? "🏆" : pc >= 50 ? "👍" : "📚"}</div><h2>${score} / ${qs.length} (${pc}%)</h2><p>${pc >= 80 ? "Hebat! Kamu sudah paham materinya." : pc >= 50 ? "Lumayan! Baca lagi materi yang masih keliru." : "Yuk pelajari materinya lagi, lalu coba kuis lagi."}</p></div>${wrong.length ? `<h2 style="margin-top:20px">Yang perlu diulang</h2>${wrong.map((q) => `<div class="card" style="margin-bottom:10px"><b>${q.question}</b><p>Jawaban benar: ${q.options[q.correctAnswer]}. ${q.explanation}</p></div>`).join("")}` : ""}<div class="row"><button class="btn" id="again">ULANGI KUIS</button><a class="btn alt" href="#/d/${d.id}">PELAJARI MATERI</a><a class="btn alt" href="#/game/${d.id}">🎲 MAIN GAME</a></div></div></section>`;
    $("#again").onclick = () => quiz(d.id);
  }
  question();
}
