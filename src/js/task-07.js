const range = document.querySelector("#font-size-control");
const changeText = document.querySelector("#text");

range.addEventListener("input", (event) => {
  changeText.style.fontSize = range.value + "px";
});
