const open = document.getElementById("openCard");
const close = document.getElementById("closeCard");
const panel = document.getElementById("cardPanel");
const overlay = document.getElementById("overlay");

open.onclick = () => {
panel.classList.add("active");
overlay.classList.add("active");
};

close.onclick = shut;
overlay.onclick = shut;

function shut(){
panel.classList.remove("active");
overlay.classList.remove("active");
}
