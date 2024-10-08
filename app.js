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

//Login container code work

const loginContainer = document.createElement("div");
loginContainer.classList.add("login-container");

const headLine = document.createElement("h3");
headLine.innerText = "Login";
headLine.style.color = "white";
headLine.style.textAlign = "center";
loginContainer.appendChild(headLine);

const profile = document.createElement("div");
profile.classList.add("profile")
profile.style.backgroundImage = "url('https://ik.imagekit.io/d9mvewbju/Course/BigbinaryAcademy/profile-image-css-login-page-project_tS9W4AV3q.png')"
loginContainer.appendChild(profile);

const loginForm = document.createElement("form");
loginContainer.appendChild(loginForm);

container.appendChild(loginContainer);


//Username 
const userNameContainer = document.createElement("div");
userNameContainer.classList.add("username-container");

loginForm.appendChild(userNameContainer);

const lableForUsername = document.createElement("label");

lableForUsername.setAttribute("for", "username");

lableForUsername.textContent = "Username";

userNameContainer.appendChild(lableForUsername);

const userName = document.createElement("input");
userName.setAttribute("type", "text");
userName.setAttribute("id", "username");

userNameContainer.appendChild(userName);


//password
const passwordContainer = document.createElement("div");
passwordContainer.classList.add("password-container");

loginForm.appendChild(passwordContainer);

const labelForPassword = document.createElement("label");
labelForPassword.setAttribute("for", "password");

labelForPassword.textContent = "Password";
passwordContainer.appendChild(labelForPassword);

const password = document.createElement("input");
password.setAttribute("type", "password");
password.setAttribute("id", "password");

passwordContainer.appendChild(password);