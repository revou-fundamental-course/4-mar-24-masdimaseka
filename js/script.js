const resaultFromPlace = document.getElementById("resault-form"); // mendapatkan element html
function resaultForm(resaultBMI) {
  // fungsi untuk menampilkan hasil pada form
  let resaultBMIDesc = "";

  if (resaultBMI < 18.5) {
    // melakukan pengkondisian untuk menampilkan deskripsi sesuai dengan nilai BMI
    resaultBMIDesc = "Anda kekurangan berat badan";
  } else if (resaultBMI >= 18.5 && resaultBMI <= 24.9) {
    resaultBMIDesc = "Anda memiliki berat badan ideal";
  } else if (resaultBMI >= 25.0 && resaultBMI <= 29.9) {
    resaultBMIDesc = "Anda kelebihan berat badan";
  } else if (resaultBMI >= 30.0) {
    resaultBMIDesc = "Anda mengalami kegemukan(obesitas)";
  } else {
    resaultBMIDesc = "Tidak masuk dalam kategori";
  }

  // memasaukan tag html pada element html yang sudah di dapatkan sebelumnya
  resaultFromPlace.innerHTML = `<h3 class="form-tittle">Berat Badan Lebih</h3>
            <h1 class="resault-title">${resaultBMI}</h1>
            <p>${resaultBMIDesc}</p>`;
}

const resaultTablePlace = document.getElementById("resault-table"); // mendapatkan element html
function resaultTable(manGendre, bbInput, usiaInput, tbInput) {
  // fungsi untuk menampilkan rincian table
  let gendre = manGendre ? "Laki-laki" : "Perempuan"; // menetapkan gendre berdasarkan input yang dipilih

  // memasaukan tag html pada element html yang sudah di dapatkan sebelumnya
  resaultTablePlace.innerHTML = `<tr>
                <td><p class="form-tittle">Jenis Kelamin</p></td>
                <td class="table-jk"><p>${gendre}</p></td>
              </tr>
              <tr>
                <td><p class="form-tittle">Berat Badan</p></td>
                <td class="table-bb"><p>${bbInput} kg</p></td>
              </tr>
              <tr>
                <td><p class="form-tittle">Umur</p></td>
                <td class="table-umur"><p>${usiaInput} tahun</p></td>
              </tr>
              <tr>
                <td><p class="form-tittle">Tinggi Badan</p></td>
                <td class="table-tb"><p>${tbInput} cm</p></td>
              </tr>`;
}

const resaultDescPlace = document.getElementById("resault-desc"); // mendapatkan element html
function resaultDesc(resaultBMI) {
  // fungsi untuk menampilkan deskripsi resault berdasarkan hasil nilai resault
  let resaultBMIDescCategory = "";
  let resaultBMIDescSolution1 = "";
  let resaultBMIDescSolution2 = "";

  // melakukan pengkondisian untuk menampilkan deskripsi sesuai dengan nilai BMI
  if (resaultBMI < 18.5) {
    resaultBMIDescCategory = "Anda kekurangan berat badan";
    resaultBMIDescSolution1 =
      "Cara terbaik untuk manaikan berat badan adalah dengan meningkatkan kalori makanan yang dikonsumsi dan berolahraga.";
    resaultBMIDescSolution2 =
      "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal.";
  } else if (resaultBMI >= 18.5 && resaultBMI <= 24.9) {
    resaultBMIDescCategory = "Anda memiliki berat badan ideal";
    resaultBMIDescSolution1 =
      "Cara terbaik untuk mengatur berat badan agar tetap ideal adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.";
    resaultBMIDescSolution2 =
      "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk tetap menjaga berat badan pada batas normal.";
  } else if (resaultBMI >= 25.0 && resaultBMI <= 29.9) {
    resaultBMIDescCategory = "Anda kelebihan berat badan";
    resaultBMIDescSolution1 =
      "Cara terbaik untuk menurunkan berat badan adalah dengan mengurangi kalori makanan yang dikonsumsi dan berolahraga.";
    resaultBMIDescSolution2 =
      "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
  } else if (resaultBMI >= 30.0) {
    resaultBMIDescCategory = "Anda mengalami kegemukan(obesitas)";
    resaultBMIDescSolution1 =
      "Cara terbaik untuk menurunkan berat badan adalah dengan mengurangi kalori makanan yang dikonsumsi dan berolahraga.";
    resaultBMIDescSolution2 =
      "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
  } else {
    resaultBMIDescCategory = "Tidak masuk dalam kategori";
    resaultBMIDescSolution1 = "Tidak masuk dalam kategori";
    resaultBMIDescSolution2 = "Tidak masuk dalam kategori";
  }

  // memasaukan tag html pada element html yang sudah di dapatkan sebelumnya
  resaultDescPlace.innerHTML = `<p>Hasil BMI diantara ${
    Math.floor(resaultBMI) - 1
  } dan ${Math.floor(resaultBMI) + 1}</p>
              <p>
                ${resaultBMIDescCategory}
              </p>
              <p>
                ${resaultBMIDescSolution1}
              </p>
              <p>
                ${resaultBMIDescSolution2}
              </p>`;
}

function calculateBMI(bbInput, tbInput) {
  // fungsi untuk menghitung BMI
  const resault = bbInput / ((tbInput / 100) * (tbInput / 100));
  return resault.toFixed(1); // melakukan pembulatan hanya ada 1 angka setelah koma
}

function submitForm() {
  // fungsi ketika button Hitung BMI ditekan

  // mendapatkan value dari input-input yang ada
  const manGendre = document.getElementById("man-gendre").checked;
  const womanGendre = document.getElementById("woman-gendre").checked;
  const bbInput = document.getElementById("bb-input").value;
  const usiaInput = document.getElementById("usia-input").value;
  const tbInput = document.getElementById("tb-input").value;

  // melakukan validasi apakah input sudah terisi atau tidak
  if (
    (manGendre == true || womanGendre == true) &&
    bbInput.toString() != "" &&
    usiaInput.toString() != "" &&
    tbInput.toString() != ""
  ) {
    const resaultBMI = calculateBMI(bbInput, tbInput); // menyimpan hasil BMI
    resaultForm(resaultBMI); // menjalankan fungsi  menampilkan resault form
    resaultTable(manGendre, bbInput, usiaInput, tbInput); // menjalankan fungsi menampilkan resault table
    resaultDesc(resaultBMI); // menjalankan fungsi menampilkan resault description
  } else {
    alert("Pastikan Semua Form Sudah Terisi!"); // apabil input tidak sesuai maka akan tampil alert
  }
}

function resetForm() {
  // fungsi yang dijalankan ketika button reset ditekan

  // mereset input-input dan juga element html yang sudah di gunakan sebelumnya
  document.getElementById("man-gendre").checked = false;
  document.getElementById("woman-gendre").checked = false;
  document.getElementById("bb-input").value = "";
  document.getElementById("usia-input").value = "";
  document.getElementById("tb-input").value = "";
  resaultFromPlace.innerHTML = `<h3 class="form-tittle">Berat Badan Lebih</h3>`;
  resaultTablePlace.innerHTML = `<tr>
                <td><p class="form-tittle">Jenis Kelamin</p></td>
                <td class="table-jk"><p>...</p></td>
              </tr>
              <tr>
                <td><p class="form-tittle">Berat Badan</p></td>
                <td class="table-bb"><p>... kg</p></td>
              </tr>
              <tr>
                <td><p class="form-tittle">Umur</p></td>
                <td class="table-umur"><p>... tahun</p></td>
              </tr>
              <tr>
                <td><p class="form-tittle">Tinggi Badan</p></td>
                <td class="table-tb"><p>... cm</p></td>
              </tr>`;
  resaultDescPlace.innerHTML = ``;
}
