const box = document.querySelector(".box");
window.addEventListener("click", function (e) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const randomX = Math.round(Math.random() * width);
  const randomY = Math.random(Math.random()) * height;
  box.style.left = `${randomX}px`;
  box.style.top = `${randomY}px`;
});
