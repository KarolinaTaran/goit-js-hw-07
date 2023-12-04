function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector(".btn-create");
const destroyButton = document.querySelector(".btn-destroy");
const numberInput = document.querySelector(".input-number");
const boxes = document.getElementById("boxes");

createButton.addEventListener("click", () => {
  destroyBoxes();
  const amount = Number(numberInput.value);
  if (amount > 0 && amount <= 100) {
    for (let i = 1; i <= amount; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundColor = getRandomHexColor();
      const size = i * 10 + 30 + "px";
      box.style.width = box.style.height = size;
      boxes.append(box);
    }
    numberInput.value = "";
    return console.log(boxes);
  }
});

destroyButton.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
}
