/* Halaman daftar penyakit */
// HALAMAN DISEASES (cari + urut A-Z + filter kategori)
function list() {
  const cats = [...new Set(D.map((d) => d.category))].sort();
  app.innerHTML = `<section class="wrap"><div class="panel" style="--tint:linear-gradient(160deg,#dcebff,#efeaff)"><h1 class="gt">Diseases</h1><p>Cari atau pilih penyakit untuk mulai belajar (urut A–Z).</p><div class="sr"><input id="q" type="search" placeholder="🔎 Cari penyakit..." aria-label="Cari penyakit"><select id="cat" aria-label="Kategori"><option value="">Semua kategori</option>${cats.map((c) => `<option>${c}</option>`).join("")}</select></div><p id="cnt" style="color:var(--mut)"></p><div class="grid" id="lg"></div></div></section>`;
  const draw = () => {
    const q = $("#q").value.trim().toLowerCase(),
      c = $("#cat").value,
      r = sorted().filter(
        (d) =>
          (!c || d.category == c) &&
          (d.name + " " + d.description + " " + d.category).toLowerCase().includes(q),
      );
    $("#lg").innerHTML =
      r
        .map(
          (d) =>
            `<div class="card" style="text-align:center"><div class="circ" style="background:${d.tint}">${orb(d.color, 70)}</div><span class="tag">${d.category}</span><h3>${d.name}</h3><p>${d.description}</p><div class="bar"><i style="width:${pct(d.id)}%"></i></div><p style="margin:6px 0 12px;color:var(--mut)">Progress ${pct(d.id)}%</p><a class="btn" href="#/d/${d.id}">EXPLORE</a> <a class="btn alt" href="#/game/${d.id}">🎲 MAIN</a> <a class="btn alt" href="#/quiz/${d.id}">📝 KUIS</a></div>`,
        )
        .join("") || "<p>Penyakit tidak ditemukan.</p>";
    $("#cnt").textContent = r.length + " penyakit";
  };
  $("#q").oninput = draw;
  $("#cat").onchange = draw;
  draw();
}
