const menuBtn = document.getElementById("menuBtn");
const popup = document.getElementById("popupMenu");
const overlay = document.getElementById("overlay");

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
const tabs = document.querySelector(".tabMarker");
const moonButton = document.getElementById("menuBtn");

if (tabs) {
    const observer = new IntersectionObserver(
        (entries) => {

            const entry = entries[0];
            console.log("Intersect:", entry.intersecting); // Debugging log

            if (entry.isIntersecting) {
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
}