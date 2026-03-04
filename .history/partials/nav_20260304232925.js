async function loadNav(){
    const mount = document.getElementById("navMount");
    const res = await fetch("partials/nav.html");
    mount.innerHTML = await res.text();

    // ✅ พอ nav มาแล้ว ค่อยเริ่ม JS ของปุ่ม/observer
    if (typeof initNavFeatures === "function") {
        initNavFeatures();
    }
}

loadNav();