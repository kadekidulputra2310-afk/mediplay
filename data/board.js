/* PENGATURAN GAME & KUIS */
const QUIZ_LEN = 10; // jumlah soal per sesi kuis
/* Papan 30 kotak: s=START N=normal Q=pertanyaan K=knowledge B=bonus V=video C=challenge P=penalty f=FINISH */
const BOARD = "sNQNKBNVNCPQNKNBVNQCNPNKQNBNCf",
  ICON = { N: "", Q: "❓", K: "🧠", B: "⭐", V: "🎬", C: "🎯", P: "⚠️", s: "START", f: "FINISH" },
  FACE = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
function makeBoard() {
  const pool = "QQQQCCCKKKBBBVVPP".split("");
  while (pool.length < 28) pool.push("N");
  let m;
  for (let t = 0; t < 300; t++) {
    m = shuf(pool);
    if (!/PP/.test(m.join("")) && m[0] == "N" && m[27] != "P") break;
  }
  return ["s", ...m, "f"];
}
