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
  const amount = parseInt(numberInput.value);
  if (amount > 0 && amount < 100) {
    for (let i = 1; i <= amount; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundColor = getRandomHexColor();
      boxes.appendChild(box);
      numberInput.value = "";

      const boxesAmount = boxes.querySelectorAll(".box");
      box.style.width = box.style.height = boxesAmount.length * 10 + 30 + "px";
      console.log(boxesAmount);
    }

    return console.log(boxes);
  }
});

destroyButton.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
}
