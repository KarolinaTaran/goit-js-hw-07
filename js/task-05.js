function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector(".change-color");
const bodyElement = document.querySelector("body");
const spanElement = document.querySelector(".color");
button.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyElement.style.backgroundColor = randomColor;
  spanElement.textContent = randomColor;
});
