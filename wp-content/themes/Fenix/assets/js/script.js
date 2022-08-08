/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/es6/blocks/animate.js":
/*!**************************************!*\
  !*** ./assets/es6/blocks/animate.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function animate() {
  try {
    //main market scroll
    const marketItem = document.querySelectorAll('.main__market-item');

    const contPos = () => {
      return marketItem[0].getBoundingClientRect().y + window.pageYOffset;
    };

    const contPosBott = () => {
      return marketItem[0].getBoundingClientRect().y + window.pageYOffset + window.innerHeight;
    };

    let count = 1,
        top = 100,
        stop = false,
        allTop = false,
        allBott = true;
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= contPos() && !stop && !allTop || window.pageYOffset + window.innerHeight <= contPosBott() && !stop && !allBott) {
        document.querySelector('html').classList.add('fixed');
        document.querySelector('body').classList.add('fixed');
        stop = true;
      }

      if (stop) {
        window.scroll(0, contPos());
      }
    });
    window.addEventListener('mousewheel', e => {
      if (stop) {
        if (e.deltaY > 0) {
          top -= 10;

          if (top == -10) {
            top = 100;
            count++;
          }

          if (count < marketItem.length) {
            marketItem[count].style.top = `${top}%`;
          } else {
            stop = false;
            count = marketItem.length - 1;
            top = 0;
            allTop = true;
            allBott = false;
            document.querySelector('html').classList.remove('fixed');
            document.querySelector('body').classList.remove('fixed');
          }
        } else {
          top += 10;

          if (top == 110) {
            top = 0;
            count--;
          }

          if (count >= 1) {
            marketItem[count].style.top = `${top}%`;
          } else {
            stop = false;
            count = 1;
            top = 100;
            allBott = true;
            allTop = false;
            document.querySelector('html').classList.remove('fixed');
            document.querySelector('body').classList.remove('fixed');
          }
        }
      }
    });
  } catch (e) {
    console.log(e.stack);
  }

  try {
    //text animate
    const targetText = document.querySelectorAll('.text_animate');
    targetText.forEach(item => {
      if (window.innerHeight / 1.2 + window.pageYOffset >= item.getBoundingClientRect().y + window.pageYOffset) {
        item.classList.add('anim');
      }
    });
    window.addEventListener('scroll', () => {
      targetText.forEach(item => {
        if (window.innerHeight / 1.2 + window.pageYOffset >= item.getBoundingClientRect().y + window.pageYOffset) {
          item.classList.add('anim');
        }
      });
    });
  } catch (e) {
    console.log(e.stack);
  }

  try {
    //back_top btn
    const backTop = document.querySelector('a.back_top');
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= document.querySelector('body').clientHeight / 2) {
        backTop.classList.add('active');
      }

      if (window.pageYOffset <= document.querySelector('body').clientHeight / 2 || window.innerHeight + window.pageYOffset >= document.querySelector('footer').getBoundingClientRect().y + window.pageYOffset) {
        backTop.classList.remove('active');
      }
    });
  } catch (e) {
    console.log(e.stack);
  }

  try {
    //smooth scroll
    document.querySelectorAll('a[href^="#"').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href),
              topOffset = 0,
              elementPosition = scrollTarget.getBoundingClientRect().top,
              offsetPosition = elementPosition - topOffset;
        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
        });
      });
    });
  } catch (e) {
    console.log(e.stack);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (animate);

/***/ }),

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

  try {
    //sub-menu
    const liWithSub = document.querySelectorAll('header li.menu-item-has-children');

    function setPadding() {
      liWithSub.forEach(item => {
        item.querySelector('.sub-menu').style.cssText = `padding-left: ${item.getBoundingClientRect().left}px; left: -${item.getBoundingClientRect().left}px;`;
      });
    }

    function hideFields() {
      liWithSub.forEach(its => {
        its.querySelector('.sub-menu').classList.remove('open');
        its.classList.remove('select');
      });
    }

    setPadding();
    liWithSub.forEach(item => {
      item.addEventListener('click', e => {
        if (e.composedPath().some(it => it.nodeName == 'LI' && it.classList.contains('menu-item-has-children')) && !e.composedPath().some(it => it.nodeName == 'UL' && it.classList.contains('sub-menu'))) {
          if (item.querySelector('.sub-menu').classList.contains('open')) {
            item.querySelector('.sub-menu').classList.remove('open');
            item.classList.remove('select');
          } else {
            hideFields();
            item.querySelector('.sub-menu').classList.add('open');
            item.classList.add('select');
          }
        }
      });
    });
    window.addEventListener('click', e => {
      if (!e.composedPath().some(item => item.nodeName == 'LI' && item.classList.contains('menu-item-has-children'))) {
        hideFields();
      }
    });
    window.addEventListener('resize', () => {
      setPadding();
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
/* harmony import */ var _blocks_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/animate */ "./assets/es6/blocks/animate.js");




'use strict';

window.addEventListener('DOMContentLoaded', () => {
  (0,_blocks_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_modals__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_blocks_animate__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_blocks_mask__WEBPACK_IMPORTED_MODULE_2__["default"])('input[type="tel"]');
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map