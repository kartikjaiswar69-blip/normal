const cat = document.getElementById("cat");

let isDragging = false;
let offsetX, offsetY;
let lastX = 0; // track last position for direction

// 🖱️ Mouse Events
cat.addEventListener("mousedown", (e) => {
  isDragging = true;
  cat.classList.add("fly");
  offsetX = e.clientX - cat.offsetLeft;
  offsetY = e.clientY - cat.offsetTop;
  lastX = e.clientX; // initial position
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    cat.style.left = e.clientX - offsetX + "px";
    cat.style.top = e.clientY - offsetY + "px";

    // check direction
    if (e.clientX > lastX) {
      cat.style.transform = "scaleX(1)"; // face right
    } else if (e.clientX < lastX) {
      cat.style.transform = "scaleX(-1)"; // face left
    }
    lastX = e.clientX;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  cat.classList.remove("fly");
});

// 📱 Touch Events
cat.addEventListener("touchstart", (e) => {
  isDragging = true;
  cat.classList.add("fly");
  let touch = e.touches[0];
  offsetX = touch.clientX - cat.offsetLeft;
  offsetY = touch.clientY - cat.offsetTop;
  lastX = touch.clientX;
});

document.addEventListener("touchmove", (e) => {
  if (isDragging) {
    let touch = e.touches[0];
    cat.style.left = touch.clientX - offsetX + "px";
    cat.style.top = touch.clientY - offsetY + "px";

    // check direction
    if (touch.clientX > lastX) {
      cat.style.transform = "scaleX(1)";
    } else if (touch.clientX < lastX) {
      cat.style.transform = "scaleX(-1)";
    }
    lastX = touch.clientX;
  }
});

document.addEventListener("touchend", () => {
  isDragging = false;
  cat.classList.remove("fly");
});
