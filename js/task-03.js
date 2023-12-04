const userName = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const handleInput = () => {
  const clearName = userName.value.trim();
  if (clearName.length) {
    nameOutput.textContent = clearName;
  } else {
    nameOutput.textContent = "Anonymous";
  }
};
userName.addEventListener("input", handleInput);
