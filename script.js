// Ganti semua JavaScript yang ada dengan kode berikut:

// Data soal lengkap dengan kunci jawaban dan penjelasan
const dataSoal = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  soal: `Soal nomor ${i + 1}: ${contohSoal(i)}`,
  pilihan: ["A", "B", "C", "D", "E"],
  kunciJawaban: Math.floor(Math.random() * 5), // 0-4 (A-E)
  penjelasan: `Penjelasan untuk soal nomor ${i + 1}: ${contohPenjelasan(i)}`,
  jawaban: null,
  ragu: false,
}));

function contohSoal(index) {
  const contohSoal = [
    "Pancasila sebagai dasar negara Indonesia memiliki kedudukan yang sangat penting. Sila pertama Pancasila berbunyi...",
    "UUD 1945 telah mengalami beberapa kali amandemen. Amandemen pertama dilakukan pada tahun...",
    "Sistem pemerintahan Indonesia berdasarkan UUD 1945 adalah sistem...",
    "Hak asasi manusia di Indonesia dijamin dalam UUD 1945 pasal...",
    "Lembaga negara yang bertugas mengawasi keuangan negara adalah...",
    "Presiden dan Wakil Presiden dipilih secara langsung oleh rakyat melalui...",
    "Bhinneka Tunggal Ika berasal dari bahasa...",
    "Negara Kesatuan Republik Indonesia dibagi atas daerah-daerah provinsi dan daerah provinsi itu dibagi atas...",
    "Kekuasaan kehakiman dilakukan oleh sebuah Mahkamah Agung dan badan peradilan yang berada di bawahnya dalam lingkungan...",
    "Bahasa negara ialah Bahasa Indonesia. Hal ini dinyatakan dalam UUD 1945 pasal...",
  ];
  return contohSoal[index % contohSoal.length];
}

function contohPenjelasan(index) {
  const penjelasan = [
    "Sila pertama Pancasila adalah 'Ketuhanan Yang Maha Esa', yang menegaskan bahwa Indonesia adalah negara yang berdasarkan pada nilai-nilai ketuhanan.",
    "Amandemen pertama UUD 1945 dilakukan pada tahun 1999 pada masa pemerintahan Presiden B.J. Habibie.",
    "Indonesia menganut sistem pemerintahan presidensial dimana presiden berperan sebagai kepala negara sekaligus kepala pemerintahan.",
    "HAM di Indonesia dijamin dalam UUD 1945 pasal 28A sampai 28J yang mengatur berbagai hak dasar warga negara.",
    "BPK (Badan Pemeriksa Keuangan) adalah lembaga negara yang bertugas memeriksa pengelolaan dan tanggung jawab keuangan negara.",
    "Sejak tahun 2004, Presiden dan Wakil Presiden dipilih langsung oleh rakyat melalui pemilihan umum.",
    "Bhinneka Tunggal Ika berasal dari bahasa Jawa Kuno yang artinya berbeda-beda tetapi tetap satu.",
    "Negara Kesatuan Republik Indonesia dibagi atas daerah-daerah provinsi dan daerah provinsi dibagi atas kabupaten dan kota.",
    "Kekuasaan kehakiman dilakukan oleh Mahkamah Agung dan badan peradilan di bawahnya dalam lingkungan peradilan umum, agama, militer, dan tata usaha negara.",
    "Bahasa negara adalah Bahasa Indonesia sebagaimana dinyatakan dalam UUD 1945 pasal 36.",
  ];
  return penjelasan[index % penjelasan.length];
}

let soalAktif = 0;
let jawabanUser = new Array(100).fill(null);
let raguRagu = new Array(100).fill(false);
let waktuTersisa = 5400; // 90 menit dalam detik
let intervalTimer;
let ujianSelesai = false;

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

// Render soal
function renderSoal() {
  if (ujianSelesai) return;

  document.getElementById("nomorSoalAktif").textContent = soalAktif + 1;
  document.getElementById(
    "teksSoal"
  ).innerHTML = `<p>${dataSoal[soalAktif].soal}</p>`;

  const container = document.getElementById("pilihanJawaban");
  container.innerHTML = "";

  const pilihanJawaban = [
    "Ketuhanan Yang Maha Esa",
    "Kemanusiaan yang adil dan beradab",
    "Persatuan Indonesia",
    "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan",
    "Keadilan sosial bagi seluruh rakyat Indonesia",
  ];

  dataSoal[soalAktif].pilihan.forEach((label, index) => {
    const div = document.createElement("div");
    div.className = "pilihan";
    if (jawabanUser[soalAktif] === index) {
      div.classList.add("selected");
    }

    div.innerHTML = `
            <input type="radio" name="jawaban" value="${index}" 
                   ${jawabanUser[soalAktif] === index ? "checked" : ""}
                   ${ujianSelesai ? "disabled" : ""}>
            <span class="label-pilihan">${label}.</span>
            <span>${pilihanJawaban[index]}</span>
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

  // Render ulang tampilan
  renderNavigasiSoal();
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
}

// Fungsi menghitung hasil
function hitungHasil() {
  let benar = 0;
  let salah = 0;
  let kosong = 0;
  const detailJawaban = [];

  for (let i = 0; i < 100; i++) {
    const jawabanUserSoal = jawabanUser[i];
    const kunci = dataSoal[i].kunciJawaban;
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
      penjelasan: dataSoal[i].penjelasan,
      soal: dataSoal[i].soal,
      pilihanJawaban: getPilihanJawaban(kunci),
    });
  }

  return {
    benar,
    salah,
    kosong,
    total: benar, // Skor sederhana: jumlah benar
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

// Tampilkan hasil
function tampilkanHasil() {
  if (!ujianSelesai) {
    alert("Ujian belum selesai! Silakan selesaikan ujian terlebih dahulu.");
    return;
  }

  const hasil = hitungHasil();

  // Update skor
  document.getElementById("skorBenar").textContent = hasil.benar;
  document.getElementById("skorSalah").textContent = hasil.salah;
  document.getElementById("skorKosong").textContent = hasil.kosong;
  document.getElementById("skorTotal").textContent = hasil.total;

  // Update tanggal
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

  // Update detail jawaban
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
            <td>${item.jawaban}</td>
            <td>${item.kunci}. ${item.pilihanJawaban}</td>
            <td class="${statusClass}">${statusText}</td>
        `;

    // Tambahkan event click untuk menampilkan penjelasan
    tr.style.cursor = "pointer";
    tr.title = "Klik untuk melihat penjelasan";
    tr.onclick = () => tampilkanPenjelasan(item);

    tbody.appendChild(tr);
  });

  // Tampilkan modal hasil
  document.getElementById("modalHasil").style.display = "flex";
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
    ).innerHTML = `<span class="status-salah">❌ Jawaban Anda Salah (Anda memilih: ${item.jawaban})</span>`;
  } else {
    document.getElementById("penjelasanStatus").innerHTML =
      '<span class="status-kosong">⚠️ Anda Tidak Menjawab</span>';
  }

  modalPenjelasan.style.display = "flex";
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
