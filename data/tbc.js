/* DATA PENYAKIT: Tuberkulosis (TBC)
   Untuk menambah penyakit: salin file ini, ganti id (unik) dan isinya,
   lalu daftarkan di index.html. */
D.push({
  id: 4,
  name: "Tuberkulosis (TBC)",
  icon: "🫁",
  color: "#3d9be0",
  tint: "#e2f2ff",
  category: "Penyakit infeksi",
  video: "placeholder",
  description: "Infeksi bakteri yang terutama menyerang paru.",
  overview:
    "Tuberkulosis (TBC) disebabkan bakteri Mycobacterium tuberculosis dan terutama menyerang paru. Menular lewat udara saat penderita batuk.",
  detail:
    "TBC dapat disembuhkan dengan pengobatan lengkap minimal 6 bulan. Berhenti minum obat di tengah jalan dapat membuat kuman kebal obat.",
  causes: ["Bakteri Mycobacterium tuberculosis", "Percikan dahak di udara"],
  riskFactors: [
    "Kontak erat dengan penderita TBC",
    "HIV atau daya tahan tubuh rendah",
    "Gizi buruk dan hunian padat",
  ],
  triggers: ["Ventilasi rumah buruk", "Merokok", "Pengobatan tidak tuntas"],
  mechanism: [
    "Bakteri terhirup dan sampai ke paru",
    "Sel imun mengepung bakteri membentuk granuloma",
    "Bakteri dapat tertidur (laten) bertahun-tahun",
    "Saat imun turun, bakteri aktif dan merusak jaringan paru",
    "Muncul batuk lama, keringat malam, dan berat badan turun",
  ],
  symptoms: [
    { i: "🗣️", n: "Batuk lebih dari 2 minggu", t: "Tidak membaik dengan obat biasa." },
    { i: "🩸", n: "Dahak, kadang berdarah", t: "Akibat kerusakan jaringan paru." },
    { i: "🌙", n: "Keringat malam", t: "Tanpa aktivitas berat." },
    { i: "⚖️", n: "Berat badan turun", t: "Nafsu makan menurun." },
  ],
  prevention: [
    "Vaksin BCG pada bayi",
    "Minum obat sampai tuntas",
    "Ventilasi baik dan etika batuk",
  ],
  facts: [
    "TBC laten tidak menular dan tidak bergejala.",
    "Obat TBC tersedia gratis di fasilitas kesehatan pemerintah di Indonesia.",
  ],
  tf: [
    {
      question: "TBC hanya menyerang paru.",
      options: ["Benar", "Salah"],
      correctAnswer: 1,
      explanation: "TBC juga dapat menyerang tulang, kelenjar, dan otak.",
    },
    {
      question: "Obat TBC harus dihabiskan walau sudah merasa sehat.",
      options: ["Benar", "Salah"],
      correctAnswer: 0,
      explanation: "Berhenti di tengah jalan memicu kuman kebal obat.",
    },
  ],
  quiz: [
    {
      question: "Penyebab TBC adalah...",
      options: ["Virus", "Bakteri M. tuberculosis", "Jamur", "Parasit"],
      correctAnswer: 1,
      explanation: "TBC disebabkan bakteri.",
    },
    {
      question: "TBC menular lewat...",
      options: ["Udara (percikan dahak)", "Darah", "Makanan", "Sentuhan kulit"],
      correctAnswer: 0,
      explanation: "Dahak penderita menyebar di udara.",
    },
    {
      question: "Gejala khas TBC adalah...",
      options: ["Ruam kulit", "Batuk lebih dari 2 minggu", "Nyeri gigi", "Mata merah"],
      correctAnswer: 1,
      explanation: "Batuk lama adalah tanda utama.",
    },
    {
      question: "Pengobatan TBC minimal berlangsung...",
      options: ["3 hari", "2 minggu", "6 bulan", "5 tahun"],
      correctAnswer: 2,
      explanation: "Butuh minimal 6 bulan.",
    },
    {
      question: "Mengapa obat TBC harus tuntas?",
      options: ["Agar hemat", "Mencegah kuman kebal obat", "Supaya ngantuk", "Tidak ada alasan"],
      correctAnswer: 1,
      explanation: "Putus obat memicu resistansi.",
    },
  ],
});
