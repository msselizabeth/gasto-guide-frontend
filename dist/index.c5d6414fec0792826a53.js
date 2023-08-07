/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/southAmerica/CountryInfo.js":
/*!****************************************************!*\
  !*** ./src/components/southAmerica/CountryInfo.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
// import React, { useState, useEffect } from 'react';

// const a = document.querySelectorAll('.countriesSAlink');

// console.log(a);

const countriesList = document.getElementById('south-america-countries');
function getCountries() {
  axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`https://gastro-guide-backend.onrender.com/api/countries/64ce1a83c2560a88fcb26b4e`) // Путь к API на вашем бекенде
  .then(response => {
    const countries = response.data;
    displayCountries(countries);
  }).catch(error => {
    console.error('Error fetching countries:', error);
  });
}
function displayCountries(countries) {
  return countries.map(country => {
    const item = document.createElement('li');
    item.classList.add('countriesSAitem');
    const link = document.createElement('a');
    link.classList.add('countriesSAlink');
    link.href = `../country.html?code=${country._id}`;
    const img = document.createElement('img');
    img.classList.add('countriesSAimage');
    img.src = country.image;
    const span = document.createElement('span');
    span.classList.add('countriesSAname');
    span.textContent = country.countryName;
    link.appendChild(img);
    link.appendChild(span);
    item.appendChild(link);
    countriesList.appendChild(item);
  });
}
getCountries();

// `<li class="countriesSAitem'>
//                 <a class="countriesSAlink" href='#'></a>
//                 <img src=${country.image} class="countriesSAimage"/>
//                 <span class="countriesSAname">${country.countryName}</span>
//           </li>`

/***/ }),

/***/ "./src/components/southAmerica/CountryList.js":
/*!****************************************************!*\
  !*** ./src/components/southAmerica/CountryList.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

const countryCode = new URLSearchParams(window.location.search).get('code');
fetch(`https://gastro-guide-backend.onrender.com/api/countries/64ce1a83c2560a88fcb26b4e/${countryCode}`) // Путь к API на вашем бекенде
.then(response => response.json()).then(country => {
  const countryName = document.querySelector('.hero-country__name');
  const capital = document.querySelector('.hero-country__capital');
  const hero = document.querySelector('.hero-country__container');
  const headTitle = document.querySelector('title');
  const featuresList = document.querySelector('.hero-country__list');
  headTitle.textContent = `${country.countryName}`;
  hero.style.backgroundImage = `linear-gradient(to right,
            rgba(0, 21, 52, 0.3),
            rgba(0, 21, 52, 0.3)), url(${country.image})`;
  countryName.textContent = country.countryName;
  capital.textContent = `Столиця: ${country.capitalCountry}`;
  country.featuresCountry.map(item => {
    const paragraph = document.createElement('li');
    paragraph.textContent = decodeHtmlEntities(item.text);
    paragraph;
    featuresList.appendChild(paragraph);
  });
  featuresList.firstChild.classList.add('title-features');
}).catch(error => {
  console.error('Error fetching country details:', error);
});
function decodeHtmlEntities(text) {
  const parser = new DOMParser();
  const decoded = parser.parseFromString(text, 'text/html').body.textContent;
  return decoded;
}
function getDishesOfCountry() {
  axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`https://gastro-guide-backend.onrender.com/api/recipes/${countryCode}`) // Путь к API на вашем бекенде
  .then(response => {
    const dishes = response.data;
    displayDishes(dishes);
  }).catch(error => {
    console.error('Error fetching countries:', error);
  });
}
const dishesList = document.querySelector('.hero-country__dishes--list');
function displayDishes(dishes) {
  return dishes.map(dish => {
    const item = document.createElement('li');
    item.classList.add('hero-country__dishes--item');
    const link = document.createElement('a');
    link.classList.add('hero-country__dishes--link');
    link.href = `../recipe.html?codeDish=${dish._id}`;
    const img = document.createElement('img');
    img.classList.add('hero-country__dishes--img');
    img.src = dish.recipeImgSection;
    img.alt = dish.recipeImgAlt;
    const span = document.createElement('span');
    span.classList.add('hero-country__dishes--name');
    span.textContent = dish.recipeName;
    link.appendChild(img);
    link.appendChild(span);
    item.appendChild(link);
    dishesList.appendChild(item);
  });
}
getDishesOfCountry();

/***/ }),

/***/ "./src/js/mobile-menu.js":
/*!*******************************!*\
  !*** ./src/js/mobile-menu.js ***!
  \*******************************/
/***/ (() => {

const openMenuButton = document.querySelector('.js-open-btn');
const closeMenuButton = document.querySelector('.js-close-btn');
const menu = document.querySelector('.js-mobile-menu');
const links = document.querySelectorAll('.js-link');
openMenuButton.addEventListener('click', toggleModal);
closeMenuButton.addEventListener('click', toggleModal);
function toggleModal() {
  menu.classList.toggle('is-open');
}
for (const link of links) {
  link.addEventListener('click', toggleModal);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! images/food-fon.png */ "./src/images/food-fon.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/DaysOne-Regular.woff */ "./src/fonts/DaysOne-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Montserrat-Regular.ttf */ "./src/fonts/Montserrat-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Montserrat-Bold.ttf */ "./src/fonts/Montserrat-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Montserrat-SemiBold.ttf */ "./src/fonts/Montserrat-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Montserrat-Medium.ttf */ "./src/fonts/Montserrat-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Montserrat-ExtraBold.ttf */ "./src/fonts/Montserrat-ExtraBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Montserrat-Black.ttf */ "./src/fonts/Montserrat-Black.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! images/home-page/map-mob.png */ "./src/images/home-page/map-mob.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! images/home-page/world-map-tablet.png */ "./src/images/home-page/world-map-tablet.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! images/home-page/world-map-desktop.png */ "./src/images/home-page/world-map-desktop.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! images/continents-page/hero-continents-mobile.jpg */ "./src/images/continents-page/hero-continents-mobile.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! images/continents-page/hero-continents-tablet.jpg */ "./src/images/continents-page/hero-continents-tablet.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! images/continents-page/hero-continents-desktop.jpg */ "./src/images/continents-page/hero-continents-desktop.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! images/continents-page/hero-sa-mob.jpg */ "./src/images/continents-page/hero-sa-mob.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! images/continents-page/chilie-icon.svg */ "./src/images/continents-page/chilie-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! images/continents-page/hero-sa-tablet.jpg */ "./src/images/continents-page/hero-sa-tablet.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! images/continents-page/hero-sa-desktop.jpg */ "./src/images/continents-page/hero-sa-desktop.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! images/point.svg */ "./src/images/point.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! images/icon-current.svg */ "./src/images/icon-current.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! images/current-hover-icon.svg */ "./src/images/current-hover-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_20___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --color-primary-text: #022964;
  --color-links-header: #004487;
  --color-home-title: #004A8F;
  --color-primary-titles: #043278;
  --color-titles-section: #004A8F;
  --color-hover-text: #FFF801;
  --color-hover-current-link: #F03C03;
  --color-icons-buttons-home: #57D2A1;
  --color-text-footer-mail: #115BA0;
  --color-icons: rgba(4, 50, 120, 1);
  --color-world-map: rgba(31, 208, 146, 0.80);
  --color-hero-links: #034ba9;
  --color-shadow: rgba(3, 33, 77, 0.25);
  --color-bg-countries: rgba(3, 33, 77, 0.5);
  --color-border-btn: #00A7F6;
  --color-background-btn: rgba(0, 167, 246, 0.85);
  --background-color-primary: rgba(245, 242, 142, 0.07);
  --background-color-header-footer: rgba(18, 110, 249, 0.45);
  --background-color-mob-menu: rgba(18, 111, 250, 0.25);
  --box-shadow-color-header-footer: rgba(6, 78, 187, 0.45);
  --font-family-primary: "Montserrat", sans-serif;
  --font-family-titles: "DaysOne", sans-serif;
}

body {
  font-family: "Montserrat", sans-serif;
  font-family: var(--font-family-primary);
  color: #022964;
  color: var(--color-primary-text);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.22;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-color: rgba(245, 242, 142, 0.07);
  background-color: var(--background-color-primary);
  background-size: 375px 290px;
}

a {
  -webkit-text-decoration: none;
  text-decoration: none;
}

button {
  border: 0;
  background-color: transparent;
  padding: 0;
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}

img {
  display: block;
}

.section__title {
  font-family: "DaysOne", sans-serif;
  font-family: var(--font-family-titles);
  font-size: 18px;
  color: #004A8F;
  color: var(--color-titles-section);
  margin-bottom: 15px;
}

.section {
  width: 100%;
  margin: 0 auto;
  padding: 20px 0px;
}

.container {
  padding: 0px 10px;
  margin: 0 auto;
}

@media screen and (min-width: 480px) {
  body {
    background-size: 480px 370px;
  }
  .section {
    width: 480px;
  }
}
@media screen and (min-width: 768px) {
  body {
    background-size: 768px 520px;
    font-size: 17px;
  }
  .section__title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .section {
    width: 768px;
    padding: 30px 0px;
  }
  .container {
    width: 738px;
    padding: 0px 15px;
  }
}
@media screen and (min-width: 1000px) {
  .section {
    width: 1000px;
    padding: 35px 0px;
  }
  .section__title {
    font-size: 26px;
    margin-bottom: 25px;
  }
  .container {
    width: 960px;
    padding: 0px 20px;
  }
}
@media screen and (min-width: 1200px) {
  body {
    font-size: 20px;
  }
  .section {
    width: 1200px;
    padding: 40px 0px;
  }
  .container {
    width: 1160px;
  }
}
@media screen and (min-width: 1440px) {
  body {
    font-size: 22px;
  }
  .section {
    width: 1440px;
    padding: 50px 0px;
  }
  .section__title {
    font-size: 30px;
    margin-bottom: 30px;
  }
  .container {
    width: 1390px;
    padding: 0px 25px;
  }
}
@font-face {
  font-family: "DaysOne";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
@font-face {
  font-family: "Montserrat";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}), url(${___CSS_LOADER_URL_REPLACEMENT_3___}), url(${___CSS_LOADER_URL_REPLACEMENT_4___}), url(${___CSS_LOADER_URL_REPLACEMENT_5___}), url(${___CSS_LOADER_URL_REPLACEMENT_6___}), url(${___CSS_LOADER_URL_REPLACEMENT_7___});
}
.header {
  background-color: #ffffff;
  z-index: 100;
  width: 100%;
  box-shadow: 0px 10px 10px 0px rgba(6, 78, 187, 0.45);
  box-shadow: 0px 10px 10px 0px var(--box-shadow-color-header-footer);
}

.nav__list {
  display: none;
}

.bg__container {
  width: 100%;
  padding: 15px 0px;
  background-color: rgba(18, 110, 249, 0.45);
  background-color: var(--background-color-header-footer);
}

.header__nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__nav--link-logo {
  display: flex;
  align-items: center;
  width: 230px;
  color: #043278;
  color: var(--color-primary-titles);
  font-size: 24px;
  font-weight: 700;
}
.header__nav--link-logo-icon {
  width: 75px;
  height: 50px;
}

.header__nav--button-menu {
  width: 55px;
  height: 45px;
}
.header__nav--button-menu-icon {
  width: 55px;
  height: 45px;
}

.mobile-menu__container {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 768px;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  background-color: rgba(18, 111, 250, 0.25);
  background-color: var(--background-color-mob-menu);
}

.mobile-menu__btn-close {
  width: 40px;
  height: 25px;
  margin-top: 15px;
  color: rgba(4, 50, 120, 1);
  color: var(--color-icons);
}
.mobile-menu__btn-close:hover, .mobile-menu__btn-close:focus {
  color: #FFF801;
  color: var(--color-hover-text);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mobile-menu__btn-close--icon {
  width: 45px;
  height: 25px;
  fill: currentColor;
}

.mobile-menu__nav--list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 50px;
  font-size: 22px;
  font-weight: 600;
}

.mobile-menu__nav--list-link {
  color: #004487;
  color: var(--color-links-header);
}
.mobile-menu__nav--list-link:hover, .mobile-menu__nav--list-link:focus {
  color: #FFF801;
  color: var(--color-hover-text);
}

.mobile-menu--contacts-title {
  margin-top: 50px;
  margin-bottom: 15px;
  color: #043278;
  color: var(--color-primary-titles);
}

.mobile-menu__contacts--list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
}

.mobile-menu__contacts--icon {
  height: 30px;
  width: 30px;
}

.mobile-menu__contacts--container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.mobile-menu__contacts--item-mail {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.mobile-menu__contacts--link-mail {
  color: #115BA0;
  color: var(--color-text-footer-mail);
}

.mobile-menu__contacts--link-social {
  display: block;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mobile-menu__nav--list-item {
  position: relative;
}

.mobile-menu {
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu.is-open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

@media screen and (min-width: 768px) {
  .header__nav--link-logo {
    width: 280px;
    font-size: 32px;
  }
  .header__nav--link-logo-icon {
    width: 95px;
    height: 60px;
  }
  .header__nav--button-menu {
    width: 80px;
    height: 60px;
  }
  .header__nav--button-menu-icon {
    width: 80px;
    height: 60px;
  }
}
@media screen and (min-width: 1000px) {
  .mobile-menu {
    display: none;
  }
  .header__nav--button-menu {
    display: none;
  }
  .header__nav {
    justify-content: start;
    gap: 60px;
  }
  .nav__list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    font-size: 20px;
    font-weight: 600;
  }
  .nav__list--link {
    color: #004487;
    color: var(--color-links-header);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav__list--link:hover, .nav__list--link:focus {
    color: #FFF801;
    color: var(--color-hover-text);
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .nav__list--item {
    position: relative;
  }
}
@media screen and (min-width: 1200px) {
  .header__nav {
    gap: 80px;
  }
  .nav__list {
    gap: 20px;
    font-size: 24px;
  }
  .header__nav--link-logo {
    width: 320px;
    font-size: 34px;
  }
  .header__nav--link-logo-icon {
    width: 105px;
    height: 70px;
  }
}
@media screen and (min-width: 1440px) {
  .header__nav {
    gap: 90px;
  }
  .nav__list {
    gap: 25px;
    font-size: 28px;
  }
  .header__nav--link-logo {
    width: 360px;
    font-size: 36px;
  }
  .header__nav--link-logo-icon {
    width: 135px;
    height: 85px;
  }
}
.hero__container {
  position: relative;
  height: 250px;
  padding-top: 0;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
  background-repeat: no-repeat;
  background-size: 100% 230px;
}

.hero__title {
  font-family: "DaysOne", sans-serif;
  font-family: var(--font-family-titles);
  font-size: 22px;
  text-align: center;
  text-transform: uppercase;
  color: #004A8F;
  color: var(--color-home-title);
  padding-top: 200px;
}

.hero__link {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  text-align: center;
  max-width: 50px;
  font-size: 8px;
  font-weight: 500;
  color: #034ba9;
  color: var(--color-hero-links);
}
.hero__link:hover, .hero__link:focus {
  color: #FFF801;
  color: var(--color-hover-text);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.hero__link--greenland {
  top: 3.3%;
  left: 29.5%;
}

.hero__link--na {
  top: 24%;
  left: 14%;
}

.hero__link--sa {
  top: 54.3%;
  left: 27.1%;
}

.hero__link--africa {
  top: 42.5%;
  left: 48%;
}

.hero__link--europe {
  top: 21%;
  left: 55%;
}

.hero__link--asia {
  top: 23%;
  left: 78%;
}

.hero__link--au {
  top: 65.7%;
  left: 78.2%;
}

@media screen and (min-width: 410px) {
  .hero__link {
    font-size: 10px;
  }
}
@media screen and (min-width: 768px) {
  .hero__container {
    height: 415px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___});
    background-size: 100% 390px;
  }
  .hero__title {
    font-size: 38px;
    padding-top: 330px;
  }
  .hero__link {
    font-size: 16px;
    max-width: 70px;
  }
  .hero__link--greenland {
    top: 3.4%;
    left: 30%;
  }
  .hero__link--na {
    top: 25%;
    left: 14%;
  }
  .hero__link--sa {
    top: 58%;
    left: 27.7%;
  }
  .hero__link--africa {
    top: 44.2%;
    left: 48%;
  }
  .hero__link--europe {
    top: 22.1%;
    left: 55.5%;
  }
  .hero__link--asia {
    top: 26%;
    left: 77%;
  }
  .hero__link--au {
    top: 68.8%;
    left: 79.3%;
  }
}
@media screen and (min-width: 1000px) {
  .hero__container {
    height: 560px;
    background-size: 100% 530px;
  }
  .hero__title {
    font-size: 50px;
    padding-top: 450px;
  }
  .hero__link {
    font-size: 22px;
    max-width: 90px;
  }
  .hero__link--greenland {
    top: 3%;
  }
  .hero__link--na {
    top: 25.3%;
  }
  .hero__link--sa {
    top: 58.3%;
    left: 27.2%;
  }
  .hero__link--africa {
    top: 46%;
  }
  .hero__link--europe {
    top: 22%;
    left: 55%;
  }
  .hero__link--asia {
    top: 26%;
  }
  .hero__link--au {
    top: 69.5%;
  }
}
@media screen and (min-width: 1200px) {
  .hero__container {
    height: 630px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_10___});
    background-size: 100% 600px;
  }
  .hero__title {
    font-size: 55px;
    padding-top: 510px;
  }
  .hero__link {
    font-size: 24px;
    max-width: 100px;
  }
  .hero__link--greenland {
    top: 3%;
    left: 30.5%;
  }
  .hero__link--na {
    top: 26.5%;
    left: 14.5%;
  }
  .hero__link--sa {
    top: 59.8%;
    left: 27.7%;
  }
  .hero__link--africa {
    top: 46.5%;
  }
  .hero__link--europe {
    top: 24%;
    left: 54%;
  }
  .hero__link--asia {
    top: 26%;
  }
  .hero__link--au {
    top: 71.5%;
    left: 80%;
  }
}
@media screen and (min-width: 1440px) {
  .hero__container {
    height: 730px;
    background-size: 100% 680px;
  }
  .hero__title {
    font-size: 72px;
    padding-top: 570px;
  }
  .hero__link {
    font-size: 26px;
    max-width: 110px;
  }
  .hero__link--greenland {
    top: 3%;
    left: 31%;
  }
  .hero__link--na {
    top: 26%;
  }
  .hero__link--sa {
    top: 58.5%;
    left: 28%;
  }
  .hero__link--africa {
    top: 45%;
  }
  .hero__link--europe {
    top: 23.5%;
  }
  .hero__link--asia {
    top: 25.5%;
    left: 78.5%;
  }
  .hero__link--au {
    top: 69.5%;
    left: 80%;
  }
}
.hero-continets {
  padding: 0;
}

.hero-continents__container {
  position: relative;
  padding: 0;
  height: 290px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___});
  background-repeat: no-repeat;
  background-size: 100% 290px;
}

.hero-continents__title {
  text-transform: uppercase;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 115px;
  width: 100%;
  height: 50px;
  color: #FFF801;
  color: var(--color-hover-text);
  background-color: rgba(1, 24, 60, 0.15);
  font-size: 24px;
}

@media screen and (min-width: 768px) {
  .hero-continents__container {
    width: 100%;
    height: 410px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___});
    background-size: 100% 410px;
  }
  .hero-continents__title {
    height: 80px;
    font-size: 42px;
    padding-top: 165px;
  }
}
@media screen and (min-width: 1000px) {
  .hero-continents__container {
    height: 520px;
    background-size: 100% 520px;
  }
  .hero-continents__title {
    height: 85px;
    font-size: 50px;
    padding-top: 235px;
  }
}
@media screen and (min-width: 1200px) {
  .hero-continents__container {
    width: 100%;
    height: 650px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___});
    background-size: 100% 650px;
  }
  .hero-continents__title {
    height: 100px;
    font-size: 70px;
    padding-top: 305px;
  }
}
@media screen and (min-width: 1440px) {
  .hero-continents__container {
    width: 100%;
    height: 770px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___});
    background-size: 100% 770px;
  }
  .hero-continents__title {
    height: 130px;
    font-size: 85px;
    padding-top: 360px;
  }
}
.hero-country {
  padding: 0;
}

.hero-country__container {
  position: relative;
  padding: 0;
  height: 290px;
  background-repeat: no-repeat;
  background-size: 100% 290px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
}

.hero-country__title {
  color: #FFF801;
  color: var(--color-hover-text);
  font-family: "DaysOne", sans-serif;
  font-family: var(--font-family-titles);
  text-align: center;
}

.hero-country__name {
  text-transform: uppercase;
  font-size: 33px;
}

.hero-country__capital {
  font-size: 18px;
}

.hero-country__list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.title-features {
  font-weight: 700;
}

.hero-sa {
  padding: 0;
}

.hero-sa__container {
  padding: 0;
  height: 290px;
  background-image: linear-gradient(to right, rgba(0, 21, 52, 0.3), rgba(0, 21, 52, 0.3)), url(${___CSS_LOADER_URL_REPLACEMENT_14___});
  background-repeat: no-repeat;
  background-size: 100% 290px;
}

.continent__title-right {
  padding-top: 100px;
  color: hsla(58, 100%, 50%, 0.75);
  text-align: right;
  font-size: 15px;
  margin-right: 20px;
}

.continent__title-right--uppercase {
  display: block;
  text-transform: uppercase;
  margin-top: 10px;
  margin-right: 23px;
  font-size: 26px;
  color: #FFF801;
  color: var(--color-hover-text);
}

.features__text {
  margin-top: 15px;
}

.features__locations--list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
}

.features__location--image {
  width: 100%;
  margin-top: 10px;
}

.features__locations--item {
  position: relative;
}

.features__locations--text {
  padding-left: 26px;
}
.features__locations--text::after {
  content: "";
  position: absolute;
  top: 3px;
  left: 0;
  width: 20px;
  height: 40px;
  background-size: cover;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___});
}

@media screen and (min-width: 768px) {
  .hero-sa__container {
    width: 100%;
    height: 450px;
    background-image: linear-gradient(to right, rgba(0, 21, 52, 0.3), rgba(0, 21, 52, 0.3)), url(${___CSS_LOADER_URL_REPLACEMENT_16___});
    background-size: 100% 450px;
  }
  .continent__title-right {
    padding-top: 155px;
    font-size: 28px;
    margin-right: 28px;
  }
  .continent__title-right--uppercase {
    margin-top: 20px;
    margin-right: 23px;
    font-size: 50px;
  }
  .features__locations--item {
    display: flex;
    justify-content: space-between;
    line-height: 1.1;
  }
  .features__location--image {
    width: 160px;
    height: 171px;
    -o-object-fit: cover;
       object-fit: cover;
    margin-top: 0;
  }
}
@media screen and (min-width: 1000px) {
  .hero-sa__container {
    height: 570px;
    background-size: 100% 570px;
  }
  .continent__title-right {
    padding-top: 200px;
    font-size: 36px;
    margin-right: 50px;
  }
  .continent__title-right--uppercase {
    margin-top: 25px;
    margin-right: 35px;
    font-size: 58px;
  }
  .features__location--image {
    width: 230px;
    height: 150px;
  }
}
@media screen and (min-width: 1200px) {
  .hero-sa__container {
    height: 750px;
    background-image: linear-gradient(to right, rgba(0, 21, 52, 0.3), rgba(0, 21, 52, 0.3)), url(${___CSS_LOADER_URL_REPLACEMENT_17___});
    background-size: 100% 750px;
  }
  .continent__title-right {
    padding-top: 255px;
    font-size: 44px;
    margin-right: 55px;
  }
  .continent__title-right--uppercase {
    margin-top: 30px;
    margin-right: 45px;
    font-size: 78px;
  }
  .features__location--image {
    width: 260px;
    height: 170px;
  }
}
@media screen and (min-width: 1440px) {
  .hero-sa__container {
    height: 770px;
    background-size: 100% 770px;
  }
  .continent__title-right {
    padding-top: 265px;
    font-size: 50px;
    margin-right: 65px;
  }
  .continent__title-right--uppercase {
    margin-top: 30px;
    margin-right: 55px;
    font-size: 90px;
  }
}
.about__list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  font-size: 15px;
  color: #022964;
  color: var(--color-primary-text);
}
.about__list--item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.about__list--icon {
  fill: #57D2A1;
  fill: var(--color-icons-buttons-home);
  stroke-width: 0.15px;
  stroke: rgba(132, 109, 109, 0.8);
  width: 40px;
  height: 40px;
}

.about__list--text-bold {
  font-family: "DaysOne", sans-serif;
  font-family: var(--font-family-titles);
}

@media screen and (min-width: 410px) {
  .about__list {
    font-size: 16px;
  }
}
@media screen and (min-width: 768px) {
  .about__list {
    height: 470px;
    font-size: 16px;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
  }
  .about__list--item {
    width: 355px;
  }
  .about__list--icon {
    width: 45px;
    height: 45px;
  }
}
@media screen and (min-width: 1000px) {
  .about__list {
    height: 460px;
    font-size: 18px;
    gap: 20px;
  }
  .about__list--item {
    width: 460px;
  }
  .about__list--icon {
    width: 50px;
    height: 50px;
  }
}
@media screen and (min-width: 1200px) {
  .about__list {
    font-size: 20px;
    gap: 25px;
    height: 465px;
  }
  .about__list--item {
    width: 555px;
  }
  .about__list--icon {
    width: 55px;
    height: 55px;
  }
}
@media screen and (min-width: 1440px) {
  .about__list {
    font-size: 22px;
    gap: 30px;
  }
  .about__list--item {
    width: 665px;
  }
  .about__list--icon {
    width: 60px;
    height: 60px;
  }
}
.continents__list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.continents__link {
  display: flex;
  justify-content: center;
  align-items: center;
}

.continents__link--icon {
  width: 270px;
  height: 270px;
  filter: drop-shadow(0px 5px 5px rgba(3, 33, 77, 0.25));
  filter: drop-shadow(0px 5px 5px var(--color-shadow));
}

.continents__item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 600px;
  margin-top: 15px;
}

.continents__item--title {
  font-weight: 700;
}

.continent__list {
  list-style: inside url(${___CSS_LOADER_URL_REPLACEMENT_18___});
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
}

.continent__item {
  margin-left: 15px;
  width: 100%;
}

.continent__link--button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 47px;
  text-align: center;
  color: #FFF801;
  color: var(--color-hover-text);
  border-radius: 25px;
  border: 1px solid #00A7F6;
  border: 1px solid var(--color-border-btn);
  background: rgba(0, 167, 246, 0.85);
  background: var(--color-background-btn);
  box-shadow: 2px 5px 5px 0px rgba(3, 33, 77, 0.25);
  box-shadow: 2px 5px 5px 0px var(--color-shadow);
  font-family: "DaysOne", sans-serif;
  font-family: var(--font-family-titles);
  font-size: 18px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
.continent__link--button:hover, .continent__link--button:focus {
  border-color: #FFF801;
  border-color: var(--color-hover-text);
  background-color: #FFF801;
  background-color: var(--color-hover-text);
  color: #00A7F6;
  color: var(--color-border-btn);
}

@media screen and (min-width: 768px) {
  .continents__list {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }
  .continents__item {
    width: 355px;
    height: 620px;
    align-items: center;
  }
  .continent__item {
    margin-left: 0px;
  }
}
@media screen and (min-width: 1000px) {
  .continents__item {
    width: 425px;
    height: 600px;
  }
}
@media screen and (min-width: 1200px) {
  .continents__item {
    width: 365px;
    height: 720px;
  }
  .continent__link--button {
    width: 280px;
    height: 55px;
    font-size: 20px;
  }
}
@media screen and (min-width: 1440px) {
  .continents__item {
    width: 425px;
    height: 760px;
  }
}
.author__list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.author__text--paragraph {
  display: block;
  margin-top: 10px;
}

.author__image {
  display: block;
  width: 100%;
  margin-top: 10px;
  border-radius: 25px;
  box-shadow: 3px 6px 10px 0px rgba(3, 33, 77, 0.25);
  box-shadow: 3px 6px 10px 0px var(--color-shadow);
}

.author__text--social-link {
  font-weight: 700;
  color: #022964;
  color: var(--color-primary-text);
}
.author__text--social-link:hover, .author__text--social-link:focus {
  color: #F03C03;
  color: var(--color-hover-current-link);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

@media screen and (min-width: 1000px) {
  .author__text {
    font-size: 16px;
    width: 530px;
  }
  .author__list {
    gap: 20px;
  }
  .authot__list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .authot__list-item:first-child {
    flex-direction: row-reverse;
  }
  .author__image {
    width: 420px;
    height: 300px;
    margin: 0;
  }
}
@media screen and (min-width: 1200px) {
  .author__text {
    font-size: 18px;
    width: 630px;
  }
  .author__image {
    width: 500px;
    height: 350px;
    border-radius: 50px;
  }
}
@media screen and (min-width: 1440px) {
  .author__text {
    font-size: 22px;
    width: 800px;
    line-height: 1.13;
  }
  .author__image {
    width: 570px;
    height: 380px;
    -o-object-fit: cover;
       object-fit: cover;
  }
}
.countriesSAlist {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.countriesSAlink {
  position: relative;
  display: block;
}

.countriesSAimage {
  width: 100%;
  height: 255px;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: 25px;
  box-shadow: 3px 3px 5px 0px rgba(3, 33, 77, 0.25);
  box-shadow: 3px 3px 5px 0px var(--color-shadow);
}

.countriesSAname {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 100%;
  background-color: rgba(3, 33, 77, 0.5);
  background-color: var(--color-bg-countries);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  color: #FFF801;
  font-family: "DaysOne", sans-serif;
  font-family: var(--font-family-titles);
  font-size: 21px;
  text-transform: uppercase;
}

@media screen and (min-width: 768px) {
  .countriesSAlist {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
  .countriesSAimage {
    width: 355px;
    height: 245px;
    border-radius: 30px;
  }
  .countriesSAname {
    height: 65px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    font-size: 24px;
  }
}
@media screen and (min-width: 1000px) {
  .countriesSAlist {
    gap: 30px;
  }
  .countriesSAimage {
    width: 300px;
    height: 205px;
  }
  .countriesSAname {
    font-size: 26px;
  }
}
@media screen and (min-width: 1200px) {
  .countriesSAlist {
    gap: 35px;
  }
  .countriesSAimage {
    width: 363px;
    height: 245px;
  }
  .countriesSAname {
    font-size: 28px;
  }
}
@media screen and (min-width: 1440px) {
  .countriesSAlist {
    gap: 45px;
  }
  .countriesSAimage {
    width: 433px;
    height: 285px;
  }
  .countriesSAname {
    height: 75px;
    font-size: 31px;
  }
}
.contacts__list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contacts__link--mail {
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  text-align: center;
  font-size: 16px;
  margin-top: 5px;
  color: #115BA0;
  color: var(--color-text-footer-mail);
}

.contacts__link--mail-icon, .social-links__link--icon {
  width: 30px;
  height: 30px;
}

.contacts-social__title, .contacts__title--mail {
  text-align: center;
  font-size: 16px;
}

.social-links__list {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.contacts-social__list {
  display: flex;
  justify-content: space-between;
}

@media screen and (min-width: 768px) {
  .contacts__list {
    margin-top: 20px;
    flex-direction: row-reverse;
    justify-content: center;
    gap: 25px;
  }
  .contacts-social__list {
    justify-content: start;
    gap: 25px;
  }
  .contacts-social__title,
  .contacts__title--mail {
    font-size: 18px;
  }
  .contacts__link--mail {
    margin-top: 15px;
    font-size: 16px;
  }
}
@media screen and (min-width: 1000px) {
  .contacts__list {
    margin-top: 25px;
    gap: 65px;
  }
  .contacts-social__list {
    gap: 65px;
  }
  .contacts-social__title,
  .contacts__title--mail {
    font-size: 22px;
  }
  .contacts__link--mail {
    font-size: 20px;
  }
  .contacts__link--mail-icon, .social-links__link--icon {
    width: 40px;
    height: 40px;
  }
  .social-links__list, .contacts__link--mail {
    margin-top: 15px;
  }
  .social-links__list {
    gap: 15px;
  }
}
@media screen and (min-width: 1200px) {
  .contacts__list {
    margin-top: 25px;
    gap: 95px;
  }
  .contacts-social__list {
    gap: 95px;
  }
  .contacts-social__title,
  .contacts__title--mail {
    font-size: 24px;
  }
  .contacts__link--mail {
    font-size: 22px;
  }
}
@media screen and (min-width: 1440px) {
  .contacts__list {
    margin-top: 35px;
    gap: 155px;
  }
  .contacts-social__list {
    gap: 155px;
  }
  .contacts-social__title,
  .contacts__title--mail {
    font-size: 28px;
  }
  .contacts__link--mail {
    font-size: 24px;
  }
}
.travel__list {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.travel__title {
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
}

.travel__link {
  display: block;
  width: 250px;
  padding: 20px;
  border: 1px solid #004487;
  border: 1px solid var(--color-links-header);
  color: #004487;
  color: var(--color-links-header);
  border-radius: 30px;
  text-align: center;
  font-weight: 800;
  font-size: 18px;
  box-shadow: 2px 7px 7px 0px rgba(3, 33, 77, 0.25);
  box-shadow: 2px 7px 7px 0px var(--color-shadow);
  background-color: #57D2A1;
  background-color: var(--color-icons-buttons-home);
}
.travel__link:hover, .travel__link:focus {
  background-color: #004487;
  background-color: var(--color-links-header);
  color: #57D2A1;
  color: var(--color-icons-buttons-home);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

@media screen and (min-width: 768px) {
  .travel__list {
    flex-direction: row;
    gap: 40px;
    margin-top: 25px;
  }
}
@media screen and (min-width: 1000px) {
  .travel__list {
    gap: 80px;
    margin-top: 30px;
  }
  .travel__link {
    font-size: 22px;
    width: 270px;
    padding: 25px;
    border-radius: 40px;
    border: 2px solid #004487;
    border: 2px solid var(--color-links-header);
  }
  .travel__title {
    font-size: 24px;
  }
}
@media screen and (min-width: 1200px) {
  .travel__list {
    gap: 100px;
    margin-top: 40px;
  }
  .travel__link {
    font-size: 24px;
    width: 350px;
    padding: 35px;
    border-radius: 50px;
    border: 2px solid #004487;
    border: 2px solid var(--color-links-header);
  }
  .travel__title {
    font-size: 30px;
  }
}
@media screen and (min-width: 1440px) {
  .travel__list {
    gap: 140px;
    margin-top: 45px;
  }
  .travel__link {
    font-size: 30px;
    width: 390px;
    padding: 45px;
    border-radius: 60px;
    border: 2px solid #004487;
    border: 2px solid var(--color-links-header);
  }
  .travel__title {
    font-size: 40px;
  }
}
.footer {
  background-color: #ffffff;
  width: 100%;
  box-shadow: 4px 0px 35px 0px rgba(6, 78, 187, 0.45);
  box-shadow: 4px 0px 35px 0px var(--box-shadow-color-header-footer);
}

.footer__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
}

.footer__title {
  font-family: "Montserrat", sans-serif;
  font-family: var(--font-family-primary);
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: #022964;
  color: var(--color-primary-text);
}

.footer__title {
  margin-bottom: 15px;
}

.footer__nav--list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.footer__nav--link {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  width: 105px;
  color: #115BA0;
  color: var(--color-text-footer-mail);
  font-size: 14px;
  text-align: center;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
.footer__nav--link:hover, .footer__nav--link:focus {
  color: #FFF801;
  color: var(--color-hover-text);
}
.footer__nav--link-icon {
  width: 15px;
  height: 15px;
  fill: currentColor;
}

.footer__contacts--link-icon {
  width: 25px;
  height: 25px;
}

.footer__contacts--list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.footer__contacts--link {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #115BA0;
  color: var(--color-text-footer-mail);
}

.footer__contscts--style-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
}

@media screen and (min-width: 768px) {
  .footer__container {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 25px;
  }
  .footer__nav--container, .footer__contacts--container {
    width: 350px;
  }
}
@media screen and (min-width: 1200px) {
  .footer__container {
    gap: 15px;
    justify-content: center;
  }
  .footer__nav--container, .footer__contacts--container {
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .footer__contscts--style-box {
    flex-direction: row-reverse;
    align-items: center;
    gap: 15px;
  }
  .footer__nav--list {
    width: 350px;
  }
}
@media screen and (min-width: 1440px) {
  .footer__container {
    gap: 15px;
  }
  .footer__nav--container, .footer__contacts--container {
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .footer__nav--list {
    width: 350px;
  }
  .footer__title {
    margin-bottom: 20px;
  }
}
.current {
  color: #FFF801;
  color: var(--color-hover-text);
  padding-left: 21px;
}
.current::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 0;
  width: 20px;
  height: 20px;
  background-size: cover;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_19___});
}
.current:hover, .current:focus {
  color: #F03C03;
  color: var(--color-hover-current-link);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
.current:hover::after, .current:focus::after {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_20___});
  transition: background-image 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

@media screen and (min-width: 1000px) {
  .current {
    padding-left: 21px;
  }
  .current::after {
    content: "";
    position: absolute;
    top: 1px;
    left: 0;
    width: 20px;
    height: 20px;
  }
}
@media screen and (min-width: 1200px) {
  .current {
    padding-left: 22px;
  }
  .current::after {
    content: "";
    position: absolute;
    top: 3px;
    left: 0;
    width: 21px;
    height: 21px;
  }
}
@media screen and (min-width: 1440px) {
  .current {
    padding-left: 26px;
  }
  .current::after {
    content: "";
    position: absolute;
    top: 3px;
    left: 0;
    width: 25px;
    height: 25px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/_var.scss","webpack://./src/index.scss","webpack://./src/styles/_global.scss","webpack://./src/styles/_fonts.scss","webpack://./src/styles/_header.scss","webpack://./src/styles/_hero-home.scss","webpack://./src/styles/_hero-continents.scss","webpack://./src/styles/_country.scss","webpack://./src/styles/_south-america.scss","webpack://./src/styles/_about-section.scss","webpack://./src/styles/_continental-kitchen.scss","webpack://./src/styles/_author-setion.scss","webpack://./src/styles/_countriesContinents.scss","webpack://./src/styles/_contacts.scss","webpack://./src/styles/_travel-section.scss","webpack://./src/styles/_footer.scss","webpack://./src/styles/_current.scss"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --color-primary-text: #022964; // text color \n    --color-links-header: #004487; //header links\n    --color-home-title: #004A8F; //home title\n    --color-primary-titles: #043278; // titles in sections\n    --color-titles-section: #004A8F; //text in blocks contacts etc\n    --color-hover-text: #FFF801; // hover header titles, hover titles footer\n    --color-hover-current-link: #F03C03; //hover current link\n    --color-icons-buttons-home: #57D2A1; //buttons and icons home\n    --color-text-footer-mail: #115BA0; // text footer links + mail in sections\n    --color-icons: rgba(4, 50, 120, 1);\n    --color-world-map: rgba(31, 208, 146, 0.80);\n    --color-hero-links: #034ba9;\n    --color-shadow: rgba(3, 33, 77, 0.25);\n    --color-bg-countries: rgba(3, 33, 77, 0.5);\n    --color-border-btn: #00A7F6;\n    --color-background-btn: rgba(0, 167, 246, 0.85);\n\n    --background-color-primary: rgba(245, 242, 142, 0.07);\n    --background-color-header-footer: rgba(18, 110, 249, 0.45);\n    --background-color-mob-menu: rgba(18, 111, 250, 0.25);\n    --box-shadow-color-header-footer: rgba(6, 78, 187, 0.45);\n   \n    --font-family-primary: 'Montserrat', sans-serif;\n    --font-family-titles: 'DaysOne', sans-serif;\n}","@import '~normalize.css';\n@import './styles/var';\n@import './styles/global';\n@import './styles/fonts';\n@import './styles/header';\n@import './styles/hero-home';\n@import './styles/hero-continents';\n@import './styles/country';\n@import './styles/south-america.scss';\n@import './styles/about-section';\n@import './styles/continental-kitchen';\n@import './styles/author-setion';\n@import './styles/countriesContinents';\n@import './styles/contacts';\n@import './styles/travel-section';\n@import './styles/footer';\n\n\n\n@import './styles/current';\n\n\n\n\n\n","\nbody {\n    font-family: var(--font-family-primary);\n    color: var(--color-primary-text);\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1.22;\n    background-image: url('images/food-fon.png');\n    background-color: var(--background-color-primary);\n    background-size: 375px 290px;\n\n    // transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    // background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    // border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n}\na {\n    text-decoration: none;\n}\nbutton {\n    border: 0;\n    background-color: transparent;\n    padding: 0;\n    margin: 0;\n}\nul{\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\nh1,h2,h3,h4,h5,h6,p{\n    margin: 0;\n}\nimg{ display: block;}\n\n.section__title{\n    font-family: var(--font-family-titles);\n    font-size: 18px;\n    color: var(--color-titles-section);\n    margin-bottom: 15px;\n}\n\n.section {\n    width: 100%;\n    margin: 0 auto;\n    padding: 20px 0px;\n}\n.container {\n    padding: 0px 10px;\n    margin: 0 auto;\n}\n\n@media screen and (min-width:480px) {\n    body{\n        background-size: 480px 370px;\n    }\n    .section { \n        width: 480px;\n    }\n}\n\n@media screen and (min-width: 768px) {\n    body {\n            background-size: 768px 520px;\n            font-size: 17px;\n        }\n    .section__title{\n        font-size: 24px;\n        margin-bottom: 20px;\n    }\n    .section {\n            width: 768px;\n            padding: 30px 0px;\n    }\n\n    .container {\n        width: 738px;\n        padding: 0px 15px;\n    }\n}\n@media screen and (min-width:1000px) {\n    .section {\n            width: 1000px;\n            padding: 35px 0px;\n        }\n    .section__title {\n        font-size: 26px;\n        margin-bottom: 25px;\n        \n    }\n    .container {\n            width: 960px;\n            padding: 0px 20px;\n        }\n}\n\n@media screen and (min-width: 1200px) {\n    body {\n        font-size: 20px;\n    }\n    .section {\n        width: 1200px;\n        padding: 40px 0px;\n    }\n\n    .container {\n        width: 1160px;\n    }\n        \n}\n\n@media screen and (min-width: 1440px) {\n    body {\n            font-size: 22px;\n        }\n    .section {\n        width: 1440px;\n        padding: 50px 0px;\n    }\n\n    .section__title {\n             font-size: 30px;\n             margin-bottom: 30px;\n    }\n\n    .container {\n        width: 1390px;\n        padding: 0px 25px;\n    }\n}\n\n\n\n","\n@font-face {\n    font-family: 'DaysOne';\n    src: url('fonts/DaysOne-Regular.woff');\n}\n\n@font-face {\n    font-family: 'Montserrat';\n    src: url('fonts/Montserrat-Regular.ttf'), url('fonts/Montserrat-Bold.ttf'), url('fonts/Montserrat-SemiBold.ttf'), url('fonts/Montserrat-Medium.ttf'), url('fonts/Montserrat-ExtraBold.ttf'), url('fonts/Montserrat-Black.ttf');\n}\n\n",".header {\n    background-color: #ffffff;\n    // position: fixed;\n    // top: 0;\n    // left: 0;\n    z-index: 100;\n    width: 100%;\n    \n    box-shadow: 0px 10px 10px 0px var(--box-shadow-color-header-footer);\n}\n.nav__list {\n    display: none;\n}\n\n.bg__container{\n    width: 100%;\n    padding: 15px 0px;\n    background-color: var(--background-color-header-footer);\n}\n\n\n.header__nav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.header__nav--link-logo {\n    display: flex;\n    align-items: center;\n    width: 230px;\n    color: var(--color-primary-titles);\n    font-size: 24px;\n    font-weight: 700;\n\n    &-icon {\n        width: 75px;\n        height: 50px;\n    }\n}\n\n\n.header__nav--button-menu {\n    width: 55px;\n    height: 45px;\n\n    &-icon {\n        width: 55px;\n            height: 45px;\n    }\n}\n\n//mobile menu \n.mobile-menu__container{\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    align-items: flex-start;\n    max-width: 768px;\n        height: 100%;\n        padding-left: 20px;\n        padding-right: 20px;\n        background-color: var(--background-color-mob-menu);\n}\n.mobile-menu__btn-close{\n    width: 40px;\n    height: 25px;\n    margin-top: 15px;\n    color: var(--color-icons);\n    &:hover, &:focus {\n        color: var(--color-hover-text);\n        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n\n    &--icon {\n        width: 45px;\n        height: 25px;\n        fill: currentColor;\n    }\n \n}\n.mobile-menu__nav--list{\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n\n    margin-top: 50px;\n\n    font-size: 22px;\n    font-weight: 600;\n}\n.mobile-menu__nav--list-link{\n    color: var(--color-links-header);\n\n    &:hover, &:focus {\n        color: var(--color-hover-text);\n    }\n}\n.mobile-menu--contacts-title{\n    margin-top: 50px;\n    margin-bottom: 15px;\n\n    color: var(--color-primary-titles);\n}\n.mobile-menu__contacts--list{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-items: flex-start;\n}\n.mobile-menu__contacts--icon{\n    height: 30px;\n    width: 30px;\n}\n.mobile-menu__contacts--container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n}\n.mobile-menu__contacts--item-mail{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n.mobile-menu__contacts--link-mail{   \n    color: var(--color-text-footer-mail);\n}\n.mobile-menu__contacts--link-social{\n    display: block;\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.mobile-menu__nav--list-item{\n    position: relative;\n}\n.mobile-menu {\n    overflow-y: scroll;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 100;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff;\n    opacity: 0;\n    visibility: hidden;\n    pointer-events: none;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n}\n.mobile-menu.is-open {\n    opacity: 1;\n    visibility: visible;\n    pointer-events: auto;\n}\n\n\n@media screen and (min-width:768px) {\n   .header__nav--link-logo{\n    width: 280px;\n    font-size: 32px;\n\n    &-icon {\n        width: 95px;\n        height: 60px;\n    }\n   }\n\n   .header__nav--button-menu {\n       width: 80px;\n       height: 60px;\n\n       &-icon {\n           width: 80px;\n           height: 60px;\n       }\n   }\n   \n}\n\n@media screen and (min-width:1000px) {\n    .mobile-menu {\n        display: none;\n    }\n    .header__nav--button-menu{\n        display: none;\n    }\n    .header__nav {\n        justify-content: start;\n        gap: 60px;\n    }\n    .nav__list {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            gap: 15px;\n    \n            font-size: 20px;\n            font-weight: 600;\n    \n            &--link {\n                color: var(--color-links-header);\n                display: flex;\n                justify-content: center;\n                align-items: center;\n\n                &:hover, &:focus{\n                    color: var(--color-hover-text);\n                    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n                }\n            }\n\n            &--item {\n                position: relative;\n            }\n    \n    }\n\n\n}\n\n@media screen and (min-width:1200px) {\n    .header__nav{\n       gap: 80px;\n    }\n    .nav__list {\n            gap: 20px;\n            font-size: 24px;\n   }\n  .header__nav--link-logo {\n      width: 320px;\n      font-size: 34px;\n\n      &-icon {\n          width: 105px;\n          height: 70px;\n      }\n  }\n}\n\n@media screen and (min-width:1440px) {\n    .header__nav {\n        gap: 90px;\n    }\n\n    .nav__list {\n        gap: 25px;\n\n        font-size: 28px;\n    }\n\n    .header__nav--link-logo {\n        width: 360px;\n        font-size: 36px;\n\n        &-icon {\n            width: 135px;\n            height: 85px;\n        }\n    }\n}\n\n\n","\n.hero__container {\n    position: relative;\n    height: 250px;\n    padding-top: 0;\n    background-image: url('images/home-page/map-mob.png');\n    background-repeat: no-repeat;\n    background-size: 100% 230px;\n}\n.hero__title {\n    font-family: var(--font-family-titles);\n    font-size: 22px;\n    text-align: center;\n    text-transform: uppercase;\n    color: var(--color-home-title);\n    padding-top: 200px;\n}\n\n.hero__link{\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    text-align: center;\n    max-width: 50px;\n    font-size:8px;\n    font-weight: 500;\n    color: var(--color-hero-links);\n\n    &:hover, &:focus {\n        color: var(--color-hover-text);\n        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n}\n.hero__link--greenland{\n    top: 3.3%;\n    left: 29.5%;\n}\n.hero__link--na{\n    top: 24%;\n    left: 14%;\n}\n.hero__link--sa {\n    top: 54.3%;\n    left: 27.1%;\n}\n.hero__link--africa {\n    top: 42.5%;\n    left: 48%;\n}\n.hero__link--europe {\n    top: 21%;\n    left: 55%;\n}\n.hero__link--asia {\n    top: 23%;\n    left: 78%;\n}\n.hero__link--au {\n    top:65.7%;\n    left: 78.2%;\n}\n\n@media screen and (min-width: 410px) {\n    .hero__link {\n        font-size: 10px;\n    }\n}\n\n@media screen and (min-width:768px) {\n    .hero__container {\n        height: 415px;\n        background-image: url('images/home-page/world-map-tablet.png');\n        background-size: 100% 390px;\n    }\n    .hero__title{\n        font-size: 38px;\n        padding-top: 330px;\n    }\n    .hero__link{\n        font-size: 16px;\n        max-width: 70px;\n\n        &--greenland{\n            top: 3.4%;\n            left: 30%;\n        }\n        &--na{\n            top: 25%;\n            left: 14%;\n        }\n        &--sa{\n            top: 58%;\n            left: 27.7%;\n        }\n        &--africa{\n            top: 44.2%;\n            left: 48%;\n        }\n        &--europe{\n            top: 22.1%;\n            left: 55.5%;\n        }\n        &--asia{\n            top: 26%;\n            left: 77%;\n        }\n        &--au{\n            top: 68.8%;\n            left: 79.3%;\n        }\n    }\n}\n\n@media screen and (min-width:1000px) {\n    .hero__container {\n        height: 560px;\n        background-size: 100% 530px;\n    }\n\n    .hero__title {\n        font-size: 50px;\n        padding-top: 450px;\n    }\n\n    .hero__link {\n        font-size: 22px;\n        max-width: 90px;\n\n        &--greenland {\n            top: 3%;\n        }\n\n        &--na {\n            top: 25.3%;\n        }\n\n        &--sa {\n            top: 58.3%;\n            left: 27.2%;\n        }\n\n        &--africa {\n            top: 46%;\n        }\n\n        &--europe {\n            top: 22%;\n            left: 55%;\n        }\n\n        &--asia {\n            top: 26%;\n        }\n\n        &--au {\n            top: 69.5%;\n        }\n    }\n}\n\n@media screen and (min-width:1200px) {\n\n    .hero__container {\n        height: 630px;\n        background-image: url('images/home-page/world-map-desktop.png');\n        background-size: 100% 600px;\n    }\n\n    .hero__title {\n        font-size: 55px;\n        padding-top: 510px;\n    }\n\n    .hero__link {\n        font-size: 24px;\n        max-width: 100px;\n\n        &--greenland {\n            top: 3%;\n            left: 30.5%;\n        }\n\n        &--na {\n            top: 26.5%;\n            left: 14.5%;\n        }\n\n        &--sa {\n            top: 59.8%;\n            left: 27.7%;\n        }\n\n        &--africa {\n            top: 46.5%;\n        }\n\n        &--europe {\n            top: 24%;\n            left: 54%;\n        }\n\n        &--asia{\n            top: 26%;\n        }\n\n        &--au {\n            top: 71.5%;\n            left: 80%;\n        }\n\n    }\n}\n\n@media screen and (min-width:1440px) {\n\n    .hero__container {\n        height: 730px;\n        background-size: 100% 680px;\n    }\n\n    .hero__title {\n        font-size: 72px;\n        padding-top: 570px;\n    }\n\n    .hero__link {\n        font-size: 26px;\n        max-width: 110px;\n\n        &--greenland {\n            top: 3%;\n            left: 31%;\n        }\n        &--na {\n            top: 26%;\n        }\n        &--sa {\n            top: 58.5%;\n            left: 28%;\n        }\n        &--africa {\n            top: 45%;\n        }\n        &--europe {\n            top: 23.5%;\n        }\n        &--asia{\n            top: 25.5%;\n            left: 78.5%;\n        }\n\n        &--au {\n            top: 69.5%;\n            left: 80%;\n        }\n    }\n}\n",".hero-continets{\n    padding: 0;\n}\n\n.hero-continents__container {\n        position: relative;\n        padding: 0;\n        height: 290px;\n        background-image: url('images/continents-page/hero-continents-mobile.jpg');\n        background-repeat: no-repeat;\n        background-size: 100% 290px;\n}\n\n.hero-continents__title{\n    text-transform: uppercase;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 115px;\n    width: 100%;\n    height: 50px;\n    color: var(--color-hover-text);\n    background-color: rgba(1, 24, 60, 0.15);\n    font-size: 24px;\n}\n\n@media screen and (min-width:768px) {\n    .hero-continents__container{\n        width: 100%;\n        height: 410px;\n        background-image: url('images/continents-page/hero-continents-tablet.jpg');\n        background-size: 100% 410px;\n    }\n\n    .hero-continents__title {\n        height: 80px;\n        font-size: 42px;\n        padding-top: 165px;\n    }\n\n    \n}\n\n@media screen and (min-width:1000px) {\n    \n.hero-continents__container{\n    height: 520px;\n    background-size: 100% 520px;\n}\n.hero-continents__title {\n    height: 85px;\n    font-size: 50px;\n    padding-top: 235px;\n}\n}\n\n@media screen and (min-width:1200px) {\n    .hero-continents__container {\n        width: 100%;\n        height: 650px;\n        background-image: url('images/continents-page/hero-continents-desktop.jpg');\n        background-size: 100% 650px;\n    }\n\n    .hero-continents__title {\n        height: 100px;\n        font-size: 70px;\n        padding-top: 305px;\n    }\n\n\n}\n\n@media screen and (min-width:1440px) {\n    .hero-continents__container {\n        width: 100%;\n        height: 770px;\n        background-image: url('images/continents-page/hero-continents-desktop.jpg');\n        background-size: 100% 770px;\n    }\n\n    .hero-continents__title {\n        height: 130px;\n        font-size: 85px;\n        padding-top: 360px;\n    }\n\n\n}",".hero-country {\n    padding: 0;\n\n}\n\n.hero-country__container {\n    position: relative;\n    padding: 0;\n    height: 290px;\n    background-repeat: no-repeat;\n    background-size: 100% 290px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    justify-content: center;\n    align-items: center;\n}\n\n.hero-country__title{\n    color: var(--color-hover-text);\n    font-family: var(--font-family-titles);\n    text-align: center;\n}\n.hero-country__name{\n    text-transform: uppercase;\n    font-size: 33px;\n}\n.hero-country__capital {\n    font-size: 18px\n}\n\n.hero-country__list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.title-features {\n    font-weight: 700;\n}",".hero-sa{\n    padding: 0;\n}\n.hero-sa__container{\n        padding: 0;\n        height: 290px;\n        background-image: linear-gradient(to right,\n            rgba(0, 21, 52, 0.3),\n            rgba(0, 21, 52, 0.3)),\n            url('images/continents-page/hero-sa-mob.jpg');\n            background-repeat: no-repeat;\n            background-size: 100% 290px;\n}\n.continent__title-right{\n    padding-top: 100px;\n    color: hsla(58, 100%, 50%, 0.75);\n    text-align: end;\n    font-size: 15px;\n    margin-right: 20px;\n}\n.continent__title-right--uppercase {\n    display: block;\n    text-transform: uppercase;\n    margin-top: 10px;\n    margin-right: 23px;\n    font-size: 26px;\n    color: var(--color-hover-text);\n}\n\n.features__text{\n    margin-top: 15px;\n}\n\n.features__locations--list{\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n\n    margin-top: 15px;\n\n    // list-style: inside url('images/continents-page/chilie-icon.svg');\n   \n}\n\n.features__location--image {\n     width: 100%;\n     margin-top: 10px;\n\n }\n\n .features__locations--item {\n    position: relative;\n }\n\n .features__locations--text{\n        \n        padding-left: 26px;\n\n        &::after {\n            content: \"\";\n            position: absolute;\n            top: 3px;\n            left: 0;\n            width: 20px;\n            height: 40px;\n            background-size: cover;\n            background-image: url(\"images/continents-page/chilie-icon.svg\");\n        }\n\n }\n\n@media screen and (min-width:768px) {\n    .hero-sa__container {\n            width: 100%;\n            height: 450px;\n            background-image: linear-gradient(to right,\n                    rgba(0, 21, 52, 0.3),\n                    rgba(0, 21, 52, 0.3)),\n                url('images/continents-page/hero-sa-tablet.jpg');\n            background-size: 100% 450px;\n    }\n        .continent__title-right {\n            padding-top: 155px;\n            font-size: 28px;\n            margin-right: 28px;\n        }\n    \n        .continent__title-right--uppercase {\n            margin-top: 20px;\n            margin-right: 23px;\n            font-size: 50px;\n        }\n\n        .features__locations--item{\n            display: flex;\n            justify-content: space-between;\n            \n\n            line-height: 1.1;\n        }\n\n       .features__location--image {\n                    width: 160px;\n                    height: 171px;\n                    object-fit: cover;\n                    margin-top: 0;\n        \n        }\n\n\n}\n\n@media screen and (min-width:1000px) {\n    .hero-sa__container {\n        height: 570px;\n        background-size: 100% 570px;\n    }\n\n    .continent__title-right {\n        padding-top: 200px;\n        font-size: 36px;\n        margin-right: 50px;\n    }\n\n    .continent__title-right--uppercase {\n        margin-top: 25px;\n        margin-right: 35px;\n        font-size: 58px;\n    }\n\n    \n           .features__location--image {\n               width: 230px;\n               height: 150px;\n    \n           }\n\n\n}\n\n@media screen and (min-width:1200px) {\n    .hero-sa__container {\n        height: 750px;\n        background-image: linear-gradient(to right,\n                rgba(0, 21, 52, 0.3),\n                rgba(0, 21, 52, 0.3)),\n            url('images/continents-page/hero-sa-desktop.jpg');\n        background-size: 100% 750px;\n    }\n\n    .continent__title-right {\n        padding-top: 255px;\n        font-size: 44px;\n        margin-right: 55px;\n    }\n\n    .continent__title-right--uppercase {\n        margin-top: 30px;\n        margin-right: 45px;\n        font-size: 78px;\n    }\n\n                .features__location--image {\n                    width: 260px;\n                    height: 170px;\n        \n                }\n}\n\n@media screen and (min-width:1440px) {\n    .hero-sa__container {\n        height: 770px;\n        background-size: 100% 770px;\n    }\n\n    .continent__title-right {\n        padding-top: 265px;\n        font-size: 50px;\n        margin-right: 65px;\n    }\n\n    .continent__title-right--uppercase {\n        margin-top: 30px;\n        margin-right: 55px;\n        font-size: 90px;\n    }\n\n    \n\n}",".about__list{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 15px;\n\n    font-size: 15px;\n    color: var(--color-primary-text);\n\n\n    &--item{\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 10px;\n    }\n\n}\n\n.about__list--icon{\n    fill: var(--color-icons-buttons-home);\n    stroke-width: 0.15px;\n    stroke: rgba(132, 109, 109, 0.80);\n    width: 40px;\n    height: 40px;\n}\n\n.about__list--text-bold{\n    font-family: var(--font-family-titles);\n    \n}\n\n@media screen and (min-width: 410px) {\n   .about__list {\n    font-size: 16px;\n   }\n}\n\n@media screen and (min-width: 768px) {\n    .about__list {\n        height: 470px;\n\n        font-size: 16px;\n        flex-direction: column;\n        flex-wrap: wrap;\n        gap: 20px;\n\n        &--item {\n            width: 355px;\n        }\n\n        &--icon {\n            width: 45px;\n            height: 45px;\n        }\n    }\n}\n\n@media screen and (min-width: 1000px) {\n    .about__list {\n        height: 460px;\n        font-size: 18px;\n        gap: 20px;\n\n        &--item {\n            width: 460px;\n        }\n\n        &--icon {\n            width: 50px;\n            height: 50px;\n        }\n    }\n}\n\n@media screen and (min-width: 1200px) {\n    .about__list {\n        font-size: 20px;\n        gap: 25px;\n        height: 465px;\n\n        &--item {\n            width: 555px;\n        }\n\n        &--icon {\n            width: 55px;\n            height: 55px;\n        }\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .about__list {\n        font-size: 22px;\n        gap: 30px;\n\n        &--item {\n            width: 665px;\n        }\n\n        &--icon {\n            width: 60px;\n            height: 60px;\n        }\n    }\n}","\n.continents__list{\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n}\n.continents__link {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.continents__link--icon {\n    width: 270px;\n    height: 270px;\n    filter: drop-shadow(0px 5px 5px var(--color-shadow));\n}\n.continents__item{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    \n    height: 600px;\n    margin-top: 15px;\n}\n\n.continents__item--title{\n    font-weight: 700;\n}\n\n.continent__list{\n    list-style: inside url(images/point.svg);\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 5px;\n    \n}\n.continent__item {\n    margin-left: 15px;\n    width: 100%;\n}\n\n.continent__link--button{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 240px;\n    height: 47px;\n    text-align: center;\n    color: var(--color-hover-text);\n\n    border-radius: 25px;\n        border: 1px solid var(--color-border-btn);\n        background:var(--color-background-btn);\n        box-shadow: 2px 5px 5px 0px var(--color-shadow);\n\n    font-family: var(--font-family-titles);\n    font-size: 18px;\n\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n        background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n        border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover, &:focus {\n        border-color: var(--color-hover-text);\n        background-color: var(--color-hover-text);\n        color: var(--color-border-btn) ;\n        \n    }\n}\n\n@media screen and (min-width:768px) {\n    .continents__list{\n        flex-direction: row;\n        flex-wrap: wrap;\n        justify-content: center;\n        align-items: flex-start;\n    }\n    .continents__item{\n        width: 355px;\n        height: 620px;\n        align-items: center;\n   \n    }\n    .continent__item {\n            margin-left: 0px;\n        }\n\n}\n\n@media screen and (min-width:1000px) {\n    .continents__item {\n        width: 425px;\n        height: 600px;\n    }\n}\n\n@media screen and (min-width:1200px) {\n    .continents__item {\n        width: 365px;\n        height: 720px;\n    }\n    .continent__link--button{\n        width: 280px;\n        height: 55px;\n        font-size: 20px;\n    }\n}\n\n@media screen and (min-width:1440px) {\n    .continents__item {\n        width: 425px;\n        height:760px;\n    }\n}"," .author__list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n }\n\n .author__text--paragraph{\n    display: block;\n    margin-top: 10px;\n }\n\n .author__image{\n    display: block;\n    width: 100%;\n    margin-top: 10px;\n    border-radius: 25px;\n    box-shadow: 3px 6px 10px 0px var(--color-shadow);\n    \n }\n\n .author__text--social-link{\n    font-weight: 700;\n    color: var(--color-primary-text);\n\n    &:hover, &:focus {\n        color: var(--color-hover-current-link);\n        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n }\n\n @media screen and (min-width:1000px) {\n    .author__text {\n        font-size: 16px;\n        width: 530px;\n    }\n    .author__list {\n        gap: 20px;\n    }\n    .authot__list-item{\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n\n        &:first-child {\n            flex-direction: row-reverse;\n        }\n    }\n\n    .author__image {\n        width: 420px;\n        height: 300px;\n        margin: 0;\n    }\n\n }\n \n  @media screen and (min-width:1200px) {\n      .author__text {\n          font-size: 18px;\n          width: 630px;\n      }\n      .author__image {\n          width: 500px;\n          height: 350px;\n        border-radius: 50px;\n      }\n\n  }\n\n        @media screen and (min-width:1440px) {\n            .author__text {\n                font-size: 22px;\n                width: 800px;\n\n                line-height: 1.13;\n            }\n    \n            .author__image {\n                width: 570px;\n                height: 380px;\n                object-fit: cover;\n            }\n    \n        }",".countriesSAlist {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.countriesSAlink {\n    position: relative;\n    display: block;\n}\n\n.countriesSAimage {\n    width: 100%;\n    height: 255px;\n    object-fit: cover;\n    border-radius: 25px;\n    box-shadow: 3px 3px 5px 0px var(--color-shadow);\n\n}\n\n.countriesSAname {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    height: 55px;\n    width: 100%;\n    background-color: var(--color-bg-countries);\n    border-bottom-left-radius: 25px;\n    border-bottom-right-radius: 25px;\n    color: #FFF801;\n    font-family: var(--font-family-titles);\n    font-size: 21px;\n    text-transform: uppercase;\n}\n\n@media screen and (min-width:768px) {\n    .countriesSAlist {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        gap: 20px;\n    }\n\n    .countriesSAimage {\n        width: 355px;\n        height: 245px;\n        border-radius: 30px;\n    }\n\n    .countriesSAname {\n        height: 65px;\n        border-bottom-left-radius: 30px;\n        border-bottom-right-radius: 30px;\n        font-size: 24px;\n\n    }\n}\n\n@media screen and (min-width:1000px) {\n    .countriesSAlist {\n        gap: 30px;\n    }\n\n    .countriesSAimage {\n        width: 300px;\n        height: 205px;\n\n    }\n\n    .countriesSAname {\n        font-size: 26px;\n    }\n}\n\n@media screen and (min-width:1200px) {\n    .countriesSAlist {\n        gap: 35px;\n    }\n\n    .countriesSAimage {\n        width: 363px;\n        height: 245px;\n\n    }\n\n    .countriesSAname {\n        font-size: 28px;\n    }\n}\n\n@media screen and (min-width:1440px) {\n    .countriesSAlist {\n        gap: 45px;\n    }\n\n    .countriesSAimage {\n        width: 433px;\n        height: 285px;\n\n    }\n\n    .countriesSAname {\n        height: 75px;\n        font-size: 31px;\n    }\n}",".contacts__list {\n    display: flex;\n    flex-direction: column;\n    \n    gap: 15px;\n}\n.contacts__link--mail{\n    display: flex;\n    justify-content: center;\n    gap: 5px;\n    align-items: center;\n    text-align: center;\n    font-size: 16px;\n    margin-top: 5px;\n\n    color: var(--color-text-footer-mail);\n}\n\n.contacts__link--mail-icon, .social-links__link--icon{\n    width: 30px;\n    height: 30px;\n}\n\n\n.contacts-social__title, .contacts__title--mail {\n    text-align: center;\n    font-size: 16px;\n}\n\n\n.social-links__list {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n\n    margin-top: 10px;\n}\n\n.contacts-social__list {\n    display: flex;\n    justify-content: space-between;\n    \n}\n\n@media screen and (min-width:768px) {\n    .contacts__list{\n        margin-top: 20px;\n        flex-direction: row-reverse;\n        justify-content: center;\n        gap: 25px;\n    }\n\n    .contacts-social__list{\n        justify-content: start;\n        gap: 25px;\n    }\n\n        .contacts-social__title,\n        .contacts__title--mail {\n            font-size: 18px;\n        }\n\n    .contacts__link--mail {\n        margin-top: 15px;\n         font-size: 16px;\n    }\n    \n}\n\n@media screen and (min-width:1000px) {\n    .contacts__list {\n        margin-top: 25px;\n        gap: 65px;\n    }\n\n    .contacts-social__list {\n        gap: 65px;\n    }\n\n    .contacts-social__title,\n    .contacts__title--mail {\n        font-size: 22px;\n    }\n\n    .contacts__link--mail {\n        font-size: 20px;\n    }\n\n    .contacts__link--mail-icon, .social-links__link--icon {\n        width: 40px;\n        height: 40px;\n    }\n    \n    .social-links__list, .contacts__link--mail {\n        margin-top: 15px;\n    }\n\n    .social-links__list {\n        gap: 15px;\n    }\n}\n\n@media screen and (min-width:1200px) {\n    .contacts__list {\n        margin-top: 25px;\n        gap: 95px;\n    }\n\n    .contacts-social__list {\n        gap: 95px;\n    }\n\n    .contacts-social__title,\n    .contacts__title--mail {\n        font-size: 24px;\n    }\n\n    .contacts__link--mail {\n        font-size: 22px;\n    }\n\n}\n\n@media screen and (min-width:1440px) {\n    .contacts__list {\n        margin-top: 35px;\n        gap: 155px;\n    }\n\n    .contacts-social__list {\n        gap: 155px;\n    }\n\n    .contacts-social__title,\n    .contacts__title--mail {\n        font-size: 28px;\n    }\n\n    .contacts__link--mail {\n        font-size: 24px;\n    }\n\n}","\n.travel__list{\n    margin-top: 20px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    gap: 15px;\n    align-items: center;\n}\n.travel__title {\n    text-align: center;\n    font-size: 20px;\n    text-transform: uppercase;\n}\n\n.travel__link{\n    display: block;\n    width: 250px;\n    padding: 20px;\n    border: 1px solid var(--color-links-header);\n    color: var(--color-links-header);\n    border-radius: 30px;\n    text-align: center;\n    font-weight: 800;\n    font-size: 18px;\n    box-shadow: 2px 7px 7px 0px var(--color-shadow);\n\n    background-color: var(--color-icons-buttons-home);\n\n    &:hover, &:focus{\n        background-color: var(--color-links-header);\n        color: var(--color-icons-buttons-home);\n        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n        background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n}\n\n@media screen and (min-width:768px) {\n    .travel__list {\n        flex-direction: row;\n        gap: 40px;\n        margin-top: 25px;\n    }\n}\n\n@media screen and (min-width:1000px) {\n    .travel__list {\n        gap: 80px;\n        margin-top: 30px;\n    }\n    .travel__link{\n        font-size: 22px;\n        width: 270px;\n        padding: 25px;\n        border-radius: 40px;\n        border: 2px solid var(--color-links-header);\n    }\n    .travel__title {\n            font-size: 24px;\n    }\n}\n\n@media screen and (min-width:1200px) {\n    .travel__list {\n        gap: 100px;\n        margin-top: 40px;\n    }\n\n    .travel__link {\n        font-size: 24px;\n        width: 350px;\n        padding: 35px;\n        border-radius: 50px;\n        border: 2px solid var(--color-links-header);\n    }\n\n    .travel__title {\n        font-size: 30px;\n    }\n}\n\n@media screen and (min-width:1440px) {\n    .travel__list {\n        gap: 140px;\n        margin-top: 45px;\n    }\n\n    .travel__link {\n        font-size: 30px;\n        width: 390px;\n        padding: 45px;\n        border-radius: 60px;\n        border: 2px solid var(--color-links-header);\n    }\n\n    .travel__title {\n        font-size: 40px;\n    }\n}","\n.footer {\n    background-color: #ffffff;\n    width: 100%;\n    box-shadow: 4px 0px 35px 0px var(--box-shadow-color-header-footer);\n}\n\n.footer__container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 25px;\n}\n\n.footer__title {\n    font-family: var(--font-family-primary);\n    font-size: 18px;\n    font-weight: 700;\n    text-align: center;\n    color: var(--color-primary-text);\n}\n\n.footer__title {\n    margin-bottom: 15px;\n}\n\n.footer__nav--list{\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 10px;\n    align-items: center;\n   \n}\n.footer__nav--link {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 3px;\n    width: 105px;\n    color: var(--color-text-footer-mail);\n    font-size: 14px;\n    text-align: center;\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    \n        &:hover,\n        &:focus {\n            color: var(--color-hover-text);\n    \n        }\n\n        &-icon {\n            width: 15px;\n            height: 15px;\n\n            fill: currentColor;\n        }\n}\n\n.footer__contacts--link-icon {\n    width: 25px;\n    height: 25px;\n}\n\n.footer__contacts--list{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n}\n\n.footer__contacts--link{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n    color: var(--color-text-footer-mail);\n\n}\n\n.footer__contscts--style-box {\n    // width: 390px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 25px;\n\n}\n\n@media screen and (min-width:768px) {\n    .footer__container {\n            flex-direction: row;\n            flex-wrap: wrap;\n            justify-content: space-evenly;\n            gap: 25px;\n        }\n\n    .footer__nav--container, .footer__contacts--container{\n        width: 350px;\n    }\n    \n}\n\n\n\n// @media screen and (min-width:1000px) {\n//     .footer__container {\n//             gap: 15px;\n//             justify-content: space-between;\n//         }\n\n//         .footer__contscts--style-box {\n//             flex-direction: row-reverse;\n//             justify-content: space-between;\n//             align-items: center;\n//             gap: 15px;\n    \n//         }\n//         .footer__nav--container,\n//         .footer__contacts--container {\n//             width: 310px;\n//         }\n// }\n\n@media screen and (min-width:1200px) {\n    .footer__container {\n        gap: 15px;\n        justify-content: center;\n    }\n\n    .footer__nav--container , .footer__contacts--container{\n        width: 400px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    .footer__contscts--style-box {\n        flex-direction: row-reverse;\n        align-items: center;\n         gap: 15px;\n\n      }\n\n    .footer__nav--list{\n        width: 350px;\n    }\n}\n\n@media screen and (min-width:1440px) {\n    .footer__container {\n        gap: 15px;\n    }\n\n    .footer__nav--container, .footer__contacts--container {\n        width: 500px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .footer__nav--list {\n        width: 350px;\n\n    }\n\n        .footer__title {\n            margin-bottom: 20px;\n        }\n}\n\n",".current {\n    color: var(--color-hover-text);\n    padding-left: 21px;\n\n    &::after {\n        content: \"\";\n        position: absolute;\n        top: 2px;\n        left: 0;\n        width: 20px;\n        height: 20px;\n        background-size: cover;\n        background-image: url(\"images/icon-current.svg\");\n    }\n\n    &:hover, &:focus {\n        color: var(--color-hover-current-link);\n        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n\n    &:hover::after, &:focus::after {\n        background-image: url(\"images/current-hover-icon.svg\");\n        transition: background-image 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n}\n\n\n@media screen and (min-width:1000px) {\n    .current {\n        padding-left: 21px;\n\n        &::after {\n            content: \"\";\n            position: absolute;\n            top: 1px;\n            left: 0;\n            width: 20px;\n            height: 20px;\n\n        }\n    }\n}\n@media screen and (min-width:1200px) {\n    .current {\n        padding-left: 22px;\n        &::after {\n            content: \"\";\n            position: absolute;\n            top: 3px;\n            left: 0;\n            width: 21px;\n            height: 21px;\n\n        }\n    }\n}\n@media screen and (min-width:1440px) {\n    .current {\n            padding-left: 26px;\n            &::after {\n                content: \"\";\n                position: absolute;\n                top: 3px;\n                left: 0;\n                width: 25px;\n                height: 25px;\n\n            }\n        }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/favicon.png */ "./src/images/favicon.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/favicon.svg */ "./src/images/favicon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/symbol-defs.svg */ "./src/images/symbol-defs.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home-page/author1-tablet.jpg */ "./src/images/home-page/author1-tablet.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home-page/author1.jpg */ "./src/images/home-page/author1.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home-page/author2-tablet.jpg */ "./src/images/home-page/author2-tablet.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home-page/author2.jpg */ "./src/images/home-page/author2.jpg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-logo" });
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-mobile-menu" });
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-cancel" });
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-mail" });
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-insta" });
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-fb" });
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-planet" });
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-info" });
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-pages" });
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-data" });
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-youtube" });
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-home" });
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-continents" });
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-country" });
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-products" });
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-manual" });
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-contacts" });
var ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-about" });
var ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-author" });
var code = "<!DOCTYPE html>\n<html lang=\"uk\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap\" rel=\"stylesheet\">\n\n    <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/png\">\n    <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" type=\"image/svg\">\n\n    <title>Гастрономічний гід головна сторінка</title>\n</head>\n<body>\n    <!--Header site-->\n<header class=\"header\">\n    <div class=\"bg__container\">\n        <div class=\"container header__container\">\n        <nav class=\"header__nav\">\n            <a class=\"header__nav--link-logo\" href=\"index.html\"> \n              <span>Gastro</span>\n              <svg class=\"header__nav--link-logo-icon\">\n                 <use href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"></use>\n              </svg>\n              <span>Guide</span>\n            </a>\n\n            <ul class=\"nav__list\">\n                <li class=\"nav__list--item\">\n                    <a href=\"./index.html\" class=\"nav__list--link current\">Головна</a>\n                </li>\n                <li class=\"nav__list--item\">\n                    <a href=\"./pages/continents.html\" class=\"nav__list--link\">Континенти</a>\n                </li>\n                <li class=\"nav__list--item\">\n                    <a href=\"./pages/countries.html\" class=\"nav__list--link\">Країни</a>\n                </li>\n                <li class=\"nav__list--item\">\n                    <a href=\"./pages/products.html\" class=\"nav__list--link\">Продукти</a>\n                </li>\n                <li class=\"nav__list--item\">\n                    <a href=\"./pages/manual.html\" class=\"nav__list--link\">Довідник</a>\n                </li>\n            </ul>\n            <!--Open Mobile menu button-->\n            <button class=\"header__nav--button-menu js-open-btn\">\n                <svg class=\"header__nav--button-menu-icon\">\n                    <use href=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"></use>\n                </svg>\n            </button>\n        </nav>\n    </div>\n    </div>\n     <!--Mobile menu-->\n        <div class=\"mobile-menu js-mobile-menu\">\n            <div class=\"container mobile-menu__container\">\n                <button class=\"mobile-menu__btn-close js-close-btn\">\n                    <svg class=\"mobile-menu__btn-close--icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"></use>\n                    </svg>\n                </button>\n\n              <div>\n\n                <ul class=\"mobile-menu__nav--list\">\n                <li class=\"mobile-menu__nav--list-item\"><a href=\"./index.html\" class=\"mobile-menu__nav--list-link current\">Головна</a></li>\n                <li class=\"mobile-menu__nav--list-item\"><a href=\"./pages/continents.html\" class=\"mobile-menu__nav--list-link\">Континенти</a></li>\n                <li class=\"mobile-menu__nav--list-item\"><a href=\"./pages/countries.html\" class=\"mobile-menu__nav--list-link\">Країни</a></li>\n                <li class=\"mobile-menu__nav--list-item\"><a href=\"./pages/products.html\" class=\"mobile-menu__nav--list-link\">Продукти</a></li>\n                <li class=\"mobile-menu__nav--list-item\"><a href=\"./pages/manual.html\" class=\"mobile-menu__nav--list-link\">Довідник</a></li>\n               </ul>\n\n               <ul class=\"mobile-menu__nav--list\">\n                <li class=\"mobile-menu__nav--list-item\"><a href=\"./index.html#recource\" class=\"mobile-menu__nav--list-link js-link\">Про ресурс</a></li>\n                <li class=\"mobile-menu__nav--list-item\"><a href=\"./index.html#author\" class=\"mobile-menu__nav--list-link js-link\">Про атвора</a></li>\n                <li class=\"mobile-menu__nav--list-item\"><a href=\"./index.html#contacts\" class=\"mobile-menu__nav--list-link js-link\">Контакти</a></li>\n               </ul>\n\n               <h3 class=\"mobile-menu--contacts-title\">Зворотній звʼязок</h3>\n               <ul class=\"mobile-menu__contacts--list\">\n                <li class=\"mobile-menu__contacts--item-mail\">\n                    <svg class=\"mobile-menu__contacts--icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"></use>\n                    </svg>\n                    <a class=\"mobile-menu__contacts--link-mail\" href=\"mailto:gastroguide@ukr.net\">gastroguide@ukr.net</a>\n                </li>\n                <div class=\"mobile-menu__contacts--container\">\n                <li class=\"mobile-menu__contacts--item\">\n                    <a class=\"mobile-menu__contacts--link-social\" href=\"https://instagram.com/_gastroguide?igshid=NTc4MTIwNjQ2YQ==\">\n                    <svg class=\"mobile-menu__contacts--icon-social mobile-menu__contacts--icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"></use>\n                    </svg>\n                </a></li>\n                <li class=\"mobile-menu__contacts--item\">\n                    <a class=\"mobile-menu__contacts--link-social\" href=\"#\">\n                    <svg class=\"mobile-menu__contacts--icon-social mobile-menu__contacts--icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"></use>\n                    </svg>\n                </a></li>\n                </div>\n               </ul>\n              </div>\n            </div>\n        </div>\n</header>\n\n<!--Main content-->\n<main>\n    <!--hero section-->\n    <section class=\"section hero\">\n        <div class=\"container hero__container\">\n            <a class=\"hero__link hero__link--greenland\" href=\"./pages/continents/north-america.html\">Greenland</a>\n            <a class=\"hero__link hero__link--na\" href=\"./pages/continents/north-america.html\">North <br> America</a>\n            <a class=\"hero__link hero__link--sa\" href=\"./pages/continents/south-america.html\">South <br> America</a>\n            <a class=\"hero__link hero__link--africa\" href=\"./pages/continents/africa.html\">Africa</a>\n            <a class=\"hero__link hero__link--europe\" href=\"./pages/continents/europe.html\">Europe</a>\n            <a class=\"hero__link hero__link--asia\" href=\"./pages/continents/asia.html\">Asia</a>\n            <a class=\"hero__link hero__link--au\" href=\"./pages/continents/australia.html\">Australia</a>\n\n            <h1 class=\"hero__title\">КУХНІ СВІТУ <br> ТРАДИЦІЇ ТА ОСОБЛИВОСТІ</h1>\n            \n        </div>\n    </section>\n\n    <!--About section-->\n    <section class=\"section about\" id=\"recource\">\n        <div class=\"container about__container\">\n            <h2 class=\"about__title section__title\" >Про ресурс</h2>\n            <ul class=\"about__list\">\n                <li class=\"about__list--item\">\n                    <div><svg class=\"about__list--icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"></use>\n                    </svg></div>\n                    <p class=\"about__list--text\" >\n                    <span class=\"about__list--text-bold\">Gastro Guide </span> – це путівник у світі кулінарії, який пропонує захоплюючу подорож через різноманітні гастрономічні культури. Хоча харчування є невід'ємною потребою життя, воно також має соціальне значення і приносить людині задоволення. \n                     У різних країнах існують унікальні традиції приготування їжі, особливості використання продуктів та кулінарні мистецтва з багатою історією.\n                    </p>\n                </li>\n                <li class=\"about__list--item\">\n                   <div> <svg class=\"about__list--icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"></use>\n                    </svg></div>\n                    <p class=\"about__list--text\"> <span class=\"about__list--text-bold\">Gastro Guide</span> є джерелом інформації, наповнений цікавими даними про різні культури і традиції харчування по всьому світу. Крім того, друга тема, якій тут приділяється увага, – це користь харчування та вплив харчових продуктів на організм людини. \n                        Важливо пам'ятати, яке значення має харчування для здоров'я.\n                    </p>\n                </li>\n                <li class=\"about__list--item\" >\n                    <div><svg class=\"about__list--icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"></use>\n                    </svg></div>\n                    <p class=\"about__list--text\"> На кожній сторінці, присвяченій певній країні, можна знайти захоплюючу інформацію про її особливості, традиційні страви, місцеві продукти та культуру. \n                        В описі кожної страви представлена докладна інформація про її приготування та корисні відомості про харчову цінність та склад інгредієнтів. Це допоможе зробити висновки про корисність представлених рецептів для власного споживання.\n                    </p>\n                </li>\n                <li class=\"about__list--item\">\n                    <div><svg class=\"about__list--icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"></use>\n                    </svg></div>\n                    <p class=\"about__list--text\">\n                        Додатково, на решті сторінок гастрономічного гіда представлена цінна інформація про макро- і мікроелементи, що містяться в продуктах, а також доступний повний хімічний склад деяких з найпопулярніших продуктів харчування. Важливо, що ці дані регулярно оновлюватимуться і доповнюватимуть у майбутньому.\n                    </p>\n                </li>\n            </ul>\n        </div>\n    </section>\n\n    <!--Author section-->\n    <section class=\"section author\" >\n        <div class=\"container author__container\">\n            <h2 class=\"section__title\" id=\"author\">Про автора</h2>\n            <ul class=\"author__list\">\n                <li class=\"authot__list-item\">\n                    <p class=\"author__text\">Ласкаво прошу на унікальний та пізнавальний ресурс!\n                        Мене звуть Шеремет Єлизавета, і я народилася у чудовому місті Одеса, яке знаходиться в Україні. \n                        <span class=\"author__text--paragraph\">Я володію двома вищими освітами: одна в галузі технологій харчування, а інша в комп'ютерних науках. Той проект, з яким ви зараз знайомитеся, є результатом моєї магістерської дипломної роботи з другої вищої освіти. Враховуючи актуальність обох галузей, у мене з'явилася приголомшлива ідея об'єднати ці знання та створити цікавий інформаційний ресурс, в який я вклала всі отримані мною знання в обох галузях, доповнених даними з інтернету та літератури.</span>                        \n                        <span class=\"author__text--paragraph\">Для мене це не просто дипломна робота чи ще один проект, я вкладаю душу у кожне слово та думку, які хочу передати суспільству. Я впевнена, що цей ресурс стане справжньою знахідкою для мандрівників, гурманів та всіх, кому цікаво пізнавати нове.</span>\n                    </p>\n                    <picture>\n                        <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\"\n                                        type=\"image/jpeg\"\n                                        media=\"(min-width:768px)\"/>\n                        <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"\n                                        type=\"image/jpeg\"\n                                        media=\"(max-width:767px)\"/>\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"Шеремет Єлизавета - автор сайту гастро гід\" class=\"author__image\">\n                    </picture>\n                </li>\n                <li class=\"authot__list-item\">\n                    <p class=\"author__text\">\n                        Мої знання у сфері харчування людини підкріплені як теорією, а й практикою. Я перевіряла та застосовувала безліч теоретичних знань під час приготування страв, проводила різні експерименти, які враховувала при збиранні всієї необхідної інформації, якою зараз ділюся з вами тут.\n                       <span class=\"author__text--paragraph\">У мене також є особистий кулінарний блог у <a class=\"author__text--social-link\" href=\"https://instagram.com/liza_gotovit?igshid=NTc4MTIwNjQ2YQ==\" target=\"_blank\">Instagram</a> та <a class=\"author__text--social-link\" href=\"https://www.youtube.com/@user-oq6eh1kn3u\" target=\"_blank\">YouTube-канал</a>, де можна переглянути процеси приготування деяких страв, які представлені на цьому сайті. Я завжди відкрита для будь-яких пропозицій та зауважень, оскільки вони допоможуть зробити цей ресурс максимально корисним для кожного. Мені хочеться продовжувати розвивати цей проект, покращувати інтерфейс, додавати нові можливості, наповнювати його новими рецептами, оновлювати дані про продукти, і тому я буду рада будь-якому зворотному зв'язку. Адже розвиватись треба разом.</span>\n                       <span class=\"author__text--paragraph\">Дякую вам за увагу та знайомство зі мною. Я сподіваюся, що вам сподобається мій гастрономічний гід. Приємної подорожі світом смаків!</span>\n                    </p>\n                    <picture>\n                        <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\n                                        type=\"image/jpeg\"\n                                        media=\"(min-width:768px)\"/>\n                        <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\"\n                                        type=\"image/jpeg\"\n                                        media=\"(max-width:767px)\"/>\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Авторка сайту Gastro Guide - Єлизавета Шеремет\" class=\"author__image\">\n                    </picture>\n                </li>\n            </ul>\n        </div>\n    </section>\n\n    <!--Contacts-->\n    <section class=\"section contacts\" id=\"contacts\">\n        <div class=\"container contacts__container\">\n            <h2 class=\"section__title\">Контактна інформація</h2>\n            <ul class=\"contacts__list\">\n                <li class=\"contacts__list--item\">\n                    <ul class=\"contacts-social__list\">\n                       <li class=\"contacts-social__item\">\n                        <h3 class=\"contacts-social__title\">Соціальні мережі</h3>\n                        <ul class=\"social-links__list\">\n                            <li class=\"social-links__item\">\n                                <a href=\"https://instagram.com/_gastroguide?igshid=NTc4MTIwNjQ2YQ==\" class=\"social-links__link\" target=\"_blank\">\n                                    <svg class=\"social-links__link--icon\">\n                                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"></use>\n                                    </svg>\n                                </a>\n                            </li>\n                            <li class=\"social-links__item\">\n                                <a href=\"\" class=\"social-links__link\" target=\"_blank\">\n                                    <svg class=\"social-links__link--icon\">\n                                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"></use>\n                                    </svg>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                       <li class=\"contacts-social__item\">\n                        <h3 class=\"contacts-social__title\">Соціальні мережі автора</h3>\n                        <ul class=\"social-links__list\">\n                            <li class=\"social-links__item\">\n                                <a href=\"https://instagram.com/liza_gotovit?igshid=NTc4MTIwNjQ2YQ==\" class=\"social-links__link\" target=\"_blank\">\n                                    <svg class=\"social-links__link--icon\">\n                                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"></use>\n                                    </svg>\n                                </a>\n                            </li>\n                            <li class=\"social-links__item\">\n                                <a href=\"https://www.facebook.com/elizabethsheremet\" class=\"social-links__link\" target=\"_blank\">\n                                    <svg class=\"social-links__link--icon\">\n                                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"></use>\n                                    </svg>\n                                </a>\n                            </li>\n                            <li class=\"social-links__item\">\n                                <a href=\"https://www.youtube.com/@user-oq6eh1kn3u\" class=\"social-links__link\" target=\"_blank\">\n                                    <svg class=\"social-links__link--icon\">\n                                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\"></use>\n                                    </svg>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                    </ul>\n                </li>\n\n                <li class=\"contacts__list--item\">\n                    <h3 class=\"contacts__title--mail\">Зворотній звʼязок</h3>\n                    <a class=\"contacts__link--mail\" href=\"mailto:gastroguide@ukr.net\">\n                        <svg class=\"contacts__link--mail-icon\">\n                            <use href=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"></use>\n                        </svg>\n                        gastroguide@ukr.net</a>\n                </li>\n            </ul>\n        </div>\n    </section>\n\n    <!--Travel-->\n    <section class=\"section travel\">\n        <div class=\"container travel__container\">\n            <h2 class=\"section__title travel__title\">Розпочати подорож</h2>\n            <ul class=\"travel__list\">\n                <li class=\"travel__item\"><a href=\"./pages/continents.html\" class=\"travel__link\">Обрати континент</a></li>\n                <li class=\"travel__item\"><a href=\"./pages/countries.html\" class=\"travel__link\">Обрати країну</a></li>\n            </ul>\n        </div>\n    </section>\n</main>\n\n<!--Footer site -->\n<footer class=\"footer\">\n    <div class=\"bg__container\">\n        <div class=\"container footer__container\">\n            <div class=\"footer__nav--container\">\n                <h3 class=\"section__title footer__title\">Навігація по сайту</h3>\n            <ul class=\"footer__nav--list\">\n                <li class=\"footer__nav--item\">\n                    <a href=\"./index.html\" class=\"footer__nav--link\"><svg class=\"footer__nav--link-icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\"></use>\n                    </svg>Головна</a>\n                </li>\n                <li class=\"footer__nav--item\">\n                    <a href=\"./pages/continents.html\" class=\"footer__nav--link\"><svg class=\"footer__nav--link-icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\"></use>\n                    </svg>Континенти</a>\n                </li>\n                <li class=\"footer__nav--item\">\n                    <a href=\"./pages/countries.html\" class=\"footer__nav--link\"><svg class=\"footer__nav--link-icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\"></use>\n                    </svg>Країни</a>\n                </li>\n                <li class=\"footer__nav--item\">\n                    <a href=\"./pages/products.html\" class=\"footer__nav--link\"><svg class=\"footer__nav--link-icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\"></use>\n                    </svg>Продукти</a>\n                </li>\n                <li class=\"footer__nav--item\">\n                    <a href=\"./pages/manual.html\" class=\"footer__nav--link\"><svg class=\"footer__nav--link-icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\"></use>\n                    </svg>Довідник</a>\n                </li>\n                 <li class=\"footer__nav--item\">\n                    <a href=\"./index.html#contacts\" class=\"footer__nav--link\"><svg class=\"footer__nav--link-icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\"></use>\n                    </svg>Контакти</a>\n                </li>\n                <li class=\"footer__nav--item\">\n                    <a href=\"./index.html#recource\" class=\"footer__nav--link\"><svg class=\"footer__nav--link-icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\"></use>\n                    </svg>Про ресурс</a>\n                </li>\n                <li class=\"footer__nav--item\">\n                    <a href=\"./index.html#author\" class=\"footer__nav--link\"><svg class=\"footer__nav--link-icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\"></use>\n                    </svg>Про автора</a>\n                </li>\n            </ul>\n            </div>\n\n            <div class=\"footer__contscts--style-box\">\n            <div class=\"footer__contacts--container\">\n                <h3 class=\"section__title footer__title\">Зворотній звʼязок</h3>\n            <ul class=\"footer__contacts--list\">\n                <li><a href=\"https://instagram.com/_gastroguide?igshid=NTc4MTIwNjQ2YQ==\" class=\"footer__contacts--link\"><svg class=\"footer__contacts--link-icon\" target=\"_blank\">\n                    <use href=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"></use>\n                </svg></a></li>\n                <li><a href=\"\" class=\"footer__contacts--link\"><svg class=\"footer__contacts--link-icon\" target=\"_blank\">\n                    <use href=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"></use>\n                </svg></a></li>\n                <li><a href=\"mailto:gastroguide@ukr.net\" class=\"footer__contacts--link\" target=\"_blank\"><svg class=\"footer__contacts--link-icon\">\n                    <use href=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"></use>\n                </svg>gastroguide@ukr.net</a></li>\n            </ul>\n            </div>\n\n            <a class=\"header__nav--link-logo footer__logo\" href=\"index.html\"> \n              <span>Gastro</span>\n              <svg class=\"header__nav--link-logo-icon\">\n                 <use href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"></use>\n              </svg>\n              <span>Guide</span>\n            </a>\n            </div>\n        </div>\n    </div>\n</footer>\n\n\n</body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/pages/continents.html":
/*!***********************************!*\
  !*** ./src/pages/continents.html ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/favicon.png */ "./src/images/favicon.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/favicon.svg */ "./src/images/favicon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/symbol-defs.svg */ "./src/images/symbol-defs.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/continents-page/europe-icon.svg */ "./src/images/continents-page/europe-icon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/continents-page/asia-icon.svg */ "./src/images/continents-page/asia-icon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/continents-page/africa-icon.svg */ "./src/images/continents-page/africa-icon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/continents-page/na-icon.svg */ "./src/images/continents-page/na-icon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../images/continents-page/sa-icon.svg */ "./src/images/continents-page/sa-icon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../images/continents-page/au-icon.svg */ "./src/images/continents-page/au-icon.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-logo" });
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-mobile-menu" });
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-cancel" });
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-mail" });
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-insta" });
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-fb" });
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-youtube" });
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-home" });
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-continents" });
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-country" });
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-products" });
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-manual" });
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-contacts" });
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-about" });
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___, { hash: "#icon-author" });
var code = "<!DOCTYPE html>\n<html lang=\"uk\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/png\">\n    <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" type=\"image/svg\">\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap\" rel=\"stylesheet\">\n\n    <title>Континенти</title>\n</head>\n<body>\n    <!--Header-->\n    <header class=\"header\">\n    <div class=\"bg__container\">\n        <div class=\"container header__container\">\n        <nav class=\"header__nav\">\n            <a class=\"header__nav--link-logo\" href=\"../index.html\"> \n              <span>Gastro</span>\n              <svg class=\"header__nav--link-logo-icon\">\n                 <use href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"></use>\n              </svg>\n              <span>Guide</span>\n            </a>\n\n            <ul class=\"nav__list\">\n                <li class=\"nav__list--item\">\n                    <a href=\"../index.html\" class=\"nav__list--link \">Головна</a>\n                </li>\n                <li class=\"nav__list--item\">\n                    <a href=\"./continents.html\" class=\"nav__list--link current\">Континенти</a>\n                </li>\n                <li class=\"nav__list--item\">\n                    <a href=\"./countries.html\" class=\"nav__list--link\">Країни</a>\n                </li>\n                <li class=\"nav__list--item\">\n                    <a href=\"./products.html\" class=\"nav__list--link\">Продукти</a>\n                </li>\n                <li class=\"nav__list--item\">\n                    <a href=\"./manual.html\" class=\"nav__list--link\">Довідник</a>\n                </li>\n            </ul>\n            <!--Open Mobile menu button-->\n            <button class=\"header__nav--button-menu js-open-btn\">\n                <svg class=\"header__nav--button-menu-icon\">\n                    <use href=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"></use>\n                </svg>\n            </button>\n        </nav>\n    </div>\n    </div>\n     <!--Mobile menu-->\n        <div class=\"mobile-menu js-mobile-menu\">\n            <div class=\"container mobile-menu__container\">\n                <button class=\"mobile-menu__btn-close js-close-btn\">\n                    <svg class=\"mobile-menu__btn-close--icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"></use>\n                    </svg>\n                </button>\n\n              <div>\n\n                <ul class=\"mobile-menu__nav--list\">\n                <li class=\"mobile-menu__nav--list-item\"><a href=\"../index.html\" class=\"mobile-menu__nav--list-link \">Головна</a></li>\n                <li class=\"mobile-menu__nav--list-item\"><a href=\"./continents.html\" class=\"mobile-menu__nav--list-link current\">Континенти</a></li>\n                <li class=\"mobile-menu__nav--list-item\"><a href=\"./countries.html\" class=\"mobile-menu__nav--list-link\">Країни</a></li>\n                <li class=\"mobile-menu__nav--list-item\"><a href=\"./products.html\" class=\"mobile-menu__nav--list-link\">Продукти</a></li>\n                <li class=\"mobile-menu__nav--list-item\"><a href=\"./manual.html\" class=\"mobile-menu__nav--list-link\">Довідник</a></li>\n               </ul>\n\n               <ul class=\"mobile-menu__nav--list\">\n                <li class=\"mobile-menu__nav--list-item\"><a href=\"../index.html#recource\" class=\"mobile-menu__nav--list-link js-link\">Про ресурс</a></li>\n                <li class=\"mobile-menu__nav--list-item\"><a href=\"../index.html#author\" class=\"mobile-menu__nav--list-link js-link\">Про атвора</a></li>\n                <li class=\"mobile-menu__nav--list-item\"><a href=\"../index.html#contacts\" class=\"mobile-menu__nav--list-link js-link\">Контакти</a></li>\n               </ul>\n\n               <h3 class=\"mobile-menu--contacts-title\">Зворотній звʼязок</h3>\n               <ul class=\"mobile-menu__contacts--list\">\n                <li class=\"mobile-menu__contacts--item-mail\">\n                    <svg class=\"mobile-menu__contacts--icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"></use>\n                    </svg>\n                    <a class=\"mobile-menu__contacts--link-mail\" href=\"mailto:gastroguide@ukr.net\">gastroguide@ukr.net</a>\n                </li>\n                <div class=\"mobile-menu__contacts--container\">\n                <li class=\"mobile-menu__contacts--item\">\n                    <a class=\"mobile-menu__contacts--link-social\" href=\"https://instagram.com/_gastroguide?igshid=NTc4MTIwNjQ2YQ==\">\n                    <svg class=\"mobile-menu__contacts--icon-social mobile-menu__contacts--icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"></use>\n                    </svg>\n                </a></li>\n                <li class=\"mobile-menu__contacts--item\">\n                    <a class=\"mobile-menu__contacts--link-social\" href=\"#\">\n                    <svg class=\"mobile-menu__contacts--icon-social mobile-menu__contacts--icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"></use>\n                    </svg>\n                </a></li>\n                </div>\n               </ul>\n              </div>\n            </div>\n        </div>\n    </header>\n\n    <!--Main content-->\n    <main>\n       <!--Hero-->\n       <section class=\"section hero-continets\">\n        <div class=\"container hero-continents__container\">\n           <h1 class=\"hero-continents__title section__title\">\n            Кухня континентів\n           </h1>\n        </div>\n       </section>\n\n       <!--Continental kitchen-->\n       <section class=\"section kitchen\">\n        <div class=\"container kitchen__container\">\n            <h2 class=\"section__title\">Континентальна кухня</h2>\n\n            <p class=\"kitchen__text\">На нашій величезній та багатій планеті Землі історично склалося так, що вона поділена на різні ділянки – континенти. Кожна з них має свої унікальні особливості, традиції харчування, вирощування продуктів і розведення худоби та птахів. Однак, є один із континентів, який не придатний ні для вирощування продуктів харчування, ні для розведення худоби, ні для розвитку культури харчування в цілому. </p>\n            <p class=\"kitchen__text\">Цим континентом є Антарктида, що асоціюється з вічною мерзлотою. Через особливості географічного положення та клімату на Антарктиді неможливо насолоджуватися процесами приготування та створення кулінарних шедеврів. Основним способом харчування на Антарктиді є імпорт різних консервів та заморожених напівфабрикатів. У той час як інші шість континентів мають багату історію кулінарії, унікальні традиції вживання та приготування їжі. Давайте розглянемо кожен з них більш детально, адже кожен куточок нашого прекрасного світу заслуговує на увагу і робить свій внесок в історію кулінарії світової спільноти.</p>\n\n             <ul class=\"continents__list\">\n                \n                <li class=\"continents__item\">\n                    <a href=\"./continents/europe.html\" class=\"continents__link\">\n                        <img class=\"continents__link--icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Європа континент на планеті\">\n                    </a>\n                    <h3 class=\"continents__item--title\">Європа</h3>\n                    <ul class=\"continent__list\">\n                        <li class=\"continent__item\">Велике розмаїття кухонь у різних країнах Європи: французька, італійська, іспанська, грецька, німецька та багато інших.</li>\n                        <li class=\"continent__item\">Використання м'яса: яловичина, свинина, ягнятина та птиці, споживання молочних продуктів, як важливого джерела білка та кальцію.</li>\n                        <li class=\"continent__item\">Використання оливок, оливкової олії, винограду, хліба та пшениці.</li>\n                    </ul>\n                    <a href=\"./continents/europe.html\" class=\"continent__link--button\">Відвідати континент</a>\n                </li>\n                <li class=\"continents__item\">\n                    <a href=\"./continents/asia.html\" class=\"continents__link\">\n                        <img class=\"continents__link--icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Азія континент на планеті\">\n                    </a>\n                    <h3 class=\"continents__item--title\">Азія</h3>\n                    <ul class=\"continent__list\">\n                        <li class=\"continent__item\">Різноманітність азійської кухні: китайська, індійська, японська, тайська, корейська, в'єтнамська.</li>\n                        <li class=\"continent__item\">Використання рису, сої, риби, морепродуктів,  використання різних спецій: куркума, карі, імбир, лемонграс та інших традиційних інгредієнтів.</li>\n                        <li class=\"continent__item\">Різноманіття кулінарних технік, таких як варіння, смаження, парення та ферментація.</li>\n                    </ul>\n                    <a href=\"./continents/asia.html\" class=\"continent__link--button\">Відвідати континент</a>\n                </li>\n                <li class=\"continents__item\">\n                    <a href=\"./continents/africa.html\" class=\"continents__link\">\n                        <img class=\"continents__link--icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"Африка континент на планеті\">\n                    </a>\n                    <h3 class=\"continents__item--title\">Африка</h3>\n                    <ul class=\"continent__list\">\n                        <li class=\"continent__item\">Використання м'яса, такого як коза, баран, крокодил, зебра та інші види диких тварин.</li>\n                        <li class=\"continent__item\">Розповсюджені страви: кускус, джолоф-рис, боботі, брааї (східноафриканські шашлики).</li>\n                        <li class=\"continent__item\">Багатство тропічних фруктів і овочів, зокрема банани, манго, папая, айлантус, кокоси.</li>\n                        <li class=\"continent__item\">Вживання багато спецій, таких як карі та харіса.</li>\n                    </ul>\n                    <a href=\"./continents/africa.html\" class=\"continent__link--button\">Відвідати континент</a>\n                </li>\n                <li class=\"continents__item\">\n                    <a href=\"./continents/north-america.html\" class=\"continents__link\">\n                        <img class=\"continents__link--icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"Північна Америка континент на планеті\">\n                    </a>\n                    <h3 class=\"continents__item--title\">Північна Америка</h3>\n                    <ul class=\"continent__list\">\n                        <li class=\"continent__item\">Високе споживання м'яса: говядини, свинини та птиці, а також морепродуктів: лобстерів, креветок та мідій.</li>\n                        <li class=\"continent__item\">Використання пшениці для виготовлення хліба, пасти та інших хлібобулочних виробів.</li>\n                        <li class=\"continent__item\">Традиційні страви: гамбургери, хот-доги, стейки, мексиканська кухня (такос і бурріто), морепродукти (лобстери, мідії, креветки).</li>\n                    </ul>\n                    <a href=\"./continents/north-america.html\" class=\"continent__link--button\">Відвідати континент</a>\n                </li>\n                <li class=\"continents__item\">\n                    <a href=\"./continents/south-america.html\" class=\"continents__link\">\n                        <img class=\"continents__link--icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"Південна Америка континент на планеті\">\n                    </a>\n                    <h3 class=\"continents__item--title\">Південна Америка</h3>\n                    <ul class=\"continent__list\">\n                        <li class=\"continent__item\">Збагачена різноманітністю продуктів, включаючи картоплю, кукурудзу, фасоль, гарбуз, м'ясо, рибу та тропічні фрукти.</li>\n                        <li class=\"continent__item\">Використання традиційних інгредієнтів: кіноа, алевро, квінталес </li>\n                        <li class=\"continent__item\">Традиційні страви: арроз кон польо (м'ясо з рисом), асадо (парильне м'ясо), гвакамоле, емпанадас (насичені пиріжки).</li>\n                    </ul>\n                    <a href=\"./continents/south-america.html\" class=\"continent__link--button\">Відвідати континент</a>\n                </li>\n                \n                <li class=\"continents__item\">\n                    <a href=\"./continents/australia.html\" class=\"continents__link\">\n                        <img class=\"continents__link--icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"Австралія континент на планеті\">\n                    </a>\n                    <h3 class=\"continents__item--title\">Австралія(Океанія)</h3>\n                    <ul class=\"continent__list\">\n                        <li class=\"continent__item\">Значна кількість м'яса, зокрема ягнятина, яловичина, кенгуру та риба з Тихого океану, які використовують в австралійській кухні.</li>\n                        <li class=\"continent__item\">Популярні страви: барбекю, ламб чопс, кенгуру-бургери, морські продукти.</li>\n                        <li class=\"continent__item\">Вживання багато тропічних фруктів, які ростуть в цьому регіоні.</li>\n                    </ul>\n                    <a href=\"./continents/australia.html\" class=\"continent__link--button\">Відвідати континент</a>\n                </li>\n             </ul>\n        </div>\n       </section>\n        <!--Contacts-->\n    <section class=\"section contacts\">\n        <div class=\"container contacts__container\">\n            <h2 class=\"section__title\">Контактна інформація</h2>\n            <ul class=\"contacts__list\">\n                <li class=\"contacts__list--item\">\n                    <ul class=\"contacts-social__list\">\n                       <li class=\"contacts-social__item\">\n                        <h3 class=\"contacts-social__title\">Соціальні мережі</h3>\n                        <ul class=\"social-links__list\">\n                            <li class=\"social-links__item\">\n                                <a href=\"https://instagram.com/_gastroguide?igshid=NTc4MTIwNjQ2YQ==\" class=\"social-links__link\" target=\"_blank\">\n                                    <svg class=\"social-links__link--icon\">\n                                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"></use>\n                                    </svg>\n                                </a>\n                            </li>\n                            <li class=\"social-links__item\">\n                                <a href=\"\" class=\"social-links__link\" target=\"_blank\">\n                                    <svg class=\"social-links__link--icon\">\n                                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"></use>\n                                    </svg>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                       <li class=\"contacts-social__item\">\n                        <h3 class=\"contacts-social__title\">Соціальні мережі автора</h3>\n                        <ul class=\"social-links__list\">\n                            <li class=\"social-links__item\">\n                                <a href=\"https://instagram.com/liza_gotovit?igshid=NTc4MTIwNjQ2YQ==\" class=\"social-links__link\" target=\"_blank\">\n                                    <svg class=\"social-links__link--icon\">\n                                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"></use>\n                                    </svg>\n                                </a>\n                            </li>\n                            <li class=\"social-links__item\">\n                                <a href=\"https://www.facebook.com/elizabethsheremet\" class=\"social-links__link\" target=\"_blank\">\n                                    <svg class=\"social-links__link--icon\">\n                                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"></use>\n                                    </svg>\n                                </a>\n                            </li>\n                            <li class=\"social-links__item\">\n                                <a href=\"https://www.youtube.com/@user-oq6eh1kn3u\" class=\"social-links__link\" target=\"_blank\">\n                                    <svg class=\"social-links__link--icon\">\n                                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"></use>\n                                    </svg>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                    </ul>\n                </li>\n\n                <li class=\"contacts__list--item\">\n                    <h3 class=\"contacts__title--mail\">Зворотній звʼязок</h3>\n                    <a class=\"contacts__link--mail\" href=\"mailto:gastroguide@ukr.net\">\n                        <svg class=\"contacts__link--mail-icon\">\n                            <use href=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"></use>\n                        </svg>\n                        gastroguide@ukr.net</a>\n                </li>\n            </ul>\n        </div>\n    </section>\n    </main>\n\n    <!--Footer-->\n    <footer class=\"footer\">\n    <div class=\"bg__container\">\n        <div class=\"container footer__container\">\n            <div class=\"footer__nav--container\">\n                <h3 class=\"section__title footer__title\">Навігація по сайту</h3>\n            <ul class=\"footer__nav--list\">\n                <li class=\"footer__nav--item\">\n                    <a href=\"../index.html\" class=\"footer__nav--link\"><svg class=\"footer__nav--link-icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\"></use>\n                    </svg>Головна</a>\n                </li>\n                <li class=\"footer__nav--item\">\n                    <a href=\"./continents.html\" class=\"footer__nav--link\"><svg class=\"footer__nav--link-icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\"></use>\n                    </svg>Континенти</a>\n                </li>\n                <li class=\"footer__nav--item\">\n                    <a href=\"./countries.html\" class=\"footer__nav--link\"><svg class=\"footer__nav--link-icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\"></use>\n                    </svg>Країни</a>\n                </li>\n                <li class=\"footer__nav--item\">\n                    <a href=\"./products.html\" class=\"footer__nav--link\"><svg class=\"footer__nav--link-icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\"></use>\n                    </svg>Продукти</a>\n                </li>\n                <li class=\"footer__nav--item\">\n                    <a href=\"./manual.html\" class=\"footer__nav--link\"><svg class=\"footer__nav--link-icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\"></use>\n                    </svg>Довідник</a>\n                </li>\n                 <li class=\"footer__nav--item\">\n                    <a href=\"./index.html#contacts\" class=\"footer__nav--link\"><svg class=\"footer__nav--link-icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\"></use>\n                    </svg>Контакти</a>\n                </li>\n                <li class=\"footer__nav--item\">\n                    <a href=\"./index.html#recource\" class=\"footer__nav--link\"><svg class=\"footer__nav--link-icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\"></use>\n                    </svg>Про ресурс</a>\n                </li>\n                <li class=\"footer__nav--item\">\n                    <a href=\"./index.html#author\" class=\"footer__nav--link\"><svg class=\"footer__nav--link-icon\">\n                        <use href=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\"></use>\n                    </svg>Про автора</a>\n                </li>\n            </ul>\n            </div>\n\n            <div class=\"footer__contscts--style-box\">\n            <div class=\"footer__contacts--container\">\n                <h3 class=\"section__title footer__title\">Зворотній звʼязок</h3>\n            <ul class=\"footer__contacts--list\">\n                <li><a href=\"https://instagram.com/_gastroguide?igshid=NTc4MTIwNjQ2YQ==\" class=\"footer__contacts--link\"><svg class=\"footer__contacts--link-icon\" target=\"_blank\">\n                    <use href=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"></use>\n                </svg></a></li>\n                <li><a href=\"\" class=\"footer__contacts--link\"><svg class=\"footer__contacts--link-icon\" target=\"_blank\">\n                    <use href=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"></use>\n                </svg></a></li>\n                <li><a href=\"mailto:gastroguide@ukr.net\" class=\"footer__contacts--link\" target=\"_blank\"><svg class=\"footer__contacts--link-icon\">\n                    <use href=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"></use>\n                </svg>gastroguide@ukr.net</a></li>\n            </ul>\n            </div>\n\n            <a class=\"header__nav--link-logo footer__logo\" href=\"../index.html\"> \n              <span>Gastro</span>\n              <svg class=\"header__nav--link-logo-icon\">\n                 <use href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"></use>\n              </svg>\n              <span>Guide</span>\n            </a>\n            </div>\n        </div>\n    </div>\n    </footer>\n</body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/continents-page/hero-continents-desktop.jpg":
/*!****************************************************************!*\
  !*** ./src/images/continents-page/hero-continents-desktop.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/hero-continents-desktop.jpg";

/***/ }),

/***/ "./src/images/continents-page/hero-continents-mobile.jpg":
/*!***************************************************************!*\
  !*** ./src/images/continents-page/hero-continents-mobile.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/hero-continents-mobile.jpg";

/***/ }),

/***/ "./src/images/continents-page/hero-continents-tablet.jpg":
/*!***************************************************************!*\
  !*** ./src/images/continents-page/hero-continents-tablet.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/hero-continents-tablet.jpg";

/***/ }),

/***/ "./src/images/continents-page/hero-sa-desktop.jpg":
/*!********************************************************!*\
  !*** ./src/images/continents-page/hero-sa-desktop.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/hero-sa-desktop.jpg";

/***/ }),

/***/ "./src/images/continents-page/hero-sa-mob.jpg":
/*!****************************************************!*\
  !*** ./src/images/continents-page/hero-sa-mob.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/hero-sa-mob.jpg";

/***/ }),

/***/ "./src/images/continents-page/hero-sa-tablet.jpg":
/*!*******************************************************!*\
  !*** ./src/images/continents-page/hero-sa-tablet.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/hero-sa-tablet.jpg";

/***/ }),

/***/ "./src/images/favicon.png":
/*!********************************!*\
  !*** ./src/images/favicon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/favicon.png";

/***/ }),

/***/ "./src/images/food-fon.png":
/*!*********************************!*\
  !*** ./src/images/food-fon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/food-fon.png";

/***/ }),

/***/ "./src/images/home-page/author1-tablet.jpg":
/*!*************************************************!*\
  !*** ./src/images/home-page/author1-tablet.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/author1-tablet.jpg";

/***/ }),

/***/ "./src/images/home-page/author1.jpg":
/*!******************************************!*\
  !*** ./src/images/home-page/author1.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/author1.jpg";

/***/ }),

/***/ "./src/images/home-page/author2-tablet.jpg":
/*!*************************************************!*\
  !*** ./src/images/home-page/author2-tablet.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/author2-tablet.jpg";

/***/ }),

/***/ "./src/images/home-page/author2.jpg":
/*!******************************************!*\
  !*** ./src/images/home-page/author2.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/author2.jpg";

/***/ }),

/***/ "./src/images/home-page/map-mob.png":
/*!******************************************!*\
  !*** ./src/images/home-page/map-mob.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/map-mob.png";

/***/ }),

/***/ "./src/images/home-page/world-map-desktop.png":
/*!****************************************************!*\
  !*** ./src/images/home-page/world-map-desktop.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/world-map-desktop.png";

/***/ }),

/***/ "./src/images/home-page/world-map-tablet.png":
/*!***************************************************!*\
  !*** ./src/images/home-page/world-map-tablet.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/world-map-tablet.png";

/***/ }),

/***/ "./src/fonts/DaysOne-Regular.woff":
/*!****************************************!*\
  !*** ./src/fonts/DaysOne-Regular.woff ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/DaysOne-Regular.woff";

/***/ }),

/***/ "./src/fonts/Montserrat-Black.ttf":
/*!****************************************!*\
  !*** ./src/fonts/Montserrat-Black.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Montserrat-Black.ttf";

/***/ }),

/***/ "./src/fonts/Montserrat-Bold.ttf":
/*!***************************************!*\
  !*** ./src/fonts/Montserrat-Bold.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Montserrat-Bold.ttf";

/***/ }),

/***/ "./src/fonts/Montserrat-ExtraBold.ttf":
/*!********************************************!*\
  !*** ./src/fonts/Montserrat-ExtraBold.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Montserrat-ExtraBold.ttf";

/***/ }),

/***/ "./src/fonts/Montserrat-Medium.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/Montserrat-Medium.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Montserrat-Medium.ttf";

/***/ }),

/***/ "./src/fonts/Montserrat-Regular.ttf":
/*!******************************************!*\
  !*** ./src/fonts/Montserrat-Regular.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Montserrat-Regular.ttf";

/***/ }),

/***/ "./src/fonts/Montserrat-SemiBold.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/Montserrat-SemiBold.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Montserrat-SemiBold.ttf";

/***/ }),

/***/ "./src/images/continents-page/africa-icon.svg":
/*!****************************************************!*\
  !*** ./src/images/continents-page/africa-icon.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/africa-icon.svg";

/***/ }),

/***/ "./src/images/continents-page/asia-icon.svg":
/*!**************************************************!*\
  !*** ./src/images/continents-page/asia-icon.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/asia-icon.svg";

/***/ }),

/***/ "./src/images/continents-page/au-icon.svg":
/*!************************************************!*\
  !*** ./src/images/continents-page/au-icon.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/au-icon.svg";

/***/ }),

/***/ "./src/images/continents-page/chilie-icon.svg":
/*!****************************************************!*\
  !*** ./src/images/continents-page/chilie-icon.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/chilie-icon.svg";

/***/ }),

/***/ "./src/images/continents-page/europe-icon.svg":
/*!****************************************************!*\
  !*** ./src/images/continents-page/europe-icon.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/europe-icon.svg";

/***/ }),

/***/ "./src/images/continents-page/na-icon.svg":
/*!************************************************!*\
  !*** ./src/images/continents-page/na-icon.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/na-icon.svg";

/***/ }),

/***/ "./src/images/continents-page/sa-icon.svg":
/*!************************************************!*\
  !*** ./src/images/continents-page/sa-icon.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/sa-icon.svg";

/***/ }),

/***/ "./src/images/current-hover-icon.svg":
/*!*******************************************!*\
  !*** ./src/images/current-hover-icon.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/current-hover-icon.svg";

/***/ }),

/***/ "./src/images/favicon.svg":
/*!********************************!*\
  !*** ./src/images/favicon.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/favicon.svg";

/***/ }),

/***/ "./src/images/icon-current.svg":
/*!*************************************!*\
  !*** ./src/images/icon-current.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icon-current.svg";

/***/ }),

/***/ "./src/images/point.svg":
/*!******************************!*\
  !*** ./src/images/point.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/point.svg";

/***/ }),

/***/ "./src/images/symbol-defs.svg":
/*!************************************!*\
  !*** ./src/images/symbol-defs.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/symbol-defs.svg";

/***/ }),

/***/ "./node_modules/axios/lib/adapters/adapters.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/adapters/adapters.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _http_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.js */ "./node_modules/axios/lib/helpers/null.js");
/* harmony import */ var _xhr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xhr.js */ "./node_modules/axios/lib/adapters/xhr.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");





const knownAdapters = {
  http: _http_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  xhr: _xhr_js__WEBPACK_IMPORTED_MODULE_1__["default"]
}

_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(knownAdapters, (fn, value) => {
  if(fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getAdapter: (adapters) => {
    adapters = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      if((adapter = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter)) {
        break;
      }
    }

    if (!adapter) {
      if (adapter === false) {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](
          `Adapter ${nameOrAdapter} is not supported by the environment`,
          'ERR_NOT_SUPPORT'
        );
      }

      throw new Error(
        _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].hasOwnProp(knownAdapters, nameOrAdapter) ?
          `Adapter '${nameOrAdapter}' is not available in the build` :
          `Unknown adapter '${nameOrAdapter}'`
      );
    }

    if (!_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFunction(adapter)) {
      throw new TypeError('adapter is not a function');
    }

    return adapter;
  },
  adapters: knownAdapters
});


/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_settle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../core/settle.js */ "./node_modules/axios/lib/core/settle.js");
/* harmony import */ var _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../helpers/cookies.js */ "./node_modules/axios/lib/helpers/cookies.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../helpers/isURLSameOrigin.js */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
/* harmony import */ var _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../defaults/transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/parseProtocol.js */ "./node_modules/axios/lib/helpers/parseProtocol.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/speedometer.js */ "./node_modules/axios/lib/helpers/speedometer.js");
















function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = (0,_helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFormData(requestData)) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserEnv || _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else {
        requestHeaders.setContentType('multipart/form-data;', false); // mobile/desktop app frameworks
      }
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = (0,_core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__["default"])(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__["default"])(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      (0,_core_settle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Request aborted', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Network Error', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__["default"];
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"](
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ETIMEDOUT : _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserEnv) {
      // Add xsrf header
      const xsrfValue = (config.withCredentials || (0,_helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__["default"])(fullPath))
        && config.xsrfCookieName && _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__["default"].read(config.xsrfCookieName);

      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__["default"](null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = (0,_helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__["default"])(fullPath);

    if (protocol && _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].protocols.indexOf(protocol) === -1) {
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Unsupported protocol ' + protocol + ':', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
});


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");
/* harmony import */ var _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Axios.js */ "./node_modules/axios/lib/core/Axios.js");
/* harmony import */ var _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel/CancelToken.js */ "./node_modules/axios/lib/cancel/CancelToken.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/spread.js */ "./node_modules/axios/lib/helpers/spread.js");
/* harmony import */ var _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/isAxiosError.js */ "./node_modules/axios/lib/helpers/isAxiosError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers/HttpStatusCode.js */ "./node_modules/axios/lib/helpers/HttpStatusCode.js");



















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"](defaultConfig);
  const instance = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.request, context);

  // Copy axios.prototype to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, context, {allOwnKeys: true});

  // Copy context to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance((0,_core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"])(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(_defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

// Expose Axios class to allow class inheritance
axios.Axios = _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"];

// Expose Cancel & CancelToken
axios.CanceledError = _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__["default"];
axios.CancelToken = _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__["default"];
axios.isCancel = _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__["default"];
axios.VERSION = _env_data_js__WEBPACK_IMPORTED_MODULE_8__.VERSION;
axios.toFormData = _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__["default"];

// Expose AxiosError class
axios.AxiosError = _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__["default"];

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__["default"];

// Expose isAxiosError
axios.isAxiosError = _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__["default"];

// Expose mergeConfig
axios.mergeConfig = _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"];

axios.AxiosHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__["default"];

axios.formToJSON = thing => (0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isHTMLForm(thing) ? new FormData(thing) : thing);

axios.HttpStatusCode = _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_15__["default"];

axios.default = axios;

// this module should only have a default export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");




/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CancelToken);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CanceledError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CanceledError.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, message == null ? 'canceled' : message, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].inherits(CanceledError, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
  __CANCEL__: true
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanceledError);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isCancel)
/* harmony export */ });


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterceptorManager.js */ "./node_modules/axios/lib/core/InterceptorManager.js");
/* harmony import */ var _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispatchRequest.js */ "./node_modules/axios/lib/core/dispatchRequest.js");
/* harmony import */ var _mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/validator.js */ "./node_modules/axios/lib/helpers/validator.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");











const validators = _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
      response: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        }
      } else {
        _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    let contextHeaders;

    // Flatten headers
    contextHeaders = headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].merge(
      headers.common,
      headers[config.method]
    );

    contextHeaders && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__["default"].concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [_dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);
    const fullPath = (0,_buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__["default"])(config.baseURL, config.url);
    return (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__["default"])(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Axios);


/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosError.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosError.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const prototype = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype);

  _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosError);


/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosHeaders.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosHeaders.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/parseHeaders.js */ "./node_modules/axios/lib/helpers/parseHeaders.js");





const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(value)) return;

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite)
    } else if(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders((0,_helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"])(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].freezeMethods(AxiosHeaders.prototype);
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].freezeMethods(AxiosHeaders);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosHeaders);


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterceptorManager);


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFullPath)
/* harmony export */ });
/* harmony import */ var _helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/isAbsoluteURL.js */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
/* harmony import */ var _helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/combineURLs.js */ "./node_modules/axios/lib/helpers/combineURLs.js");





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !(0,_helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__["default"])(requestedURL)) {
    return (0,_helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__["default"])(baseURL, requestedURL);
  }
  return requestedURL;
}


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dispatchRequest)
/* harmony export */ });
/* harmony import */ var _transformData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformData.js */ "./node_modules/axios/lib/core/transformData.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");









/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers);

  // Transform request data
  config.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__["default"].getAdapter(config.adapter || _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"].adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
      config,
      config.transformResponse,
      response
    );

    response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!(0,_cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__["default"])(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeConfig)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");





const headersToObject = (thing) => thing instanceof _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(target) && _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge.call({caseless}, target, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge({}, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ settle)
/* harmony export */ });
/* harmony import */ var _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"](
      'Request failed with status code ' + response.status,
      [_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_REQUEST, _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transformData)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  const context = response || config;
  const headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(context.headers);
  let data = context.data;

  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}


/***/ }),

/***/ "./node_modules/axios/lib/defaults/index.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/defaults/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _transitional_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/toURLEncodedForm.js */ "./node_modules/axios/lib/helpers/toURLEncodedForm.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");










const DEFAULT_CONTENT_TYPE = {
  'Content-Type': undefined
};

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: _transitional_js__WEBPACK_IMPORTED_MODULE_1__["default"],

  adapter: ['xhr', 'http'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(data);

    if (isObjectPayload && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(data);

    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify((0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data)) : data;
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBuffer(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStream(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFile(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(data)
    ) {
      return data;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBufferView(data)) {
      return data.buffer;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return (0,_helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data, this.formSerializer).toString();
      }

      if ((isFileList = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return (0,_helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].from(e, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.FormData,
    Blob: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].merge(DEFAULT_CONTENT_TYPE);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaults);


/***/ }),

/***/ "./node_modules/axios/lib/defaults/transitional.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/defaults/transitional.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});


/***/ }),

/***/ "./node_modules/axios/lib/env/data.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
const VERSION = "1.4.0";

/***/ }),

/***/ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js":
/*!****************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosURLSearchParams);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/HttpStatusCode.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/HttpStatusCode.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HttpStatusCode);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bind)
/* harmony export */ });


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildURL)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(params) ?
      params.toString() :
      new _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__["default"](params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ combineURLs)
/* harmony export */ });


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStandardBrowserEnv ?

// Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(path)) {
          cookie.push('path=' + path);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

// Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })());


/***/ }),

/***/ "./node_modules/axios/lib/helpers/formDataToJSON.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/formDataToJSON.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target) ? target.length : name;

    if (isLast) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(formData) && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(formData.entries)) {
    const obj = {};

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formDataToJSON);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAbsoluteURL)
/* harmony export */ });


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAxiosError)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(payload) && (payload.isAxiosError === true);
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })());


/***/ }),

/***/ "./node_modules/axios/lib/helpers/null.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/null.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line strict
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
});


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseProtocol.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseProtocol.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseProtocol)
/* harmony export */ });


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/speedometer.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/speedometer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (speedometer);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ spread)
/* harmony export */ });


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/toFormData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toFormData.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/node/classes/FormData.js */ "./node_modules/axios/lib/helpers/null.js");




// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored


/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(thing) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(arr) && !arr.some(isVisitable);
}

const predicates = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"], {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (_platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"] || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSpecCompliantForm(formData);

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(value)) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Blob is not supported. Use a Buffer instead.');
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) && isFlatArray(value)) ||
        ((_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]')) && (arr = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(value, function each(el, key) {
      const result = !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && visitor.call(
        formData, el, _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toFormData);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/toURLEncodedForm.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toURLEncodedForm.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toURLEncodedForm)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");






function toURLEncodedForm(data, options) {
  return (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, new _platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNode && _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");





const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + _env_data_js__WEBPACK_IMPORTED_MODULE_0__.VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"](
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('options must be an object', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('option ' + opt + ' must be ' + result, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Unknown option ' + opt, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  assertOptions,
  validators
});


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/Blob.js":
/*!*****************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/Blob.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof Blob !== 'undefined' ? Blob : null);


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/FormData.js":
/*!*********************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/FormData.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof FormData !== 'undefined' ? FormData : null);


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/URLSearchParams.js */ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js");
/* harmony import */ var _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/FormData.js */ "./node_modules/axios/lib/platform/browser/classes/FormData.js");
/* harmony import */ var _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Blob.js */ "./node_modules/axios/lib/platform/browser/classes/Blob.js");




/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== 'undefined' && (
    (product = navigator.product) === 'ReactNative' ||
    product === 'NativeScript' ||
    product === 'NS')
  ) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
})();

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
 const isStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isBrowser: true,
  classes: {
    URLSearchParams: _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormData: _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    Blob: _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");




// utils is a library of generic helper functions non-specific to axios

const {toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
}

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__["default"])(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
}

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    if (reducer(descriptor, name, obj) !== false) {
      reducedDescriptors[name] = descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
}

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
}

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  }

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
}

const noop = () => {}

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
}

const ALPHA = 'abcdefghijklmnopqrstuvwxyz'

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0]
  }

  return str;
}

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  }

  return visit(obj, 0);
}

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _pages_continents_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/continents.html */ "./src/pages/continents.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _js_mobile_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/mobile-menu */ "./src/js/mobile-menu.js");
/* harmony import */ var _js_mobile_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_mobile_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_southAmerica_CountryInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/southAmerica/CountryInfo */ "./src/components/southAmerica/CountryInfo.js");
/* harmony import */ var _components_southAmerica_CountryList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/southAmerica/CountryList */ "./src/components/southAmerica/CountryList.js");





// import './js/reactfiles';


})();

/******/ })()
;
//# sourceMappingURL=index.c5d6414fec0792826a53.js.map