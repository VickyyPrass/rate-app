console.clear();
let nomor = 1;

function ganti(angka) {
    nomor = angka;
    gantiGambar(angka);
}

function gantiGambar(angka) {
    let lokasiGambar = "img/" + angka + ".png";
    document.getElementById("gambar").src = lokasiGambar;
    return false;
}

const textTitle = document.querySelector(".title");
const getTitle = document.querySelectorAll("label.text-title");

for (let text of getTitle) {
    text.addEventListener("click", function (e) {
        textTitle.innerText = e.target.title;
    });
}
