const container = document.querySelector(".container");
container.style.background = "linear-gradient(to right, purple, blue)"
const navbar = document.createElement("div");

navbar.classList.add("navbar");

container.appendChild(navbar);

const menuList = document.createElement("ul");
navbar.appendChild(menuList);

const home = document.createElement("li");
home.innerText = "Home";

const services = document.createElement("li");
services.innerText = "Services";

const product = document.createElement("li");
product.innerText = "Product";

const contactUs = document.createElement("li");
contactUs.innerText = "Contact Us";

menuList.appendChild(home);
menuList.appendChild(services);
menuList.appendChild(product);
menuList.appendChild(contactUs);
