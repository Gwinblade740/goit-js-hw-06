let counterValue = 0;
const result = document.querySelector("#value");
const incrListener = document.querySelector('[data-action="increment"]');
const decrListener = document.querySelector('[data-action="decrement"]');

incrListener.addEventListener("click", () => {
  counterValue++;
  result.textContent = counterValue;
});
decrListener.addEventListener("click", () => {
  counterValue--;
  result.textContent = counterValue;
});
