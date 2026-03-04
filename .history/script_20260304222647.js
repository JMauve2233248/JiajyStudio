const menuBtn = document.getElementById("menuBtn");
const popup = document.getElementById("popupMenu");
const overlay = document.getElementById("overlay");

const tabs = document.querySelectorAll(".tabs");
const moonButton = document.getElementById("menuBtn");

//Menu Popup layout
menuBtn.addEventListener("click", () => {
    popup.classList.toggle("show");
    overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
    popup.classList.remove("show");
    overlay.classList.remove("show");
});

//moon button condition
const observer = new IntersectionObserver(
    (entries) => {
        //if tabs "show" -> hide the moon
        //if tabs "hide" -> show the moon
        if (entries[0].isIntersecting) {
            moonButton.classList.remove("show");
            moonButton.classList.add("hidden");
        } else {
            moonButton.classList.remove("hidden");
            moonButton.classList.add("show");
        }
    },
    { threshold: 0.1 } //if there is 10% of the first tab is visible, then it is considered "showing"
);
observer.observe(tabs);