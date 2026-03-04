const menuBtn = document.getElementById("menuBtn");
const popup = document.getElementById("popupMenu");
const overlay = document.getElementById("overlay");

const tabs = document.querySelectorAll(".Menu-List a");
const moonButton = document.getElementById("menuBtn");

// Show the moon button after a short delay


menuBtn.addEventListener("click", () => {
    popup.classList.toggle("show");
    overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
    popup.classList.remove("show");
    overlay.classList.remove("show");
});
