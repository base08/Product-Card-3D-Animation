const card = document.querySelector(".card");
const container = document.querySelector(".container");

const visuals = document.querySelector(".visuals");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
const colors = document.querySelector(".colors");
const cta = document.querySelector(".cta");

const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const purple = document.querySelector("#purple");
const yellow = document.querySelector("#yellow");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
  card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = "translateZ(150px)";
  description.style.transform = "translateZ(100px)";
  colors.style.transform = "translateZ(80px)";
  cta.style.transform = "translateZ(50px)";
  visuals.style.transform = `translateZ(200px) rotateZ(-45deg)`;
});

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  colors.style.transform = "translateZ(0px)";
  cta.style.transform = "translateZ(0px)";
  visuals.style.transform = "translateZ(0px)";
});

const removeSelected = () => {
  red.classList.remove("selected");
  blue.classList.remove("selected");
  purple.classList.remove("selected");
  green.classList.remove("selected");
};

red.addEventListener("click", (e) => {
  removeSelected();
  red.classList.toggle("selected");
  visuals.style.filter = "hue-rotate(0deg)";
});

blue.addEventListener("click", (e) => {
  removeSelected();
  blue.classList.toggle("selected");
  visuals.style.filter = "hue-rotate(200deg)";
});

purple.addEventListener("click", (e) => {
  removeSelected();
  purple.classList.toggle("selected");
  visuals.style.filter = "hue-rotate(300deg)";
});

green.addEventListener("click", (e) => {
  removeSelected();
  green.classList.toggle("selected");
  visuals.style.filter = "hue-rotate(90deg)";
});
