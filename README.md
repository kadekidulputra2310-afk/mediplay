# MediPlay

Website belajar penyakit: materi, video, kuis, dan board game. Tanpa framework, tanpa build.

## Menjalankan
Buka folder di VS Code > klik kanan `index.html` > **Open with Live Server** (atau klik dua kali `index.html`).

## Struktur
```
index.html          kerangka + daftar <script> (URUTAN PENTING)
css/style.css       semua gaya
data/
  _init.js          wadah data (dimuat pertama)
  board.js          pengaturan papan game, QUIZ_LEN, pembuat papan acak
  dbd.js ...        SATU FILE PER PENYAKIT
  bank.js           soal tambahan (digabung otomatis ke penyakit)
js/
  core.js           fungsi bantu (progress, video, popup, ilustrasi)
  pages/            home, list (Diseases), detail, quiz, about
  game.js           board game
  app.js            router dan start (dimuat terakhir)
assets/videos/      taruh video di sini
```

## Menambah penyakit
1. Salin satu file di `data/` (mis. `dbd.js`) jadi `data/nama-baru.js`.
2. Ganti `id` (angka unik), `name`, `color`, `tint`, dan seluruh isinya.
3. Tambahkan `<script src="data/nama-baru.js"></script>` di `index.html`, di bawah file penyakit lain dan SEBELUM `data/bank.js`.

## Menambah soal
Pilihan 1: tambah langsung di `quiz:[...]` pada file penyakit.
Pilihan 2 (disarankan untuk banyak soal): isi `data/bank.js` per id penyakit.
Format soal: `{question:"...", options:["A","B","C","D"], correctAnswer:0, explanation:"..."}`
(`correctAnswer` = nomor opsi yang benar, mulai dari 0). Soal benar/salah memakai options `["Benar","Salah"]`.

## Memasang video
Simpan di `assets/videos/dbd.mp4`, lalu di file penyakit ubah `video:"placeholder"` jadi `video:"assets/videos/dbd.mp4"`.

## Pengaturan
- Jumlah soal per kuis: `QUIZ_LEN` di `data/board.js`.
- Susunan papan game diacak tiap game (`makeBoard()` di `data/board.js`).
