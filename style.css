/* ========== FONT CONTROL ==========
   We drive the entire page font with a CSS variable (--ff).
   JS updates --ff based on the dropdown selection.
*/
:root{
  --ff: "Bodoni MT", "Bodoni 72", "Bodoni Moda", Didot, Georgia, serif; /* default */
}

/* Base */
body {
  font-family: var(--ff); /* <— uses the variable */
  margin: 20px;
  text-align: center;
  color: #111;
}

/* Form */
.form-container {
  margin: 0 auto 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: .6rem .8rem;
  max-width: 980px;
}
label {
  display: grid;
  gap: .25rem;
  text-align: left;
  font-weight: 600;
}
input, select {
  width: 100%;
  padding: .45rem .55rem;
  border: 1px solid #bbb;
  border-radius: 6px;
  font: inherit; /* inherits the chosen font */
}

/* Preview */
.preview-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

/* Label card */
.label {
  /* Double-line border */
  border: 2px solid #000;
  padding: 20px;
  width: 400px;
  text-align: center;
  position: relative;
  background: #fff;
}
.label::after {
  content: "";
  position: absolute;
  inset: 8px;             /* gap between lines */
  border: 1px solid #000; /* inner line */
  pointer-events: none;
}

.label h2 {
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 .3rem;
}

.subtitle {
  font-style: italic;
  font-size: 1.05rem;
  margin: 0 0 .6rem;
}

/* Leafy ornament */
.ornament {
  width: 85%;
  margin: .3rem auto .9rem;
  color: #777; /* svg uses currentColor */
}
.ornament svg {
  width: 100%;
  height: 22px;
  display: block;
}

/* Pairings */
.pairings {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 2rem;
  align-items: start;
  margin-top: .2rem;
}
.pairings::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 45%;
  width: 1px;
  background: #111;
  opacity: .85;
  transform: translateX(-0.5px);
}
.pairings > div:first-child { text-align: left; }
.pairings > div:last-child  { text-align: right; }

.pair {
  font-weight: 700;
  margin: 0;
  font-size: 1.15rem;
}
.wine {
  font-style: italic;
  font-size: 0.95rem;
  margin: .15rem 0 0;
}

.bottom-pair {
  margin-top: .4rem;
  text-align: center;
}

/* Print */
@media print {
  @page { margin: 0.25in; }
  body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .form-container, h1 { display: none; }
}
