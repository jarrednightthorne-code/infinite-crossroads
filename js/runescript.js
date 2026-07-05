document.addEventListener("DOMContentLoaded", function () {

    const openBtn = document.getElementById("openCard");
    const closeBtn = document.getElementById("closeCard");
    const panel = document.getElementById("cardPanel");
    const overlay = document.getElementById("overlay");

    if (openBtn) {
        openBtn.addEventListener("click", function () {
            panel.classList.add("active");
            overlay.classList.add("active");
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            panel.classList.remove("active");
            overlay.classList.remove("active");
        });
    }

    if (overlay) {
        overlay.addEventListener("click", function () {
            panel.classList.remove("active");
            overlay.classList.remove("active");
        });
    }

});
