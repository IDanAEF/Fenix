/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/es6/blocks/mask.js":
/*!***********************************!*\
  !*** ./assets/es6/blocks/mask.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const mask = selector => {
  let setCursorPosition = (pos, elem) => {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  function createMask(event) {
    let matrix = '+7 (___) ___ __ __',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./assets/es6/blocks/modals.js":
/*!*************************************!*\
  !*** ./assets/es6/blocks/modals.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function modals() {
  try {
    //mobile-menu
    const humburger = document.querySelector('.header__humburger'),
          mobileClose = document.querySelector('.mobile__close'),
          mobileMenu = document.querySelector('.mobile');
    humburger.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      document.querySelector('html').classList.add('fixed');
      document.querySelector('body').classList.add('fixed');
    });
    mobileClose.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.querySelector('html').classList.remove('fixed');
      document.querySelector('body').classList.remove('fixed');
    });
  } catch (e) {
    console.log(e.stack);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./assets/es6/blocks/slider.js":
/*!*************************************!*\
  !*** ./assets/es6/blocks/slider.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function slider() {
  try {
    //promo main-page slider
    const promoSliderItems = document.querySelectorAll('.main__promo-slider-item');
    let iter = 0;

    const setPromoSlide = () => {
      promoSliderItems.forEach(item => item.classList.remove('active'));
      promoSliderItems[iter].classList.add('active');
    };

    setPromoSlide();
    setInterval(() => {
      setPromoSlide(iter >= promoSliderItems.length - 1 ? iter = 0 : ++iter);
    }, 7000);
  } catch (e) {
    console.log(e.stack);
  }

  try {
    //stocks main-page slider
    const stocksSliderPage = document.querySelectorAll('.main__stocks-item');

    function setStocksPage() {
      let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      stocksSliderPage.forEach(item => item.classList.remove('active'));
      stocksSliderPage[i].classList.add('active');
    }

    setStocksPage();

    if (stocksSliderPage.length > 1) {
      const stocksSliderListItem = document.querySelectorAll('.main__stocks-list-item');
      stocksSliderListItem[0].classList.add('active');
      stocksSliderListItem.forEach((item, i) => {
        item.addEventListener('click', () => {
          stocksSliderListItem.forEach(it => it.classList.remove('active'));
          item.classList.add('active');
          setStocksPage(i);
        });
      });
    }
  } catch (e) {
    console.log(e.stack);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!****************************!*\
  !*** ./assets/es6/main.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/slider */ "./assets/es6/blocks/slider.js");
/* harmony import */ var _blocks_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/modals */ "./assets/es6/blocks/modals.js");
/* harmony import */ var _blocks_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/mask */ "./assets/es6/blocks/mask.js");



'use strict';

window.addEventListener('DOMContentLoaded', () => {
  (0,_blocks_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_modals__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_blocks_mask__WEBPACK_IMPORTED_MODULE_2__["default"])('input[type="tel"]');
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map