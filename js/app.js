/* PROGRAM UTAMA: gabung bank soal, menu, router. Dimuat TERAKHIR */
D.forEach((d) => {
  const b = window.BANK && BANK[d.id];
  if (b)
    ["quiz", "tf", "facts"].forEach((k) => {
      if (b[k]) d[k] = d[k].concat(b[k]);
    });
});

$("#burger").onclick = () => $("#links").classList.toggle("open");

// Router sederhana berbasis #hash
function route() {
  hide();
  const [pg, a, b] = location.hash.slice(2).split("/");
  document
    .querySelectorAll("nav a.l")
    .forEach((x, i) =>
      x.classList.toggle("on", x.getAttribute("href").split("/")[1] == ({ d: "diseases" }[pg] || pg || "")),
    );
  $("#links").classList.remove("open");
  scrollTo(0, 0);
  (
    ({
      diseases: list,
      d: () => detail(a, b || "overview"),
      game: () => game(a),
      quiz: () => quiz(a),
      about,
    })[pg] || home
  )();
}

addEventListener("hashchange", route);

route();
