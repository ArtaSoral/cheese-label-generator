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
  fitLabel();
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
const labelEl = document.querySelector(".label");
const labelInnerEl = document.querySelector(".label .label-inner");

// Available classes map
const FONT_CLASS = {
  bodoni: "font-bodoni",
  garamond: "font-garamond",
  baskerville: "font-baskerville",
  times: "font-times" 
};

// Matching font-family stacks for showing fonts in the closed <select>
const FONT_STACK = {
  bodoni: '"Bodoni MT", "Bodoni 72", "Bodoni Moda", Didot, Georgia, serif',
  garamond: '"Garamond", "EB Garamond", Georgia, serif',
  baskerville: '"Baskerville Old Face", "Libre Baskerville", Baskerville, "Times New Roman", serif',
  times: '"Times New Roman", Times, serif'
};

// Restore saved font on load (default to 'garamond')
(function restoreFont() {
  const saved = localStorage.getItem("label_font") || "garamond";
  setFont(saved);
  if (fontSelect) {
    fontSelect.value = saved;
    setSelectFontAppearance(saved);
  }
  fitLabel();
})();

function setFont(key) {
  if (!labelEl) return;
  Object.values(FONT_CLASS).forEach(cls => labelEl.classList.remove(cls));
  labelEl.classList.add(FONT_CLASS[key] || FONT_CLASS.garamond);
   try { localStorage.setItem("label_font", key); } catch {}
   fitLabel();
}


function setSelectFontAppearance(key) {
  if (!fontSelect) return;
  fontSelect.style.fontFamily = FONT_STACK[key] || FONT_STACK.garamond;
  fontSelect.style.fontSize = '0.9rem'
}



// Handle user changes
fontSelect?.addEventListener("change", (e) => {
  const key = e.target.value;
  setFont(key);
  setSelectFontAppearance(key);
});

/* =========================
   FIT LABEL CONTENT
   ========================= */
function fitLabel() {
  const label = document.querySelector('.label');
  const inner = document.querySelector('.label .label-inner');
  if (!label || !inner) return;

  // reset transform; do not alter padding (to keep border box fixed)
  inner.style.transform = 'scale(1)';

  const cs = getComputedStyle(label);
  const paddingLeft = parseFloat(cs.paddingLeft) || 0;
  const paddingRight = parseFloat(cs.paddingRight) || 0;
  const paddingTop = parseFloat(cs.paddingTop) || 0;
  const paddingBottom = parseFloat(cs.paddingBottom) || 0;

  const availableWidth = label.clientWidth - paddingLeft - paddingRight;
  const availableHeight = label.clientHeight - paddingTop - paddingBottom;

  const contentWidth = inner.scrollWidth;
  let contentHeight = inner.scrollHeight;
  const lastChild = inner.lastElementChild;
  if (lastChild) {
    const mb = parseFloat(getComputedStyle(lastChild).marginBottom) || 0;
    contentHeight += mb;
  }

  const scaleW = availableWidth / contentWidth;
  const scaleH = availableHeight / contentHeight;
  let scale = Math.min(scaleW, scaleH, 1);
  if (scale < 1) {
    scale = Math.max(0.5, scale * 0.99);
  }
  inner.style.transform = `scale(${scale})`;
}

window.addEventListener('resize', () => {
  fitLabel();
});

// Re-fit when fonts finish loading (to capture metric changes)
try {
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      fitLabel();
    });
  }
} catch {}

// Observe content size changes inside the label to re-fit proactively
if (window.ResizeObserver && labelInnerEl) {
  const ro = new ResizeObserver(() => {
    fitLabel();
  });
  try { ro.observe(labelInnerEl); } catch {}
}
