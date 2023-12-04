const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulElement = document.querySelector(".gallery");
const fragment = document.createDocumentFragment();
images.forEach((el) => {
  const liElement = document.createElement("li");
  liElement.classList.add("gallery-item");

  const imgElement = document.createElement("img");
  imgElement.classList.add("gallery-img");
  imgElement.src = el.url;
  imgElement.alt = el.alt;
  imgElement.style.width = "360px";
  imgElement.style.height = "300px";

  liElement.append(imgElement);
  fragment.append(liElement);
});
ulElement.append(fragment);
