window.addEventListener("DOMContentLoaded", init);

function init(event) {
  getData();
}
async function getData() {
  let result = await fetch(
    "https://amorea.dk/WP/bike-stock/wp-json/wp/v2/bike?_embed"
  );
  handleProductList(await result.json());
}
function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct);
}

function handleProductList(data) {
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
  myClone.querySelector(".price_1").textContent = "$" + product.price;

  if (product.secondary_price > 1) {
    myClone.querySelector(
      ".price_2"
    ).textContent = `- $ ${product.secondary_price}`;
  }
  myClone.querySelector(".inventory").textContent = product.in_stock;
  if (product.in_stock == 0) {
    myClone.querySelector(".inventory").textContent = "Out of stock";
  }
  myClone.querySelector(".brand").textContent =
    product._embedded["wp:term"][0][0].name;
  myClone.querySelector("img").src =
    product._embedded["wp:featuredmedia"][0].source_url;
  //   if (product._embedded["wp:term"][1][1].name === "white") {
  //     myClone.querySelector(".black").classList.remove("hidden");
  //   }
  if (product.id === 26) {
    myClone.querySelector(".black").classList.remove("hidden");
    myClone.querySelector(".white").classList.remove("hidden");
    myClone.querySelector(".red").classList.remove("hidden");
    myClone.querySelector(".blue").classList.remove("hidden");
    myClone.querySelector(".green").classList.remove("hidden");
  }
  if (product.id === 27) {
    myClone.querySelector(".black").classList.remove("hidden");
    myClone.querySelector(".white").classList.remove("hidden");
  }
  if (product.id === 25) {
    myClone.querySelector(".turquoise").classList.remove("hidden");
    myClone.querySelector(".white").classList.remove("hidden");
    myClone.querySelector(".darkred").classList.remove("hidden");
  }
  if (product.id === 17) {
    myClone.querySelector(".black").classList.remove("hidden");
    myClone.querySelector(".white").classList.remove("hidden");
    myClone.querySelector(".red").classList.remove("hidden");
    myClone.querySelector(".blue").classList.remove("hidden");
    myClone.querySelector(".green").classList.remove("hidden");
  }
  if (product.id === 16) {
    myClone.querySelector(".na").classList.remove("hidden");
  }
  if (product.id === 11) {
    myClone.querySelector(".na").classList.remove("hidden");
  }

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
