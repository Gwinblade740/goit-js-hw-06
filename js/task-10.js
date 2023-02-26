const divBoxes = document.querySelector("#boxes");
const addElements = document.querySelector(`[data-create]`);
const deleteElements = document.querySelector(`[data-destroy]`);
const input = document.querySelector("#controls > input");

addElements.addEventListener("click", onBtnAddElements);
deleteElements.addEventListener("click", onBtnDeleteElements);

function onBtnAddElements(event) {
  divBoxes.append(...createBoxes(input.value));
}
function onBtnDeleteElements(event) {
  divBoxes.innerHTML = "";
}
function createBoxes(amount) {
  let width = 20;
  let height = 20;
  const mas = [];
  for (let i = 0; i < amount; i += 1) {
    width += 10;
    height += 10;
    const divElement = document.createElement("div");
    divElement.style.background = getRandomHexColor();
    divElement.style.height = height + "px";
    divElement.style.width = width + "px";
    mas.push(divElement);
  }
  return mas;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
