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
