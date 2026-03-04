const menuBtn = document.getElementById("menuBtn");
const popup = document.getElementById("menuPopup");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
    popup.classList.toggle("show");
    overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
    popup.classList.remove("show");
    overlay.classList.remove("show");
});