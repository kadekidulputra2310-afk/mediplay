/* DATA PENYAKIT: Hipertensi
   Untuk menambah penyakit: salin file ini, ganti id (unik) dan isinya,
   lalu daftarkan di index.html. */
D.push({
  id: 5,
  name: "Hipertensi",
  icon: "🫀",
  color: "#e0559b",
  tint: "#ffe6f1",
  category: "Penyakit kardiovaskular",
  video: "placeholder",
  description: "Tekanan darah tinggi yang menetap dan sering tanpa gejala.",
  overview:
    "Hipertensi adalah tekanan darah tinggi yang menetap, umumnya di atas 140/90 mmHg pada pengukuran berulang.",
  detail:
    "Sering disebut silent killer karena jarang bergejala. Jika tidak terkontrol, hipertensi meningkatkan risiko stroke, penyakit jantung, dan gagal ginjal.",
  causes: [
    "Sebagian besar penyebab pastinya tidak diketahui (primer)",
    "Penyakit lain seperti gangguan ginjal atau hormon (sekunder)",
  ],
  riskFactors: ["Usia bertambah", "Riwayat keluarga", "Obesitas dan kurang gerak"],
  triggers: ["Makan terlalu asin", "Stres dan kurang tidur", "Merokok dan alkohol"],
  mechanism: [
    "Faktor risiko membuat pembuluh darah menyempit dan kaku",
    "Jantung memompa lebih kuat",
    "Dinding pembuluh darah mengalami tekanan berlebih",
    "Otak, jantung, dan ginjal rusak perlahan",
    "Muncul sakit kepala; komplikasi berupa stroke dan gagal jantung",
  ],
  symptoms: [
    { i: "🤕", n: "Sakit kepala", t: "Sering di tengkuk." },
    { i: "😵", n: "Pusing", t: "Terutama saat tekanan sangat tinggi." },
    { i: "👁️", n: "Penglihatan kabur", t: "Pembuluh mata terdampak." },
    { i: "🫀", n: "Jantung berdebar", t: "Jantung bekerja lebih keras." },
  ],
  prevention: [
    "Kurangi garam dan makanan olahan",
    "Olahraga rutin dan jaga berat badan",
    "Cek tekanan darah berkala",
  ],
  facts: [
    "Banyak penderita hipertensi tidak tahu dirinya sakit.",
    "Mengurangi garam dapat membantu menurunkan tekanan darah.",
  ],
  tf: [
    {
      question: "Hipertensi pasti menimbulkan gejala.",
      options: ["Benar", "Salah"],
      correctAnswer: 1,
      explanation: "Sering tanpa gejala.",
    },
    {
      question: "Mengurangi garam membantu menurunkan tekanan darah.",
      options: ["Benar", "Salah"],
      correctAnswer: 0,
      explanation: "Natrium berlebih menahan cairan dan menaikkan tekanan.",
    },
  ],
  quiz: [
    {
      question: "Hipertensi adalah...",
      options: [
        "Tekanan darah rendah",
        "Tekanan darah tinggi menetap",
        "Gula darah tinggi",
        "Kolesterol rendah",
      ],
      correctAnswer: 1,
      explanation: "Tekanan darah tinggi yang menetap.",
    },
    {
      question: "Mengapa disebut silent killer?",
      options: ["Sering tanpa gejala", "Selalu mematikan", "Hanya di malam hari", "Menular"],
      correctAnswer: 0,
      explanation: "Penderita sering tidak merasa sakit.",
    },
    {
      question: "Komplikasi hipertensi adalah...",
      options: ["Stroke", "Sariawan", "Flu", "Gatal"],
      correctAnswer: 0,
      explanation: "Tekanan tinggi merusak pembuluh otak dan jantung.",
    },
    {
      question: "Makanan pemicu hipertensi adalah yang...",
      options: ["Kaya serat", "Terlalu asin", "Rendah lemak", "Berair"],
      correctAnswer: 1,
      explanation: "Garam berlebih menaikkan tekanan darah.",
    },
    {
      question: "Pencegahan hipertensi adalah...",
      options: ["Begadang", "Olahraga rutin dan kurangi garam", "Merokok", "Makan asin"],
      correctAnswer: 1,
      explanation: "Gaya hidup sehat menjaga tekanan darah.",
    },
  ],
});
