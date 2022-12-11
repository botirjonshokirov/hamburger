let products = document.querySelector(".products");
let form = document.querySelector("form");
let btns = document.querySelector(".btns");

let cheeseBtn = document.querySelector("#btn-cheese");
let cheeseProduct = document.querySelector(".cheeseProduct");
cheeseBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let cheese = `<div class="cheese">
  <img src="./burger-layers/cheese.svg" alt="" />
</div>`;

  cheeseProduct.innerHTML += cheese;

  finalPrice += 2;
  document.querySelector("#final-price").textContent = `Total : $${finalPrice}`;
});

cheeseProduct.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.remove();

  finalPrice -= 2;
  document.querySelector("#final-price").textContent = `Total : $${finalPrice}`;
});
let meatBtn = document.querySelector("#btn-meat");
let meatProduct = document.querySelector(".meatProduct");
meatBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let meat = `<div class="meat">
  <img src="./burger-layers/meat.svg" alt="" />
</div>`;

  meatProduct.innerHTML += meat;

  finalPrice += 5;
  document.querySelector("#final-price").textContent = `Total : $${finalPrice}`;
});

meatProduct.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.remove();

  finalPrice -= 5;
  document.querySelector("#final-price").textContent = `Total : $${finalPrice}`;
});
let onionBtn = document.querySelector("#btn-onion");
let onionProduct = document.querySelector(".onionProduct");
onionBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let onion = `<div class="onion">
  <img src="./burger-layers/onion.svg" alt="" />
</div>`;

  onionProduct.innerHTML += onion;

  finalPrice += 1;
  document.querySelector("#final-price").textContent = `Total : $${finalPrice}`;
});

onionProduct.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.remove();

  finalPrice -= 1;
  document.querySelector("#final-price").textContent = `Total : $${finalPrice}`;
});
let saladBtn = document.querySelector("#btn-salad");
let saladProduct = document.querySelector(".saladProduct");
saladBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let salad = `<div class="salad">
  <img src="./burger-layers/salad.svg" alt="" />
</div>`;

  saladProduct.innerHTML += salad;

  finalPrice += 1;
  document.querySelector("#final-price").textContent = `Total : $${finalPrice}`;
});

saladProduct.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.remove();

  finalPrice -= 1;
  document.querySelector("#final-price").textContent = `Total : $${finalPrice}`;
});
let tomatoBtn = document.querySelector("#btn-tomato");
let tomatoProduct = document.querySelector(".tomatoProduct");
tomatoBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let tomato = `<div class="tomato">
  <img src="./burger-layers/tomato.svg" alt="" />
</div>`;

  tomatoProduct.innerHTML += tomato;

  finalPrice += 2;
  document.querySelector("#final-price").textContent = `Total : $${finalPrice}`;
});

tomatoProduct.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.remove();
  finalPrice -= 2;
  document.querySelector("#final-price").textContent = `Total : $${finalPrice}`;
});
let pickleBtn = document.querySelector("#btn-pickle");
let pickleProduct = document.querySelector(".pickleProduct");
pickleBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let pickle = `<div class="pickle">
  <img src="./burger-layers/pickle.svg" alt="" />
</div>`;

  pickleProduct.innerHTML += pickle;

  finalPrice += 3;
  document.querySelector("#final-price").textContent = `Total : $${finalPrice}`;
});

pickleProduct.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.remove();

  finalPrice -= 3;
  document.querySelector("#final-price").textContent = `Total : $${finalPrice}`;
});

let finalPrice = document.querySelector("#final-price");
finalPrice = 2;
document.querySelector("#final-price").textContent = `Total : $${finalPrice}`;
