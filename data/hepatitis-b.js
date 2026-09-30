/* DATA PENYAKIT: Hepatitis B
   Untuk menambah penyakit: salin file ini, ganti id (unik) dan isinya,
   lalu daftarkan di index.html. */
D.push({
  id: 3,
  name: "Hepatitis B",
  icon: "🧫",
  color: "#f2a531",
  tint: "#fff4dc",
  category: "Penyakit infeksi",
  video: "placeholder",
  description: "Infeksi virus yang menyerang hati dan dapat menjadi kronis.",
  overview:
    "Hepatitis B adalah infeksi hati akibat virus hepatitis B (HBV). Infeksi dapat sembuh sendiri atau menjadi kronis dan berisiko merusak hati.",
  detail:
    "Banyak penderita tidak bergejala. Infeksi kronis dapat berlanjut menjadi sirosis atau kanker hati, sehingga skrining dan vaksinasi sangat penting.",
  causes: ["Virus hepatitis B (HBV)", "Penularan lewat darah dan cairan tubuh"],
  riskFactors: [
    "Ibu hamil dengan hepatitis B tanpa penanganan",
    "Berbagi jarum suntik atau alat tajam",
    "Hubungan seksual tanpa pengaman",
  ],
  triggers: ["Belum divaksinasi", "Konsumsi alkohol pada penderita", "Kurang pemeriksaan rutin"],
  mechanism: [
    "Virus masuk lewat darah atau cairan tubuh",
    "Virus menuju hati dan menginfeksi sel hati",
    "Sistem imun menyerang sel hati yang terinfeksi",
    "Terjadi peradangan dan kerusakan sel hati",
    "Muncul kuning, lelah, mual; infeksi kronis dapat menjadi sirosis",
  ],
  symptoms: [
    { i: "🟡", n: "Kulit dan mata kuning", t: "Bilirubin menumpuk di tubuh." },
    { i: "😴", n: "Mudah lelah", t: "Fungsi hati terganggu." },
    { i: "🤢", n: "Mual dan nyeri perut kanan atas", t: "Area letak hati." },
    { i: "🥤", n: "Urine gelap", t: "Warna pekat akibat bilirubin." },
  ],
  prevention: [
    "Vaksinasi hepatitis B",
    "Jangan berbagi jarum atau alat cukur",
    "Skrining ibu hamil dan tes darah berkala",
  ],
  facts: [
    "Vaksin hepatitis B aman dan diberikan sejak bayi.",
    "Infeksi pada bayi lebih sering menjadi kronis dibanding pada dewasa.",
  ],
  tf: [
    {
      question: "Hepatitis B menular lewat berjabat tangan.",
      options: ["Benar", "Salah"],
      correctAnswer: 1,
      explanation: "Tidak menular lewat kontak biasa.",
    },
    {
      question: "Vaksin dapat mencegah hepatitis B.",
      options: ["Benar", "Salah"],
      correctAnswer: 0,
      explanation: "Vaksin membentuk kekebalan terhadap HBV.",
    },
  ],
  quiz: [
    {
      question: "Organ yang diserang hepatitis B adalah...",
      options: ["Paru", "Hati", "Ginjal", "Usus"],
      correctAnswer: 1,
      explanation: "HBV menginfeksi sel hati.",
    },
    {
      question: "Penyebab hepatitis B adalah...",
      options: ["Bakteri", "Jamur", "Virus HBV", "Parasit"],
      correctAnswer: 2,
      explanation: "Penyebabnya virus hepatitis B.",
    },
    {
      question: "Hepatitis B menular lewat...",
      options: ["Darah dan cairan tubuh", "Udara", "Makanan basi", "Gigitan nyamuk"],
      correctAnswer: 0,
      explanation: "Penularan terjadi lewat darah dan cairan tubuh.",
    },
    {
      question: "Pencegahan terbaik hepatitis B adalah...",
      options: ["Antibiotik", "Vaksinasi", "Vitamin C", "Obat batuk"],
      correctAnswer: 1,
      explanation: "Vaksinasi sangat efektif mencegah infeksi.",
    },
    {
      question: "Komplikasi hepatitis B kronis adalah...",
      options: ["Sirosis dan kanker hati", "Patah tulang", "Katarak", "Asma"],
      correctAnswer: 0,
      explanation: "Peradangan lama merusak hati.",
    },
  ],
});
