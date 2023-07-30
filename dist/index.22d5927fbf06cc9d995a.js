/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/js/reactfiles.js":
/*!******************************!*\
  !*** ./src/js/reactfiles.js ***!
  \******************************/
/***/ (() => {

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {App} from '../components/App.jsx';

// // ReactDOM.render(<App />, document.getElementById('root'));

// const root = ReactDOM.createRoot(
//   document.getElementById('root')
// );
// root.render(<App/>)

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
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! images/continents-page/south-america/hero-sa-mob.jpg */ "./src/images/continents-page/south-america/hero-sa-mob.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! images/continents-page/chilie-icon.svg */ "./src/images/continents-page/chilie-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! images/continents-page/south-america/hero-sa-tablet.jpg */ "./src/images/continents-page/south-america/hero-sa-tablet.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! images/continents-page/south-america/hero-sa-desktop.jpg */ "./src/images/continents-page/south-america/hero-sa-desktop.jpg"), __webpack_require__.b);
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

.features__locations--list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.features__location--image {
  width: 100%;
  margin-top: 10px;
}

features__locations--item {
  position: relative;
}

.features__locations--text {
  padding-left: 21px;
}
.features__locations--text::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 0;
  width: 20px;
  height: 20px;
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

.footer__nav--list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-top: 12px;
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
  margin-top: 12px;
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
    margin-top: 10px;
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
    margin-top: 10px;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/_var.scss","webpack://./src/index.scss","webpack://./src/styles/_global.scss","webpack://./src/styles/_fonts.scss","webpack://./src/styles/_header.scss","webpack://./src/styles/_hero-home.scss","webpack://./src/styles/_hero-continents.scss","webpack://./src/styles/_south-america.scss","webpack://./src/styles/_about-section.scss","webpack://./src/styles/_continental-kitchen.scss","webpack://./src/styles/_author-setion.scss","webpack://./src/styles/_contacts.scss","webpack://./src/styles/_travel-section.scss","webpack://./src/styles/_footer.scss","webpack://./src/styles/_current.scss"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --color-primary-text: #022964; // text color \n    --color-links-header: #004487; //header links\n    --color-home-title: #004A8F; //home title\n    --color-primary-titles: #043278; // titles in sections\n    --color-titles-section: #004A8F; //text in blocks contacts etc\n    --color-hover-text: #FFF801; // hover header titles, hover titles footer\n    --color-hover-current-link: #F03C03; //hover current link\n    --color-icons-buttons-home: #57D2A1; //buttons and icons home\n    --color-text-footer-mail: #115BA0; // text footer links + mail in sections\n    --color-icons: rgba(4, 50, 120, 1);\n    --color-world-map: rgba(31, 208, 146, 0.80);\n    --color-hero-links: #034ba9;\n    --color-shadow: rgba(3, 33, 77, 0.25);\n    --color-border-btn: #00A7F6;\n    --color-background-btn: rgba(0, 167, 246, 0.85);\n\n    --background-color-primary: rgba(245, 242, 142, 0.07);\n    --background-color-header-footer: rgba(18, 110, 249, 0.45);\n    --background-color-mob-menu: rgba(18, 111, 250, 0.25);\n    --box-shadow-color-header-footer: rgba(6, 78, 187, 0.45);\n   \n    --font-family-primary: 'Montserrat', sans-serif;\n    --font-family-titles: 'DaysOne', sans-serif;\n}","@import '~normalize.css';\n@import './styles/var';\n@import './styles/global';\n@import './styles/fonts';\n@import './styles/header';\n@import './styles/hero-home';\n@import './styles/hero-continents';\n@import './styles/south-america.scss';\n@import './styles/about-section';\n@import './styles/continental-kitchen';\n@import './styles/author-setion';\n@import './styles/contacts';\n@import './styles/travel-section';\n@import './styles/footer';\n\n\n@import './styles/current';\n\n\n\n\n\n","\nbody {\n    font-family: var(--font-family-primary);\n    color: var(--color-primary-text);\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1.22;\n    background-image: url('images/food-fon.png');\n    background-color: var(--background-color-primary);\n    background-size: 375px 290px;\n\n    // transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    // background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    // border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n}\na {\n    text-decoration: none;\n}\nbutton {\n    border: 0;\n    background-color: transparent;\n    padding: 0;\n    margin: 0;\n}\nul{\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\nh1,h2,h3,h4,h5,h6,p{\n    margin: 0;\n}\nimg{ display: block;}\n\n.section__title{\n    font-family: var(--font-family-titles);\n    font-size: 18px;\n    color: var(--color-titles-section);\n    margin-bottom: 15px;\n}\n\n.section {\n    width: 100%;\n    margin: 0 auto;\n    padding: 20px 0px;\n}\n.container {\n    padding: 0px 10px;\n    margin: 0 auto;\n}\n\n@media screen and (min-width:480px) {\n    body{\n        background-size: 480px 370px;\n    }\n    .section { \n        width: 480px;\n    }\n}\n\n@media screen and (min-width: 768px) {\n    body {\n            background-size: 768px 520px;\n            font-size: 17px;\n        }\n    .section__title{\n        font-size: 24px;\n        margin-bottom: 20px;\n    }\n    .section {\n            width: 768px;\n            padding: 30px 0px;\n    }\n\n    .container {\n        width: 738px;\n        padding: 0px 15px;\n    }\n}\n@media screen and (min-width:1000px) {\n    .section {\n            width: 1000px;\n            padding: 35px 0px;\n        }\n    .section__title {\n        font-size: 26px;\n        margin-bottom: 25px;\n        \n    }\n    .container {\n            width: 960px;\n            padding: 0px 20px;\n        }\n}\n\n@media screen and (min-width: 1200px) {\n    body {\n        font-size: 20px;\n    }\n    .section {\n        width: 1200px;\n        padding: 40px 0px;\n    }\n\n    .container {\n        width: 1160px;\n    }\n        \n}\n\n@media screen and (min-width: 1440px) {\n    body {\n            font-size: 22px;\n        }\n    .section {\n        width: 1440px;\n        padding: 50px 0px;\n    }\n\n    .section__title {\n             font-size: 30px;\n             margin-bottom: 30px;\n    }\n\n    .container {\n        width: 1390px;\n        padding: 0px 25px;\n    }\n}\n\n\n\n","\n@font-face {\n    font-family: 'DaysOne';\n    src: url('fonts/DaysOne-Regular.woff');\n}\n\n@font-face {\n    font-family: 'Montserrat';\n    src: url('fonts/Montserrat-Regular.ttf'), url('fonts/Montserrat-Bold.ttf'), url('fonts/Montserrat-SemiBold.ttf'), url('fonts/Montserrat-Medium.ttf'), url('fonts/Montserrat-ExtraBold.ttf'), url('fonts/Montserrat-Black.ttf');\n}\n\n",".header {\n    background-color: #ffffff;\n    // position: fixed;\n    // top: 0;\n    // left: 0;\n    // z-index: 100;\n    width: 100%;\n    \n    box-shadow: 0px 10px 10px 0px var(--box-shadow-color-header-footer);\n}\n.nav__list {\n    display: none;\n}\n\n.bg__container{\n    width: 100%;\n    padding: 15px 0px;\n    background-color: var(--background-color-header-footer);\n}\n\n\n.header__nav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.header__nav--link-logo {\n    display: flex;\n    align-items: center;\n    width: 230px;\n    color: var(--color-primary-titles);\n    font-size: 24px;\n    font-weight: 700;\n\n    &-icon {\n        width: 75px;\n        height: 50px;\n    }\n}\n\n\n.header__nav--button-menu {\n    width: 55px;\n    height: 45px;\n\n    &-icon {\n        width: 55px;\n            height: 45px;\n    }\n}\n\n//mobile menu \n.mobile-menu__container{\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    align-items: flex-start;\n    max-width: 768px;\n        height: 100%;\n        padding-left: 20px;\n        padding-right: 20px;\n        background-color: var(--background-color-mob-menu);\n}\n.mobile-menu__btn-close{\n    width: 40px;\n    height: 25px;\n    margin-top: 15px;\n    color: var(--color-icons);\n    &:hover, &:focus {\n        color: var(--color-hover-text);\n        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n\n    &--icon {\n        width: 45px;\n        height: 25px;\n        fill: currentColor;\n    }\n \n}\n.mobile-menu__nav--list{\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n\n    margin-top: 50px;\n\n    font-size: 22px;\n    font-weight: 600;\n}\n.mobile-menu__nav--list-link{\n    color: var(--color-links-header);\n\n    &:hover, &:focus {\n        color: var(--color-hover-text);\n    }\n}\n.mobile-menu--contacts-title{\n    margin-top: 50px;\n    margin-bottom: 15px;\n\n    color: var(--color-primary-titles);\n}\n.mobile-menu__contacts--list{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-items: flex-start;\n}\n.mobile-menu__contacts--icon{\n    height: 30px;\n    width: 30px;\n}\n.mobile-menu__contacts--container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n}\n.mobile-menu__contacts--item-mail{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n.mobile-menu__contacts--link-mail{   \n    color: var(--color-text-footer-mail);\n}\n.mobile-menu__contacts--link-social{\n    display: block;\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.mobile-menu__nav--list-item{\n    position: relative;\n}\n.mobile-menu {\n    overflow-y: scroll;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 100;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff;\n    opacity: 0;\n    visibility: hidden;\n    pointer-events: none;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n}\n.mobile-menu.is-open {\n    opacity: 1;\n    visibility: visible;\n    pointer-events: auto;\n}\n\n\n@media screen and (min-width:768px) {\n   .header__nav--link-logo{\n    width: 280px;\n    font-size: 32px;\n\n    &-icon {\n        width: 95px;\n        height: 60px;\n    }\n   }\n\n   .header__nav--button-menu {\n       width: 80px;\n       height: 60px;\n\n       &-icon {\n           width: 80px;\n           height: 60px;\n       }\n   }\n   \n}\n\n@media screen and (min-width:1000px) {\n    .mobile-menu {\n        display: none;\n    }\n    .header__nav--button-menu{\n        display: none;\n    }\n    .header__nav {\n        justify-content: start;\n        gap: 60px;\n    }\n    .nav__list {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            gap: 15px;\n    \n            font-size: 20px;\n            font-weight: 600;\n    \n            &--link {\n                color: var(--color-links-header);\n                display: flex;\n                justify-content: center;\n                align-items: center;\n\n                &:hover, &:focus{\n                    color: var(--color-hover-text);\n                    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n                }\n            }\n\n            &--item {\n                position: relative;\n            }\n    \n    }\n\n\n}\n\n@media screen and (min-width:1200px) {\n    .header__nav{\n       gap: 80px;\n    }\n    .nav__list {\n            gap: 20px;\n            font-size: 24px;\n   }\n  .header__nav--link-logo {\n      width: 320px;\n      font-size: 34px;\n\n      &-icon {\n          width: 105px;\n          height: 70px;\n      }\n  }\n}\n\n@media screen and (min-width:1440px) {\n    .header__nav {\n        gap: 90px;\n    }\n\n    .nav__list {\n        gap: 25px;\n\n        font-size: 28px;\n    }\n\n    .header__nav--link-logo {\n        width: 360px;\n        font-size: 36px;\n\n        &-icon {\n            width: 135px;\n            height: 85px;\n        }\n    }\n}\n\n\n","\n.hero__container {\n    position: relative;\n    height: 250px;\n    padding-top: 0;\n    background-image: url('images/home-page/map-mob.png');\n    background-repeat: no-repeat;\n    background-size: 100% 230px;\n}\n.hero__title {\n    font-family: var(--font-family-titles);\n    font-size: 22px;\n    text-align: center;\n    text-transform: uppercase;\n    color: var(--color-home-title);\n    padding-top: 200px;\n}\n\n.hero__link{\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    text-align: center;\n    max-width: 50px;\n    font-size:8px;\n    font-weight: 500;\n    color: var(--color-hero-links);\n\n    &:hover, &:focus {\n        color: var(--color-hover-text);\n        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n}\n.hero__link--greenland{\n    top: 3.3%;\n    left: 29.5%;\n}\n.hero__link--na{\n    top: 24%;\n    left: 14%;\n}\n.hero__link--sa {\n    top: 54.3%;\n    left: 27.1%;\n}\n.hero__link--africa {\n    top: 42.5%;\n    left: 48%;\n}\n.hero__link--europe {\n    top: 21%;\n    left: 55%;\n}\n.hero__link--asia {\n    top: 23%;\n    left: 78%;\n}\n.hero__link--au {\n    top:65.7%;\n    left: 78.2%;\n}\n\n@media screen and (min-width: 410px) {\n    .hero__link {\n        font-size: 10px;\n    }\n}\n\n@media screen and (min-width:768px) {\n    .hero__container {\n        height: 415px;\n        background-image: url('images/home-page/world-map-tablet.png');\n        background-size: 100% 390px;\n    }\n    .hero__title{\n        font-size: 38px;\n        padding-top: 330px;\n    }\n    .hero__link{\n        font-size: 16px;\n        max-width: 70px;\n\n        &--greenland{\n            top: 3.4%;\n            left: 30%;\n        }\n        &--na{\n            top: 25%;\n            left: 14%;\n        }\n        &--sa{\n            top: 58%;\n            left: 27.7%;\n        }\n        &--africa{\n            top: 44.2%;\n            left: 48%;\n        }\n        &--europe{\n            top: 22.1%;\n            left: 55.5%;\n        }\n        &--asia{\n            top: 26%;\n            left: 77%;\n        }\n        &--au{\n            top: 68.8%;\n            left: 79.3%;\n        }\n    }\n}\n\n@media screen and (min-width:1000px) {\n    .hero__container {\n        height: 560px;\n        background-size: 100% 530px;\n    }\n\n    .hero__title {\n        font-size: 50px;\n        padding-top: 450px;\n    }\n\n    .hero__link {\n        font-size: 22px;\n        max-width: 90px;\n\n        &--greenland {\n            top: 3%;\n        }\n\n        &--na {\n            top: 25.3%;\n        }\n\n        &--sa {\n            top: 58.3%;\n            left: 27.2%;\n        }\n\n        &--africa {\n            top: 46%;\n        }\n\n        &--europe {\n            top: 22%;\n            left: 55%;\n        }\n\n        &--asia {\n            top: 26%;\n        }\n\n        &--au {\n            top: 69.5%;\n        }\n    }\n}\n\n@media screen and (min-width:1200px) {\n\n    .hero__container {\n        height: 630px;\n        background-image: url('images/home-page/world-map-desktop.png');\n        background-size: 100% 600px;\n    }\n\n    .hero__title {\n        font-size: 55px;\n        padding-top: 510px;\n    }\n\n    .hero__link {\n        font-size: 24px;\n        max-width: 100px;\n\n        &--greenland {\n            top: 3%;\n            left: 30.5%;\n        }\n\n        &--na {\n            top: 26.5%;\n            left: 14.5%;\n        }\n\n        &--sa {\n            top: 59.8%;\n            left: 27.7%;\n        }\n\n        &--africa {\n            top: 46.5%;\n        }\n\n        &--europe {\n            top: 24%;\n            left: 54%;\n        }\n\n        &--asia{\n            top: 26%;\n        }\n\n        &--au {\n            top: 71.5%;\n            left: 80%;\n        }\n\n    }\n}\n\n@media screen and (min-width:1440px) {\n\n    .hero__container {\n        height: 730px;\n        background-size: 100% 680px;\n    }\n\n    .hero__title {\n        font-size: 72px;\n        padding-top: 570px;\n    }\n\n    .hero__link {\n        font-size: 26px;\n        max-width: 110px;\n\n        &--greenland {\n            top: 3%;\n            left: 31%;\n        }\n        &--na {\n            top: 26%;\n        }\n        &--sa {\n            top: 58.5%;\n            left: 28%;\n        }\n        &--africa {\n            top: 45%;\n        }\n        &--europe {\n            top: 23.5%;\n        }\n        &--asia{\n            top: 25.5%;\n            left: 78.5%;\n        }\n\n        &--au {\n            top: 69.5%;\n            left: 80%;\n        }\n    }\n}\n",".hero-continets{\n    padding: 0;\n}\n\n.hero-continents__container {\n        position: relative;\n        padding: 0;\n        height: 290px;\n        background-image: url('images/continents-page/hero-continents-mobile.jpg');\n        background-repeat: no-repeat;\n        background-size: 100% 290px;\n}\n\n.hero-continents__title{\n    text-transform: uppercase;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 115px;\n    width: 100%;\n    height: 50px;\n    color: var(--color-hover-text);\n    background-color: rgba(1, 24, 60, 0.15);\n    font-size: 24px;\n}\n\n@media screen and (min-width:768px) {\n    .hero-continents__container{\n        width: 100%;\n        height: 410px;\n        background-image: url('images/continents-page/hero-continents-tablet.jpg');\n        background-size: 100% 410px;\n    }\n\n    .hero-continents__title {\n        height: 80px;\n        font-size: 42px;\n        padding-top: 165px;\n    }\n\n    \n}\n\n@media screen and (min-width:1000px) {\n    \n.hero-continents__container{\n    height: 520px;\n    background-size: 100% 520px;\n}\n.hero-continents__title {\n    height: 85px;\n    font-size: 50px;\n    padding-top: 235px;\n}\n}\n\n@media screen and (min-width:1200px) {\n    .hero-continents__container {\n        width: 100%;\n        height: 650px;\n        background-image: url('images/continents-page/hero-continents-desktop.jpg');\n        background-size: 100% 650px;\n    }\n\n    .hero-continents__title {\n        height: 100px;\n        font-size: 70px;\n        padding-top: 305px;\n    }\n\n\n}\n\n@media screen and (min-width:1440px) {\n    .hero-continents__container {\n        width: 100%;\n        height: 770px;\n        background-image: url('images/continents-page/hero-continents-desktop.jpg');\n        background-size: 100% 770px;\n    }\n\n    .hero-continents__title {\n        height: 130px;\n        font-size: 85px;\n        padding-top: 360px;\n    }\n\n\n}",".hero-sa{\n    padding: 0;\n}\n.hero-sa__container{\n        padding: 0;\n        height: 290px;\n        background-image: linear-gradient(to right,\n            rgba(0, 21, 52, 0.3),\n            rgba(0, 21, 52, 0.3)),\n            url('images/continents-page/south-america/hero-sa-mob.jpg');\n            background-repeat: no-repeat;\n            background-size: 100% 290px;\n}\n.continent__title-right{\n    padding-top: 100px;\n    color: hsla(58, 100%, 50%, 0.75);\n    text-align: end;\n    font-size: 15px;\n    margin-right: 20px;\n}\n.continent__title-right--uppercase {\n    display: block;\n    text-transform: uppercase;\n    margin-top: 10px;\n    margin-right: 23px;\n    font-size: 26px;\n    color: var(--color-hover-text);\n}\n\n.features__locations--list{\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n\n    // list-style: inside url('images/continents-page/chilie-icon.svg');\n   \n}\n\n.features__location--image {\n     width: 100%;\n     margin-top: 10px;\n\n }\n\n features__locations--item {\n    position: relative;\n }\n\n .features__locations--text{\n        \n        padding-left: 21px;\n\n        &::after {\n            content: \"\";\n            position: absolute;\n            top: 2px;\n            left: 0;\n            width: 20px;\n            height: 20px;\n            background-size: cover;\n            background-image: url(\"images/continents-page/chilie-icon.svg\");\n        }\n\n }\n\n@media screen and (min-width:768px) {\n    .hero-sa__container {\n            width: 100%;\n            height: 450px;\n            background-image: linear-gradient(to right,\n                    rgba(0, 21, 52, 0.3),\n                    rgba(0, 21, 52, 0.3)),\n                url('images/continents-page/south-america/hero-sa-tablet.jpg');\n            background-size: 100% 450px;\n    }\n        .continent__title-right {\n            padding-top: 155px;\n            font-size: 28px;\n            margin-right: 28px;\n        }\n    \n        .continent__title-right--uppercase {\n            margin-top: 20px;\n            margin-right: 23px;\n            font-size: 50px;\n        }\n}\n\n@media screen and (min-width:1000px) {\n    .hero-sa__container {\n        height: 570px;\n        background-size: 100% 570px;\n    }\n\n    .continent__title-right {\n        padding-top: 200px;\n        font-size: 36px;\n        margin-right: 50px;\n    }\n\n    .continent__title-right--uppercase {\n        margin-top: 25px;\n        margin-right: 35px;\n        font-size: 58px;\n    }\n}\n\n@media screen and (min-width:1200px) {\n    .hero-sa__container {\n        height: 750px;\n        background-image: linear-gradient(to right,\n                rgba(0, 21, 52, 0.3),\n                rgba(0, 21, 52, 0.3)),\n            url('images/continents-page/south-america/hero-sa-desktop.jpg');\n        background-size: 100% 750px;\n    }\n\n    .continent__title-right {\n        padding-top: 255px;\n        font-size: 44px;\n        margin-right: 55px;\n    }\n\n    .continent__title-right--uppercase {\n        margin-top: 30px;\n        margin-right: 45px;\n        font-size: 78px;\n    }\n}\n\n@media screen and (min-width:1440px) {\n    .hero-sa__container {\n        height: 770px;\n        background-size: 100% 770px;\n    }\n\n    .continent__title-right {\n        padding-top: 265px;\n        font-size: 50px;\n        margin-right: 65px;\n    }\n\n    .continent__title-right--uppercase {\n        margin-top: 30px;\n        margin-right: 55px;\n        font-size: 90px;\n    }\n\n   \n\n\n}",".about__list{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 15px;\n\n    font-size: 15px;\n    color: var(--color-primary-text);\n\n\n    &--item{\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 10px;\n    }\n\n}\n\n.about__list--icon{\n    fill: var(--color-icons-buttons-home);\n    stroke-width: 0.15px;\n    stroke: rgba(132, 109, 109, 0.80);\n    width: 40px;\n    height: 40px;\n}\n\n.about__list--text-bold{\n    font-family: var(--font-family-titles);\n    \n}\n\n@media screen and (min-width: 410px) {\n   .about__list {\n    font-size: 16px;\n   }\n}\n\n@media screen and (min-width: 768px) {\n    .about__list {\n        height: 470px;\n\n        font-size: 16px;\n        flex-direction: column;\n        flex-wrap: wrap;\n        gap: 20px;\n\n        &--item {\n            width: 355px;\n        }\n\n        &--icon {\n            width: 45px;\n            height: 45px;\n        }\n    }\n}\n\n@media screen and (min-width: 1000px) {\n    .about__list {\n        height: 460px;\n        font-size: 18px;\n        gap: 20px;\n\n        &--item {\n            width: 460px;\n        }\n\n        &--icon {\n            width: 50px;\n            height: 50px;\n        }\n    }\n}\n\n@media screen and (min-width: 1200px) {\n    .about__list {\n        font-size: 20px;\n        gap: 25px;\n        height: 465px;\n\n        &--item {\n            width: 555px;\n        }\n\n        &--icon {\n            width: 55px;\n            height: 55px;\n        }\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .about__list {\n        font-size: 22px;\n        gap: 30px;\n\n        &--item {\n            width: 665px;\n        }\n\n        &--icon {\n            width: 60px;\n            height: 60px;\n        }\n    }\n}","\n.continents__list{\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n}\n.continents__link {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.continents__link--icon {\n    width: 270px;\n    height: 270px;\n    filter: drop-shadow(0px 5px 5px var(--color-shadow));\n}\n.continents__item{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    \n    height: 600px;\n    margin-top: 15px;\n}\n\n.continents__item--title{\n    font-weight: 700;\n}\n\n.continent__list{\n    list-style: inside url(images/point.svg);\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 5px;\n    \n}\n.continent__item {\n    margin-left: 15px;\n    width: 100%;\n}\n\n.continent__link--button{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 240px;\n    height: 47px;\n    text-align: center;\n    color: var(--color-hover-text);\n\n    border-radius: 25px;\n        border: 1px solid var(--color-border-btn);\n        background:var(--color-background-btn);\n        box-shadow: 2px 5px 5px 0px var(--color-shadow);\n\n    font-family: var(--font-family-titles);\n    font-size: 18px;\n\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n        background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n        border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover, &:focus {\n        border-color: var(--color-hover-text);\n        background-color: var(--color-hover-text);\n        color: var(--color-border-btn) ;\n        \n    }\n}\n\n@media screen and (min-width:768px) {\n    .continents__list{\n        flex-direction: row;\n        flex-wrap: wrap;\n        justify-content: center;\n        align-items: flex-start;\n    }\n    .continents__item{\n        width: 355px;\n        height: 620px;\n        align-items: center;\n   \n    }\n    .continent__item {\n            margin-left: 0px;\n        }\n\n}\n\n@media screen and (min-width:1000px) {\n    .continents__item {\n        width: 425px;\n        height: 600px;\n    }\n}\n\n@media screen and (min-width:1200px) {\n    .continents__item {\n        width: 365px;\n        height: 720px;\n    }\n    .continent__link--button{\n        width: 280px;\n        height: 55px;\n        font-size: 20px;\n    }\n}\n\n@media screen and (min-width:1440px) {\n    .continents__item {\n        width: 425px;\n        height:760px;\n    }\n}"," .author__list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n }\n\n .author__text--paragraph{\n    display: block;\n    margin-top: 10px;\n }\n\n .author__image{\n    display: block;\n    width: 100%;\n    margin-top: 10px;\n    border-radius: 25px;\n    box-shadow: 3px 6px 10px 0px var(--color-shadow);\n    \n }\n\n .author__text--social-link{\n    font-weight: 700;\n    color: var(--color-primary-text);\n\n    &:hover, &:focus {\n        color: var(--color-hover-current-link);\n        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n }\n\n @media screen and (min-width:1000px) {\n    .author__text {\n        font-size: 16px;\n        width: 530px;\n    }\n    .author__list {\n        gap: 20px;\n    }\n    .authot__list-item{\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n\n        &:first-child {\n            flex-direction: row-reverse;\n        }\n    }\n\n    .author__image {\n        width: 420px;\n        height: 300px;\n        margin: 0;\n    }\n\n }\n \n  @media screen and (min-width:1200px) {\n      .author__text {\n          font-size: 18px;\n          width: 630px;\n      }\n      .author__image {\n          width: 500px;\n          height: 350px;\n        border-radius: 50px;\n      }\n\n  }\n\n        @media screen and (min-width:1440px) {\n            .author__text {\n                font-size: 22px;\n                width: 800px;\n\n                line-height: 1.13;\n            }\n    \n            .author__image {\n                width: 570px;\n                height: 380px;\n                object-fit: cover;\n            }\n    \n        }",".contacts__list {\n    display: flex;\n    flex-direction: column;\n    \n    gap: 15px;\n}\n.contacts__link--mail{\n    display: flex;\n    justify-content: center;\n    gap: 5px;\n    align-items: center;\n    text-align: center;\n    font-size: 16px;\n    margin-top: 5px;\n\n    color: var(--color-text-footer-mail);\n}\n\n.contacts__link--mail-icon, .social-links__link--icon{\n    width: 30px;\n    height: 30px;\n}\n\n\n.contacts-social__title, .contacts__title--mail {\n    text-align: center;\n    font-size: 16px;\n}\n\n\n.social-links__list {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n\n    margin-top: 10px;\n}\n\n.contacts-social__list {\n    display: flex;\n    justify-content: space-between;\n    \n}\n\n@media screen and (min-width:768px) {\n    .contacts__list{\n        margin-top: 20px;\n        flex-direction: row-reverse;\n        justify-content: center;\n        gap: 25px;\n    }\n\n    .contacts-social__list{\n        justify-content: start;\n        gap: 25px;\n    }\n\n        .contacts-social__title,\n        .contacts__title--mail {\n            font-size: 18px;\n        }\n\n    .contacts__link--mail {\n        margin-top: 15px;\n         font-size: 16px;\n    }\n    \n}\n\n@media screen and (min-width:1000px) {\n    .contacts__list {\n        margin-top: 25px;\n        gap: 65px;\n    }\n\n    .contacts-social__list {\n        gap: 65px;\n    }\n\n    .contacts-social__title,\n    .contacts__title--mail {\n        font-size: 22px;\n    }\n\n    .contacts__link--mail {\n        font-size: 20px;\n    }\n\n    .contacts__link--mail-icon, .social-links__link--icon {\n        width: 40px;\n        height: 40px;\n    }\n    \n    .social-links__list, .contacts__link--mail {\n        margin-top: 15px;\n    }\n\n    .social-links__list {\n        gap: 15px;\n    }\n}\n\n@media screen and (min-width:1200px) {\n    .contacts__list {\n        margin-top: 25px;\n        gap: 95px;\n    }\n\n    .contacts-social__list {\n        gap: 95px;\n    }\n\n    .contacts-social__title,\n    .contacts__title--mail {\n        font-size: 24px;\n    }\n\n    .contacts__link--mail {\n        font-size: 22px;\n    }\n\n}\n\n@media screen and (min-width:1440px) {\n    .contacts__list {\n        margin-top: 35px;\n        gap: 155px;\n    }\n\n    .contacts-social__list {\n        gap: 155px;\n    }\n\n    .contacts-social__title,\n    .contacts__title--mail {\n        font-size: 28px;\n    }\n\n    .contacts__link--mail {\n        font-size: 24px;\n    }\n\n}","\n.travel__list{\n    margin-top: 20px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    gap: 15px;\n    align-items: center;\n}\n.travel__title {\n    text-align: center;\n    font-size: 20px;\n    text-transform: uppercase;\n}\n\n.travel__link{\n    display: block;\n    width: 250px;\n    padding: 20px;\n    border: 1px solid var(--color-links-header);\n    color: var(--color-links-header);\n    border-radius: 30px;\n    text-align: center;\n    font-weight: 800;\n    font-size: 18px;\n    box-shadow: 2px 7px 7px 0px var(--color-shadow);\n\n    background-color: var(--color-icons-buttons-home);\n\n    &:hover, &:focus{\n        background-color: var(--color-links-header);\n        color: var(--color-icons-buttons-home);\n        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n        background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n}\n\n@media screen and (min-width:768px) {\n    .travel__list {\n        flex-direction: row;\n        gap: 40px;\n        margin-top: 25px;\n    }\n}\n\n@media screen and (min-width:1000px) {\n    .travel__list {\n        gap: 80px;\n        margin-top: 30px;\n    }\n    .travel__link{\n        font-size: 22px;\n        width: 270px;\n        padding: 25px;\n        border-radius: 40px;\n        border: 2px solid var(--color-links-header);\n    }\n    .travel__title {\n            font-size: 24px;\n    }\n}\n\n@media screen and (min-width:1200px) {\n    .travel__list {\n        gap: 100px;\n        margin-top: 40px;\n    }\n\n    .travel__link {\n        font-size: 24px;\n        width: 350px;\n        padding: 35px;\n        border-radius: 50px;\n        border: 2px solid var(--color-links-header);\n    }\n\n    .travel__title {\n        font-size: 30px;\n    }\n}\n\n@media screen and (min-width:1440px) {\n    .travel__list {\n        gap: 140px;\n        margin-top: 45px;\n    }\n\n    .travel__link {\n        font-size: 30px;\n        width: 390px;\n        padding: 45px;\n        border-radius: 60px;\n        border: 2px solid var(--color-links-header);\n    }\n\n    .travel__title {\n        font-size: 40px;\n    }\n}","\n.footer {\n    background-color: #ffffff;\n    width: 100%;\n    box-shadow: 4px 0px 35px 0px var(--box-shadow-color-header-footer);\n}\n\n.footer__container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 25px;\n}\n\n.footer__title {\n    font-family: var(--font-family-primary);\n    font-size: 18px;\n    font-weight: 700;\n    text-align: center;\n    color: var(--color-primary-text);\n}\n\n.footer__nav--list{\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 10px;\n    align-items: center;\n\n    margin-top: 12px;\n   \n}\n.footer__nav--link {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 3px;\n    width: 105px;\n    color: var(--color-text-footer-mail);\n    font-size: 14px;\n    text-align: center;\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    \n        &:hover,\n        &:focus {\n            color: var(--color-hover-text);\n    \n        }\n\n        &-icon {\n            width: 15px;\n            height: 15px;\n\n            fill: currentColor;\n        }\n}\n\n.footer__contacts--link-icon {\n    width: 25px;\n    height: 25px;\n}\n\n.footer__contacts--list{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n\n    margin-top: 12px;\n}\n\n.footer__contacts--link{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n    color: var(--color-text-footer-mail);\n\n}\n\n.footer__contscts--style-box {\n    // width: 390px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 25px;\n\n}\n\n@media screen and (min-width:768px) {\n    .footer__container {\n            flex-direction: row;\n            flex-wrap: wrap;\n            justify-content: space-evenly;\n            gap: 25px;\n        }\n\n    .footer__nav--container, .footer__contacts--container{\n        width: 350px;\n    }\n    \n}\n\n// @media screen and (min-width:1000px) {\n//     .footer__container {\n//             gap: 15px;\n//             justify-content: space-between;\n//         }\n\n//         .footer__contscts--style-box {\n//             flex-direction: row-reverse;\n//             justify-content: space-between;\n//             align-items: center;\n//             gap: 15px;\n    \n//         }\n//         .footer__nav--container,\n//         .footer__contacts--container {\n//             width: 310px;\n//         }\n// }\n\n@media screen and (min-width:1200px) {\n    .footer__container {\n        gap: 15px;\n        justify-content: center;\n    }\n\n    .footer__nav--container , .footer__contacts--container{\n        width: 400px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    .footer__contscts--style-box {\n        flex-direction: row-reverse;\n        align-items: center;\n         gap: 15px;\n\n      }\n\n    .footer__nav--list{\n        width: 350px;\n        margin-top: 10px;\n    }\n}\n\n@media screen and (min-width:1440px) {\n    .footer__container {\n        gap: 15px;\n    }\n\n    .footer__nav--container, .footer__contacts--container {\n        width: 500px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .footer__nav--list {\n        width: 350px;\n        margin-top: 10px;\n    }\n}\n\n",".current {\n    color: var(--color-hover-text);\n    padding-left: 21px;\n\n    &::after {\n        content: \"\";\n        position: absolute;\n        top: 2px;\n        left: 0;\n        width: 20px;\n        height: 20px;\n        background-size: cover;\n        background-image: url(\"images/icon-current.svg\");\n    }\n\n    &:hover, &:focus {\n        color: var(--color-hover-current-link);\n        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n\n    &:hover::after, &:focus::after {\n        background-image: url(\"images/current-hover-icon.svg\");\n        transition: background-image 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n}\n\n\n@media screen and (min-width:1000px) {\n    .current {\n        padding-left: 21px;\n\n        &::after {\n            content: \"\";\n            position: absolute;\n            top: 1px;\n            left: 0;\n            width: 20px;\n            height: 20px;\n\n        }\n    }\n}\n@media screen and (min-width:1200px) {\n    .current {\n        padding-left: 22px;\n        &::after {\n            content: \"\";\n            position: absolute;\n            top: 3px;\n            left: 0;\n            width: 21px;\n            height: 21px;\n\n        }\n    }\n}\n@media screen and (min-width:1440px) {\n    .current {\n            padding-left: 26px;\n            &::after {\n                content: \"\";\n                position: absolute;\n                top: 3px;\n                left: 0;\n                width: 25px;\n                height: 25px;\n\n            }\n        }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/images/continents-page/south-america/hero-sa-desktop.jpg":
/*!**********************************************************************!*\
  !*** ./src/images/continents-page/south-america/hero-sa-desktop.jpg ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/hero-sa-desktop.jpg";

/***/ }),

/***/ "./src/images/continents-page/south-america/hero-sa-mob.jpg":
/*!******************************************************************!*\
  !*** ./src/images/continents-page/south-america/hero-sa-mob.jpg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/hero-sa-mob.jpg";

/***/ }),

/***/ "./src/images/continents-page/south-america/hero-sa-tablet.jpg":
/*!*********************************************************************!*\
  !*** ./src/images/continents-page/south-america/hero-sa-tablet.jpg ***!
  \*********************************************************************/
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
/* harmony import */ var _js_reactfiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/reactfiles */ "./src/js/reactfiles.js");
/* harmony import */ var _js_reactfiles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_reactfiles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_mobile_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/mobile-menu */ "./src/js/mobile-menu.js");
/* harmony import */ var _js_mobile_menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_mobile_menu__WEBPACK_IMPORTED_MODULE_4__);





const a = 5;
const b = 9;
console.log(a + b);
})();

/******/ })()
;
//# sourceMappingURL=index.22d5927fbf06cc9d995a.js.map