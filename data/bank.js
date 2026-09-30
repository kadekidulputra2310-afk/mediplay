/* BANK SOAL TAMBAHAN. Digabung otomatis ke penyakit dengan id yang sama.
   Q(pertanyaan, [opsi], nomorJawabanBenar (mulai 0), penjelasan)
   TF(pernyataan, benar?, penjelasan)   -> soal Benar/Salah
   Penyakit baru: tambahkan blok `id: { quiz: [...], tf: [...] }`. */
const Q = (question, options, correctAnswer, explanation) => ({ question, options, correctAnswer, explanation });
const TF = (question, isTrue, explanation) => Q(question, ["Benar", "Salah"], isTrue ? 0 : 1, explanation);

window.BANK = {
  /* 1: Demam Berdarah Dengue */
  1: {
    quiz: [
      Q("Berapa serotipe virus dengue?", ["2", "3", "4", "5"], 2, "Ada empat serotipe: DENV-1 sampai DENV-4. Infeksi kedua oleh serotipe berbeda berisiko lebih berat."),
      Q("Ciri fisik nyamuk Aedes adalah...", ["Polos cokelat", "Belang hitam putih", "Hijau metalik", "Merah"], 1, "Tubuh dan kakinya bergaris hitam putih. Nyamuk ini menggigit terutama pagi dan sore hari."),
      Q("Fase kritis DBD paling sering terjadi...", ["Saat demam baru mulai", "Sebelum tergigit", "Saat demam turun", "Sebulan setelah sembuh"], 2, "Kebocoran plasma biasanya terjadi sekitar turunnya demam, sehingga pasien harus tetap dipantau."),
      Q("Obat penurun demam yang lebih aman pada DBD adalah...", ["Aspirin", "Ibuprofen", "Steroid", "Parasetamol"], 3, "Aspirin dan ibuprofen dapat memperbesar risiko perdarahan."),
      Q("Fogging terutama membunuh...", ["Nyamuk dewasa", "Jentik", "Telur", "Virus di darah"], 0, "Jentik dan telur tetap hidup, karena itu 3M tetap diperlukan."),
    ],
    tf: [TF("Setelah demam turun, pasien pasti sudah sembuh.", false, "Fase kritis justru sering terjadi saat demam turun.")],
  },
  /* 2: Diabetes Melitus Tipe 2 */
  2: {
    quiz: [
      Q("Resistensi insulin berarti...", ["Sel kurang merespons insulin", "Tubuh tidak punya pankreas", "Insulin langsung menjadi lemak", "Gula darah selalu rendah"], 0, "Insulin ada, tetapi sel tidak menanggapinya dengan baik sehingga gula menumpuk di darah."),
      Q("Pemeriksaan HbA1c menggambarkan gula darah rata-rata selama...", ["1 jam", "1 hari", "2 sampai 3 bulan", "5 tahun"], 2, "HbA1c mencerminkan kadar gula darah selama sekitar 2 sampai 3 bulan terakhir."),
      Q("Gula darah puasa yang menunjukkan diabetes adalah...", ["70 mg/dL", "100 mg/dL", "90 mg/dL", "126 mg/dL atau lebih"], 3, "Gula darah puasa 126 mg/dL atau lebih pada pemeriksaan terkonfirmasi menunjukkan diabetes."),
      Q("Kerusakan ginjal akibat diabetes disebut...", ["Nefropati diabetik", "Retinopati", "Neuropati", "Sirosis"], 0, "Gula tinggi lama merusak pembuluh kecil di ginjal."),
      Q("Aktivitas fisik yang dianjurkan per minggu adalah sekitar...", ["30 menit", "150 menit aerobik sedang", "10 jam olahraga berat", "Tidak perlu"], 1, "Aktivitas teratur membuat sel lebih peka terhadap insulin."),
    ],
    tf: [TF("Diabetes tipe 2 hanya dialami orang yang gemuk.", false, "Berat badan berlebih adalah faktor risiko, tetapi orang dengan berat normal juga dapat terkena.")],
  },
  /* 3: Hepatitis B */
  3: {
    quiz: [
      Q("Vaksin hepatitis B pertama pada bayi idealnya diberikan...", ["Dalam 24 jam setelah lahir", "Setelah usia 5 tahun", "Saat masuk SD", "Setelah sakit"], 0, "Dosis awal yang cepat mencegah penularan dari ibu ke bayi."),
      Q("HBsAg positif berarti...", ["Sudah kebal total", "Ada infeksi virus hepatitis B", "Gula darah tinggi", "Hati sehat"], 1, "HBsAg adalah protein permukaan virus yang terdeteksi saat infeksi."),
      Q("Penularan dari ibu ke bayi paling sering terjadi saat...", ["Menyusui biasa", "Persalinan", "Berpelukan", "Berbagi mainan"], 1, "Bayi terpapar darah dan cairan ibu saat lahir."),
      Q("Kulit dan mata yang menguning disebut...", ["Anemia", "Sianosis", "Ikterus", "Edema"], 2, "Ikterus terjadi karena bilirubin menumpuk."),
      Q("Hepatitis B disebut kronis bila virusnya menetap lebih dari...", ["6 bulan", "1 minggu", "1 hari", "2 jam"], 0, "Infeksi yang menetap lebih dari 6 bulan berisiko merusak hati."),
    ],
    tf: [TF("Hepatitis B menular lewat makanan seperti hepatitis A.", false, "Hepatitis B menular lewat darah dan cairan tubuh.")],
  },
  /* 4: Tuberkulosis */
  4: {
    quiz: [
      Q("Pemeriksaan cepat TBC dari dahak disebut...", ["Tes Cepat Molekuler (TCM)", "Tes gula", "EKG", "USG"], 0, "TCM mendeteksi kuman TBC dan resistansi obat."),
      Q("Rontgen dada pada TBC membantu melihat...", ["Kelainan pada paru", "Kadar gula", "Fungsi ginjal", "Tekanan darah"], 0, "Gambaran paru membantu menegakkan diagnosis."),
      Q("Vaksin BCG terutama melindungi dari...", ["Flu", "Dengue", "TBC berat pada anak", "Tifus"], 2, "BCG mencegah bentuk TBC yang berat pada anak."),
      Q("OAT adalah singkatan dari...", ["Obat Anti Tuberkulosis", "Obat Asma Tetap", "Obat Anti Tifoid", "Obat Alergi Tubuh"], 0, "OAT diminum teratur minimal 6 bulan."),
      Q("Etika batuk yang benar adalah...", ["Batuk sambil berbicara", "Menutup dengan siku atau tisu dan memakai masker", "Menutup dengan tangan lalu bersalaman", "Membuang dahak sembarangan"], 1, "Etika batuk mengurangi penyebaran kuman lewat udara."),
    ],
    tf: [TF("TBC tidak bisa disembuhkan.", false, "TBC dapat sembuh bila pengobatan dijalani tuntas.")],
  },
  /* 5: Hipertensi */
  5: {
    quiz: [
      Q("Tekanan darah normal dewasa sekitar...", ["Kurang dari 120/80 mmHg", "160/100 mmHg", "200/120 mmHg", "60/40 mmHg"], 0, "Angka 140/90 mmHg atau lebih berulang menunjukkan hipertensi."),
      Q("Alat untuk mengukur tekanan darah adalah...", ["Termometer", "Tensimeter", "Stetoskop saja", "Timbangan"], 1, "Tensimeter mengukur angka sistolik dan diastolik."),
      Q("Pola makan yang membantu menurunkan tekanan darah adalah...", ["Tinggi garam", "Banyak gorengan", "Banyak sayur dan buah, rendah garam", "Makanan instan"], 2, "Diet rendah garam kaya sayur dan buah membantu."),
      Q("Batas garam harian yang dianjurkan WHO adalah kurang dari...", ["5 gram (sekitar 1 sendok teh)", "20 gram", "50 gram", "Bebas"], 0, "Garam berlebih menaikkan tekanan darah."),
      Q("Hipertensi tidak terkontrol dapat menyebabkan...", ["Gagal jantung dan gagal ginjal", "Sariawan", "Flu", "Panu"], 0, "Tekanan tinggi merusak jantung, ginjal, dan otak."),
    ],
    tf: [TF("Penderita hipertensi boleh berhenti minum obat saat tensi terlihat normal.", false, "Tekanan normal karena obat; berhenti sendiri dapat membuatnya naik lagi.")],
  },
};
