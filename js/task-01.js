const categoriesList = document.querySelector("ul#categories");
const items = categoriesList.querySelectorAll(".item");
const count = items.length;
console.log(`Number of categories: ${count}`);

const someCategory = document.querySelectorAll(".item");
someCategory.forEach((category) => {
  const someEl = category.querySelectorAll(".list-form");
  const someCategory = category.querySelector(".heading");
  console.log(`Category: ${someCategory.innerText}`);
  console.log(`Elements: ${someEl.length}`);
});
