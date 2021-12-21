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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  font-style: normal;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  font-size: 62.5%;\n  /* 1rem = 10px (1.6rem = 16px) */\n  /* Shades of blue */\n  --veryDarkBlue: hsl(226, 43%, 10%);\n  --darkBlue: hsl(235, 46%, 20%);\n  --darkBlueHover: hsl(236, 45%, 26%);\n  --desaturatedBlue: hsl(235, 45%, 61%);\n  --paleBlue: hsl(236, 100%, 87%);\n  /* Cards */\n  --blue: hsl(246, 80%, 60%);\n  --orange: hsl(15, 100%, 70%);\n  --softBlue: hsl(195, 74%, 62%);\n  --lightRed: hsl(348, 100%, 68%);\n  --limeGreen: hsl(145, 58%, 55%);\n  --violet: hsl(264, 64%, 52%);\n  --yellow: hsl(43, 84%, 65%);\n}\n\nbody {\n  font-family: \"Rubik\", sans-serif;\n  font-size: 1.2rem;\n  font-weight: 400;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbody {\n  background: var(--veryDarkBlue);\n  height: 100vh;\n  margin: auto;\n}\n\n.container {\n  padding: 5rem 2rem;\n}\n\n.profile {\n  position: relative;\n  height: 22rem;\n}\n.profile div {\n  border-radius: 1.2rem;\n  height: 15rem;\n  width: 100%;\n}\n.profile div:first-of-type {\n  background-color: var(--blue);\n  position: absolute;\n  z-index: 2;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n.profile div:first-of-type .profileContainer {\n  width: 8rem;\n  height: 8rem;\n  border: white solid 0.3rem;\n  border-radius: 50%;\n  margin-right: 2rem;\n}\n.profile div:first-of-type .profileContainer img {\n  width: 100%;\n}\n.profile div:first-of-type h1 {\n  color: white;\n  font-weight: 300;\n  font-size: 1.5rem;\n  line-height: 180%;\n}\n.profile div:first-of-type h1 span {\n  font-weight: 400;\n  font-size: 2.2rem;\n}\n.profile div:nth-of-type(2) {\n  background-color: var(--darkBlue);\n  position: absolute;\n  top: 7rem;\n  left: 0;\n  padding-top: 10.5rem;\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: 300;\n}\n.profile div:nth-of-type(2) ul {\n  width: 100%;\n  display: inline-flex;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  justify-content: space-around;\n}\n.profile div:nth-of-type(2) ul a {\n  color: var(--paleBlue);\n}\n.profile div:nth-of-type(2) ul a:hover {\n  color: white;\n  font-weight: 400;\n}\n\n.card {\n  position: relative;\n  height: 19.5rem;\n  margin-top: 2rem;\n}\n.card div {\n  border-radius: 1.2rem;\n  height: 15rem;\n  width: 100%;\n}\n.card div:nth-of-type(2) {\n  background-color: var(--darkBlue);\n  position: absolute;\n  top: 4.5rem;\n  left: 0;\n}\n.card div:nth-of-type(2):hover {\n  background-color: var(--darkBlueHover);\n  cursor: pointer;\n}\n.card-work div:first-of-type {\n  background-color: var(--orange);\n  text-align: right;\n  padding-right: 1.5rem;\n}\n.card-play div:first-of-type {\n  background-color: var(--softBlue);\n  text-align: right;\n  padding-right: 1.5rem;\n}\n.card-study div:first-of-type {\n  background-color: var(--lightRed);\n  text-align: right;\n  padding-right: 1.5rem;\n}\n.card-exercise div:first-of-type {\n  background-color: var(--limeGreen);\n  text-align: right;\n  padding-right: 1.5rem;\n}\n.card-social div:first-of-type {\n  background-color: var(--violet);\n  text-align: right;\n  padding-right: 1.5rem;\n}\n.card-selfcare div:first-of-type {\n  background-color: var(--yellow);\n  text-align: right;\n  padding-right: 1.5rem;\n}\n.card-content {\n  padding: 3rem;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.card-content h2,\n.card-content p {\n  width: 50%;\n}\n.card-content h2 {\n  font-weight: 400;\n  font-size: 2rem;\n}\n.card-content .more {\n  text-align: right;\n}\n.card-content .more svg {\n  fill: var(--desaturatedBlue);\n}\n.card-content .more svg:hover {\n  fill: white;\n  cursor: pointer;\n}\n.card-content .hours {\n  font-size: 4rem;\n  font-weight: 300;\n}\n.card-content .lastWeek {\n  font-size: 1.6rem;\n  color: var(--desaturatedBlue);\n}", "",{"version":3,"sources":["webpack://./src/assets/scripts/_generic.scss","webpack://./src/style.scss"],"names":[],"mappings":"AAAA;;;EAGE,sBAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;ACCF;;ADCA;EACE,gBAAA;EAAkB,gCAAA;EAElB,mBAAA;EACA,kCAAA;EACA,8BAAA;EACA,mCAAA;EACA,qCAAA;EACA,+BAAA;EAEA,UAAA;EACA,0BAAA;EACA,4BAAA;EACA,8BAAA;EACA,+BAAA;EACA,+BAAA;EACA,4BAAA;EACA,2BAAA;ACCF;;ADCA;EACE,gCAAA;EACA,iBAAA;EAEA,gBAAA;ACCF;;ADCA;EACE,gBAAA;ACEF;;ADAA;EACE,qBAAA;ACGF;;AAnCA;EACE,+BAAA;EACA,aAAA;EACA,YAAA;AAsCF;;AApCA;EACE,kBAAA;AAuCF;;AArCA;EACE,kBAAA;EACA,aAAA;AAwCF;AAvCE;EACE,qBAAA;EACA,aAAA;EACA,WAAA;AAyCJ;AAvCE;EACE,6BAAA;EACA,kBAAA;EACA,UAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;AAyCJ;AAxCI;EACE,WAAA;EACA,YAAA;EACA,0BAAA;EACA,kBAAA;EACA,kBAAA;AA0CN;AAzCM;EACE,WAAA;AA2CR;AAxCI;EACE,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;AA0CN;AAzCM;EACE,gBAAA;EACA,iBAAA;AA2CR;AAvCE;EACE,iCAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,oBAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;AAyCJ;AAxCI;EACE,WAAA;EACA,oBAAA;EACA,iBAAA;EACA,mBAAA;EACA,6BAAA;AA0CN;AAzCM;EACE,sBAAA;AA2CR;AA1CQ;EACE,YAAA;EACA,gBAAA;AA4CV;;AAtCA;EACE,kBAAA;EACA,eAAA;EACA,gBAAA;AAyCF;AAxCE;EACE,qBAAA;EACA,aAAA;EACA,WAAA;AA0CJ;AAxCE;EACE,iCAAA;EACA,kBAAA;EACA,WAAA;EACA,OAAA;AA0CJ;AAzCI;EACE,sCAAA;EACA,eAAA;AA2CN;AAvCI;EACE,+BAAA;EACA,iBAAA;EACA,qBAAA;AAyCN;AArCI;EACE,iCAAA;EACA,iBAAA;EACA,qBAAA;AAuCN;AAnCI;EACE,iCAAA;EACA,iBAAA;EACA,qBAAA;AAqCN;AAjCI;EACE,kCAAA;EACA,iBAAA;EACA,qBAAA;AAmCN;AA/BI;EACE,+BAAA;EACA,iBAAA;EACA,qBAAA;AAiCN;AA7BI;EACE,+BAAA;EACA,iBAAA;EACA,qBAAA;AA+BN;AA5BE;EACE,aAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;AA8BJ;AA7BI;;EAEE,UAAA;AA+BN;AA7BI;EACE,gBAAA;EACA,eAAA;AA+BN;AA7BI;EACE,iBAAA;AA+BN;AA9BM;EACE,4BAAA;AAgCR;AA/BQ;EACE,WAAA;EACA,eAAA;AAiCV;AA7BI;EACE,eAAA;EACA,gBAAA;AA+BN;AA7BI;EACE,iBAAA;EACA,6BAAA;AA+BN","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  font-style: normal;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n:root {\r\n  font-size: 62.5%; /* 1rem = 10px (1.6rem = 16px) */\r\n\r\n  /* Shades of blue */\r\n  --veryDarkBlue: hsl(226, 43%, 10%);\r\n  --darkBlue: hsl(235, 46%, 20%);\r\n  --darkBlueHover: hsl(236, 45%, 26%);\r\n  --desaturatedBlue: hsl(235, 45%, 61%);\r\n  --paleBlue: hsl(236, 100%, 87%);\r\n\r\n  /* Cards */\r\n  --blue: hsl(246, 80%, 60%); //profile\r\n  --orange: hsl(15, 100%, 70%); //work\r\n  --softBlue: hsl(195, 74%, 62%); //play\r\n  --lightRed: hsl(348, 100%, 68%); //study\r\n  --limeGreen: hsl(145, 58%, 55%); //exercise\r\n  --violet: hsl(264, 64%, 52%); //social\r\n  --yellow: hsl(43, 84%, 65%); //self care\r\n}\r\nbody {\r\n  font-family: \"Rubik\", sans-serif;\r\n  font-size: 1.2rem;\r\n  // font-size: 1.8rem; // card titles (worl, play, ...)\r\n  font-weight: 400;\r\n}\r\nul {\r\n  list-style: none;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\n","@import \"assets/scripts/generic\";\r\n\r\n// - Mobile: 375px\r\n// - Desktop: 1440px\r\n\r\nbody {\r\n  background: var(--veryDarkBlue);\r\n  height: 100vh;\r\n  margin: auto;\r\n}\r\n.container {\r\n  padding: 5rem 2rem;\r\n}\r\n.profile {\r\n  position: relative;\r\n  height: 22rem;\r\n  div {\r\n    border-radius: 1.2rem;\r\n    height: 15rem;\r\n    width: 100%;\r\n  }\r\n  div:first-of-type {\r\n    background-color: var(--blue);\r\n    position: absolute;\r\n    z-index: 2;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    .profileContainer {\r\n      width: 8rem;\r\n      height: 8rem;\r\n      border: white solid 0.3rem;\r\n      border-radius: 50%;\r\n      margin-right: 2rem;\r\n      img {\r\n        width: 100%;\r\n      }\r\n    }\r\n    h1 {\r\n      color: white;\r\n      font-weight: 300;\r\n      font-size: 1.5rem;\r\n      line-height: 180%;\r\n      span {\r\n        font-weight: 400;\r\n        font-size: 2.2rem;\r\n      }\r\n    }\r\n  }\r\n  div:nth-of-type(2) {\r\n    background-color: var(--darkBlue);\r\n    position: absolute;\r\n    top: 7rem;\r\n    left: 0;\r\n    padding-top: 10.5rem;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n    font-weight: 300;\r\n    ul {\r\n      width: 100%;\r\n      display: inline-flex;\r\n      flex-wrap: nowrap;\r\n      flex-direction: row;\r\n      justify-content: space-around;\r\n      a {\r\n        color: var(--paleBlue);\r\n        &:hover {\r\n          color: white;\r\n          font-weight: 400;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n.card {\r\n  position: relative;\r\n  height: 19.5rem;\r\n  margin-top: 2rem;\r\n  div {\r\n    border-radius: 1.2rem;\r\n    height: 15rem;\r\n    width: 100%;\r\n  }\r\n  div:nth-of-type(2) {\r\n    background-color: var(--darkBlue);\r\n    position: absolute;\r\n    top: 4.5rem;\r\n    left: 0;\r\n    &:hover {\r\n      background-color: var(--darkBlueHover);\r\n      cursor: pointer;\r\n    }\r\n  }\r\n  &-work {\r\n    div:first-of-type {\r\n      background-color: var(--orange);\r\n      text-align: right;\r\n      padding-right: 1.5rem;\r\n    }\r\n  }\r\n  &-play {\r\n    div:first-of-type {\r\n      background-color: var(--softBlue);\r\n      text-align: right;\r\n      padding-right: 1.5rem;\r\n    }\r\n  }\r\n  &-study {\r\n    div:first-of-type {\r\n      background-color: var(--lightRed);\r\n      text-align: right;\r\n      padding-right: 1.5rem;\r\n    }\r\n  }\r\n  &-exercise {\r\n    div:first-of-type {\r\n      background-color: var(--limeGreen);\r\n      text-align: right;\r\n      padding-right: 1.5rem;\r\n    }\r\n  }\r\n  &-social {\r\n    div:first-of-type {\r\n      background-color: var(--violet);\r\n      text-align: right;\r\n      padding-right: 1.5rem;\r\n    }\r\n  }\r\n  &-selfcare {\r\n    div:first-of-type {\r\n      background-color: var(--yellow);\r\n      text-align: right;\r\n      padding-right: 1.5rem;\r\n    }\r\n  }\r\n  &-content {\r\n    padding: 3rem;\r\n    color: white;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    h2,\r\n    p {\r\n      width: 50%;\r\n    }\r\n    h2 {\r\n      font-weight: 400;\r\n      font-size: 2rem;\r\n    }\r\n    .more {\r\n      text-align: right;\r\n      svg {\r\n        fill: var(--desaturatedBlue);\r\n        &:hover {\r\n          fill: white;\r\n          cursor: pointer;\r\n        }\r\n      }\r\n    }\r\n    .hours {\r\n      font-size: 4rem;\r\n      font-weight: 300;\r\n    }\r\n    .lastWeek {\r\n      font-size: 1.6rem;\r\n      color: var(--desaturatedBlue);\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map