const userName = document.querySelector("#name-input");
console.log(document.querySelector("#name-input").length);
const nameOutput = document.querySelector("#name-output");
const handleInput = () => {
  const clearName = userName.value.trim();
  console.log(clearName);
  if (clearName.length) {
    nameOutput.textContent = clearName;
    console.log(clearName);
  } else {
    nameOutput.textContent = "Anonymous";
    console.log(1);
  }
};
userName.addEventListener("input", handleInput);
