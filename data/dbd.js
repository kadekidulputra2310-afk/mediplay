/* DATA PENYAKIT: Demam Berdarah Dengue
   Untuk menambah penyakit: salin file ini, ganti id (unik) dan isinya,
   lalu daftarkan di index.html. */
D.push({
  id: 1,
  name: "Demam Berdarah Dengue",
  icon: "🦟",
  color: "#7a5ad8",
  tint: "#efe9ff",
  category: "Penyakit infeksi",
  video: "placeholder",
  description: "Infeksi virus dengue yang ditularkan lewat gigitan nyamuk Aedes.",
  overview:
    "Demam berdarah dengue (DBD) disebabkan virus dengue dan ditularkan nyamuk Aedes aegypti. Penyakit ini umum di daerah tropis dan bisa berat bila tidak ditangani.",
  detail:
    "Pasien biasanya demam tinggi 2–7 hari. Masa kritis sering terjadi saat demam turun, yaitu saat terjadi kebocoran plasma. Pemantauan cairan dan trombosit sangat penting.",
  causes: [
    "Virus dengue (DENV-1 sampai DENV-4)",
    "Gigitan nyamuk Aedes aegypti yang membawa virus",
  ],
  riskFactors: [
    "Tinggal di daerah tropis padat penduduk",
    "Infeksi dengue sebelumnya dengan serotipe berbeda",
    "Banyak genangan air bersih di sekitar rumah",
  ],
  triggers: [
    "Musim hujan",
    "Bak mandi atau barang bekas yang jarang dikuras",
    "Mobilitas ke daerah endemis",
  ],
  mechanism: [
    "Nyamuk yang terinfeksi menggigit dan menyuntikkan virus",
    "Virus berkembang biak di sel imun dan sel pembuluh darah",
    "Respons imun melepaskan zat yang membuat pembuluh darah bocor",
    "Plasma keluar, trombosit turun, tekanan darah dapat turun",
    "Muncul demam, nyeri, bintik merah, hingga syok",
  ],
  symptoms: [
    { i: "🌡️", n: "Demam tinggi", t: "Mendadak, bisa mencapai 40°C." },
    { i: "🤕", n: "Nyeri kepala & belakang mata", t: "Disertai nyeri otot dan sendi." },
    { i: "🔴", n: "Bintik merah", t: "Perdarahan kecil di kulit." },
    { i: "🤢", n: "Mual dan muntah", t: "Nafsu makan menurun." },
  ],
  prevention: [
    "Lakukan 3M: menguras, menutup, mendaur ulang",
    "Pakai lotion antinyamuk dan kelambu",
    "Gerakkan jumantik dan kerja bakti lingkungan",
  ],
  facts: [
    "Nyamuk Aedes aegypti paling aktif menggigit pada pagi dan sore hari.",
    "Nyamuk betina dapat bertelur di genangan air sebersih air bak mandi.",
  ],
  tf: [
    {
      question: "Nyamuk Aedes berkembang biak di air kotor selokan.",
      options: ["Benar", "Salah"],
      correctAnswer: 1,
      explanation: "Aedes justru lebih suka air bersih yang tergenang.",
    },
    {
      question: "Fase kritis DBD sering terjadi saat demam mulai turun.",
      options: ["Benar", "Salah"],
      correctAnswer: 0,
      explanation: "Kebocoran plasma biasanya muncul pada fase ini.",
    },
  ],
  quiz: [
    {
      question: "Apa penyebab DBD?",
      options: ["Bakteri", "Virus dengue", "Jamur", "Parasit"],
      correctAnswer: 1,
      explanation: "DBD disebabkan virus dengue.",
    },
    {
      question: "Nyamuk apa yang menularkan DBD?",
      options: ["Anopheles", "Culex", "Aedes aegypti", "Mansonia"],
      correctAnswer: 2,
      explanation: "Vektor utamanya Aedes aegypti.",
    },
    {
      question: "Apa kepanjangan 3M dalam pencegahan DBD?",
      options: [
        "Menguras, menutup, mendaur ulang",
        "Mencuci, menyapu, mengepel",
        "Menyemprot, mengasap, menutup",
        "Minum, makan, menjaga",
      ],
      correctAnswer: 0,
      explanation: "3M memutus tempat perkembangbiakan nyamuk.",
    },
    {
      question: "Apa yang terjadi pada pembuluh darah saat fase kritis?",
      options: ["Menyempit", "Membesar permanen", "Bocor plasma", "Menggumpal"],
      correctAnswer: 2,
      explanation: "Plasma bocor keluar dari pembuluh darah.",
    },
    {
      question: "Faktor risiko DBD adalah...",
      options: [
        "Genangan air bersih di sekitar rumah",
        "Minum air putih",
        "Olahraga rutin",
        "Tidur cukup",
      ],
      correctAnswer: 0,
      explanation: "Genangan air menjadi sarang jentik.",
    },
  ],
  more: [{"t": "Tentang virus dengue", "p": "Virus dengue punya empat serotipe (DENV-1 sampai DENV-4). Infeksi oleh satu serotipe memberi kekebalan jangka panjang hanya terhadap serotipe itu. Infeksi kedua oleh serotipe berbeda justru berisiko lebih berat. Dengue tidak menular langsung dari orang ke orang; penularannya lewat gigitan nyamuk."}, {"t": "Nyamuk Aedes dan siklus hidupnya", "p": "Vektor utamanya Aedes aegypti, dibantu Aedes albopictus. Nyamuknya belang hitam putih, menggigit pada pagi dan sore hari, dan hanya yang betina menggigit karena membutuhkan darah untuk mematangkan telur. Telur diletakkan di dinding wadah berisi air bersih, dapat bertahan kering berbulan-bulan, lalu menjadi jentik, pupa, dan nyamuk dewasa dalam sekitar 7 sampai 10 hari."}, {"t": "Fase perjalanan penyakit", "p": "Masa inkubasi sekitar 4 sampai 10 hari. Fase demam berlangsung 2 sampai 7 hari dengan demam tinggi mendadak, nyeri kepala, dan nyeri otot. Fase kritis sering terjadi saat demam turun, ketika plasma dapat bocor dari pembuluh darah dan trombosit menurun. Setelah itu masuk fase pemulihan saat cairan diserap kembali."}, {"t": "Tanda bahaya yang harus segera ditangani", "p": "Segera ke fasilitas kesehatan bila ada nyeri perut hebat, muntah terus-menerus, perdarahan (mimisan, gusi berdarah, tinja hitam), lemas berat atau gelisah, tangan dan kaki dingin, atau buang air kecil sangat sedikit. Tanda ini menunjukkan kemungkinan kebocoran plasma dan syok."}, {"t": "Diagnosis dan penanganan", "p": "Dokter menilai gejala, pemeriksaan darah (trombosit dan hematokrit), serta tes NS1 pada hari-hari awal atau tes antibodi IgM/IgG. Tidak ada obat antivirus khusus. Penanganannya suportif: banyak minum, parasetamol untuk demam, dan pemantauan ketat. Hindari aspirin dan ibuprofen karena dapat memperbesar risiko perdarahan."}, {"t": "Pencegahan: 3M Plus dan PSN", "p": "Pemberantasan sarang nyamuk (PSN) dilakukan dengan 3M: menguras, menutup, dan mendaur ulang. Plus-nya antara lain bubuk larvasida (abate), ikan pemakan jentik, kelambu, dan lotion antinyamuk. Fogging hanya membunuh nyamuk dewasa dan bukan pengganti 3M. Vaksin dengue sudah tersedia, tetapi tidak menggantikan PSN."}],
});
