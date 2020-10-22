/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

// CONCATENATED MODULE: ./src/navbar.js
const Navbar = () => {
  const navbar = document.createElement("nav");
  navbar.className = "navbar";
  navbar.id = "navbar";

  const logo = document.createElement("img");
  logo.className = "logo";
  logo.src = "assets/images/logo.png";
  logo.id = "logo";
  navbar.appendChild(logo);

  const links = document.createElement("ul");
  links.className = "nav_links";
  navbar.appendChild(links);

  const home = document.createElement("li");
  home.className = "link";
  home.innerHTML = "Home";
  home.id = "home";
  links.appendChild(home);

  const menu = document.createElement("li");
  menu.className = "link";
  menu.innerHTML = "Menu";
  menu.id = "menu";
  links.appendChild(menu);

  const contact = document.createElement("li");
  contact.className = "link";
  contact.innerHTML = "Contact";
  contact.id = "contact";
  links.appendChild(contact);

  return navbar;
};

// CONCATENATED MODULE: ./src/contact.js
const contact = () => {
  const conatctinfo = document.createElement("div");
  conatctinfo.className = "conatctinfo";
  conatctinfo.id = "conatctinfo";

  const email = document.createElement("h2");
  email.className = "email";
  email.innerHTML = "email : foodbazaar@gmail.com";
  conatctinfo.appendChild(email);

  const phone_number = document.createElement("h2");
  phone_number.className = "phonenumber";
  phone_number.innerHTML = "Phone Number : +254720111111";
  conatctinfo.appendChild(phone_number);

  const location = document.createElement("h2");
  location.className = "location";
  location.innerHTML = "Location : Eldoret,Kenya";
  conatctinfo.appendChild(location);

  return conatctinfo;
};

// CONCATENATED MODULE: ./src/menu.js
const list = [
  {
    name: "Pizza",
    img: "assets/images/pizza.jpg",
    desc: "Best Pizza in Town",
  },
  {
    name: "Soup",
    img: "assets/images/soup.jpg",
    desc: "Spicy or Frothy",
  },
  {
    name: "Salad",
    img: "assets/images/salad.jpg",
    desc: "Farm fresh salads",
  },
  {
    name: "Chicken",
    img: "assets/images/chicken.jpg",
    desc: "Authentic kienyeji chicken available",
  },
];
const createcard = (item) => {
  const container = document.createElement("div");
  container.className = "card";
  container.id = "menucards";

  const img = document.createElement("img");
  img.src = item.img;
  img.className = "foodimg";
  container.appendChild(img);

  const name = document.createElement("h3");
  name.innerHTML = item.name;
  name.className = "foodname";
  container.appendChild(name);

  const desc = document.createElement("p");
  desc.innerHTML = item.desc;
  desc.className = "fooddesc";
  container.appendChild(desc);

  return container;
};
const menu = () => {
  const foodlist = document.createElement("div");
  foodlist.className = "foodlist";
  foodlist.id = "foodlist";

  const foodlist_title = document.createElement("h1");
  foodlist_title.className = "foodlist_title";
  foodlist_title.innerHTML = "our list of today :";
  foodlist_title.id = "foodlist_title";
  foodlist.appendChild(foodlist_title);
  list.forEach((item) => {
    foodlist.appendChild(createcard(item));
  });

  return foodlist;
};

// CONCATENATED MODULE: ./src/home.js

const home = () => {
  const title = document.createElement("h1");
  title.className = "title";
  title.innerHTML = "The Food Bazaar";
  title.id = "title";
  return title;
};

// CONCATENATED MODULE: ./src/index.js

const root = document.getElementById("content");
const navbar = Navbar();
root.appendChild(navbar);
const links = document.querySelectorAll(".link");

const page = document.createElement("div");
page.className = "page";
page.id = "page";

page.appendChild(home());
root.appendChild(page);

const roting = (link) => {
  if (link === "contact") {
    page.className = "page";
    return contact();
  } else if (link === "home") {
    page.className = "page";
    return home();
  } else if (link === "menu") {
    page.className = "menupage";

    return menu();
  }
};
links.forEach((li) => {
  li.addEventListener("click", (e, id = li.id) => {
    let element = roting(id);
    page.innerHTML = "";
    page.appendChild(element);
  });
});

/******/ })()
;
