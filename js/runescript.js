document.addEventListener("DOMContentLoaded", function () {

    const openBtn = document.getElementById("openCard");
    const closeBtn = document.getElementById("closeCard");
    const panel = document.getElementById("cardPanel");
    const overlay = document.getElementById("overlay");

    if (!openBtn || !panel || !overlay) {
        console.log("JS ERROR: Elements not found");
        return;
    }

    openBtn.addEventListener("click", function () {
        panel.classList.add("active");
        overlay.classList.add("active");
    });

    function closePanel() {
        panel.classList.remove("active");
        overlay.classList.remove("active");
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", closePanel);
    }

    overlay.addEventListener("click", closePanel);

});
