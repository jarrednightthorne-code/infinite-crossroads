// The Infinite Crossroads — Schola Archive
// GitHub Pages script.

function toggleLibraryMode() {
  const status = document.getElementById('libraryStatus');
  const active = document.body.classList.toggle('library-active');

  if (!status) return;

  status.textContent = active
    ? 'Library Mode armed. Connect page-turn, rain, quill, or clockwork audio here.'
    : 'Silent. Add ambient audio later if desired.';
}

document.addEventListener('DOMContentLoaded', () => {
  const libraryToggle = document.getElementById('libraryModeToggle');

  if (libraryToggle) {
    libraryToggle.addEventListener('click', toggleLibraryMode);
  }
});
