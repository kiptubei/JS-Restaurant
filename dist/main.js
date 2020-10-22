/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst contact = () => {\n  const conatctinfo = document.createElement('div');\n  conatctinfo.className = 'conatctinfo';\n  conatctinfo.id = 'conatctinfo';\n\n  const email = document.createElement('h2');\n  email.className = 'email';\n  email.innerHTML = 'email : foodbazaar@gmail.com';\n  conatctinfo.appendChild(email);\n\n  const phoneNumber = document.createElement('h2');\n  phoneNumber.className = 'phonenumber';\n  phoneNumber.innerHTML = 'Phone Number : +254720111111';\n  conatctinfo.appendChild(phoneNumber);\n\n  const location = document.createElement('h2');\n  location.className = 'location';\n  location.innerHTML = 'Location : Eldoret,Kenya';\n  conatctinfo.appendChild(location);\n\n  return conatctinfo;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n\n//# sourceURL=webpack://js-restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\nconst home = () => {\n  const title = document.createElement('h1');\n  title.className = 'title';\n  title.innerHTML = 'The Food Bazaar';\n  title.id = 'title';\n  return title;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n\n//# sourceURL=webpack://js-restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n\n\nconst root = document.getElementById('content');\nconst navbar = (0,_navbar__WEBPACK_IMPORTED_MODULE_1__.default)();\nroot.appendChild(navbar);\nconst links = document.querySelectorAll('.link');\n\nconst page = document.createElement('div');\npage.className = 'page';\npage.id = 'page';\n\npage.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__.default)());\nroot.appendChild(page);\n\nconst routing = (link) => {\n  if (link === 'contact') {\n    page.className = 'page';\n    return (0,_contact__WEBPACK_IMPORTED_MODULE_3__.default)();\n  } if (link === 'home') {\n    page.className = 'page';\n    return (0,_home__WEBPACK_IMPORTED_MODULE_2__.default)();\n  } if (link === 'menu') {\n    page.className = 'menupage';\n\n    return (0,_menu__WEBPACK_IMPORTED_MODULE_0__.default)();\n  }\n  return (0,_home__WEBPACK_IMPORTED_MODULE_2__.default)();\n};\nlinks.forEach((li) => {\n  li.addEventListener('click', (e, id = li.id) => {\n    const element = routing(id);\n    page.innerHTML = '';\n    page.appendChild(element);\n  });\n});\n\n\n//# sourceURL=webpack://js-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst list = [\n  {\n    name: 'Pizza',\n    img: 'assets/images/pizza.jpg',\n    desc: 'our pizza is the best in the city',\n  },\n  {\n    name: 'Soup',\n    img: 'assets/images/soup.jpg',\n    desc: 'our soup is the best in the city',\n  },\n  {\n    name: 'Salad',\n    img: 'assets/images/salad.jpg',\n    desc: 'our salad is the best in the city',\n  },\n  {\n    name: 'Chekin',\n    img: 'assets/images/chekin.jpg',\n    desc: 'our chekin is the best in the city',\n  },\n];\nconst createcard = (item) => {\n  const container = document.createElement('div');\n  container.className = 'card';\n  container.id = 'menucards';\n\n  const img = document.createElement('img');\n  img.src = item.img;\n  img.className = 'foodimg';\n  container.appendChild(img);\n\n  const name = document.createElement('h3');\n  name.innerHTML = item.name;\n  name.className = 'foodname';\n  container.appendChild(name);\n\n  const desc = document.createElement('p');\n  desc.innerHTML = item.desc;\n  desc.className = 'fooddesc';\n  container.appendChild(desc);\n\n  return container;\n};\nconst menu = () => {\n  const foodlist = document.createElement('div');\n  foodlist.className = 'foodlist';\n  foodlist.id = 'foodlist';\n\n  const foodlistTitle = document.createElement('h1');\n  foodlistTitle.className = 'foodlist_title';\n  foodlistTitle.innerHTML = 'our list of today :';\n  foodlistTitle.id = 'foodlist_title';\n  foodlist.appendChild(foodlistTitle);\n  list.forEach((item) => {\n    foodlist.appendChild(createcard(item));\n  });\n\n  return foodlist;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack://js-restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst Navbar = () => {\n  const navbar = document.createElement('nav');\n  navbar.className = 'navbar';\n  navbar.id = 'navbar';\n\n  const logo = document.createElement('img');\n  logo.className = 'logo';\n  logo.src = 'assets/images/logo.png';\n  logo.id = 'logo';\n  navbar.appendChild(logo);\n\n  const links = document.createElement('ul');\n  links.className = 'nav_links';\n  navbar.appendChild(links);\n\n  const home = document.createElement('li');\n  home.className = 'link';\n  home.innerHTML = 'Home';\n  home.id = 'home';\n  links.appendChild(home);\n\n  const menu = document.createElement('li');\n  menu.className = 'link';\n  menu.innerHTML = 'Menu';\n  menu.id = 'menu';\n  links.appendChild(menu);\n\n  const contact = document.createElement('li');\n  contact.className = 'link';\n  contact.innerHTML = 'Contact';\n  contact.id = 'contact';\n  links.appendChild(contact);\n\n  return navbar;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n\n\n//# sourceURL=webpack://js-restaurant/./src/navbar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;