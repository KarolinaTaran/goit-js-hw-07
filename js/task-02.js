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
const liElement = document.createElement("li");
ulElement.append(liElement);

images.forEach((el) => {
  const imgElement = document.createElement("img");
  liElement.classList.add("gallery-list");
  imgElement.classList.add("gallery-images");
  imgElement.src = el.url;
  imgElement.alt = el.alt;
  imgElement.style.width = "360px";
  imgElement.style.height = "300px";
  liElement.append(imgElement);
});
