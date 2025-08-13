/* =========================
   GLOBAL / TYPOGRAPHY
   ========================= */

/* [FONT CHANGE] Prefer Bodoni MT; fall back to Bodoni Moda (web), then generic serifs */
body {
    font-family: "Bodoni MT", "Bodoni Moda", "Didot", "Bodoni 72", Georgia, serif;
    margin: 20px;
    text-align: center;
    color: #111;
}

/* Form layout (unchanged structurally; minor polish) */
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
input {
    width: 100%;
    padding: .45rem .55rem;
    border: 1px solid #bbb;
    border-radius: 6px;
    font: inherit;
}

.preview-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

/* =========================
   LABEL CARD
   ========================= */
.label {
    /* [BORDER CHANGE] Outer border */
    border: 2px solid #000;
    padding: 20px;
    width: 400px;
    text-align: center;
    position: relative; /* required for the inner border pseudo-element */
    background: #fff;
}

/* [BORDER CHANGE] Inner border to create a clean double-line frame */
.label::after {
    content: "";
    position: absolute;
    inset: 8px;            /* controls spacing between outer & inner lines */
    border: 1px solid #000;
    pointer-events: none;
}

/* Headings and text sizing tuned for Bodoni look */
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

/* =========================
   ORNAMENT DIVIDER
   ========================= */

/* [ORNAMENT CHANGE] Style for the leafy ornament block (replaces .decor-line) */
.ornament {
    width: 85%;
    margin: .3rem auto .9rem;
    color: #777;         /* svg uses currentColor */
}
.ornament svg {
    width: 100%;
    height: 22px;
    display: block;
}

/* =========================
   PAIRINGS LAYOUT
   ========================= */
.pairings {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 2rem;
    align-items: start;
    margin-top: .2rem;
}

/* Vertical divider between top pairings (matches your mockup) */
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

/* =========================
   PRINT
   ========================= */
@media print {
    @page { margin: 0.25in; }
    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .form-container, h1 { display: none; }
}

