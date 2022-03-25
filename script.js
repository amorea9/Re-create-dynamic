const url = "https://amorea.dk/WP/bike-stock/wp-json/wp/v2/bike?_embed";

fetch(url)
  .then((res) => res.json())
  .then((data) => handleProductList(data));

function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct);
}
function showProduct(product) {
  console.log(product);
  //grab template
  const template = document.querySelector("template").content;
  //clone it
  const myClone = template.cloneNode(true);
  //change data
  myClone.querySelector(".title").textContent = product.title.rendered;
  myClone.querySelector(".price_1").textContent = product.price;
  myClone.querySelector(".brand").textContent = product.categories[0];
  //select parent
  const parent = document.querySelector("main");
  //append child
  parent.appendChild(myClone);
}

// burger menu
const showNav = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".list_menu");
  const line1 = document.querySelector(".line1");
  const line2 = document.querySelector(".line2");
  const line3 = document.querySelector(".line3");

  burger.addEventListener("click", () => {
    nav.classList.toggle("list_menu_active");
    line1.classList.toggle("line1_active");
    line2.classList.toggle("line2_active");
    line3.classList.toggle("line3_active");
  });
};

showNav();
