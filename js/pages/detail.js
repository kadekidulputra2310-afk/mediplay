/* Halaman detail penyakit */
// HALAMAN DETAIL PENYAKIT (tab materi, video, kuis)
function detail(id, tab) {
  const d = dz(id),
    p = pd(d.id);
  if (!p.tabs.includes(tab)) {
    p.tabs.push(tab);
    sv();
  }
  const T = ["overview", "causes", "mechanism", "video", "symptoms", "prevention", "quiz"],
    ul = (a) => `<ul>${a.map((x) => `<li>${x}</li>`).join("")}</ul>`;
  let c = "";
  if (tab == "overview")
    c = `<div class="grid"><div class="card"><h3>Pengertian</h3><p>${d.overview}</p></div><div class="card"><h3>Gambaran Umum</h3><p>${d.detail}</p></div></div>${(d.more || []).map((m) => `<div class="card" style="margin-top:14px"><h3>${m.t}</h3><p style="margin:0">${m.p}</p></div>`).join("")}`;
  if (tab == "causes")
    c = `<div class="grid"><div class="card"><h3>🧫 Penyebab</h3>${ul(d.causes)}</div><div class="card"><h3>⚠️ Faktor risiko</h3>${ul(d.riskFactors)}</div><div class="card"><h3>⚡ Faktor pemicu</h3>${ul(d.triggers)}</div></div>`;
  if (tab == "mechanism")
    c = `<h2>How Does the Disease Happen?</h2><div class="flow">${d.mechanism.map((m, i) => `${i ? '<div class="a">↓</div>' : ""}<div class="n">${m}</div>`).join("")}</div><h2 style="margin-top:28px">Video Mekanisme Penyakit</h2>${vid(d)}`;
  if (tab == "video") c = `<h2>Video Mekanisme Penyakit</h2>${vid(d)}`;
  if (tab == "quiz")
    c = `<div class="card" style="text-align:center"><div class="ico">📝</div><h2>Kuis ${d.name}</h2><p>Jawab ${Math.min(QUIZ_LEN, d.quiz.length)} soal acak lalu baca penjelasannya. Tidak perlu main game.</p><a class="btn" href="#/quiz/${d.id}">📝 MULAI KUIS</a></div>`;
  if (tab == "symptoms")
    c = `<div class="grid">${d.symptoms.map((s) => `<div class="card"><div class="ico">${s.i}</div><h3>${s.n}</h3><p>${s.t}</p></div>`).join("")}</div>`;
  if (tab == "prevention")
    c = `<div class="grid">${d.prevention.map((s, i) => `<div class="card step"><b>0${i + 1}</b><p>${s}</p></div>`).join("")}</div>`;
  app.innerHTML = `<section class="wrap"><div class="panel" style="--tint:${d.tint}"><div class="hero" style="padding:0 0 8px"><div class="orbbox">${orb(d.color, 200)}</div><div><span class="tag">${d.category}</span><h1 class="gt" style="font-size:2.2rem">${d.name}</h1><div class="card"><h3>Apa itu ${d.name}?</h3><p style="margin:0">${d.overview}</p></div><p style="margin:12px 0 4px">Progress ${pct(d.id)}%</p><div class="bar"><i style="width:${pct(d.id)}%"></i></div></div></div>
<div class="tabs">${T.map((t) => `<a href="#/d/${d.id}/${t}" class="${t == tab ? "on" : ""}">${t[0].toUpperCase() + t.slice(1)}</a>`).join("")}</div>${c}
<div class="row"><a class="btn" href="#/quiz/${d.id}">📝 KUIS</a><a class="btn" href="#/game/${d.id}">🎲 PLAY BOARD GAME</a><a class="btn alt" href="#/diseases">BACK TO DISEASES</a></div></div></section>`;
}
