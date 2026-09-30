/* Halaman Home */
// HALAMAN HOME
function home() {
  app.innerHTML = `<section class="wrap"><div class="panel" style="--tint:linear-gradient(160deg,#dcebff,#f3edff)"><div class="hero"><div><h1 class="gt">Learn. Explore. Play.</h1><p>Pelajari penyakit melalui materi, video animasi, dan permainan interaktif.</p><div class="row"><a class="btn" href="#/d/1">START LEARNING</a><a class="btn alt" href="#/diseases">EXPLORE DISEASES</a></div></div>
<div class="orbs">${orb("#7a5ad8", 190)}<span>${orb("#e5484d", 90)}</span><em>${orb("#f2a531", 70)}</em></div></div></div>
<h2>How It Works</h2><div class="grid">${[
    ["🔎", "Choose a Disease", "Pilih penyakit yang ingin dipelajari."],
    ["📖", "Learn the Theory", "Baca penyebab, mekanisme, gejala, dan pencegahan."],
    ["🎬", "Watch the Animation", "Lihat video mekanisme penyakit."],
    ["🎲", "Play & Answer", "Main board game dan jawab pertanyaan."],
  ]
    .map(
      (s, i) =>
        `<div class="card step"><b>0${i + 1}</b><div class="circ ico">${s[0]}</div><h3>${s[1]}</h3><p>${s[2]}</p></div>`,
    )
    .join("")}</div></section>`;
}
