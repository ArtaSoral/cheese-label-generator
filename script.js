/* =========================
   Live preview (unchanged)
   ========================= */
function updatePreview() {
  document.getElementById("previewTitle").textContent = document.getElementById("title").value;
  document.getElementById("previewSubtitle").textContent = document.getElementById("subtitle").value;

  document.getElementById("previewLeftPair").textContent = document.getElementById("leftPair").value;
  document.getElementById("previewLeftWine").textContent = document.getElementById("leftWine").value;

  document.getElementById("previewRightPair").textContent = document.getElementById("rightPair").value;
  document.getElementById("previewRightWine").textContent = document.getElementById("rightWine").value;

  document.getElementById("previewBottomPair").textContent = document.getElementById("bottomPair").value;
  document.getElementById("previewBottomWine").textContent = document.getElementById("bottomWine").value;
}

document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", updatePreview);
});
document.getElementById("printBtn").addEventListener("click", () => window.print());
updatePreview();

/* =========================
   Font dropdown logic
   Uses a CSS variable (--ff) so changes apply instantly everywhere.
   ========================= */
const fontSelect = document.getElementById("fontSelect");

// Map dropdown values to complete font stacks.
// First is the local target (if installed), followed by a visually close web fallback.
const FONT_STACKS = {
  bodoni: `"Bodoni MT", "Bodoni 72", "Bodoni Moda", Didot, Georgia, serif`,
  garamond: `"Garamond", "EB Garamond", Georgia, serif`,
  baskerville: `"Baskerville Old Face", "Libre Baskerville", Baskerville, "Times New Roman", serif`,
};

// Apply font by updating :root variable
function applyFont(key) {
  const stack = FONT_STACKS[key] || FONT_STACKS.bodoni;
  document.documentElement.style.setProperty("--ff", stack);
  try { localStorage.setItem("label_font", key); } catch {}
}

// Restore saved choice on load
(function initFont() {
  const saved = localStorage.getItem("label_font") || "bodoni";
  if (fontSelect) fontSelect.value = saved;
  applyFont(saved);
})();

// Handle changes
fontSelect?.addEventListener("change", (e) => applyFont(e.target.value));
