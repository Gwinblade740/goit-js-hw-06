function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector(".change-color");
const nameColor = document.querySelector(".color");
btn.addEventListener("click", changeColor);

function changeColor() {
  document.body.style.background = getRandomHexColor();
  nameColor.textContent = document.body.style.background;
}
