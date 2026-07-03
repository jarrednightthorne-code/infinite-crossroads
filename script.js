/* The Infinite Crossroads — Schola Archive scripts */

function toggleLibraryMode() {
      const status = document.getElementById('libraryStatus');
      const active = document.body.classList.toggle('library-active');
      status.textContent = active
        ? 'Library Mode armed. Connect page-turn, rain, quill, or clockwork audio here.'
        : 'Silent. Add ambient audio later if desired.';
    }

function expandMap() {
  const map = document.querySelector(".atlas-map");

  if (!map.classList.contains("expanded")) {
    map.classList.add("expanded");
  } else {
    map.classList.remove("expanded");
  }
}
function closeMap(event) {
  // Only close if clicking the background, NOT the image
  if (event.target.id === "mapOverlay") {
    document.getElementById("mapOverlay").style.display = "none";
  }
}
