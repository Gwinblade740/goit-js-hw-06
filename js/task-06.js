const text = document.querySelector("#validation-input");

text.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === Number(text.dataset.length)) {
    text.classList.remove("invalid");
    text.classList.add("valid");
  } else {
    text.classList.remove("valid");
    text.classList.add("invalid");
  }
});
