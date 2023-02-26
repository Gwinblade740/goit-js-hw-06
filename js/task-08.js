const formList = document.querySelector(".login-form");
console.log(formList);

formList.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Будь-ласка введіть дані!");
  } else {
    const emailName = email.name;
    const passwordName = password.name;
    const obj = {
      [emailName]: email.value,
      [passwordName]: password.value,
    };
    event.currentTarget.reset();
    return console.log(obj);
  }
}
