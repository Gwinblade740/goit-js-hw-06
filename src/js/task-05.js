const input = document.querySelector("#name-input");
const result = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  result.textContent = event.currentTarget.value;
  if (result.textContent.length === 0) {
    result.textContent = "Anonymous";
  }
});
