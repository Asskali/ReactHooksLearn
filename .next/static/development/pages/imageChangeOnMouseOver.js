(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\imageChangeOnMouseOver.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FimageChangeOnMouseOver&absolutePagePath=C%3A%5CUsers%5Cadam_%5CCode%5CReact%5CReact-Hooks%5Cpages%5CimageChangeOnMouseOver.js!./":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FimageChangeOnMouseOver&absolutePagePath=C%3A%5CUsers%5Cadam_%5CCode%5CReact%5CReact-Hooks%5Cpages%5CimageChangeOnMouseOver.js ***!
  \************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/imageChangeOnMouseOver", function() {
      var page = __webpack_require__(/*! ./pages/imageChangeOnMouseOver.js */ "./pages/imageChangeOnMouseOver.js")
      if(true) {
        module.hot.accept(/*! ./pages/imageChangeOnMouseOver.js */ "./pages/imageChangeOnMouseOver.js", function() {
          if(!next.router.components["/imageChangeOnMouseOver"]) return
          var updatedPage = __webpack_require__(/*! ./pages/imageChangeOnMouseOver.js */ "./pages/imageChangeOnMouseOver.js")
          next.router.update("/imageChangeOnMouseOver", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_6dc2816e14fab51b8269 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_6dc2816e14fab51b8269 */ "dll-reference dll_6dc2816e14fab51b8269"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/imageChangeOnMouseOver.js":
/*!*****************************************!*\
  !*** ./pages/imageChangeOnMouseOver.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageToggleOnMouseOver */ "./src/ImageToggleOnMouseOver.js");
var _jsxFileName = "C:\\Users\\adam_\\Code\\React\\React-Hooks\\pages\\imageChangeOnMouseOver.js";



var ImageChangeOnMouseOver = function ImageChangeOnMouseOver() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/1/zack-fair-mcashe.jpg",
    secondaryImg: "https://i.pinimg.com/originals/db/fc/b1/dbfcb1a16a9a5dc6e8546da41de5684b.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), "\xA0\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "https://i.pinimg.com/originals/db/fc/b1/dbfcb1a16a9a5dc6e8546da41de5684b.jpg",
    secondaryImg: "https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/1/zack-fair-mcashe.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnMouseOver);

/***/ }),

/***/ "./src/ImageToggleOnMouseOver.js":
/*!***************************************!*\
  !*** ./src/ImageToggleOnMouseOver.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\adam_\\Code\\React\\React-Hooks\\src\\ImageToggleOnMouseOver.js";


var ImageToggleOnMouseOver = function ImageToggleOnMouseOver(_ref) {
  var primaryImg = _ref.primaryImg,
      secondaryImg = _ref.secondaryImg;
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: primaryImg,
    alt: "",
    ref: imageRef,
    onMouseOver: function onMouseOver(e) {
      imageRef.current.src = secondaryImg;
    },
    onMouseOut: function onMouseOut(e) {
      imageRef.current.src = primaryImg;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnMouseOver);

/***/ }),

/***/ 2:
/*!****************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2FimageChangeOnMouseOver&absolutePagePath=C%3A%5CUsers%5Cadam_%5CCode%5CReact%5CReact-Hooks%5Cpages%5CimageChangeOnMouseOver.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2FimageChangeOnMouseOver&absolutePagePath=C%3A%5CUsers%5Cadam_%5CCode%5CReact%5CReact-Hooks%5Cpages%5CimageChangeOnMouseOver.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FimageChangeOnMouseOver&absolutePagePath=C%3A%5CUsers%5Cadam_%5CCode%5CReact%5CReact-Hooks%5Cpages%5CimageChangeOnMouseOver.js!./");


/***/ }),

/***/ "dll-reference dll_6dc2816e14fab51b8269":
/*!*******************************************!*\
  !*** external "dll_6dc2816e14fab51b8269" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_6dc2816e14fab51b8269;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=imageChangeOnMouseOver.js.map