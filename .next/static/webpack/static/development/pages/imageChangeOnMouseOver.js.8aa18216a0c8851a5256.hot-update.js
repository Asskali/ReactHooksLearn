webpackHotUpdate("static\\development\\pages\\imageChangeOnMouseOver.js",{

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

/***/ })

})
//# sourceMappingURL=imageChangeOnMouseOver.js.8aa18216a0c8851a5256.hot-update.js.map