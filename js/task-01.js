const items = document.querySelectorAll("#categories > .item");
const count = items.length;
console.log(`Number of categories: ${count}`);

const categories = document.querySelectorAll(".item");
categories.forEach((category) => {
  const someEl = category.querySelectorAll(".item li");
  const categoryHeading = category.querySelector("h2");
  console.log(`Category: ${categoryHeading.innerText}`);
  console.log(`Elements: ${someEl.length}`);
});
