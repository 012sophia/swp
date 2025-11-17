const box = document.getElementById("box");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// Start Drag
box.addEventListener("mousedown", (e) => {
  isDragging = true;
  // Abstand zwischen Maus und linkem oberen Rand der Box merken
  offsetX = e.clientX - box.offsetLeft;
  offsetY = e.clientY - box.offsetTop;
});

// Ziehen
document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  box.style.left = e.clientX - offsetX + "px";
  box.style.top = e.clientY - offsetY + "px";
});

// Stop Drag
document.addEventListener("mouseup", () => {
  isDragging = false;
});
