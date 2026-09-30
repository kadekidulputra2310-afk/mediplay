/* DATA PENYAKIT: Diabetes Melitus Tipe 2
   Untuk menambah penyakit: salin file ini, ganti id (unik) dan isinya,
   lalu daftarkan di index.html. */
D.push({
  id: 2,
  name: "Diabetes Melitus Tipe 2",
  icon: "🩸",
  color: "#e5484d",
  tint: "#ffe9ec",
  category: "Penyakit metabolik",
  video: "placeholder",
  description: "Gangguan pengaturan gula darah akibat resistensi insulin.",
  overview:
    "Diabetes tipe 2 terjadi saat tubuh tidak merespons insulin dengan baik sehingga gula darah tinggi terus-menerus.",
  detail:
    "Penyakit ini berkembang perlahan dan sering tanpa gejala di awal. Kadar gula yang tinggi lama-kelamaan merusak mata, ginjal, saraf, dan pembuluh darah.",
  causes: ["Resistensi insulin pada sel tubuh", "Sel beta pankreas yang menurun fungsinya"],
  riskFactors: ["Kelebihan berat badan", "Riwayat keluarga diabetes", "Usia di atas 40 tahun"],
  triggers: ["Pola makan tinggi gula", "Kurang aktivitas fisik", "Stres dan kurang tidur"],
  mechanism: [
    "Asupan gula dan lemak berlebih dalam waktu lama",
    "Sel menjadi kurang peka terhadap insulin",
    "Pankreas memproduksi lebih banyak insulin lalu kelelahan",
    "Gula menumpuk di darah",
    "Muncul sering haus dan kencing, lalu komplikasi organ",
  ],
  symptoms: [
    { i: "💧", n: "Sering haus", t: "Tubuh kehilangan banyak cairan." },
    { i: "🚽", n: "Sering buang air kecil", t: "Terutama pada malam hari." },
    { i: "😴", n: "Mudah lelah", t: "Sel kurang mendapat energi." },
    { i: "🩹", n: "Luka sulit sembuh", t: "Aliran darah dan imun terganggu." },
  ],
  prevention: [
    "Atur pola makan seimbang",
    "Aktif bergerak minimal 150 menit per minggu",
    "Cek gula darah secara berkala",
  ],
  facts: [
    "Banyak penderita diabetes tipe 2 tidak sadar dirinya sakit.",
    "Menurunkan sedikit berat badan sudah dapat memperbaiki kerja insulin.",
  ],
  tf: [
    {
      question: "Diabetes tipe 2 selalu menimbulkan gejala sejak awal.",
      options: ["Benar", "Salah"],
      correctAnswer: 1,
      explanation: "Sering tanpa gejala di tahap awal.",
    },
    {
      question: "Aktivitas fisik membantu sel lebih peka insulin.",
      options: ["Benar", "Salah"],
      correctAnswer: 0,
      explanation: "Otot yang aktif menyerap gula lebih baik.",
    },
  ],
  quiz: [
    {
      question: "Hormon yang mengatur gula darah adalah...",
      options: ["Adrenalin", "Insulin", "Tiroksin", "Kortisol"],
      correctAnswer: 1,
      explanation: "Insulin membantu gula masuk ke sel.",
    },
    {
      question: "Organ penghasil insulin adalah...",
      options: ["Hati", "Ginjal", "Pankreas", "Lambung"],
      correctAnswer: 2,
      explanation: "Sel beta pankreas menghasilkan insulin.",
    },
    {
      question: "Salah satu faktor risiko diabetes tipe 2 adalah...",
      options: ["Berat badan berlebih", "Sering berjemur", "Minum air putih", "Tidur teratur"],
      correctAnswer: 0,
      explanation: "Kelebihan lemak memicu resistensi insulin.",
    },
    {
      question: "Gejala khas diabetes adalah...",
      options: ["Sering haus dan sering kencing", "Batuk kering", "Gatal telinga", "Sulit menelan"],
      correctAnswer: 0,
      explanation: "Gula tinggi menarik cairan keluar lewat urin.",
    },
    {
      question: "Komplikasi diabetes dapat mengenai...",
      options: ["Hanya kulit", "Mata, ginjal, saraf", "Hanya rambut", "Tidak ada"],
      correctAnswer: 1,
      explanation: "Pembuluh darah kecil dan besar ikut rusak.",
    },
  ],
});
