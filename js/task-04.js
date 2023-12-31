const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputs = form.elements;
  const formData = {};
  let isFormValid = true;
  for (let i = 0; i < inputs.length; i++) {
    if (
      inputs[i].nodeName === "INPUT" &&
      (inputs[i].type === "email" || inputs[i].type === "password")
    ) {
      let value = inputs[i].value.trim();
      if (!value.length) {
        isFormValid = false;
        break;
      } else {
        let key = inputs[i].name;
        formData[key] = value;
      }
    }
  }
  if (isFormValid) {
    console.log(formData);
    form.reset();
  } else {
    alert(`All form fields must be filled in`);
  }
});
