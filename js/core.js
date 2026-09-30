/* FUNGSI BANTU: helper, progress, video, modal, ilustrasi virus */
// Acak urutan array
const shuf = (a) => {
  a = [...a];
  for (let i = a.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Daftar penyakit urut A-Z
const sorted = () => [...D].sort((a, b) => a.name.localeCompare(b.name, "id"));

// Ambil item berikutnya dari antrean acak (soal/fakta) agar tidak berulang
function nx(k) {
  const p = { quiz: "qs", tf: "ts", facts: "fs" }[k];
  if (!G[p].length) G[p] = shuf(G.d[k]);
  return G[p].shift();
}

const $ = (s) => document.querySelector(s),
  app = $("#app");

let G = {};

let P = {};
try {
  P = JSON.parse(localStorage.getItem("lp") || "{}");
} catch (e) {}

const sv = () => {
  try {
    localStorage.setItem("lp", JSON.stringify(P));
  } catch (e) {}
};

// Progress belajar per penyakit (disimpan di localStorage)
const pd = (id) => P[id] || (P[id] = { tabs: [], video: 0, ans: 0, cor: 0, done: 0 });

// Hitung persen progress: teori 30 + video 20 + kuis 25 + game 25
const pct = (id) => {
  const p = pd(id);
  return Math.round(
    Math.min(p.tabs.length / 7, 1) * 30 + p.video * 20 + Math.min(p.cor / 5, 1) * 25 + p.done * 25,
  );
};

const dz = (id) => D.find((x) => x.id == id) || D[0];

// Modal (popup)
function show(h) {
  $("#mb").innerHTML = h;
  $("#m").classList.add("show");
}

const hide = () => $("#m").classList.remove("show");

// Ilustrasi virus (SVG) sesuai warna penyakit
const orb = (c, s = 120) => {
  let k = "";
  for (let i = 0; i < 14; i++) {
    const a = (i * Math.PI) / 7,
      C = Math.cos(a),
      S = Math.sin(a);
    k += `<line x1="${50 + 30 * C}" y1="${50 + 30 * S}" x2="${50 + 41 * C}" y2="${50 + 41 * S}" stroke="${c}" stroke-width="4" stroke-linecap="round"/><circle cx="${50 + 44 * C}" cy="${50 + 44 * S}" r="4.2" fill="${c}"/>`;
  }
  const id = "g" + c.slice(1) + s;
  return `<svg class="orb" width="${s}" height="${s}" viewBox="0 0 100 100" aria-hidden="true"><defs><radialGradient id="${id}" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#fff" stop-opacity=".9"/><stop offset=".25" stop-color="${c}"/><stop offset="1" stop-color="#000" stop-opacity=".45"/></radialGradient></defs>${k}<circle cx="50" cy="50" r="31" fill="${c}"/><circle cx="50" cy="50" r="31" fill="url(#${id})"/><circle cx="40" cy="45" r="4" fill="#fff" opacity=".35"/><circle cx="58" cy="58" r="5" fill="#000" opacity=".12"/></svg>`;
};

// Kotak video: placeholder atau file video asli
function vid(d) {
  return d.video === "placeholder"
    ? `<div class="vid"><h3>Video Mekanisme Penyakit</h3><p>Video animasi mengenai mekanisme ${d.name} akan ditampilkan di sini.</p><button class="btn" onclick="watched(${d.id})">▶ PLAY</button></div>`
    : `<video controls preload="metadata" src="${d.video}" onended="watched(${d.id})"></video>`;
}

function watched(id) {
  pd(id).video = 1;
  sv();
}

// Halaman pemilih penyakit (dipakai menu Kuis dan Game)
function picker(title, route, label) {
  app.innerHTML = `<section class="wrap"><div class="panel" style="--tint:linear-gradient(160deg,#dcebff,#efeaff)"><h1 class="gt">${title}</h1><p>Pilih penyakit.</p><div class="grid">${sorted()
    .map(
      (d) =>
        `<div class="card" style="text-align:center"><div class="circ" style="background:${d.tint}">${orb(d.color, 70)}</div><h3>${d.name}</h3><a class="btn" href="#/${route}/${d.id}">${label}</a></div>`,
    )
    .join("")}</div></div></section>`;
}
