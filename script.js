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
  {
    soal: "Pancasila sebagai dasar negara Indonesia memiliki kedudukan yang sangat penting. Sila pertama Pancasila berbunyi...",
    pilihan: [
      "Ketuhanan Yang Maha Esa",
      "Kemanusiaan yang adil dan beradab",
      "Persatuan Indonesia",
      "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan",
      "Keadilan sosial bagi seluruh rakyat Indonesia",
    ],
    kunciJawaban: 0,
    penjelasan:
      "Sila pertama Pancasila adalah 'Ketuhanan Yang Maha Esa', yang menegaskan bahwa Indonesia adalah negara yang berdasarkan pada nilai-nilai ketuhanan.",
  },
  {
    soal: "UUD 1945 telah mengalami beberapa kali amandemen. Amandemen pertama dilakukan pada tahun...",
    pilihan: ["1998", "1999", "2000", "2001", "2002"],
    kunciJawaban: 1,
    penjelasan:
      "Amandemen pertama UUD 1945 dilakukan pada tahun 1999 pada masa pemerintahan Presiden B.J. Habibie.",
  },
  {
    soal: "Sistem pemerintahan Indonesia berdasarkan UUD 1945 adalah sistem...",
    pilihan: [
      "Parlementer",
      "Presidensial",
      "Monarki Konstitusional",
      "Federal",
      "Komunis",
    ],
    kunciJawaban: 1,
    penjelasan:
      "Indonesia menganut sistem pemerintahan presidensial dimana presiden berperan sebagai kepala negara sekaligus kepala pemerintahan.",
  },
  {
    soal: "Hak asasi manusia di Indonesia dijamin dalam UUD 1945 pasal...",
    pilihan: [
      "28A sampai 28J",
      "27 ayat 1",
      "29 ayat 2",
      "30 ayat 1",
      "31 ayat 1",
    ],
    kunciJawaban: 0,
    penjelasan:
      "HAM di Indonesia dijamin dalam UUD 1945 pasal 28A sampai 28J yang mengatur berbagai hak dasar warga negara.",
  },
  {
    soal: "Lembaga negara yang bertugas mengawasi keuangan negara adalah...",
    pilihan: ["DPR", "BPK", "MA", "MK", "KY"],
    kunciJawaban: 1,
    penjelasan:
      "BPK (Badan Pemeriksa Keuangan) adalah lembaga negara yang bertugas memeriksa pengelolaan dan tanggung jawab keuangan negara.",
  },
  {
    soal: "Presiden dan Wakil Presiden dipilih secara langsung oleh rakyat melalui...",
    pilihan: ["Sidang MPR", "Pemilihan umum", "DPR", "DPD", "Mahkamah Agung"],
    kunciJawaban: 1,
    penjelasan:
      "Sejak amandemen UUD 1945, Presiden dan Wakil Presiden dipilih secara langsung oleh rakyat melalui pemilihan umum setiap 5 tahun sekali.",
  },
  {
    soal: "Bhinneka Tunggal Ika berasal dari bahasa...",
    pilihan: ["Sansekerta", "Jawa Kuno", "Melayu", "Arab", "Belanda"],
    kunciJawaban: 1,
    penjelasan:
      "Bhinneka Tunggal Ika berasal dari bahasa Jawa Kuno yang terdapat dalam kitab Sutasoma karangan Mpu Tantular.",
  },
  {
    soal: "Negara Kesatuan Republik Indonesia dibagi atas daerah-daerah provinsi dan daerah provinsi itu dibagi atas...",
    pilihan: ["Kecamatan", "Kabupaten dan kota", "Desa", "Kelurahan", "Dusun"],
    kunciJawaban: 1,
    penjelasan:
      "Sesuai UUD 1945 pasal 18, NKRI dibagi atas daerah provinsi dan daerah provinsi dibagi atas kabupaten dan kota.",
  },
  {
    soal: "Kekuasaan kehakiman dilakukan oleh sebuah Mahkamah Agung dan badan peradilan yang berada di bawahnya dalam lingkungan...",
    pilihan: [
      "Peradilan umum saja",
      "Peradilan umum, agama, militer, TUN",
      "Peradilan militer saja",
      "Peradilan agama saja",
      "Peradilan TUN saja",
    ],
    kunciJawaban: 1,
    penjelasan:
      "Kekuasaan kehakiman dilakukan oleh Mahkamah Agung dan badan peradilan di bawahnya dalam lingkungan peradilan umum, agama, militer, dan tata usaha negara.",
  },
  {
    soal: "Bahasa negara ialah Bahasa Indonesia. Hal ini dinyatakan dalam UUD 1945 pasal...",
    pilihan: ["35", "36", "37", "38", "39"],
    kunciJawaban: 1,
    penjelasan:
      "Bahasa negara adalah Bahasa Indonesia sebagaimana dinyatakan dalam UUD 1945 pasal 36.",
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
function updateInfoSesi() {
  const sesiRandom = Math.floor(Math.random() * 3) + 1;
  const waktuSesi = ["Pagi", "Siang", "Sore"];
  document.querySelector(
    ".info-value:last-child"
  ).textContent = `${sesiRandom} - ${waktuSesi[sesiRandom - 1]}`;
}

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
function resetSoal() {
  if (
    confirm(
      "Anda yakin ingin mengacak ulang soal? Semua jawaban dan progress akan dihapus."
    )
  ) {
    // Hapus data dari localStorage
    localStorage.removeItem("soalCatCPNS");
    localStorage.removeItem("jawabanCatCPNS");
    localStorage.removeItem("raguCatCPNS");
    localStorage.removeItem("timerCatCPNS");

    // Acak ulang soal
    acakSoal();
  }
}
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
function getPilihanJawaban(kunciIndex) {
  const pilihan = [
    "Ketuhanan Yang Maha Esa",
    "Kemanusiaan yang adil dan beradab",
    "Persatuan Indonesia",
    "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan",
    "Keadilan sosial bagi seluruh rakyat Indonesia",
  ];
  return pilihan[kunciIndex];
}

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
function refreshSoal() {
  if (
    confirm("Anda yakin ingin mengacak ulang soal? Semua jawaban akan direset.")
  ) {
    clearInterval(intervalTimer);
    acakSoal();
    startTimer();
  }
}
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
