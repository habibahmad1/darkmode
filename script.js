const darkToggle = document.querySelector("#darkToggle");
const html = document.querySelector("html");

// Fungsi untuk mengatur mode gelap berdasarkan nilai yang disimpan di local storage
function aturMode() {
  const tema = localStorage.getItem("tema");
  if (tema === "dark") {
    html.classList.add("darkActive");
    darkToggle.checked = true;
  } else {
    html.classList.remove("darkActive");
    darkToggle.checked = false;
  }
}

// Panggil fungsi setDarkModeFromLocalStorage saat halaman dimuat
document.addEventListener("DOMContentLoaded", aturMode);

// Tambahkan event listener untuk perubahan status mode gelap
darkToggle.addEventListener("click", () => {
  if (darkToggle.checked) {
    html.classList.add("darkActive");
    localStorage.setItem("tema", "dark");
  } else {
    html.classList.remove("darkActive");
    localStorage.setItem("tema", "light");
  }
});
