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
  adm: { bpjs: 3000, samsat: 3000, lain: 3000 },       // biaya admin tagihan
  // VOUCHER GAME & digital. Tiap brand: i = ikon emoji (cadangan), img = file logo di folder logo/, n = nama, f = isian akun (kosongkan [] kalau produknya kode voucher),
  // items = daftar [nama produk, harga jual]. Isian bertipe angka (t:'num') hanya menerima digit.
  // CATATAN: nama paket & harga di bawah hanya CONTOH. Ganti dengan daftar & harga asli tokomu.
  voucher: [
    { i: '⚔️', n: 'Voucher MLBB', img: 'logo/mlbb.png', f: [{ l: 'User ID', ph: 'ID akun Mobile Legends', t: 'num' }, { l: 'Zone ID', ph: 'Contoh: 1234', t: 'num' }],
      items: [['86 Diamond', 22000], ['172 Diamond', 43000], ['257 Diamond', 64000], ['344 Diamond', 85000], ['706 Diamond', 170000]] },
    { i: '🔥', n: 'Voucher Free Fire', img: 'logo/ff.png', f: [{ l: 'Player ID', ph: 'ID akun Free Fire', t: 'num' }],
      items: [['70 Diamond', 10500], ['140 Diamond', 20500], ['355 Diamond', 50000], ['720 Diamond', 100000]] },
    { i: '🔫', n: 'Voucher PUBGM', img: 'logo/pubgm.png', f: [{ l: 'Player ID', ph: 'ID akun PUBG Mobile', t: 'num' }],
      items: [['60 UC', 15500], ['325 UC', 80000], ['660 UC', 158000], ['1800 UC', 400000]] },
    { i: '🏹', n: 'Voucher HoK', img: 'logo/hok.png', f: [{ l: 'Player ID', ph: 'ID akun Honor of Kings', t: 'num' }],
      items: [['80 Token', 15000], ['240 Token', 45000], ['400 Token', 75000], ['800 Token', 150000]] },
    { i: '🧱', n: 'Voucher Roblox', img: 'logo/roblox.png', f: [], items: [['80 Robux', 16000], ['400 Robux', 80000], ['800 Robux', 160000]] },
    { i: '▶️', n: 'Kode Voucher Google Play', img: 'logo/gplay.png', f: [],
      items: [['Rp 5.000', 5000], ['Rp 10.000', 10000], ['Rp 20.000', 20000], ['Rp 30.000', 30000], ['Rp 50.000', 50000], ['Rp 75.000', 75000], ['Rp 100.000', 100000]] },
    { i: '📺', n: 'Vidio Voucher', img: 'logo/vidio.png', f: [],
      items: [['Ultimate Mobile 30 Hari', 100000], ['Ultimate All Screen 30 Hari', 180000], ['Ultimate Mobile 3 Bulan', 240000], ['Ultimate All Screen 3 Bulan', 420000]] },
    { i: '🚂', n: 'Steam', img: 'logo/steam.png', f: [], items: [['Wallet Rp 12.000', 13000], ['Wallet Rp 45.000', 47000], ['Wallet Rp 60.000', 62000], ['Wallet Rp 90.000', 93000], ['Wallet Rp 120.000', 123000]] },
    { i: '🎮', n: 'PSN Gift Card', img: 'logo/psn.png', f: [], items: [['Rp 100.000', 105000], ['Rp 150.000', 156000], ['Rp 250.000', 258000]] },
    { i: '🎬', n: 'Dramabox', img: 'logo/dramabox.png', f: [], items: [['Membership 1 Minggu', 69000]] }
  ],
  // Layanan di menu "Lainnya". Tiap layanan: i = ikon, n = nama, adm = biaya admin (opsional, default adm.lain),
  // f = isian form (urut tampil). Isian TERAKHIR dianggap nomor pelanggan/ID tagihan (disamarkan di riwayat pesanan).
  // Tipe isian: t:'num' = angka saja, o:[...] = pilihan dropdown, selain itu teks bebas.
  lain: [
    { i: '⚡', n: 'PLN Non Taglis', f: [{ l: 'Nomor registrasi', ph: 'Nomor registrasi PLN', t: 'num' }] },
    { i: '💧', n: 'Air PDAM', f: [{ l: 'Nama PDAM / wilayah', ph: 'Contoh: PDAM Lamongan' }, { l: 'Nomor pelanggan', ph: 'ID pelanggan PDAM', t: 'num' }] },
    { i: '☎️', n: 'Telkom', f: [{ l: 'Nomor telepon / pelanggan', ph: 'Contoh: 0322xxxxxx', t: 'num' }] },
    { i: '🔥', n: 'PGN Gas', f: [{ l: 'ID pelanggan', ph: 'ID pelanggan PGN', t: 'num' }] },
    { i: '📡', n: 'Internet & TV Kabel', f: [{ l: 'Penyedia', o: ['IndiHome', 'Biznet', 'First Media', 'MNC Play', 'Lainnya (tulis di catatan WA)'] }, { l: 'Nomor pelanggan', ph: 'ID pelanggan', t: 'num' }] },
    { i: '📱', n: 'Pascabayar', f: [{ l: 'Operator', o: ['Telkomsel Halo', 'Indosat', 'XL', 'Tri', 'Smartfren'] }, { l: 'Nomor ponsel', ph: '08xx xxxx xxxx', t: 'num' }] },
    { i: '🏢', n: 'IPL', f: [{ l: 'Nama perumahan / apartemen', ph: 'Nama lokasi' }, { l: 'Nomor unit / ID pelanggan', ph: 'Contoh: A-12' }] },
    { i: '🛡️', n: 'Bayar Asuransi', f: [{ l: 'Nama asuransi', ph: 'Nama perusahaan asuransi' }, { l: 'Nomor polis', ph: 'Nomor polis' }] },
    { i: '📅', n: 'Bayar Cicilan', f: [{ l: 'Perusahaan pembiayaan', ph: 'Contoh: FIF, Adira' }, { l: 'Nomor kontrak', ph: 'Nomor kontrak / perjanjian' }] },
    { i: '🎓', n: 'Biaya Pendidikan', f: [{ l: 'Nama sekolah / kampus', ph: 'Nama institusi' }, { l: 'Nomor induk / ID pembayaran', ph: 'NIS / NIM / ID bayar' }] }
  ],
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
