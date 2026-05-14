// Data soal lengkap dengan kunci jawaban dan penjelasan
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Bank soal untuk randomisasi
const bankSoal = [
  // Soal 1-35: TWK (Tes Wawasan Kebangsaan)
  {
    soal: "Pembukaan UUD 1945 dalam kaitannya dengan HAM adalah ...",
    pilihan: [
      "Piagam HAM Indonesia",
      "Sumber HAM Indonesia",
      "Pedoman pelaksanaan jaminan HAM Indonesia",
      "Penjelasan pelaksanaan HAM Indonesia",
      "Rumusan pelaksanaan HAM",
    ],
    kunciJawaban: 0,
    penjelasan:
      "Pembukaan UUD 1945 merupakan Piagam HAM Indonesia yang menjamin hak-hak asasi manusia/warga negara Indonesia dapat terlaksana dengan baik.",
  },
  {
    soal: "Yang menjadi causal final dari Pancasila adalah ...",
    pilihan: [
      "Piagam Jakarta",
      "Bangsa Indonesia",
      "Warga Negara Indonesia",
      "BPUPKI",
      "PPKI",
    ],
    kunciJawaban: 0,
    penjelasan:
      "Di dalam Piagam Jakarta tercantum rumusan dasar negara yang disebut Pancasila sebagai causal final.",
  },
  {
    soal: "Yang bukan termasuk prinsip-prinsip dasar negara yang diusulkan oleh Dr. Soekarno pada tanggal 1 Juni 1945 adalah ...",
    pilihan: [
      "Demokrasi",
      "Kekeluargaan",
      "Perikemanusiaan",
      "Kesejahteraan sosial",
      "Kebangsaan",
    ],
    kunciJawaban: 1,
    penjelasan:
      "Kekeluargaan bukan termasuk prinsip yang diusulkan Dr. Soekarno pada 1 Juni 1945. Prinsip yang diusulkan adalah Kebangsaan, Perikemanusiaan, Demokrasi, Kesejahteraan sosial, dan Ketuhanan.",
  },
  {
    soal: "Berdasarkan TAP MPRS No. XX/MPRS/1966, Pancasila menempati tempat tertinggi sebagai hukum di negara RI, karena Pancasila merupakan ...",
    pilihan: [
      "Dokumen historis yang luhur",
      "Alat pemersatu bangsa",
      "Nilai-nilai luhur dari nenek moyang",
      "Landasan perjuangan bangsa",
      "Dasar negara dan pandangan hidup bangsa Indonesia",
    ],
    kunciJawaban: 4,
    penjelasan:
      "Berdasarkan TAP MPRS No.XX/MPRS/1966, Pancasila merupakan dasar negara dan pandangan hidup bangsa Indonesia.",
  },
  {
    soal: "Yang diatur oleh hukum dasar negara adalah ...",
    pilihan: [
      "Susunan organisasi suatu negara",
      "Membatasi tugas dan wewenang badan-badan Negara",
      "Menjaga/mengatur hubungan vertikal antara badan-badan negara",
      "Menjaga/mengatur hubungan horizontal antara badan-badan Negara",
      "Semua jawaban benar",
    ],
    kunciJawaban: 4,
    penjelasan:
      "Hukum dasar negara mengatur susunan organisasi suatu negara, membatasi tugas dan wewenang organ-organ negara serta hubungan-hubungan baik vertikal maupun horizontal antar organ-organ negara.",
  },
  {
    soal: "Yang bukan merupakan dampak/akibat dari Dekrit Presiden 5 Juli 1959 adalah...",
    pilihan: [
      "Konstituante dibubarkan",
      "UUDS tidak berlaku",
      "Kembali ke UUD 1945",
      "Dibentuk DPRS",
      "Dibentuk DPAS",
    ],
    kunciJawaban: 3,
    penjelasan:
      "Dampak Dekrit Presiden 5 Juli 1959: Konstituante dibubarkan, UUD RI 1950 tidak berlaku, kembali ke UUD 1945, dan dibentuk DPAS. DPRS tidak dibentuk saat itu.",
  },
  {
    soal: "Yang bukan merupakan alat-alat perlengkapan MPR adalah ...",
    pilihan: [
      "Pimpinan MPR",
      "Badan pekerja MPR",
      "Pembantu MPR",
      "Komisi MPR",
      "Panitia Ad Hoc MPR",
    ],
    kunciJawaban: 2,
    penjelasan:
      "Alat-alat perlengkapan MPR yaitu Pimpinan MPR, Badan Pekerja MPR, Komisi MPR, dan Panitia Ad Hoc MPR. Pembantu MPR bukan merupakan alat perlengkapan.",
  },
  {
    soal: "Menteri-menteri negara adalah pembantu presiden. Hal tersebut diatur dalam UUD 1945, yaitu ...",
    pilihan: ["Pasal 18", "Pasal 19", "Pasal 17", "Pasal 16", "Pasal 12"],
    kunciJawaban: 2,
    penjelasan:
      "Menteri-menteri negara adalah pembantu Presiden. Pernyataan tersebut tercantum dalam UUD 1945 pasal 17.",
  },
  {
    soal: "Berkenaan dengan perubahan isi dari UUD 1945 sebenarnya telah diatur oleh TAP MPR No. IV/MPR/1983 tentang ...",
    pilihan: [
      "Interpelasi",
      "Budget",
      "Referendum",
      "Mosi tidak percaya",
      "Angket",
    ],
    kunciJawaban: 2,
    penjelasan: "TAP MPR No. IV/MPR/1983 mengatur mengenai referendum.",
  },
  {
    soal: "Penyebab utama menyerahnya Jepang kepada sekutu adalah ...",
    pilihan: [
      "Jepang tidak mendapat dukungan dari rakyat Indonesia",
      "Jepang kehabisan bala tentara yang dihandalkan",
      "Kaisar Jepang tidak lagi menginginkan Jepang untuk berperang",
      "Pemimpin Jepang banyak yang gugur",
      "Kota Nagasaki dan Hiroshima dibom atom oleh Amerika Serikat",
    ],
    kunciJawaban: 4,
    penjelasan:
      "Penyebab utama menyerahnya Jepang kepada Sekutu adalah kedua kota di Jepang yaitu Hiroshima dan Nagasaki dibom atom oleh Amerika Serikat.",
  },
  {
    soal: "Sehari setelah proklamasi, PPKI mengadakan sidang pertama, hasil sidang tersebut adalah ...",
    pilihan: [
      "Mengesahkan UUD menjadi UUD 1945",
      "Menetapkan Ir. Soekarno dan Moh. Hatta sebagai presiden dan wakil presiden",
      "Presiden untuk sementara waktu dibantu oleh suatu Komite Nasional",
      "Dibentuknya wakil rakyat yaitu DPR dan MPR",
      "A, B, dan C benar",
    ],
    kunciJawaban: 4,
    penjelasan:
      "Hasil sidang PPKI tanggal 18 Agustus 1945: mengesahkan UUD 1945, menetapkan Soekarno-Hatta sebagai presiden dan wakil presiden, dan presiden dibantu Komite Nasional.",
  },
  {
    soal: "Buku Max Havelaar dikarang oleh ...",
    pilihan: [
      "Van den Bosch",
      "Douwes Dekker",
      "Raffles",
      "Deandles",
      "Jp. Coen",
    ],
    kunciJawaban: 1,
    penjelasan:
      "Buku Max Havelaar dikarang oleh Douwes Dekker/Multatuli. Buku ini menceritakan penderitaan bangsa Indonesia sewaktu dilaksanakan tanam paksa.",
  },
  {
    soal: "Alasan dikeluarkannya Deklarasi Djuanda adalah ...",
    pilihan: [
      "Mempertahankan NKRI",
      "Menciptakan kawasan damai dalam gagasan Wawasan Nusantara",
      "Melindungi kekayaan negara Indonesia",
      "Memberikan kenyamanan pemerintah untuk menindak pelanggaran laut",
      "Melindungi wilayah kepulauan RI",
    ],
    kunciJawaban: 2,
    penjelasan:
      "Deklarasi Djuanda dikeluarkan untuk melindungi kekayaan alam Indonesia yang terdapat di landas kontinen dari eksploitasi asing.",
  },
  {
    soal: "Untuk mendapatkan keadilan pertama bagi rakyat adalah pada tingkat pengadilan negeri, sedangkan Pengadilan Tinggi dan Mahkamah Agung berfungsi sebagai ...",
    pilihan: [
      "Peradilan banding dan kasasi",
      "Peradilan istimewa",
      "Peradilan KKN",
      "Peradilan perkara berat dan lebih berat",
      "Peradilan khusus",
    ],
    kunciJawaban: 0,
    penjelasan:
      "Pengadilan Tinggi dan Mahkamah Agung berfungsi sebagai peradilan banding dan kasasi.",
  },
  {
    soal: "Mahkamah Agung mempunyai hak untuk menguji terhadap peraturan perundang-undangan yang berlaku, kecuali ...",
    pilihan: [
      "Peraturan Pemerintah",
      "Keputusan Presiden",
      "Keputusan Menteri",
      "Peraturan Daerah",
      "Undang-undang produk DPR",
    ],
    kunciJawaban: 4,
    penjelasan:
      "Mahkamah Agung tidak memiliki hak untuk menguji undang-undang produk DPR. Hak uji materiil MA terbatas pada peraturan di bawah undang-undang.",
  },
  {
    soal: "Dalam dinamika ketatanegaraan Indonesia berlangsung yang tidak pernah mengalami perubahan adalah ...",
    pilihan: [
      "Bentuk negara",
      "Bentuk pemerintahan",
      "Corak pemerintahan",
      "Lembaga negara",
      "Sistem demokrasi",
    ],
    kunciJawaban: 4,
    penjelasan:
      "Sistem demokrasi yang dipakai oleh Indonesia dari dulu sampai sekarang tidak berubah, yaitu demokrasi Pancasila.",
  },
  {
    soal: "Sistem pemerintahan kabinet presidensil ditandai oleh ...",
    pilihan: [
      "Kepala negaranya seorang presiden",
      "Presiden merupakan kepala pemerintahan",
      "Kedudukan kabinet sederajat dengan parlemen",
      "Presiden memegang kekuasaan tertinggi dalam negara",
      "Adanya wakil presiden",
    ],
    kunciJawaban: 1,
    penjelasan:
      "Pada kabinet presidensial, kepala pemerintahan dipegang oleh presiden.",
  },
  {
    soal: "Ada bermacam-macam istilah demokrasi, demokrasi yang menonjolkan kebebasan individu adalah ...",
    pilihan: [
      "Demokrasi langsung",
      "Demokrasi tidak langsung",
      "Demokrasi terpimpin",
      "Demokrasi liberal",
      "Demokrasi Pancasila",
    ],
    kunciJawaban: 3,
    penjelasan:
      "Demokrasi liberal adalah sistem pemerintahan yang menjunjung tinggi hak asasi manusia dan kebebasan individu.",
  },
  {
    soal: "Hukum administrasi negara merupakan bagian dari hukum tata negara dalam arti luas, karena hukum administrasi negara adalah ...",
    pilihan: [
      "Sekumpulan peraturan hukum yang mengikat badan negara",
      "Peraturan pelanggaran pegawai negeri",
      "Peraturan pemberhentian pegawai negeri",
      "Peraturan pengangkatan pegawai negeri",
      "Peraturan mengenai tugas pegawai negeri",
    ],
    kunciJawaban: 0,
    penjelasan:
      "Hukum administrasi negara adalah sekumpulan peraturan hukum yang mengikat badan negara.",
  },
  {
    soal: "Proses pembuatan ketetapan MPR tahap II adalah ...",
    pilihan: [
      "Pembahasan rapat paripurna Majelis didahului dengan penjelasan",
      "Pembahasan keputusan rapat paripurna Majelis",
      "Pembahasan oleh Badan Pekerja majelis terhadap bahan-bahan",
      "Pembahasan komisi/panitia Ad Hoc terhadap hasil-hasil",
      "Pengambilan keputusan oleh rapat paripurna Majelis",
    ],
    kunciJawaban: 2,
    penjelasan:
      "Proses pembuatan ketetapan MPR tahap II adalah pembahasan oleh Badan Pekerja Majelis terhadap bahan-bahan yang ada.",
  },
  {
    soal: "Karena berhasil mengalahkan Portugis, Fatahillah mengganti nama Sunda Kelapa menjadi ...",
    pilihan: ["Batavia", "Jakarta", "Jayakarta", "Betawi", "Jawa Barat"],
    kunciJawaban: 2,
    penjelasan:
      "Pada tanggal 22 Juni 1527 Fatahillah meresmikan nama baru untuk Sunda Kelapa, yaitu Jayakarta yang artinya Kota Kemenangan.",
  },
  {
    soal: "Agama Islam di Indonesia mulanya berkembang di daerah pesisir/pantai Sumatra dan Jawa. Hal tersebut dikarenakan ...",
    pilihan: [
      "Di daerah pesisir udaranya sejuk",
      "Di daerah pesisir padat penduduknya",
      "Disebarkan melalui perdagangan laut",
      "Penduduk pesisir masih bodoh",
      "Merupakan pusat kerajaan",
    ],
    kunciJawaban: 2,
    penjelasan:
      "Agama Islam di Indonesia dibawa oleh para pedagang dari Arab, Persia, dan Gujarat melalui perdagangan laut di daerah pesisir.",
  },
  {
    soal: "Konferensi Meja Bundar diselenggarakan di kota ...",
    pilihan: ["Amsterdam", "Den Haag", "Belgia", "Kolombo", "New York"],
    kunciJawaban: 1,
    penjelasan:
      "KMB diselenggarakan pada tanggal 23 Agustus - 2 November 1949 di kota Den Haag, Belanda.",
  },
  {
    soal: "Finalis Tujuh Keajaiban Dunia berikut yang berasal dari Negara Spanyol adalah..",
    pilihan: [
      "Machu Picchu",
      "Acropolis",
      "Stonehenge",
      "Alhambra",
      "Timbuktu",
    ],
    kunciJawaban: 3,
    penjelasan:
      "Alhambra terletak di Spanyol. Machu Picchu di Peru, Acropolis di Yunani, Stonehenge di Skotlandia, Timbuktu di Mali.",
  },
  {
    soal: "Yang bukan merupakan negara bagian Amerika Serikat adalah ...",
    pilihan: ["Idaho", "Wyoming", "Roskilde", "Texas", "Florida"],
    kunciJawaban: 2,
    penjelasan:
      "Roskilde tidak termasuk negara bagian Amerika Serikat, melainkan termasuk dalam wilayah Kerajaan Denmark.",
  },
  {
    soal: "Lagu daerah Potong Bebek Angsa berasal dari Provinsi ...",
    pilihan: [
      "Nusa Tenggara Barat",
      "Nusa Tenggara Timur",
      "Maluku",
      "Papua",
      "Kalimantan Barat",
    ],
    kunciJawaban: 1,
    penjelasan:
      "Potong Bebek Angsa adalah salah satu lagu daerah yang berasal dari provinsi Nusa Tenggara Timur.",
  },
  {
    soal: "Perang Dunia I berakhir pada tahun ...",
    pilihan: ["1914", "1916", "1918", "1921", "1924"],
    kunciJawaban: 2,
    penjelasan: "Perang Dunia I berlangsung pada tahun 1914 sampai tahun 1918.",
  },
  {
    soal: "PBI adalah organisasi Nasional untuk olahraga ...",
    pilihan: ["Bowling", "Bridge", "Bulutangkis", "Basket", "Billiard"],
    kunciJawaban: 0,
    penjelasan:
      "PBI (Persatuan Bowling Indonesia) adalah organisasi nasional untuk olahraga bowling.",
  },
  {
    soal: "Kerajaan Sriwijaya terkenal sebagai kerajaan maritim yang kuat dan jaya. Hal tersebut dikarenakan ...",
    pilihan: [
      "Mempunyai armada laut yang kuat dan hidup dari perdagangan laut",
      "Mengadakan hubungan dagang dengan berbagai negara",
      "Menjadi pusat perdagangan di Asia Tenggara",
      "Letak persimpangan jalur perdagangan antara India dan Cina",
      "Memiliki raja yang berkuasa",
    ],
    kunciJawaban: 0,
    penjelasan:
      "Sriwijaya sebagai kerajaan maritim karena mempunyai armada laut yang kuat dan berhasil menguasai jalur pelayaran.",
  },
  {
    soal: "Tujuan diselenggarakannya Konferensi Asia Afrika di antaranya ...",
    pilihan: [
      "Ikut mengawasi perdamaian dunia",
      "Mempererat serta menggalang persatuan",
      "Mempersatukan kerja sama bangsa-bangsa Asia",
      "Mempererat serta menggalang persatuan dan ikut mengawasi perdamaian dunia",
      "Meredakan ketegangan antara blok Barat dan Timur",
    ],
    kunciJawaban: 2,
    penjelasan:
      "Tujuan KAA adalah memajukan kerja sama bangsa-bangsa Asia dan membicarakan masalah kedaulatan nasional.",
  },
  {
    soal: "Setelah Perang Dunia II berakhir, muncul dua kekuatan, yaitu Blok Barat dan Blok Timur. Blok Barat dipimpin oleh negara ...",
    pilihan: ["Inggris", "Perancis", "Amerika Serikat", "Kanada", "Belanda"],
    kunciJawaban: 2,
    penjelasan:
      "Blok Barat dipimpin oleh Amerika Serikat dan Blok Timur dipimpin oleh Uni Soviet.",
  },
  {
    soal: "Sebagian naskah kuno dari Provinsi Lampung diketahui justru tersimpan di lembaga-lembaga asing di luar negeri. Berdasarkan teks tersebut unsur what (apa) yang tersurat di dalamnya adalah ...",
    pilihan: [
      "Keprihatinan terhadap naskah kuno Lampung",
      "Museum negeri Lampung menyimpan naskah kuno asing",
      "Naskah kuno Lampung sebagian tersimpan di luar negeri",
      "Naskah kuno Lampung memakai bahasa asing",
      "Penyesalan karena naskah kuno Lampung ada di luar negeri",
    ],
    kunciJawaban: 2,
    penjelasan:
      "Unsur what (apa) yang terdapat dalam teks tersebut adalah 'naskah kuno Lampung sebagian tersimpan di luar negeri'.",
  },
  {
    soal: "Kalimat berikut ini adalah baku, kecuali...",
    pilihan: [
      "Berdasarkan data Pemprov Lampung, naskah-naskah kuno ini tersebar di Belanda, Denmark, Inggris, dan Jerman.",
      "Di Leiden, setidaknya ada 5 buah naskah kuno yang disimpan bersama-sama koleksi dari Maluku.",
      "Anggaran pengadaan koleksi baru benda bersejarah di museum ini hanya Rp 40 - 70 juta per tahun.",
      "Penambahan koleksi benda-benda bersejarah di museum negeri Lampung terkendala terbatasnya dana.",
      "Ia mencontohkan, pernah suatu ketika pihaknya berhasil membeli uang kuno eks kesultanan Lampung tahun 1958.",
    ],
    kunciJawaban: 2,
    penjelasan:
      "Kalimat 'Anggaran... hanya Rp 40-70 juta per tahun' tidak baku karena seharusnya ditulis 'pertahun' (disambung).",
  },
  {
    soal: "Kata reduplikasi berikut yang bermakna sama dengan kata reduplikasi 'besar-besar' dalam kalimat 'Akar tanaman bakau melengkung besar-besar' adalah ...",
    pilihan: [
      "Program KB membatasi jumlah anak-anak dalam suatu keluarga.",
      "Aku tidak menerima telepon bila ada yang menghubungi malam-malam.",
      "Lulusan Perguruan Tinggi dalam negeri tidak kalah pintar-pintar dengan lulusan luar negeri.",
      "Pada jam istirahat, kami membeli makanan kecil dan lauk pauk di kantin kantor.",
      "Bila ada maunya gadis kecil itu bermanja-manja pada ibunya.",
    ],
    kunciJawaban: 2,
    penjelasan:
      "Kata reduplikasi 'pintar-pintar' bermakna kualitas (sifat), sama dengan 'besar-besar'.",
  },
  {
    soal: "Penulisan nama dan gelar yang benar adalah ...",
    pilihan: [
      "Sutinah Pertiwi, S. H.",
      "Moh Indrawan Setyo Hadi M. Pd.",
      "Hj Rusti Satringisih.",
      "Dr Laila Sari Devi",
      "Rusti Hadiningrat, S. S",
    ],
    kunciJawaban: 3,
    penjelasan:
      "Penulisan yang benar adalah 'Dr. Laila Sari Devi' dengan tanda titik setelah singkatan gelar.",
  },

  // Soal 36-55: TIU (Tes Intelegensia Umum) - Analogi, Silogisme, Aritmatika
  {
    soal: "GETIR = ...",
    pilihan: ["Manis", "Sakit", "Pedas", "Pahit", "Asin"],
    kunciJawaban: 3,
    penjelasan:
      "Getir berarti rasa pahit agak pedas (seperti rasa kulit jeruk).",
  },
  {
    soal: "BANDELA = ...",
    pilihan: ["Peti kemas", "Bendera", "Lambang", "Barang", "Kiriman"],
    kunciJawaban: 0,
    penjelasan:
      "Bandela berarti bungkusan (peti) besar barang-barang; peti kemas.",
  },
  {
    soal: "MUKADIMAH = ...",
    pilihan: ["Atas", "Pengantar", "Penutup", "Isi", "Kesimpulan"],
    kunciJawaban: 1,
    penjelasan: "Mukadimah berarti (kata) pendahuluan atau pengantar.",
  },
  {
    soal: "SINKRON >< ...",
    pilihan: ["Selaras", "Serasi", "Berbeda", "Sama", "Sejalan"],
    kunciJawaban: 2,
    penjelasan: "Sinkron berarti sesuai/sama, lawannya adalah berbeda.",
  },
  {
    soal: "NEKAT >< ...",
    pilihan: ["Niat", "Motif", "Maksud", "Takut", "Berani"],
    kunciJawaban: 3,
    penjelasan:
      "Nekat berarti terlalu berani/tidak berpikir lagi, lawannya adalah takut.",
  },
  {
    soal: "ELEKTRIK >< ...",
    pilihan: ["Tunjuk", "Campur", "Kolot", "Modern", "Pilih-pilih"],
    kunciJawaban: 2,
    penjelasan:
      "Elektrik berarti pilih-pilih, lawannya adalah tidak pilih-pilih (kolot dalam konteks ini berarti tidak memilih-milih).",
  },
  {
    soal: "BURUNG : SARANG = ...",
    pilihan: [
      "Orang : Rumah",
      "Murid : Sekolah",
      "Dompet : Uang",
      "Kandang : Kambing",
      "Rapat : Gedung",
    ],
    kunciJawaban: 0,
    penjelasan:
      "Tempat tinggal burung adalah sarang. Tempat tinggal orang adalah rumah.",
  },
  {
    soal: "SELASA : KAMIS = ...",
    pilihan: [
      "Januari : Maret",
      "Menit : Jam",
      "Jam : Hari",
      "Mei : Agustus",
      "Gelap : Terang",
    ],
    kunciJawaban: 0,
    penjelasan:
      "Dua hari setelah Selasa adalah Kamis. Dua bulan setelah Januari adalah Maret.",
  },
  {
    soal: "DINIHARI : SENJA = ... : ...",
    pilihan: [
      "Kakak : Anak",
      "Barat : Selatan",
      "Siang : Malam",
      "Sepatu : Tas",
      "Menit : Detik",
    ],
    kunciJawaban: 2,
    penjelasan:
      "Lawan dari dinihari adalah senja. Lawan dari siang adalah malam.",
  },
  {
    soal: "BURUNG : EKOR = ... : ...",
    pilihan: [
      "Gajah : Belalai",
      "Kapal : Buritan",
      "Kucing : Bulu",
      "Harimau : Taring",
      "Rusa : Tanduk",
    ],
    kunciJawaban: 1,
    penjelasan:
      "Yang terletak di bagian belakang burung adalah ekor. Yang terletak di bagian belakang kapal adalah buritan.",
  },
  {
    soal: "Kartamarna menjual mobilnya seharga Rp 10.000.000 dan ternyata rugi 66 2/3 %. Berapakah harga beli mobil tersebut?",
    pilihan: [
      "Rp 30.000.000",
      "Rp 33.000.000",
      "Rp 34.000.000",
      "Rp 35.000.000",
      "Rp 12.000.000",
    ],
    kunciJawaban: 0,
    penjelasan:
      "Harga jual = Harga beli × (1 - 2/3) = Harga beli/3, maka Harga beli = Rp 30.000.000.",
  },
  {
    soal: "Berapakah biaya yang diperlukan untuk mengecat dinding setinggi 4 m dan panjangnya 13 m, jika biaya cat ditetapkan Rp 4.500/m²?",
    pilihan: [
      "Rp 207.000",
      "Rp 216.000",
      "Rp 225.000",
      "Rp 234.000",
      "Rp 234.000",
    ],
    kunciJawaban: 3,
    penjelasan:
      "Luas dinding = 4 × 13 = 52 m². Biaya = 52 × 4.500 = Rp 234.000.",
  },
  {
    soal: "Dursasana bekerja selama 6 jam/hari. Jika dia mulai bekerja jam 08.00, maka jam berapakah ia selesai?",
    pilihan: ["14.45", "12.00", "13.30", "02.00", "14.00"],
    kunciJawaban: 4,
    penjelasan: "08.00 + 6 jam = 14.00.",
  },
  {
    soal: "Suatu selokan mempunyai penampang berbentuk trapesium dengan panjang sisi-sisi sejajarnya 3 m dan 1,5 m dan panjang selokan 15 km. Berapakah volume air maksimum yang dapat ditampung oleh selokan, jika tinggi selokan 0,2 m?",
    pilihan: ["6750 m³", "675 m³", "67,5 m³", "6,75 m³", "0,675 m³"],
    kunciJawaban: 0,
    penjelasan:
      "Volume = panjang × tinggi × (jumlah sisi sejajar)/2 = 15.000 × 0,2 × (3+1,5)/2 = 6.750 m³.",
  },
  {
    soal: "Tentukan himpunan penyelesaian dari 3x - 4 > 5 + 2x!",
    pilihan: ["x < 9", "x < 1", "x > 1", "x > 9", "x = 9"],
    kunciJawaban: 3,
    penjelasan: "3x - 4 > 5 + 2x → 3x - 2x > 5 + 4 → x > 9.",
  },
  {
    soal: "Jika x = 2,4 - 1,98 + 0,009 dan y = 5,08, maka ...",
    pilihan: ["x = y", "x < y", "x > y", "x ≈ y", "x ≅ y"],
    kunciJawaban: 1,
    penjelasan: "x = 0,429 dan y = 5,08, maka x < y.",
  },
  {
    soal: "Pada seleksi CPNS, sebanyak 200 peserta mengikutinya. Jika diketahui terdapat 5/6 dari 120 peserta perempuan diterima di departemen kehutanan dan sisanya di pertanian, serta 3/4 dari 80 peserta laki-laki diterima di departemen pertanian dan sisanya di kehutanan, maka persentase siswa perempuan terhadap siswa laki-laki yang diterima di departemen kehutanan adalah ...",
    pilihan: ["10%", "15%", "20%", "25%", "30%"],
    kunciJawaban: 2,
    penjelasan:
      "Perempuan di kehutanan = 20, laki-laki di kehutanan = 20. Persentase = 20/100 × 100% = 20%.",
  },
  {
    soal: "Diketahui lamanya belajar mandiri siswa sebanding dengan nilai ujian. Jika siswa dengan nilai ujian 90 melakukan belajar mandiri 12 jam/hari, maka lamanya belajar mandiri siswa dengan nilai 60 adalah ...",
    pilihan: [
      "112,5 jam/hari",
      "24 jam/hari",
      "18 jam/hari",
      "8 jam/hari",
      "6 jam/hari",
    ],
    kunciJawaban: 3,
    penjelasan: "(60/90) × 12 = 8 jam/hari.",
  },
  {
    soal: "Durna berjalan selama 2 jam dan menempuh jarak 8,7 km. Pada paruh jam pertama ditempuh 3 km, paruh jam ke-2 ditempuh 1 km, paruh jam ke-3 ditempuh 4,5 km. Berapakah km ditempuh pada paruh jam ke-4?",
    pilihan: ["25 m", "50 m", "100 m", "150 m", "200 m"],
    kunciJawaban: 3,
    penjelasan: "8,7 - (3 + 1 + 4,5) = 0,2 km = 200 m.",
  },
  {
    soal: "Suatu mobil menempuh jarak 7 km dalam 15 menit. Berapakah rata-rata jarak tempuh mobil dalam 1 jam?",
    pilihan: ["20 km", "22 km", "26 km", "27 km", "28 km"],
    kunciJawaban: 4,
    penjelasan: "Kecepatan = 7 km/15 menit = 28 km/jam.",
  },
  {
    soal: "Seratus siswa di sekolah X mengikuti tes seleksi beasiswa dan skor rata-ratanya adalah 100. Banyaknya siswa kelas I yang mengikuti seleksi tersebut 50% lebih banyak dari siswa kelas II dan skor rata-rata siswa kelas II 50% lebih tinggi dari skor rata-rata siswa kelas I. Skor rata-rata siswa kelas II adalah ...",
    pilihan: ["83,33", "125", "60", "75", "100"],
    kunciJawaban: 0,
    penjelasan: "Nilai rata-rata kelas II = 83,33.",
  },

  // Soal 56-61: Deret angka dan logika
  {
    soal: "A C E G I ...",
    pilihan: ["K dan M", "J dan L", "K dan N", "L dan N", "M dan O"],
    kunciJawaban: 0,
    penjelasan: "Pola huruf: loncat 1 huruf. Setelah I adalah K dan M.",
  },
  {
    soal: "A B D G K ...",
    pilihan: ["O dan V", "M dan O", "O dan N", "P dan V", "N dan P"],
    kunciJawaban: 4,
    penjelasan: "Pola: +1, +2, +3, +4, maka setelah K (+5) = P, lalu (+6) = V.",
  },
  {
    soal: "212, 101, 111, 212, -101, -111, -212, -101, ..., ...",
    pilihan: ["111, -212", "-111, 101", "-101, 111", "-111, -212", "101, -111"],
    kunciJawaban: 0,
    penjelasan:
      "Pola berulang setiap 3 angka dengan tanda positif/negatif bergantian.",
  },
  {
    soal: "Semua pohon bercabang dan berakar. Tanaman A berakar, tetapi tidak bercabang. Kesimpulan yang tepat adalah ...",
    pilihan: [
      "Tanaman A adalah pohon yang berakar",
      "Tanaman A adalah pohon yang tidak bercabang",
      "Tanaman A adalah pohon yang berakar dan tidak bercabang",
      "Tanaman A adalah bukan pohon",
      "Tanaman A bukan pohon bercabang",
    ],
    kunciJawaban: 3,
    penjelasan:
      "Syarat pohon: bercabang DAN berakar. Tanaman A hanya memenuhi 1 syarat, maka BUKAN pohon.",
  },
  {
    soal: "Semua santri pandai berbahasa Arab. Santri yang pandai berbahasa Arab pandai pula berpidato. Sebagian santri yang pandai berpidato tidak suka matematika. Kesimpulan yang tepat:",
    pilihan: [
      "Sebagian santri tidak suka matematika dan tidak pandai berbahasa Arab",
      "Sebagian santri suka matematika dan pandai berbahasa Arab",
      "Sebagian santri suka matematika tetapi tidak pandai berbahasa Arab",
      "Sebagian santri suka matematika dan tidak pandai berbahasa Arab",
      "Sebagian santri suka matematika tetapi tidak suka berbahasa Arab",
    ],
    kunciJawaban: 1,
    penjelasan:
      "Sebagian santri yang pandai berpidato tidak suka matematika, artinya sebagian yang lain suka matematika dan tetap pandai berbahasa Arab.",
  },

  // Soal 62-65: Peribahasa
  {
    soal: "Asal ada, kecil pun pada. Makna peribahasa di atas adalah ...",
    pilihan: [
      "Harta benda bukanlah yang utama, tetapi kesehatan yang penting",
      "Bersenang hatilah dengan apa yang didapat walaupun sedikit",
      "Uang sedikit lebih baik daripada tidak ada",
      "Menjadi orang harus memberi manfaat walaupun sedikit",
      "Orang harus bersyukur atas nikmat",
    ],
    kunciJawaban: 1,
    penjelasan:
      "Peribahasa ini menghibur hati orang yang hanya mendapat hasil sedikit. Lebih baik mendapat sedikit daripada tidak sama sekali.",
  },
  {
    soal: "Seperti anjing menggonggong tulang. Makna peribahasa di atas adalah ...",
    pilihan: [
      "Orang yang loba dan tamak tak pernah puas dengan apa yang ada",
      "Keserakahan akan membuat manusia menjadi seperti hewan",
      "Manusia selalu tidak merasa puas",
      "Manusia selalu berusaha mendapatkan apa yang ia inginkan",
      "Orang yang ingin menunjukkan kelebihan pada orang lain",
    ],
    kunciJawaban: 0,
    penjelasan:
      "Peribahasa ini dikiaskan kepada orang yang loba dan tamak, selalu ingin lebih banyak tanpa peduli orang lain.",
  },

  // Soal 66-100: TKP (Tes Karakteristik Pribadi) - 35 soal
  {
    soal: "Ketika saya mengalami kegagalan, saya cenderung ...",
    pilihan: [
      "Merasa bodoh dan putus asa",
      "Merasa sedih dan marah",
      "Mencari sumber kegagalan saya",
      "Biasa saja seperti tidak terjadi apa-apa",
      "Melupakan kegagalan dan menatap ke depan",
    ],
    kunciJawaban: 2,
    penjelasan:
      "Sikap positif saat gagal adalah mencari sumber kegagalan untuk belajar dan memperbaiki diri.",
  },
  {
    soal: "Teman-teman senang menceritakan masalah mereka kepada saya, karena menurut mereka saya ...",
    pilihan: [
      "Mampu menjaga rahasia",
      "Pendengar yang baik",
      "Memberikan solusi terbaik",
      "Bisa melihat masalah dari sudut pandang lain",
      "Mampu menumbuhkan semangat mereka",
    ],
    kunciJawaban: 1,
    penjelasan:
      "Menjadi pendengar yang baik adalah kualitas yang membuat orang percaya menceritakan masalahnya.",
  },
  {
    soal: "Di kantor saya ditugaskan di bagian pelayanan. Suatu hari ada seorang tamu yang sangat rewel. Saya akan ...",
    pilihan: [
      "Melayani dengan malas-malasan",
      "Meminta teman lain untuk melayaninya",
      "Melayani seperti biasa dan memberikan yang terbaik",
      "Melaporkan kepada atasan",
      "Melakukan yang bisa saya lakukan dan tidak melayani yang tidak bisa",
    ],
    kunciJawaban: 2,
    penjelasan:
      "Tetap memberikan pelayanan terbaik meskipun menghadapi tamu rewel adalah sikap profesional.",
  },
  {
    soal: "Saya sudah bekerja lama di sebuah perusahaan dan tidak juga mendapat promosi jabatan. Suatu hari rekan kerja yang baru beberapa bulan bekerja mendapat promosi. Saya ...",
    pilihan: [
      "Pasti ada persekongkolan",
      "Pasti giliran saya akan datang juga",
      "Meningkatkan kinerja agar mendapat kesempatan promosi",
      "Tetap bekerja seperti biasa",
      "Tidak terima dan memutuskan keluar",
    ],
    kunciJawaban: 2,
    penjelasan:
      "Merasa termotivasi untuk meningkatkan kinerja adalah respons yang konstruktif.",
  },
  {
    soal: "Saya sangat senang dengan atasan yang...",
    pilihan: [
      "Dekat dengan anak buah",
      "Disiplin dan mempunyai etos kerja tinggi",
      "Bertanggung jawab",
      "Mau mendengar masukan dari bawahan",
      "Memberi tahu hal-hal yang harus dikerjakan",
    ],
    kunciJawaban: 3,
    penjelasan:
      "Atasan yang mau mendengar masukan bawahan menciptakan lingkungan kerja yang partisipatif.",
  },
  {
    soal: "Saya senang melakukan pekerjaan yang...",
    pilihan: [
      "Saya senangi",
      "Penuh tantangan",
      "Sesuai kemampuan",
      "Seperti rutinitas biasa",
      "Tidak memiliki risiko",
    ],
    kunciJawaban: 1,
    penjelasan:
      "Pekerjaan penuh tantangan mendorong pengembangan diri dan peningkatan kemampuan.",
  },
  {
    soal: "Sebagai pegawai, hal terpenting yang harus dilakukan menurut saya ...",
    pilihan: [
      "Melakukan pekerjaan dengan standar kinerja yang baik",
      "Menciptakan hubungan yang baik dengan semua orang di kantor",
      "Patuh dan loyal kepada atasan",
      "Melakukan pekerjaan seperti yang sudah ditentukan",
      "Menciptakan terobosan-terobosan untuk kemajuan perusahaan",
    ],
    kunciJawaban: 4,
    penjelasan:
      "Menciptakan terobosan untuk kemajuan perusahaan menunjukkan inisiatif dan kontribusi nyata.",
  },
  {
    soal: "Karena suatu permasalahan, kantor saya mengalami keterlambatan pembayaran gaji. Padahal anak saya sangat membutuhkan uang untuk biaya sekolah. Yang saya lakukan ...",
    pilihan: [
      "Bekerja di luar kantor untuk mendapatkan uang itu",
      "Meminta bantuan atasan",
      "Meminta kepada orang tua atau saudara",
      "Mencari pinjaman kepada teman",
      "Mendesak kantor untuk segera mengeluarkan gaji",
    ],
    kunciJawaban: 1,
    penjelasan:
      "Meminta bantuan atasan adalah langkah bijak karena atasan bisa memberikan solusi terbaik.",
  },
  {
    soal: "Saya termasuk pegawai yang berprestasi. Suatu waktu perusahaan saingan menawarkan pekerjaan dengan gaji lebih besar. Saya akan ...",
    pilihan: [
      "Langsung mengambil tawaran tersebut",
      "Menolak tawaran, uang bukan segalanya",
      "Mempertimbangkan tawaran dengan keluarga",
      "Meminta kenaikan gaji dengan memanfaatkan tawaran",
      "Melaporkan perusahaan saingan kepada atasan",
    ],
    kunciJawaban: 2,
    penjelasan:
      "Mempertimbangkan tawaran bersama keluarga menunjukkan kedewasaan dalam mengambil keputusan.",
  },
  {
    soal: "Pada suatu hari libur handphone saya berbunyi, tampak panggilan dari atasan. Padahal saya sudah merencanakan piknik bersama keluarga. Saya ...",
    pilihan: [
      "Membiarkan saja panggilan itu",
      "Mengangkat panggilan, siapa tahu ada yang penting",
      "Membiarkan panggilan, menelfon balik saat di tempat piknik",
      "Menyuruh orang lain mengangkat panggilan",
      "Mengangkat dan mengajak atasan piknik bersama",
    ],
    kunciJawaban: 1,
    penjelasan:
      "Mengangkat telepon atasan terlebih dahulu untuk mengetahui kepentingannya adalah sikap profesional.",
  },
  {
    soal: "Ketika suasana hati saya sedang tidak baik, biasanya saya ...",
    pilihan: [
      "Menjadi mudah marah",
      "Menjadi malas bekerja",
      "Tetap bekerja seperti biasa",
      "Sering melamun",
      "Bercerita kepada teman",
    ],
    kunciJawaban: 2,
    penjelasan:
      "Tetap bekerja profesional meskipun suasana hati tidak baik adalah sikap dewasa.",
  },
  {
    soal: "Orang tua saya menyarankan saya untuk pindah tempat kerja. Padahal saya nyaman bekerja di tempat saya meskipun gaji kecil. Saya akan ...",
    pilihan: [
      "Menuruti saran orang tua",
      "Menolak saran orang tua",
      "Tetap bekerja dan memberikan pengertian kepada orang tua",
      "Meminta saran dari teman-teman",
      "Meminta pertimbangan atasan",
    ],
    kunciJawaban: 2,
    penjelasan:
      "Tetap bekerja sambil memberikan pengertian kepada orang tua menunjukkan kemandirian dan komunikasi yang baik.",
  },
  {
    soal: "Teman saya mengingkari janjinya mengembalikan uang pinjaman. Saya akan ...",
    pilihan: [
      "Menagihnya dengan marah-marah",
      "Mungkin dia belum punya uang",
      "Tidak akan meminjamkan uang lagi",
      "Tidak mau berteman lagi",
      "Mencarinya dan meminta penjelasan",
    ],
    kunciJawaban: 4,
    penjelasan:
      "Mencari dan meminta penjelasan terlebih dahulu adalah cara dewasa menyelesaikan masalah.",
  },
  {
    soal: "Di kantor saya termasuk orang yang ...",
    pilihan: [
      "Supel dan mudah akrab",
      "Disiplin dan pekerja keras",
      "Ulet dan pantang menyerah",
      "Pintar dan penuh ide segar",
      "Bertanggung jawab dan berkepribadian kuat",
    ],
    kunciJawaban: 4,
    penjelasan:
      "Tanggung jawab dan kepribadian kuat adalah fondasi karakter pegawai teladan.",
  },
  {
    soal: "Saya sangat membutuhkan sebuah buku mahal yang berguna untuk pekerjaan, sedang kondisi keuangan menipis. Saya akan ...",
    pilihan: [
      "Menabung untuk membeli buku tersebut",
      "Meminta kantor membelikan buku itu",
      "Menunggu sampai ada uang",
      "Meminjam uang kepada teman",
      "Mencari pekerjaan sampingan",
    ],
    kunciJawaban: 0,
    penjelasan:
      "Menabung menunjukkan perencanaan keuangan yang baik dan kemandirian.",
  },
  {
    soal: "Sahabat lama datang ke kota saya dan ingin menginap di rumah saya yang sederhana. Yang saya lakukan ...",
    pilihan: [
      "Menolak keinginannya",
      "Dengan malu mengizinkannya menginap",
      "Menjelaskan kondisi dan menyarankan tidak menginap",
      "Menyewakan kamar hotel terbaik",
      "Menerima dengan apa adanya dan memberikan yang terbaik",
    ],
    kunciJawaban: 4,
    penjelasan:
      "Menerima dengan ikhlas dan memberikan yang terbatas namun terbaik adalah sikap bersahabat.",
  },
  {
    soal: "Keadaan yang sering terjadi saat ada pekerjaan kelompok adalah ...",
    pilihan: [
      "Semua teman terlibat aktif",
      "Tidak semua orang mau mengerjakan",
      "Saya yang harus membereskannya",
      "Saling mengharap ada yang menyelesaikan",
      "Pekerjaan selesai jika ada yang memulai",
    ],
    kunciJawaban: 0,
    penjelasan:
      "Dalam kelompok ideal, semua anggota terlibat aktif menyelesaikan pekerjaan.",
  },
  {
    soal: "Saat menerima pekerjaan besar, saya biasanya ...",
    pilihan: [
      "Senang dan berusaha menyelesaikan dengan hasil memuaskan",
      "Merasa malas dan mengerjakan asal-asalan",
      "Takut tidak bisa menyelesaikan",
      "Meminta bantuan teman",
      "Menganggap itu pekerjaan biasa",
    ],
    kunciJawaban: 0,
    penjelasan:
      "Antusiasme dan usaha maksimal adalah kunci keberhasilan menghadapi pekerjaan besar.",
  },
  {
    soal: "Ketika presentasi saya menerima kabar anak kecelakaan dan dirawat di rumah sakit. Saya akan ...",
    pilihan: [
      "Tetap melanjutkan presentasi",
      "Mencari tahu kondisi anak, lalu memutuskan",
      "Menghentikan presentasi dan langsung ke rumah sakit",
      "Menghentikan presentasi dan mencari tahu kondisi anak",
      "Menelpon istri dan tetap melanjutkan presentasi",
    ],
    kunciJawaban: 1,
    penjelasan:
      "Mencari informasi terlebih dahulu sebelum memutuskan adalah tindakan bijaksana.",
  },
  {
    soal: "Atasan menceritakan informasi rahasia yang tidak semua karyawan tahu. Sikap saya ...",
    pilihan: [
      "Memberitahukan ke teman lain",
      "Memberi tahu bahwa saya diberi tahu, tapi tidak menceritakan isinya",
      "Diam saja dan tetap bekerja seperti biasa",
      "Hanya bercerita ke teman dekat",
      "Hanya bercerita jika ada yang tanya",
    ],
    kunciJawaban: 3,
    penjelasan:
      "Menjaga kerahasiaan informasi yang diberikan atasan adalah bentuk integritas.",
  },
  {
    soal: "Menurut saya cara yang tepat untuk mencapai kesuksesan dalam bekerja adalah ...",
    pilihan: [
      "Bekerja dengan sepenuh hati",
      "Mematuhi semua perintah atasan",
      "Bekerja giat dan memberikan yang terbaik",
      "Menyingkirkan orang yang menghalangi karir",
      "Bekerja tanpa mengenal waktu",
    ],
    kunciJawaban: 2,
    penjelasan:
      "Bekerja giat dan memberikan yang terbaik adalah kunci kesuksesan yang sehat dan berkelanjutan.",
  },
  {
    soal: "Jajaran direksi di tempat saya bekerja mengalami perombakan besar-besaran. Saya ...",
    pilihan: [
      "Tidak memikirkannya, saya cuma pegawai biasa",
      "Perubahan direksi adalah hal biasa",
      "Bekerja semakin giat dengan harapan jadi direksi",
      "Cepat-cepat mendekati atasan baru",
      "Perombakan diperlukan untuk kemajuan perusahaan",
    ],
    kunciJawaban: 0,
    penjelasan:
      "Tetap fokus pada tugas sendiri tanpa terpengaruh perubahan struktur organisasi.",
  },
  {
    soal: "Atasan memindahkan saya ke bagian lain di mana saya tidak mengenal karyawan lain. Sikap saya...",
    pilihan: [
      "Langsung mengerjakan tugas tanpa mempedulikan apa-apa",
      "Menolak pemindahan tersebut",
      "Menerima dengan kecewa dan bekerja malas-malasan",
      "Berusaha cepat mengenal rekan kerja lain",
      "Menerima tapi langsung mengajukan pindah lagi",
    ],
    kunciJawaban: 3,
    penjelasan:
      "Adaptif dan proaktif membangun relasi di lingkungan baru adalah sikap positif.",
  },
  {
    soal: "Menurut saya, orang baik adalah ...",
    pilihan: [
      "Orang yang selalu menepati janji",
      "Orang yang selalu menolong orang lain",
      "Orang yang bisa memaafkan kesalahan orang lain",
      "Orang yang tidak pernah berbuat jahat",
      "Orang yang mampu mengemban amanat",
    ],
    kunciJawaban: 4,
    penjelasan:
      "Amanah (dapat dipercaya) adalah inti kebaikan dalam konteks profesional dan sosial.",
  },
  {
    soal: "Pimpinan di kantor saya sangat mendikte dan tidak disenangi karyawan. Saya...",
    pilihan: [
      "Mengajak teman berdemonstrasi",
      "Tetap bekerja biasa, itu bukan urusan saya",
      "Mengajukan surat protes",
      "Berusaha bicara dengan pimpinan dan menjelaskan situasi",
      "Mengajak teman tidak mematuhi perintah",
    ],
    kunciJawaban: 3,
    penjelasan:
      "Komunikasi konstruktif dengan pimpinan adalah cara dewasa mengatasi masalah.",
  },
  {
    soal: "Dalam melaksanakan pekerjaan yang dipercayakan kepada saya, saya ...",
    pilihan: [
      "Selalu menunggu perintah atasan",
      "Tidak berani mengambil keputusan sendiri",
      "Berani mengambil keputusan sendiri, itu tanggung jawab saya",
      "Jika di luar wewenang, tetap menunggu keputusan atasan",
    ],
    kunciJawaban: 3,
    penjelasan:
      "Mengambil keputusan sesuai wewenang, dan menunggu atasan jika di luar wewenang, adalah profesional.",
  },
  {
    soal: "Ketika memimpin rapat ada teman yang selalu membuat gaduh. Yang saya lakukan ...",
    pilihan: [
      "Marah dan menegurinya dengan keras",
      "Memintanya untuk menjaga sikap",
      "Marah dan meninggalkan ruangan",
      "Mengeluarkannya dari rapat",
      "Tetap melanjutkan rapat",
    ],
    kunciJawaban: 1,
    penjelasan:
      "Menegur dengan tegas namun santun adalah cara kepemimpinan yang efektif.",
  },
  {
    soal: "Istri teman baru melahirkan. Saya ingin mengunjungi tapi tidak punya uang untuk kado. Saya akan ...",
    pilihan: [
      "Mengunjungi jika sudah punya uang",
      "Tetap mengunjungi tanpa membawa kado",
      "Mengunjungi dan menyusulkan kado lain waktu",
      "Tidak mengunjunginya",
      "Meminjam uang untuk membeli kado",
    ],
    kunciJawaban: 1,
    penjelasan:
      "Kehadiran dan perhatian lebih penting daripada nilai materi kado.",
  },
  {
    soal: "Tempat kerja mengalami pergantian kepala kantor. Padahal saya dekat dengan kepala kantor lama. Saya akan...",
    pilihan: [
      "Berusaha dekat dengan kepala kantor baru",
      "Tidak mau dekat dengan kepala kantor baru",
      "Tidak semangat bekerja",
      "Segera menyesuaikan diri dengan pola kerja baru",
      "Tidak terpengaruh pergantian kepala kantor",
    ],
    kunciJawaban: 3,
    penjelasan:
      "Adaptif terhadap perubahan kepemimpinan dan pola kerja baru adalah sikap profesional.",
  },
  {
    soal: "Dalam bekerja saya sangat senang jika ...",
    pilihan: [
      "Tempat kerja kondusif",
      "Apa yang saya lakukan mendapat penghargaan",
      "Mempunyai rekan kerja yang bisa bekerja sama",
      "Mempunyai pimpinan yang mengerti bawahan",
      "Pendapatan yang saya dapatkan besar",
    ],
    kunciJawaban: 2,
    penjelasan:
      "Kerja sama tim yang baik adalah faktor kebahagiaan kerja yang paling berkelanjutan.",
  },
  {
    soal: "Atasan meminta saya melakukan pekerjaan yang cukup berat. Saya akan...",
    pilihan: [
      "Menolak pekerjaan tersebut",
      "Dengan terpaksa menerimanya",
      "Meminta waktu mempertimbangkannya",
      "Tertarik menyelesaikan pekerjaan tersebut",
      "Menerima lalu menyerahkan ke bawahan",
    ],
    kunciJawaban: 3,
    penjelasan:
      "Antusiasme menghadapi tantangan menunjukkan motivasi dan kapasitas diri.",
  },
  {
    soal: "Saya mendapatkan keberhasilan, karena...",
    pilihan: [
      "Tidak pernah menyerah menghadapi kegagalan",
      "Bernasib baik",
      "Berani menempuh risiko",
      "Lingkungan membantu saya",
      "Melakukan hal-hal yang tidak berisiko",
    ],
    kunciJawaban: 0,
    penjelasan: "Ketekunan dan tidak menyerah adalah kunci utama keberhasilan.",
  },
  {
    soal: "Ketika menghadapi masalah, saya cenderung ...",
    pilihan: [
      "Tidak bersemangat",
      "Mudah marah",
      "Bercerita kepada teman",
      "Bingung dan sedih",
      "Tetap seperti biasa",
    ],
    kunciJawaban: 4,
    penjelasan:
      "Tetap tenang dan stabil saat menghadapi masalah adalah tanda kedewasaan emosional.",
  },
  {
    soal: "Atasan tiba-tiba memberi tugas yang memaksa saya lembur, padahal saya berjanji mengantar anak ke acara ulang tahun. Yang harus saya lakukan ...",
    pilihan: [
      "Menolak tugas",
      "Menerima tugas dan membatalkan janji",
      "Menyarankan atasan memberi ke pegawai lain",
      "Menerima dan meminta bantuan teman",
      "Menerima tugas, meminta izin mengantar anak dulu lalu kembali",
    ],
    kunciJawaban: 4,
    penjelasan:
      "Mencari solusi win-win dengan memenuhi tanggung jawab kerja dan keluarga secara seimbang.",
  },
  {
    soal: "Saya baru saja menerima penghargaan dari perusahaan atas kinerja saya yang baik. Saya akan ...",
    pilihan: [
      "Memamerkan penghargaan ke teman kantor",
      "Bekerja seperti biasa",
      "Meningkatkan kinerja agar mendapat lagi",
      "Meningkatkan kinerja dan memotivasi teman",
      "Meningkatkan kinerja untuk menjawab kepercayaan",
    ],
    kunciJawaban: 4,
    penjelasan:
      "Penghargaan menjadi motivasi untuk meningkatkan kinerja demi menjaga kepercayaan.",
  },
];

let soalAktif = 0;
let jawabanUser = new Array(100).fill(null);
let raguRagu = new Array(100).fill(false);
let waktuTersisa = 5400; // 90 menit dalam detik
let intervalTimer;
let ujianSelesai = false;
let dataSoalAcak = [];
let kunciJawabanAcak = [];
// Inisialisasi
function init() {
  renderNavigasiSoal();
  renderSoal();
  startTimer();
  // Sembunyikan tombol lihat hasil sementara
  document.getElementById("btnLihatHasil").style.display = "none";
}

// Render navigasi soal
function renderNavigasiSoal() {
  const container = document.getElementById("nomorSoal");
  container.innerHTML = "";

  for (let i = 0; i < 100; i++) {
    const btn = document.createElement("button");
    btn.className = "btn-nomor";
    btn.textContent = i + 1;

    if (i === soalAktif) {
      btn.classList.add("active");
    }
    if (jawabanUser[i] !== null) {
      btn.classList.add("dijawab");
    }
    if (raguRagu[i]) {
      btn.classList.add("ragu-ragu");
    }

    btn.onclick = () => pindahSoal(i);
    container.appendChild(btn);
  }
}
// Fungsi untuk mengacak soal
// Fungsi untuk mengacak soal
function acakSoal() {
  // Cek apakah sudah ada soal tersimpan di localStorage
  const soalTersimpan = localStorage.getItem("soalCatCPNS");

  if (soalTersimpan) {
    // Jika ada, gunakan soal yang tersimpan
    dataSoalAcak = JSON.parse(soalTersimpan);

    // Cek apakah ada jawaban yang tersimpan
    const jawabanTersimpan = localStorage.getItem("jawabanCatCPNS");
    if (jawabanTersimpan) {
      jawabanUser = JSON.parse(jawabanTersimpan);
    }

    // Cek apakah ada status ragu-ragu tersimpan
    const raguTersimpan = localStorage.getItem("raguCatCPNS");
    if (raguTersimpan) {
      raguRagu = JSON.parse(raguTersimpan);
    }

    // Cek apakah ada timer tersimpan
    const timerTersimpan = localStorage.getItem("timerCatCPNS");
    if (timerTersimpan) {
      waktuTersisa = parseInt(timerTersimpan);
    }

    return; // Keluar dari fungsi karena sudah ada data
  }

  // Jika belum ada, acak soal baru
  const jumlahSoal = 100;
  let soalTerpilih = [];

  // Acak bank soal
  const bankSoalAcak = shuffleArray(bankSoal);

  // Generate 100 soal
  for (let i = 0; i < jumlahSoal; i++) {
    const indexBank = i % bankSoalAcak.length;
    const soalBank = bankSoalAcak[indexBank];

    // Acak pilihan jawaban
    const pilihanAcak = shuffleArray([...soalBank.pilihan]);

    // Cari index kunci jawaban yang baru setelah diacak
    const kunciBaru = pilihanAcak.findIndex(
      (pilihan) => pilihan === soalBank.pilihan[soalBank.kunciJawaban]
    );

    soalTerpilih.push({
      id: i + 1,
      soal: `Soal ${i + 1}: ${soalBank.soal}`,
      pilihan: pilihanAcak,
      kunciJawaban: kunciBaru,
      penjelasan: soalBank.penjelasan,
      jawaban: null,
      ragu: false,
    });
  }

  // Simpan hasil acakan
  dataSoalAcak = soalTerpilih;

  // Simpan ke localStorage
  localStorage.setItem("soalCatCPNS", JSON.stringify(dataSoalAcak));

  // Reset semua jawaban
  jawabanUser = new Array(100).fill(null);
  raguRagu = new Array(100).fill(false);
  soalAktif = 0;
  ujianSelesai = false;

  // Reset timer ke 90 menit
  waktuTersisa = 5400;
  document.getElementById("timer").classList.remove("warning");
  updateTimerDisplay();

  // Simpan ke localStorage
  localStorage.setItem("jawabanCatCPNS", JSON.stringify(jawabanUser));
  localStorage.setItem("raguCatCPNS", JSON.stringify(raguRagu));
  localStorage.setItem("timerCatCPNS", waktuTersisa.toString());

  // Sembunyikan tombol lihat hasil
  const btnLihatHasil = document.getElementById("btnLihatHasil");
  if (btnLihatHasil) {
    btnLihatHasil.style.display = "none";
  }

  // Render ulang tampilan
  renderNavigasiSoal();
  renderSoal();
}
// Fungsi untuk menyimpan progress ke localStorage
function simpanProgress() {
  localStorage.setItem("jawabanCatCPNS", JSON.stringify(jawabanUser));
  localStorage.setItem("raguCatCPNS", JSON.stringify(raguRagu));
  localStorage.setItem("timerCatCPNS", waktuTersisa.toString());
}
// function updateInfoSesi() {
//   const sesiRandom = Math.floor(Math.random() * 3) + 1;
//   const waktuSesi = ["Pagi", "Siang", "Sore"];
//   document.querySelector(
//     ".info-value:last-child"
//   ).textContent = `${sesiRandom} - ${waktuSesi[sesiRandom - 1]}`;
// }

// Render soal
function renderSoal() {
  if (ujianSelesai) return;

  if (dataSoalAcak.length === 0) {
    acakSoal(); // Jika belum ada soal, acak dulu
    return;
  }

  const soalAktifData = dataSoalAcak[soalAktif];

  document.getElementById("nomorSoalAktif").textContent = soalAktif + 1;
  document.getElementById(
    "teksSoal"
  ).innerHTML = `<p>${soalAktifData.soal}</p>`;

  const container = document.getElementById("pilihanJawaban");
  container.innerHTML = "";

  // Gunakan pilihan dari soal yang diacak
  soalAktifData.pilihan.forEach((teksPilihan, index) => {
    const div = document.createElement("div");
    div.className = "pilihan";
    if (jawabanUser[soalAktif] === index) {
      div.classList.add("selected");
    }

    const labelHuruf = String.fromCharCode(65 + index);

    div.innerHTML = `
            <input type="radio" name="jawaban" value="${index}" 
                   ${jawabanUser[soalAktif] === index ? "checked" : ""}
                   ${ujianSelesai ? "disabled" : ""}>
            <span class="label-pilihan">${labelHuruf}.</span>
            <span>${teksPilihan}</span>
        `;

    div.onclick = function (e) {
      if (!ujianSelesai) {
        if (e.target.tagName !== "INPUT") {
          const radio = this.querySelector('input[type="radio"]');
          radio.checked = true;
        }
        pilihJawaban(index);
      }
    };

    container.appendChild(div);
  });

  renderNavigasiSoal();
}

// Pilih jawaban
function pilihJawaban(index) {
  if (ujianSelesai) return;
  jawabanUser[soalAktif] = index;
  raguRagu[soalAktif] = false;
  simpanProgress(); // Simpan setiap kali jawaban dipilih
  renderSoal();
}

// Navigasi soal
function pindahSoal(index) {
  if (!ujianSelesai) {
    soalAktif = index;
    renderSoal();
  }
}

function soalSebelumnya() {
  if (!ujianSelesai && soalAktif > 0) {
    soalAktif--;
    renderSoal();
  }
}

function soalSelanjutnya() {
  if (!ujianSelesai && soalAktif < 99) {
    soalAktif++;
    renderSoal();
  }
}

// Tandai ragu-ragu
function tandaiRagu() {
  if (ujianSelesai) return;
  raguRagu[soalAktif] = !raguRagu[soalAktif];
  simpanProgress(); // Simpan setiap kali status ragu diubah
  renderNavigasiSoal();
}

// Timer
function startTimer() {
  updateTimerDisplay();
  intervalTimer = setInterval(() => {
    waktuTersisa--;
    updateTimerDisplay();

    if (waktuTersisa <= 300) {
      // 5 menit
      document.getElementById("timer").classList.add("warning");
    }

    if (waktuTersisa <= 0) {
      clearInterval(intervalTimer);
      selesaikanUjian();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const jam = Math.floor(waktuTersisa / 3600);
  const menit = Math.floor((waktuTersisa % 3600) / 60);
  const detik = waktuTersisa % 60;

  document.getElementById("timer").textContent = `${String(jam).padStart(
    2,
    "0"
  )}:${String(menit).padStart(2, "0")}:${String(detik).padStart(2, "0")}`;

  // Simpan timer setiap detik
  simpanProgress();
}

// Selesaikan ujian
function selesaikanUjian() {
  ujianSelesai = true;
  clearInterval(intervalTimer);
  document.getElementById("timer").classList.remove("warning");

  // Nonaktifkan semua input
  const semuaRadio = document.querySelectorAll('input[type="radio"]');
  semuaRadio.forEach((radio) => (radio.disabled = true));

  // Tampilkan tombol lihat hasil
  document.getElementById("btnLihatHasil").style.display = "inline-block";

  // Simpan progress terakhir
  simpanProgress();

  // Render ulang tampilan
  renderNavigasiSoal();
}
// Fungsi untuk mereset soal (acak ulang)
// function resetSoal() {
//   if (
//     confirm(
//       "Anda yakin ingin mengacak ulang soal? Semua jawaban dan progress akan dihapus."
//     )
//   ) {
//     // Hapus data dari localStorage
//     localStorage.removeItem("soalCatCPNS");
//     localStorage.removeItem("jawabanCatCPNS");
//     localStorage.removeItem("raguCatCPNS");
//     localStorage.removeItem("timerCatCPNS");

//     // Acak ulang soal
//     acakSoal();
//   }
// }
// Akhiri ujian
function akhiriUjian() {
  if (ujianSelesai) {
    tampilkanHasil();
    return;
  }

  const terjawab = jawabanUser.filter((j) => j !== null).length;
  document.getElementById("soalTerjawab").textContent = terjawab;
  document.getElementById("modalKonfirmasi").style.display = "flex";
}

function batalkanAkhiri() {
  document.getElementById("modalKonfirmasi").style.display = "none";
}

function konfirmasiAkhiri() {
  document.getElementById("modalKonfirmasi").style.display = "none";
  selesaikanUjian();
  tampilkanHasil();

  // Hapus data dari localStorage setelah ujian selesai
  localStorage.removeItem("soalCatCPNS");
  localStorage.removeItem("jawabanCatCPNS");
  localStorage.removeItem("raguCatCPNS");
  localStorage.removeItem("timerCatCPNS");
}

// Fungsi menghitung hasil
function hitungHasil() {
  let benar = 0;
  let salah = 0;
  let kosong = 0;
  const detailJawaban = [];

  for (let i = 0; i < 100; i++) {
    const jawabanUserSoal = jawabanUser[i];
    const kunci = dataSoalAcak[i].kunciJawaban;
    let status;

    if (jawabanUserSoal === null) {
      status = "kosong";
      kosong++;
    } else if (jawabanUserSoal === kunci) {
      status = "benar";
      benar++;
    } else {
      status = "salah";
      salah++;
    }

    detailJawaban.push({
      no: i + 1,
      jawaban:
        jawabanUserSoal !== null
          ? String.fromCharCode(65 + jawabanUserSoal)
          : "-",
      kunci: String.fromCharCode(65 + kunci),
      status: status,
      penjelasan: dataSoalAcak[i].penjelasan,
      soal: dataSoalAcak[i].soal,
      pilihanJawaban: dataSoalAcak[i].pilihan[kunci],
      pilihanUser:
        jawabanUserSoal !== null
          ? dataSoalAcak[i].pilihan[jawabanUserSoal]
          : "-",
    });
  }

  return {
    benar,
    salah,
    kosong,
    total: benar,
    detail: detailJawaban,
  };
}

// Helper untuk mendapatkan teks pilihan jawaban
// function getPilihanJawaban(kunciIndex) {
//   const pilihan = [
//     "Ketuhanan Yang Maha Esa",
//     "Kemanusiaan yang adil dan beradab",
//     "Persatuan Indonesia",
//     "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan",
//     "Keadilan sosial bagi seluruh rakyat Indonesia",
//   ];
//   return pilihan[kunciIndex];
// }

// modifikasi fungsi init
function init() {
  acakSoal(); // Acak soal saat pertama kali load
  renderNavigasiSoal();
  renderSoal();
  startTimer();
  document.getElementById("btnLihatHasil").style.display = "none";
}

// Tampilkan penjelasan detail
function tampilkanPenjelasan(item) {
  const modalPenjelasan = document.getElementById("modalPenjelasan");
  document.getElementById("penjelasanSoal").textContent = item.soal;
  document.getElementById(
    "penjelasanJawaban"
  ).textContent = `Jawaban yang benar: ${item.kunci}. ${item.pilihanJawaban}`;
  document.getElementById("penjelasanTeks").textContent = item.penjelasan;

  if (item.status === "benar") {
    document.getElementById("penjelasanStatus").innerHTML =
      '<span class="status-benar">✅ Jawaban Anda Benar</span>';
  } else if (item.status === "salah") {
    document.getElementById(
      "penjelasanStatus"
    ).innerHTML = `<span class="status-salah">❌ Jawaban Anda Salah (Anda memilih: ${item.jawaban}. ${item.pilihanUser})</span>`;
  } else {
    document.getElementById("penjelasanStatus").innerHTML =
      '<span class="status-kosong">⚠️ Anda Tidak Menjawab</span>';
  }

  modalPenjelasan.style.display = "flex";
}

// Fungsi untuk me-refresh soal baru
// function refreshSoal() {
//   if (
//     confirm("Anda yakin ingin mengacak ulang soal? Semua jawaban akan direset.")
//   ) {
//     clearInterval(intervalTimer);
//     acakSoal();
//     startTimer();
//   }
// }
function tampilkanHasil() {
  if (!ujianSelesai) {
    alert("Ujian belum selesai! Silakan selesaikan ujian terlebih dahulu.");
    return;
  }

  const hasil = hitungHasil();

  document.getElementById("skorBenar").textContent = hasil.benar;
  document.getElementById("skorSalah").textContent = hasil.salah;
  document.getElementById("skorKosong").textContent = hasil.kosong;
  document.getElementById("skorTotal").textContent = hasil.total;

  const sekarang = new Date();
  document.getElementById("tanggalUjian").textContent =
    sekarang.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  const tbody = document.getElementById("detailJawabanBody");
  tbody.innerHTML = "";

  hasil.detail.forEach((item, index) => {
    const tr = document.createElement("tr");
    let statusClass = "";
    let statusText = "";

    switch (item.status) {
      case "benar":
        statusClass = "status-benar";
        statusText = "✅ Benar";
        break;
      case "salah":
        statusClass = "status-salah";
        statusText = "❌ Salah";
        break;
      case "kosong":
        statusClass = "status-kosong";
        statusText = "⚠️ Tidak Dijawab";
        break;
    }

    tr.innerHTML = `
            <td>${item.no}</td>
            <td>${item.jawaban}${
      item.jawaban !== "-" ? `. ${item.pilihanUser}` : ""
    }</td>
            <td>${item.kunci}. ${item.pilihanJawaban}</td>
            <td class="${statusClass}">${statusText}</td>
        `;

    tr.style.cursor = "pointer";
    tr.title = "Klik untuk melihat penjelasan";
    tr.onclick = () => tampilkanPenjelasan(item);

    tbody.appendChild(tr);
  });

  document.getElementById("modalHasil").style.display = "flex";
}

function tutupPenjelasan() {
  document.getElementById("modalPenjelasan").style.display = "none";
}

function tutupHasil() {
  document.getElementById("modalHasil").style.display = "none";
}

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (ujianSelesai) return;

  switch (e.key) {
    case "ArrowLeft":
      e.preventDefault();
      soalSebelumnya();
      break;
    case "ArrowRight":
      e.preventDefault();
      soalSelanjutnya();
      break;
    case "a":
    case "A":
      pilihJawaban(0);
      break;
    case "b":
    case "B":
      pilihJawaban(1);
      break;
    case "c":
    case "C":
      pilihJawaban(2);
      break;
    case "d":
    case "D":
      pilihJawaban(3);
      break;
    case "e":
    case "E":
      pilihJawaban(4);
      break;
  }
});

// Tutup modal dengan klik di luar
document.getElementById("modalHasil").addEventListener("click", function (e) {
  if (e.target === this) {
    tutupHasil();
  }
});

document
  .getElementById("modalPenjelasan")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      tutupPenjelasan();
    }
  });

// Inisialisasi saat halaman dimuat
window.onload = init;
