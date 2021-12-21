/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  font-style: normal;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  font-size: 62.5%;\n  /* 1rem = 10px (1.6rem = 16px) */\n  /* Shades of blue */\n  --veryDarkBlue: hsl(226, 43%, 10%);\n  --darkBlue: hsl(235, 46%, 20%);\n  --darkBlueHover: hsl(236, 45%, 26%);\n  --desaturatedBlue: hsl(235, 45%, 61%);\n  --paleBlue: hsl(236, 100%, 87%);\n  /* Cards */\n  --blue: hsl(246, 80%, 60%);\n  --orange: hsl(15, 100%, 70%);\n  --softBlue: hsl(195, 74%, 62%);\n  --lightRed: hsl(348, 100%, 68%);\n  --limeGreen: hsl(145, 58%, 55%);\n  --violet: hsl(264, 64%, 52%);\n  --yellow: hsl(43, 84%, 65%);\n}\n\nbody {\n  font-family: \"Rubik\", sans-serif;\n  font-size: 1.2rem;\n  font-weight: 400;\n}\n\nul {\n  list-style: none;\n}\n\nbutton {\n  background: none;\n  border: none;\n  color: white;\n  cursor: pointer;\n  font-family: \"Rubik\", sans-serif;\n}\n\na {\n  text-decoration: none;\n}\n\nbody {\n  background: var(--veryDarkBlue);\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.container {\n  width: 100%;\n  padding: 5rem 2rem 2rem 2rem;\n  max-width: 125rem;\n  margin: auto;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\nsection {\n  width: 100%;\n}\n\n.profile {\n  position: relative;\n  height: 22rem;\n}\n@media (min-width: 992px) {\n  .profile {\n    width: 24%;\n  }\n}\n.profile div {\n  border-radius: 1.2rem;\n  height: 15rem;\n  width: 100%;\n}\n.profile div:first-of-type {\n  background-color: var(--blue);\n  position: absolute;\n  z-index: 2;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n@media (min-width: 992px) {\n  .profile div:first-of-type {\n    height: 28rem;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    padding: 3rem 0 0 3rem;\n  }\n}\n.profile div:first-of-type .profileContainer {\n  width: 8rem;\n  height: 8rem;\n  border: white solid 0.3rem;\n  border-radius: 50%;\n  margin-right: 2rem;\n}\n@media (min-width: 992px) {\n  .profile div:first-of-type .profileContainer {\n    margin-bottom: 3rem;\n  }\n}\n.profile div:first-of-type .profileContainer img {\n  width: 100%;\n}\n.profile div:first-of-type h1 {\n  color: white;\n  font-weight: 300;\n  font-size: 1.5rem;\n  line-height: 180%;\n}\n.profile div:first-of-type h1 span {\n  font-weight: 400;\n  font-size: 2.2rem;\n}\n@media (min-width: 992px) {\n  .profile div:first-of-type h1 span {\n    font-size: 4rem;\n    line-height: 120%;\n  }\n}\n.profile div:nth-of-type(2) {\n  background-color: var(--darkBlue);\n  position: absolute;\n  top: 7rem;\n  left: 0;\n  padding-top: 10.5rem;\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: 300;\n}\n@media (min-width: 992px) {\n  .profile div:nth-of-type(2) {\n    top: 26rem;\n    padding-top: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n}\n.profile div:nth-of-type(2) ul {\n  width: 100%;\n  display: inline-flex;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  justify-content: space-around;\n}\n@media (min-width: 992px) {\n  .profile div:nth-of-type(2) ul {\n    display: block;\n    text-align: left;\n    padding-left: 2rem;\n    padding-top: 1.5rem;\n  }\n}\n@media (min-width: 992px) {\n  .profile div:nth-of-type(2) ul li {\n    padding: 0.8rem 0;\n  }\n}\n.profile div:nth-of-type(2) ul button {\n  color: var(--paleBlue);\n}\n.profile div:nth-of-type(2) ul button:hover {\n  color: white;\n  font-weight: 400;\n}\n.profile div:nth-of-type(2) ul button:focus {\n  color: white;\n}\n.profile div:nth-of-type(2) ul a {\n  color: var(--paleBlue);\n}\n.profile div:nth-of-type(2) ul a:hover {\n  color: white;\n  font-weight: 400;\n}\n\n.sub-container {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n@media (min-width: 992px) {\n  .sub-container {\n    width: 74.5%;\n  }\n}\n\n.card {\n  position: relative;\n  height: 19.5rem;\n  margin-top: 2rem;\n}\n@media (min-width: 576px) {\n  .card {\n    width: 49%;\n  }\n}\n@media (min-width: 992px) {\n  .card {\n    width: 32%;\n  }\n}\n.card div {\n  border-radius: 1.2rem;\n  height: 15rem;\n  width: 100%;\n}\n.card div:first-of-type {\n  text-align: right;\n  padding-right: 1.5rem;\n}\n.card div:nth-of-type(2) {\n  background-color: var(--darkBlue);\n  position: absolute;\n  top: 4.5rem;\n  left: 0;\n}\n.card div:nth-of-type(2):hover {\n  background-color: var(--darkBlueHover);\n  cursor: pointer;\n}\n.card-work div:first-of-type {\n  background-color: var(--orange);\n}\n@media (min-width: 992px) {\n  .card-work {\n    margin-top: 0;\n  }\n}\n.card-play div:first-of-type {\n  background-color: var(--softBlue);\n}\n@media (min-width: 992px) {\n  .card-play {\n    margin-top: 0;\n  }\n}\n.card-study div:first-of-type {\n  background-color: var(--lightRed);\n}\n@media (min-width: 992px) {\n  .card-study {\n    margin-top: 0;\n  }\n}\n.card-exercise div:first-of-type {\n  background-color: var(--limeGreen);\n}\n.card-social div:first-of-type {\n  background-color: var(--violet);\n}\n.card-selfcare div:first-of-type {\n  background-color: var(--yellow);\n}\n.card-content {\n  padding: 3rem;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.card-content h2,\n.card-content p {\n  width: 50%;\n}\n.card-content h2 {\n  font-weight: 400;\n  font-size: 2rem;\n}\n.card-content .more {\n  text-align: right;\n}\n.card-content .more svg {\n  fill: var(--desaturatedBlue);\n}\n.card-content .more svg:hover {\n  fill: white;\n  cursor: pointer;\n}\n.card-content .hours {\n  font-size: 4rem;\n  font-weight: 300;\n}\n.card-content .lastWeek {\n  font-size: 1.6rem;\n  color: var(--desaturatedBlue);\n  padding-left: 1rem;\n}\n\n.attribution {\n  padding: 2rem;\n  max-width: 80rem;\n  margin: auto;\n  color: var(--desaturatedBlue);\n  font-size: 1rem;\n  text-align: center;\n}\n.attribution a {\n  color: white;\n  font-weight: 300;\n}\n.attribution a:hover {\n  font-weight: 400;\n}", "",{"version":3,"sources":["webpack://./src/assets/scripts/_generic.scss","webpack://./src/style.scss","webpack://./src/assets/scripts/_responsive.scss"],"names":[],"mappings":"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","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  font-style: normal;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n:root {\r\n  font-size: 62.5%; /* 1rem = 10px (1.6rem = 16px) */\r\n\r\n  /* Shades of blue */\r\n  --veryDarkBlue: hsl(226, 43%, 10%);\r\n  --darkBlue: hsl(235, 46%, 20%);\r\n  --darkBlueHover: hsl(236, 45%, 26%);\r\n  --desaturatedBlue: hsl(235, 45%, 61%);\r\n  --paleBlue: hsl(236, 100%, 87%);\r\n\r\n  /* Cards */\r\n  --blue: hsl(246, 80%, 60%); //profile\r\n  --orange: hsl(15, 100%, 70%); //work\r\n  --softBlue: hsl(195, 74%, 62%); //play\r\n  --lightRed: hsl(348, 100%, 68%); //study\r\n  --limeGreen: hsl(145, 58%, 55%); //exercise\r\n  --violet: hsl(264, 64%, 52%); //social\r\n  --yellow: hsl(43, 84%, 65%); //self care\r\n}\r\nbody {\r\n  font-family: \"Rubik\", sans-serif;\r\n  font-size: 1.2rem;\r\n  // font-size: 1.8rem; // card titles (worl, play, ...)\r\n  font-weight: 400;\r\n}\r\nul {\r\n  list-style: none;\r\n}\r\nbutton {\r\n  background: none;\r\n  border: none;\r\n  color: white;\r\n  cursor: pointer;\r\n  font-family: \"Rubik\", sans-serif;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\n","@import \"./assets/scripts/generic\";\r\n@import \"./assets/scripts/responsive\";\r\n\r\n// tablet => min-width : 576px\r\n// desktop => min-width : 992px\r\n\r\nbody {\r\n  background: var(--veryDarkBlue);\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n.container {\r\n  width: 100%;\r\n  padding: 5rem 2rem 2rem 2rem;\r\n  max-width: 125rem;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n}\r\nsection {\r\n  width: 100%;\r\n}\r\n.profile {\r\n  position: relative;\r\n  height: 22rem;\r\n  @include desktop {\r\n    width: 24%;\r\n  }\r\n  div {\r\n    border-radius: 1.2rem;\r\n    height: 15rem;\r\n    width: 100%;\r\n  }\r\n  div:first-of-type {\r\n    background-color: var(--blue);\r\n    position: absolute;\r\n    z-index: 2;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    @include desktop {\r\n      height: 28rem;\r\n      flex-direction: column;\r\n      justify-content: flex-start;\r\n      align-items: flex-start;\r\n      padding: 3rem 0 0 3rem;\r\n    }\r\n    .profileContainer {\r\n      width: 8rem;\r\n      height: 8rem;\r\n      border: white solid 0.3rem;\r\n      border-radius: 50%;\r\n      margin-right: 2rem;\r\n      @include desktop {\r\n        margin-bottom: 3rem;\r\n      }\r\n      img {\r\n        width: 100%;\r\n      }\r\n    }\r\n    h1 {\r\n      color: white;\r\n      font-weight: 300;\r\n      font-size: 1.5rem;\r\n      line-height: 180%;\r\n      span {\r\n        font-weight: 400;\r\n        font-size: 2.2rem;\r\n        @include desktop {\r\n          font-size: 4rem;\r\n          line-height: 120%;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  div:nth-of-type(2) {\r\n    background-color: var(--darkBlue);\r\n    position: absolute;\r\n    top: 7rem;\r\n    left: 0;\r\n    padding-top: 10.5rem;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n    font-weight: 300;\r\n    @include desktop {\r\n      top: 26rem;\r\n      padding-top: 0;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n    }\r\n    ul {\r\n      width: 100%;\r\n      display: inline-flex;\r\n      flex-wrap: nowrap;\r\n      flex-direction: row;\r\n      justify-content: space-around;\r\n      @include desktop {\r\n        display: block;\r\n        text-align: left;\r\n        padding-left: 2rem;\r\n        padding-top: 1.5rem;\r\n      }\r\n      li {\r\n        @include desktop {\r\n          padding: 0.8rem 0;\r\n        }\r\n      }\r\n      button {\r\n        color: var(--paleBlue);\r\n        &:hover {\r\n          color: white;\r\n          font-weight: 400;\r\n        }\r\n        &:focus {\r\n          color: white;\r\n        }\r\n      }\r\n      a {\r\n        color: var(--paleBlue);\r\n        &:hover {\r\n          color: white;\r\n          font-weight: 400;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n.sub-container {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  @include desktop {\r\n    width: 74.5%;\r\n  }\r\n}\r\n.card {\r\n  position: relative;\r\n  height: 19.5rem;\r\n  margin-top: 2rem;\r\n  @include tablet {\r\n    width: 49%;\r\n  }\r\n  @include desktop {\r\n    width: 32%;\r\n  }\r\n  div {\r\n    border-radius: 1.2rem;\r\n    height: 15rem;\r\n    width: 100%;\r\n  }\r\n  div:first-of-type {\r\n    text-align: right;\r\n    padding-right: 1.5rem;\r\n  }\r\n  div:nth-of-type(2) {\r\n    background-color: var(--darkBlue);\r\n    position: absolute;\r\n    top: 4.5rem;\r\n    left: 0;\r\n    &:hover {\r\n      background-color: var(--darkBlueHover);\r\n      cursor: pointer;\r\n    }\r\n  }\r\n  &-work {\r\n    div:first-of-type {\r\n      background-color: var(--orange);\r\n    }\r\n    @include desktop {\r\n      margin-top: 0;\r\n    }\r\n  }\r\n  &-play {\r\n    div:first-of-type {\r\n      background-color: var(--softBlue);\r\n    }\r\n    @include desktop {\r\n      margin-top: 0;\r\n    }\r\n  }\r\n  &-study {\r\n    div:first-of-type {\r\n      background-color: var(--lightRed);\r\n    }\r\n    @include desktop {\r\n      margin-top: 0;\r\n    }\r\n  }\r\n  &-exercise {\r\n    div:first-of-type {\r\n      background-color: var(--limeGreen);\r\n    }\r\n  }\r\n  &-social {\r\n    div:first-of-type {\r\n      background-color: var(--violet);\r\n    }\r\n  }\r\n  &-selfcare {\r\n    div:first-of-type {\r\n      background-color: var(--yellow);\r\n    }\r\n  }\r\n  &-content {\r\n    padding: 3rem;\r\n    color: white;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    h2,\r\n    p {\r\n      width: 50%;\r\n    }\r\n    h2 {\r\n      font-weight: 400;\r\n      font-size: 2rem;\r\n    }\r\n    .more {\r\n      text-align: right;\r\n      svg {\r\n        fill: var(--desaturatedBlue);\r\n        &:hover {\r\n          fill: white;\r\n          cursor: pointer;\r\n        }\r\n      }\r\n    }\r\n    .hours {\r\n      font-size: 4rem;\r\n      font-weight: 300;\r\n    }\r\n    .lastWeek {\r\n      font-size: 1.6rem;\r\n      color: var(--desaturatedBlue);\r\n      padding-left: 1rem;\r\n    }\r\n  }\r\n}\r\n.attribution {\r\n  padding: 2rem;\r\n  max-width: 80rem;\r\n  margin: auto;\r\n  color: var(--desaturatedBlue);\r\n  font-size: 1rem;\r\n  text-align: center;\r\n  a {\r\n    color: white;\r\n    font-weight: 300;\r\n    &:hover {\r\n      font-weight: 400;\r\n    }\r\n  }\r\n}\r\n","@mixin tablet {\r\n  @media (min-width: 576px) {\r\n    @content;\r\n  }\r\n}\r\n@mixin desktop {\r\n  @media (min-width: 992px) {\r\n    @content;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");

var work = [{
  period: "daily",
  current: 5,
  past: 3
}, {
  period: "weekly",
  current: 32,
  past: 36
}, {
  period: "monthly",
  current: 54,
  past: 57
}];
var play = [{
  period: "daily",
  current: 0,
  past: 3
}, {
  period: "weekly",
  current: 10,
  past: 8
}, {
  period: "monthly",
  current: 15,
  past: 9
}];
var study = [{
  period: "daily",
  current: 2,
  past: 2
}, {
  period: "weekly",
  current: 4,
  past: 7
}, {
  period: "monthly",
  current: 15,
  past: 19
}];
var exercise = [{
  period: "daily",
  current: 0,
  past: 2
}, {
  period: "weekly",
  current: 4,
  past: 5
}, {
  period: "monthly",
  current: 5,
  past: 9
}];
var social = [{
  period: "daily",
  current: 0,
  past: 1
}, {
  period: "weekly",
  current: 5,
  past: 10
}, {
  period: "monthly",
  current: 9,
  past: 21
}];
var selfcare = [{
  period: "daily",
  current: 0,
  past: 1
}, {
  period: "weekly",
  current: 2,
  past: 3
}, {
  period: "monthly",
  current: 5,
  past: 6
}]; //Structure

var workCurrent = document.querySelector(".card-work .hours");
var workLastweek = document.querySelector(".card-work .lastWeek");
var playCurrent = document.querySelector(".card-play .hours");
var playLastweek = document.querySelector(".card-play .lastWeek");
var studyCurrent = document.querySelector(".card-study .hours");
var studyLastweek = document.querySelector(".card-study .lastWeek");
var exerciseCurrent = document.querySelector(".card-exercise .hours");
var exerciseLastweek = document.querySelector(".card-exercise .lastWeek");
var socialCurrent = document.querySelector(".card-social .hours");
var socialLastweek = document.querySelector(".card-social .lastWeek");
var selfcareCurrent = document.querySelector(".card-selfcare .hours");
var selfcareLastweek = document.querySelector(".card-selfcare .lastWeek");
var daily = document.querySelector(".daily");
var weekly = document.querySelector(".weekly");
var monthly = document.querySelector(".monthly");
var button = document.querySelectorAll("button");

var _loop = function _loop(i) {
  button[i].onclick = function () {
    var a = 0;

    while (a < button.length) {
      button[a++].classList.remove("active");
    }

    button[i].classList.add("active");

    if (daily.classList.contains("active") == true) {
      workCurrent.innerText = work[0]["current"] + "hrs";
      workLastweek.innerText = "Last week - " + work[0]["past"] + "hrs";
      playCurrent.innerText = play[0]["current"] + "hrs";
      playLastweek.innerText = "Last week - " + play[0]["past"] + "hrs";
      studyCurrent.innerText = study[0]["current"] + "hrs";
      studyLastweek.innerText = "Last week - " + study[0]["past"] + "hrs";
      exerciseCurrent.innerText = exercise[0]["current"] + "hrs";
      exerciseLastweek.innerText = "Last week - " + exercise[0]["past"] + "hrs";
      socialCurrent.innerText = social[0]["current"] + "hrs";
      socialLastweek.innerText = "Last week - " + social[0]["past"] + "hrs";
      selfcareCurrent.innerText = selfcare[0]["current"] + "hrs";
      selfcareLastweek.innerText = "Last week - " + selfcare[0]["past"] + "hrs";
    } else if (weekly.classList.contains("active") == true) {
      workCurrent.innerText = work[1]["current"] + "hrs";
      workLastweek.innerText = "Last week - " + work[1]["past"] + "hrs";
      playCurrent.innerText = play[1]["current"] + "hrs";
      playLastweek.innerText = "Last week - " + play[1]["past"] + "hrs";
      studyCurrent.innerText = study[1]["current"] + "hrs";
      studyLastweek.innerText = "Last week - " + study[1]["past"] + "hrs";
      exerciseCurrent.innerText = exercise[1]["current"] + "hrs";
      exerciseLastweek.innerText = "Last week - " + exercise[1]["past"] + "hrs";
      socialCurrent.innerText = social[1]["current"] + "hrs";
      socialLastweek.innerText = "Last week - " + social[1]["past"] + "hrs";
      selfcareCurrent.innerText = selfcare[1]["current"] + "hrs";
      selfcareLastweek.innerText = "Last week - " + selfcare[1]["past"] + "hrs";
    } else if (monthly.classList.contains("active") == true) {
      workCurrent.innerText = work[2]["current"] + "hrs";
      workLastweek.innerText = "Last week - " + work[2]["past"] + "hrs";
      playCurrent.innerText = play[2]["current"] + "hrs";
      playLastweek.innerText = "Last week - " + play[2]["past"] + "hrs";
      studyCurrent.innerText = study[2]["current"] + "hrs";
      studyLastweek.innerText = "Last week - " + study[2]["past"] + "hrs";
      exerciseCurrent.innerText = exercise[2]["current"] + "hrs";
      exerciseLastweek.innerText = "Last week - " + exercise[2]["past"] + "hrs";
      socialCurrent.innerText = social[2]["current"] + "hrs";
      socialLastweek.innerText = "Last week - " + social[2]["past"] + "hrs";
      selfcareCurrent.innerText = selfcare[2]["current"] + "hrs";
      selfcareLastweek.innerText = "Last week - " + selfcare[2]["past"] + "hrs";
    }
  };
};

for (var i = 0; i < button.length; i++) {
  _loop(i);
}
})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map