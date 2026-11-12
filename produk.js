// ZVX STORE - data produk & harga (satu sumber untuk index.html dan admin.html).
// Ubah harga/nomor di sini saja, lalu naikkan versi CACHE di sw.js.
function _rows(a) { return a.map(function (x) { return { n: x[0], d: x[1], p: x[2], per: x[3], j: x[4] }; }); }
var PRODUK = {
  toko: { nama: 'ZVX STORE', wa: '082245735717' },
  markupPulsa: 3000,                       // harga jual pulsa = nominal + markup
  pulsa: [5000, 10000, 20000, 25000, 50000, 100000],
  // PAKET DATA per operator. Nomor pembeli dideteksi otomatis, lalu hanya paket operatornya yang tampil.
  // Tiap paket: n = nama, d = masa aktif, p = harga jual, per = 'harian' | 'mingguan' | 'bulanan',
  // j = jenis kuota (bebas, mis. 'Kuota Utama', 'Lokal', 'Malam', 'Aplikasi').
  // CATATAN: harga di bawah hanya CONTOH. Ganti dengan daftar paket & harga aslimu.
  data: {
    Telkomsel: _rows([
      ['1 GB', '1 hari', 5500, 'harian', 'Kuota Utama'],
      ['3 GB', '3 hari', 11000, 'harian', 'Kuota Utama'],
      ['5 GB', '7 hari', 22000, 'mingguan', 'Kuota Utama'],
      ['10 GB', '7 hari', 35000, 'mingguan', 'Kuota Utama'],
      ['8 GB + 4 GB Lokal', '30 hari', 45000, 'bulanan', 'Lokal'],
      ['15 GB', '30 hari', 70000, 'bulanan', 'Kuota Utama'],
      ['30 GB + 20 GB Malam', '30 hari', 110000, 'bulanan', 'Malam'],
      ['25 GB + 10 GB Aplikasi', '30 hari', 95000, 'bulanan', 'Aplikasi']
    ]),
    Indosat: _rows([
      ['1 GB', '1 hari', 5000, 'harian', 'Kuota Utama'],
      ['3 GB', '3 hari', 10500, 'harian', 'Kuota Utama'],
      ['5 GB', '7 hari', 21000, 'mingguan', 'Kuota Utama'],
      ['10 GB', '7 hari', 33000, 'mingguan', 'Kuota Utama'],
      ['8 GB + 4 GB Lokal', '30 hari', 43000, 'bulanan', 'Lokal'],
      ['15 GB', '30 hari', 66500, 'bulanan', 'Kuota Utama'],
      ['30 GB + 20 GB Malam', '30 hari', 104500, 'bulanan', 'Malam'],
      ['25 GB + 10 GB Aplikasi', '30 hari', 90000, 'bulanan', 'Aplikasi']
    ]),
    XL: _rows([
      ['1 GB', '1 hari', 5500, 'harian', 'Kuota Utama'],
      ['3 GB', '3 hari', 11000, 'harian', 'Kuota Utama'],
      ['5 GB', '7 hari', 22000, 'mingguan', 'Kuota Utama'],
      ['10 GB', '7 hari', 35000, 'mingguan', 'Kuota Utama'],
      ['8 GB + 4 GB Lokal', '30 hari', 45000, 'bulanan', 'Lokal'],
      ['15 GB', '30 hari', 70000, 'bulanan', 'Kuota Utama'],
      ['30 GB + 20 GB Malam', '30 hari', 110000, 'bulanan', 'Malam'],
      ['25 GB + 10 GB Aplikasi', '30 hari', 95000, 'bulanan', 'Aplikasi']
    ]),
    Tri: _rows([
      ['1 GB', '1 hari', 4500, 'harian', 'Kuota Utama'],
      ['3 GB', '3 hari', 9500, 'harian', 'Kuota Utama'],
      ['5 GB', '7 hari', 18500, 'mingguan', 'Kuota Utama'],
      ['10 GB', '7 hari', 30000, 'mingguan', 'Kuota Utama'],
      ['8 GB + 4 GB Lokal', '30 hari', 38000, 'bulanan', 'Lokal'],
      ['15 GB', '30 hari', 59500, 'bulanan', 'Kuota Utama'],
      ['30 GB + 20 GB Malam', '30 hari', 93500, 'bulanan', 'Malam'],
      ['25 GB + 10 GB Aplikasi', '30 hari', 81000, 'bulanan', 'Aplikasi']
    ]),
    Smartfren: _rows([
      ['1 GB', '1 hari', 5000, 'harian', 'Kuota Utama'],
      ['3 GB', '3 hari', 10000, 'harian', 'Kuota Utama'],
      ['5 GB', '7 hari', 20000, 'mingguan', 'Kuota Utama'],
      ['10 GB', '7 hari', 31500, 'mingguan', 'Kuota Utama'],
      ['8 GB + 4 GB Lokal', '30 hari', 40500, 'bulanan', 'Lokal'],
      ['15 GB', '30 hari', 63000, 'bulanan', 'Kuota Utama'],
      ['30 GB + 20 GB Malam', '30 hari', 99000, 'bulanan', 'Malam'],
      ['25 GB + 10 GB Aplikasi', '30 hari', 85500, 'bulanan', 'Aplikasi']
    ])
  },
  token: [20000, 50000, 100000, 200000, 500000],
  tokenp: { 20000: 23000, 50000: 53000, 100000: 103000, 200000: 203000, 500000: 510000 },
  // Jenis BPJS yang kamu layani.
  bpjs: ['Ketenagakerjaan Bukan Penerima Upah & Pekerja Migran', 'Ketenagakerjaan Penerima Upah', 'Kesehatan', 'BPJS Denda'],
  // Wilayah E-Samsat yang kamu layani (ubah/tambah sesuai kebutuhan).
  samsat: ['Samsat JATIM', 'Samsat JATENG', 'Samsat JABAR', 'Samsat DIY', 'Samsat DKI JAKARTA', 'Samsat BANTEN', 'Samsat BALI'],
  adm: { bpjs: 3000, samsat: 3000 },       // biaya admin tagihan
  jasa: [
    { i: '🎨', n: 'Desain logo', d: '3 konsep, revisi 2x', p: 150000 },
    { i: '🎬', n: 'Edit video pendek', d: 'Hingga 60 detik', p: 75000 },
    { i: '🌐', n: 'Website company profile', d: '1 halaman responsif', p: 500000 },
    { i: '✍️', n: 'Penulisan konten', d: '5 artikel, 500 kata', p: 125000 },
    { i: '📸', n: 'Edit foto produk', d: '10 foto, latar bersih', p: 50000 },
    { i: '📈', n: 'Kelola media sosial', d: '12 postingan per bulan', p: 350000 }
  ],
  // Isi no rekening/e-wallet. Kosongkan jika belum ada (admin kirim via WhatsApp).
  pay: [
    { k: 'Transfer bank', no: '', bank: '', an: 'ZVX STORE' },
    { k: 'DANA', no: '', an: 'ZVX STORE' },
    { k: 'GoPay', no: '', an: 'ZVX STORE' },
    { k: 'ShopeePay', no: '', an: 'ZVX STORE' },
    { k: 'QRIS', qris: 'qris.jpg', nama: 'AIZEN' }
  ]
};
