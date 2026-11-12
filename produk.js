// ZVX STORE - data produk & harga (satu sumber untuk index.html dan admin.html).
// Ubah harga/nomor di sini saja, lalu naikkan versi CACHE di sw.js.
var PRODUK = {
  toko: { nama: 'ZVX STORE', wa: '082245735717' },
  markupPulsa: 3000,                       // harga jual pulsa = nominal + markup
  pulsa: [5000, 10000, 20000, 25000, 50000, 100000],
  data: [
    { n: 'Data 3 GB', d: '7 hari', p: 20000 },
    { n: 'Data 8 GB', d: '30 hari', p: 45000 },
    { n: 'Data 15 GB', d: '30 hari', p: 70000 },
    { n: 'Data 30 GB', d: '30 hari', p: 110000 },
    { n: 'Data 50 GB', d: '30 hari', p: 150000 },
    { n: 'Data 100 GB', d: '30 hari', p: 230000 }
  ],
  token: [20000, 50000, 100000, 200000, 500000],
  tokenp: { 20000: 23000, 50000: 53000, 100000: 103000, 200000: 203000, 500000: 510000 },
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
