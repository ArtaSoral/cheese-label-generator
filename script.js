/* =========================
   LIVE PREVIEW (unchanged behavior)
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

document.getElementById("printBtn").addEventListener("click", () => {
  window.print();
});

// Initialize preview
updatePreview();

/* =========================
   FONT DROPDOWN LOGIC
   ========================= */
/* [FONT UI HOOK] Switch body class to apply font stacks (see style.css). We also persist choice. */
const fontSelect = document.getElementById("fontSelect");
//const bodyEl = document.body;
const labelEl = document.querySelector(".label");

// Available classes map
const FONT_CLASS = {
  bodoni: "font-bodoni",
  garamond: "font-garamond",
  baskerville: "font-baskerville",
  times: "font-times" 
};

// Restore saved font on load (default to 'bodoni')
(function restoreFont() {
  const saved = localStorage.getItem("label_font") || "bodoni";
  setFont(saved);
  if (fontSelect) fontSelect.value = saved;
})();

function setFont(key) {
  if (!labelEl) return;
  Object.values(FONT_CLASS).forEach(cls => labelEl.classList.remove(cls));
  labelEl.classList.add(FONT_CLASS[key] || FONT_CLASS.bodoni);
   try { localStorage.setItem("label_font", key); } catch {}
}
   /*
function setFont(key) {
  // remove any previously applied font class
  Object.values(FONT_CLASS).forEach(cls => bodyEl.classList.remove(cls));
  // add the requested one
  bodyEl.classList.add(FONT_CLASS[key] || FONT_CLASS.bodoni);
  // persist
  try { localStorage.setItem("label_font", key); } catch {}
}
*/


// Handle user changes
fontSelect?.addEventListener("change", (e) => {
  setFont(e.target.value);
});
