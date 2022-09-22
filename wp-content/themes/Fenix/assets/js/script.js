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
    let scrollingPage = false;
    const htmlElem = document.querySelector('html');

    function removeScroll() {
      let firstOff = htmlElem.clientWidth;
      htmlElem.classList.add('fixed');
      document.querySelector('body').style.cssText = `padding-right: ${htmlElem.offsetWidth - firstOff}px;`;
      document.querySelector('body').classList.add('fixed');
    }

    function addScroll() {
      htmlElem.classList.remove('fixed');
      document.querySelector('body').style.cssText = ``;
      document.querySelector('body').classList.remove('fixed');
    }

    function SmoothVerticalScrolling(e, time, where) {
      var eTop = e.getBoundingClientRect().top - 100;
      var eAmt = eTop / 100;
      var curTime = 0;

      while (curTime <= time) {
        window.setTimeout(SVS_B, curTime, eAmt, where);
        curTime += time / 100;
      }
    }

    function SVS_B(eAmt, where) {
      if (where == "center" || where == "") window.scrollBy(0, eAmt / 2);
      if (where == "top") window.scrollBy(0, eAmt);
    }

    let count = 1,
        top = 100,
        stop = false,
        allTop = false,
        allBott = true,
        timing2 = false,
        once = false,
        interval;

    function scrollEvent() {
      if (window.innerWidth >= 992 && !scrollingPage) {
        if (window.pageYOffset + window.innerHeight / 2 >= contPos() && !stop && !allTop || window.pageYOffset + window.innerHeight / 2 <= contPosBott() && !stop && !allBott) {
          removeScroll();
          stop = true;
        }

        if (stop && !once) {
          once = true; //window.removeEventListener('scroll', scrollEvent);
          //SmoothVerticalScrolling(marketItem[0], 575, 'top');
          //window.scroll(0, contPos() - (window.innerHeight / 2));

          window.scrollBy({
            top: marketItem[0].clientHeight / 2 + marketItem[0].getBoundingClientRect().top - window.innerHeight / 2,
            behavior: 'smooth'
          });
          interval = setInterval(() => {
            window.scrollBy({
              top: marketItem[0].clientHeight / 2 + marketItem[0].getBoundingClientRect().top - window.innerHeight / 2,
              behavior: 'smooth'
            });
          }, 400);
        }
      }
    }

    function wheelEvent(e) {
      if (stop && window.innerWidth >= 992 && !scrollingPage) {
        if (!timing2) {
          timing2 = true;
          setMarketSlide(e.deltaY);
          setTimeout(() => {
            timing2 = false;
          }, 1000);
        }
      }
    }

    const contPos = () => {
      //return marketItem[0].getBoundingClientRect().y + window.pageYOffset
      return marketItem[0].clientHeight / 2 + marketItem[0].getBoundingClientRect().y + window.pageYOffset;
    };

    const contPosBott = () => {
      //return marketItem[0].getBoundingClientRect().y + window.pageYOffset + window.innerHeight;
      return marketItem[0].clientHeight / 2 + marketItem[0].getBoundingClientRect().y + window.pageYOffset;
    };

    function setMarketSlide(delta) {
      if (delta > 0) {
        if (count >= marketItem.length) {
          stop = false;
          count = marketItem.length;
          allTop = true;
          allBott = false;
          addScroll();
          once = false;
          clearInterval(interval);
        } else {
          marketItem[count].classList.add('active');
          count++;
        }
        /*top -= 10;
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
        }*/

      } else {
        count--;

        if (count <= 0) {
          stop = false;
          count = 1;
          allTop = false;
          allBott = true;
          addScroll();
          once = false;
          clearInterval(interval);
        } else {
          marketItem[count].classList.remove('active');
        }
        /*top += 10;
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
        }*/

      }
    }

    if (marketItem[0]) {
      window.addEventListener('scroll', scrollEvent);
      window.addEventListener('wheel', wheelEvent);
    } //main-page services-slider


    const sSliderTap = document.querySelectorAll('.main__services-name'),
          sSliderItem = document.querySelectorAll('.main__services-page'),
          sSliderLine = document.querySelector('.main__services-pages'),
          sSliderSkip = document.querySelector('.main__services-skip'),
          sSliderRage = document.querySelector('.main__services-rage');
    let count2 = 0;
    let stop2 = false,
        allLeft = false,
        allRight = true,
        once2 = false,
        timing = false,
        skipTop = false,
        leftAnimate = false,
        rightAnimate = false,
        interval2;
    let timeout;
    const sSliderWindow = document.querySelector('.main__services-window');

    function scrollEvent2(e) {
      if (skipTop && !scrollingPage) {
        skipTop = false;
      } else if (!skipTop && window.innerWidth >= 992 && !scrollingPage) {
        if (window.pageYOffset + window.innerHeight / 2 >= contPos2() && !stop2 && !allLeft || window.pageYOffset + window.innerHeight / 2 <= contPosBott2() && !stop2 && !allRight) {
          removeScroll();
          stop2 = true;
        }

        if (stop2 && !once2) {
          once2 = true; //window.removeEventListener('scroll', scrollEvent2);
          //SmoothVerticalScrolling(sSliderWindow, 575, 'center');
          //window.scroll(0, contPos2() - (window.innerHeight / 2));

          window.scrollBy({
            top: sSliderWindow.clientHeight / 2 + sSliderWindow.getBoundingClientRect().top - window.innerHeight / 2 - 107,
            behavior: 'smooth'
          });
          interval2 = setInterval(() => {
            window.scrollBy({
              top: sSliderWindow.clientHeight / 2 + sSliderWindow.getBoundingClientRect().top - window.innerHeight / 2 - 107,
              behavior: 'smooth'
            });
          }, 400);
        }
      }
    }

    function wheelEvent2(e) {
      if (stop2 && window.innerWidth >= 992 && !scrollingPage) {
        if (!timing) {
          timing = true;

          if (e.deltaY < 0) {
            leftAnimate = true;
            rightAnimate = false;
          } else {
            leftAnimate = false;
            rightAnimate = true;
          }

          setAnimSlide(e.deltaY);
          timeout = setTimeout(() => {
            timing = false;
          }, 1300);
        }

        if (e.deltaY < 0 && rightAnimate || e.deltaY > 0 && leftAnimate) {
          leftAnimate = false;
          rightAnimate = false;
          clearTimeout(timeout);
          setAnimSlide(e.deltaY);
          timeout = setTimeout(() => {
            timing = false;
          }, 1300);
        }
      }
    }

    function setSSlide() {
      let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      sSliderTap.forEach(item => item.classList.remove('active'));
      sSliderItem.forEach(item => item.classList.remove('slide'));
      sSliderTap[i].classList.add('active');
      sSliderRage.querySelector('.curr').textContent = i + 1 < 10 ? '0' + (i + 1) : i + 1; //i == sSliderItem.length - 1 ? sSliderSkip.classList.add('hide') : sSliderSkip.classList.remove('hide');

      if (i != 0) {
        for (let j = sSliderItem.length - 1; j >= sSliderItem.length - i; j--) {
          sSliderItem[j].classList.add('slide');
        }
      }
    }

    function setAnimSlide(delta) {
      if (delta > 0) {
        count2++;

        if (count2 >= sSliderItem.length) {
          stop2 = false;
          count2 = sSliderItem.length - 1;
          allLeft = true;
          allRight = false;
          addScroll();
          once2 = false;
          clearInterval(interval2);
        } else {
          setSSlide(count2);
        }
      } else {
        count2--;

        if (count2 < 0) {
          stop2 = false;
          count2 = 0;
          allLeft = false;
          allRight = true;
          addScroll();
          once2 = false;
          clearInterval(interval2);
        } else {
          setSSlide(count2);
        }
      }
    }

    const contPos2 = () => {
      //return sSliderWindow.getBoundingClientRect().y + window.pageYOffset
      return sSliderWindow.clientHeight / 2 + sSliderWindow.getBoundingClientRect().y + window.pageYOffset - 107;
    };

    const contPosBott2 = () => {
      //return sSliderWindow.getBoundingClientRect().y + window.pageYOffset + window.innerHeight;
      return sSliderWindow.clientHeight / 2 + sSliderWindow.getBoundingClientRect().y + window.pageYOffset - 107;
    };

    if (sSliderItem[0]) {
      sSliderRage.querySelector('.all').textContent = sSliderTap.length < 10 ? '0' + sSliderTap.length : sSliderTap.length;
      setSSlide();
      sSliderTap.forEach((item, i) => {
        item.addEventListener('click', () => {
          count2 = i;
          setSSlide(count2);
        });
      });
      let startPos = 0;
      sSliderLine.addEventListener('touchstart', e => {
        startPos = e.changedTouches[0].screenX;
      });
      sSliderLine.addEventListener('touchend', e => {
        if (startPos - e.changedTouches[0].screenX > 50 && count2 + 1 < sSliderItem.length) {
          count2++;
          setSSlide(count2);
        } else if (startPos - e.changedTouches[0].screenX < -50 && count2 - 1 >= 0) {
          count2--;
          setSSlide(count2);
        }
      });
      sSliderSkip.addEventListener('click', () => {
        stop2 = false;
        allLeft = true;
        allRight = false;
        skipTop = true;
        once2 = false;
        addScroll();
        clearInterval(interval2);
      });
      const marketPos = document.querySelector('#market').getBoundingClientRect().top + window.pageYOffset;
      window.addEventListener('scroll', scrollEvent2);
      window.addEventListener('wheel', wheelEvent2);
    }

    window.onbeforeunload = () => {
      window.removeEventListener('scroll', scrollEvent2);
      window.removeEventListener('wheel', wheelEvent2);
      window.removeEventListener('scroll', scrollEvent);
      window.removeEventListener('wheel', wheelEvent);
      clearInterval(interval2);
      clearInterval(interval);
      window.scroll(0, 0);
    }; //smooth scroll


    document.querySelectorAll('a[href^="#"').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href),
              topOffset = 0,
              elementPosition = scrollTarget.getBoundingClientRect().top,
              offsetPosition = elementPosition - topOffset;
        scrollingPage = true;
        let notWh = false;

        if (link.classList.contains('back_top')) {
          stop = false;
          stop2 = false;
          allTop = false;
          allBott = true;
          allLeft = false;
          allRight = true;
          once2 = false;
          once = false;
          clearInterval(interval2);
          clearInterval(interval);
        } else if (link.classList.contains('header__button') || link.classList.contains('mobile__button')) {
          document.querySelector('.mobile').querySelectorAll('.anim_left').forEach(item => {
            item.classList.remove('showanim');
          });
          document.querySelector('.mobile').classList.remove('active');
          stop = false;
          stop2 = false;
          allTop = true;
          allBott = false;
          allLeft = true;
          allRight = false;
          once2 = false;
          once = false;
          clearInterval(interval2);
          clearInterval(interval);
          addScroll();
          window.scrollBy({
            top: offsetPosition - 100,
            behavior: 'smooth'
          });
          notWh = true;
        }

        setTimeout(() => {
          scrollingPage = false;
        }, 1000);

        if (!notWh) {
          SmoothVerticalScrolling(scrollTarget, 275, 'top');
        }
        /*window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });*/

      });
    });
  } catch (e) {
    console.log(e.stack);
  }

  try {
    //elem-text animate
    const targetElem = document.querySelectorAll('.elem_animate'),
          targetText = document.querySelectorAll('.text_animate');
    targetText.forEach(item => {
      let textCont = item.textContent.trim(),
          newInner = '',
          transit = 0;

      for (let i = 0; i < textCont.length; i++) {
        newInner += `<div class="or" style="transition: 0.6s all ${transit.toFixed(2)}s">${textCont[i]}</div>`;
        transit += 0.04;
      }

      item.innerHTML = newInner;
    });

    function returnHeight() {
      return window.innerWidth <= 600 ? window.innerHeight / 1.05 : window.innerHeight / 1.2;
    }

    function setAnim(mass) {
      mass.forEach(item => {
        if (returnHeight() + window.pageYOffset >= item.getBoundingClientRect().y + window.pageYOffset) {
          item.classList.add('anim');
        }
      });
    }

    setAnim(targetElem);
    setAnim(targetText);
    window.addEventListener('scroll', () => {
      setAnim(targetElem);
      setAnim(targetText);
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

      if (window.pageYOffset <= document.querySelector('body').clientHeight / 2 || window.innerHeight + window.pageYOffset >= document.querySelector('footer').getBoundingClientRect().y + document.querySelector('footer').clientHeight / 2 + window.pageYOffset) {
        backTop.classList.remove('active');
      }
    });
  } catch (e) {
    console.log(e.stack);
  }

  try {
    //market mobile file
    const marketFile = document.querySelectorAll('.main__market-item-file-elem');

    function changeUrl() {
      if (window.innerWidth <= 992) {
        marketFile.forEach(item => {
          if (item.parentElement.getAttribute('data-mobile') && item.src != item.parentElement.getAttribute('data-mobile')) {
            item.src = item.parentElement.getAttribute('data-mobile');
          }
        });
      } else {
        marketFile.forEach(item => {
          if (item.src != item.parentElement.getAttribute('data-file')) {
            item.src = item.parentElement.getAttribute('data-file');
          }
        });
      }
    }

    changeUrl();
    window.addEventListener('resize', () => {
      changeUrl();
    });
  } catch (e) {
    console.log(e.stack);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (animate);

/***/ }),

/***/ "./assets/es6/blocks/form.js":
/*!***********************************!*\
  !*** ./assets/es6/blocks/form.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function form() {
  async function postData(url, data) {
    let res = await fetch(url, {
      method: "POST",
      body: data
    });
    return await res.text();
  }

  try {
    //main feed
    const mFeed = document.querySelector('.main__feed form'),
          fileInp = mFeed.querySelector('#file'),
          fileBlock = mFeed.querySelector('.file_block'),
          fileInpLabel = fileBlock.querySelector('.file_label');
    mFeed.addEventListener('submit', () => {
      mFeed.querySelector('.policy').classList.add('mt');
    });
    let countFiles = 0;
    mFeed.addEventListener('click', e => {
      if (e.composedPath().filter(item => item.nodeName == 'A' && item.classList.contains('remove-file')).length > 0) {
        countFiles--;

        if (countFiles <= 0) {
          fileInpLabel.innerHTML = '<div class="gray_arrow"><img src="/wp-content/themes/Fenix/assets/images/arrow_gray.svg" alt=""></div>Прикрепить файл';
        }
      }
    });
    fileInp.addEventListener('change', () => {
      countFiles++;
      fileInpLabel.innerHTML = '<div class="plus"><span></span><span></span></div>Добавить еще файл';
    });
  } catch (e) {
    console.log(e.stack);
  }

  try {
    //letter
    const letterForm = document.querySelector('.main__letter-form form');
    letterForm.addEventListener('submit', e => {
      e.preventDefault();
      let formData = new FormData(letterForm);
      postData('http://fenix.tw1.ru/?na=s', formData).then(() => {
        letterForm.querySelector('.main__letter-form-mess').textContent = 'Спасибо за подписку!';
      }).catch(() => {
        letterForm.querySelector('.main__letter-form-mess').textContent = 'Что-то пошло не так!';
      });
    });
  } catch (e) {
    console.log(e.stack);
  }

  try {
    //auth form
    const authModal = document.querySelector('.auth'),
          checkInput = authModal.querySelector('#authcheck'),
          checkLabelImg = authModal.querySelector('.auth__form-check-field label img');
    checkInput.checked ? checkLabelImg.classList.toggle('active') : '';
    checkInput.addEventListener('change', () => {
      checkLabelImg.classList.toggle('active');
    });
  } catch (e) {
    console.log(e.stack);
  }

  try {
    //personal form validate
    const mForm = document.querySelector('.auth__field.main-form form'),
          mInputs = mForm.querySelectorAll('.auth__form-block');
    mForm.querySelector('button').addEventListener('click', e => {
      mInputs.forEach(item => {
        if (!item.querySelector('input').value) {
          e.preventDefault();
          const mLabel = item.querySelector('label'),
                mInput = item.querySelector('input');
          let labelText = mLabel.textContent;
          mLabel.textContent = 'Заполните поле';
          mLabel.classList.add('fail');
          mInput.classList.add('fail');
          mInput.addEventListener('focus', () => {
            mLabel.classList.remove('fail');
            mInput.classList.remove('fail');
            mLabel.textContent = labelText;
          });
        }
      });
    });
  } catch (e) {
    console.log(e.stack);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (form);

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

    if (humburger) {
      const menuLi = mobileMenu.querySelectorAll('li');
      menuLi.forEach(item => {
        item.classList.add('anim_left');
      });
      const animTarget = mobileMenu.querySelectorAll('.anim_left');
      humburger.addEventListener('click', () => {
        let time = 400;
        animTarget.forEach(item => {
          setTimeout(() => {
            item.classList.add('showanim');
          }, time);
          time += 70;
        });
        mobileMenu.classList.add('active');
        document.querySelector('html').classList.add('fixed');
        document.querySelector('body').classList.add('fixed');
      });
      mobileClose.addEventListener('click', () => {
        animTarget.forEach(item => {
          item.classList.remove('showanim');
        });
        mobileMenu.classList.remove('active');
        document.querySelector('html').classList.remove('fixed');
        document.querySelector('body').classList.remove('fixed');
      });
      const mobileTiltes = document.querySelectorAll('.mobile__nav-title');
      mobileTiltes.forEach(item => {
        item.addEventListener('click', e => {
          if (e.target.nodeName == 'IMG' && e.target.classList.contains('light_right')) {
            e.preventDefault();
            item.classList.add('active');
            item.querySelector('.orange_left').classList.add('active');
            e.target.classList.remove('active');
            item.nextElementSibling.classList.add('active');
          } else if (e.target.nodeName == 'IMG' && e.target.classList.contains('orange_left')) {
            e.preventDefault();
            item.classList.remove('active');
            item.querySelector('.light_right').classList.add('active');
            e.target.classList.remove('active');
            item.nextElementSibling.classList.remove('active');
          }
        });
      });
    }
  } catch (e) {
    console.log(e.stack);
  }

  try {
    //sub-menu
    const liWithSub = document.querySelectorAll('header li.menu-item-has-children');

    if (liWithSub[0]) {
      function setPadding() {
        liWithSub.forEach(item => {
          item.querySelector('.sub-menu').style.cssText = `padding-left: ${item.getBoundingClientRect().left}px; left: -${item.getBoundingClientRect().left}px;`;

          if (item.classList.contains('market_place')) {
            document.querySelector('.market-sub').style.cssText = `padding-left: ${item.getBoundingClientRect().left}px; padding-right: ${document.querySelector('.container').getBoundingClientRect().left}px`;
          }
        });
      }

      function hideFields() {
        liWithSub.forEach(its => {
          its.querySelector('.sub-menu').classList.remove('open');
          its.classList.remove('select');
        });
        document.querySelector('.market-sub').classList.remove('open');
      }

      setPadding();
      liWithSub.forEach(item => {
        item.addEventListener('click', e => {
          if (e.composedPath().some(it => it.nodeName == 'LI' && it.classList.contains('menu-item-has-children') && !it.classList.contains('market_place')) && !e.composedPath().some(it => it.nodeName == 'UL' && it.classList.contains('sub-menu'))) {
            if (item.querySelector('.sub-menu').classList.contains('open')) {
              item.querySelector('.sub-menu').classList.remove('open');
              item.classList.remove('select');
            } else {
              hideFields();
              item.querySelector('.sub-menu').classList.add('open');
              item.classList.add('select');
            }
          }

          if (e.composedPath().some(it => it.nodeName == 'LI' && it.classList.contains('menu-item-has-children') && it.classList.contains('market_place'))) {
            e.preventDefault();

            if (document.querySelector('.market-sub').classList.contains('open')) {
              document.querySelector('.market-sub').classList.remove('open');
              item.classList.remove('select');
            } else {
              hideFields();
              document.querySelector('.market-sub').classList.add('open');
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
    }
  } catch (e) {
    console.log(e.stack);
  }

  try {
    //cases blocks
    const casesItems = document.querySelectorAll('.main__cases-item');

    if (casesItems[0]) {
      casesItems.forEach(item => {
        item.addEventListener('click', e => {
          if (window.innerWidth > 576) {
            window.location.href = item.getAttribute('data-url');
          } else if (window.innerWidth <= 576) {
            if (item.classList.contains('active') && !e.composedPath().some(it => it.nodeName == 'DIV' && it.classList.contains('main__cases-item-target'))) {
              window.location.href = item.getAttribute('data-url');
            }

            if (e.composedPath().some(it => it == item || it.nodeName == 'DIV' && it.classList.contains('main__cases-item-target'))) {
              item.classList.toggle('active');
              item.querySelector('.main__cases-item-target').classList.toggle('active');
              item.querySelector('.main__cases-item-character').classList.toggle('active');
            }
          }
        });
      });
    }
  } catch (e) {
    console.log(e.stack);
  }

  try {
    //market blocks
    const marketItems = document.querySelectorAll('.main__market-item-tap');

    if (marketItems[0]) {
      marketItems.forEach(item => {
        item.addEventListener('click', () => {
          item.classList.toggle('active');
          item.previousElementSibling.previousElementSibling.classList.toggle('active');
          item.previousElementSibling.classList.toggle('active');
        });
      });
    }
  } catch (e) {
    console.log(e.stack);
  }

  try {
    //header fixed
    const header = document.querySelector('header');

    if (header) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset >= 350) {
          header.classList.add('trans');
          header.classList.add('active');
        } else {
          header.classList.remove('active');
        }

        if (window.pageYOffset >= 150) {
          header.classList.add('fixed');
          document.querySelector('main').style.cssText = `padding-top: ${header.clientHeight}px;`;
        } else {
          header.classList.remove('trans');
          header.classList.remove('fixed');
          document.querySelector('main').style.cssText = ``;
        }
      });
    }
  } catch (e) {
    console.log(e.stack);
  }

  try {
    //profile side slide
    const pSide = document.querySelector('.user-profile__side'),
          pSideBtn = pSide.querySelector('.side_slide');
    pSideBtn.addEventListener('click', () => {
      pSide.classList.toggle('active');
    });
  } catch (e) {
    console.log(e.stack);
  }

  try {
    //auth rememb
    const remembBtn = document.querySelector('.auth__forget'),
          authFields = document.querySelectorAll('.auth__field'),
          authRememb = document.querySelector('.auth__field.rememb'),
          authAnsw = document.querySelector('.auth__field.send'),
          authMain = document.querySelector('.auth__field.main-form');
    let email = 'e.dev@german-web.ru';

    const openField = name => {
      authFields.forEach(item => item.classList.remove('active'));
      name.classList.add('active');
    };

    remembBtn.addEventListener('click', () => {
      openField(authRememb);
    });
    authRememb.querySelector('#authemail-rememb').addEventListener('click', () => {
      if (authRememb.querySelector('#authemail-rememb').classList.contains('failed')) {
        authRememb.querySelector('#authemail-rememb').value = '';
        authRememb.querySelector('#authemail-rememb').classList.remove('failed');
      }
    });
    authRememb.querySelector('form').addEventListener('submit', e => {
      e.preventDefault();

      if (authRememb.querySelector('#authemail-rememb').value == email) {
        openField(authAnsw);
        setTimeout(() => {
          openField(authMain);
        }, 5000);
      } else {
        authRememb.querySelector('#authemail-rememb').value = 'Такого E-mail нет в системе';
        authRememb.querySelector('#authemail-rememb').classList.add('failed');
      }
    });
  } catch (e) {
    console.log(e.stack);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./assets/es6/blocks/search.js":
/*!*************************************!*\
  !*** ./assets/es6/blocks/search.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function search() {
  try {
    //profile search
    const phInp = document.querySelector('#findphone'),
          phItems = document.querySelectorAll('.phone-search'),
          dateItems = document.querySelectorAll('.date-search'),
          inpBlock = document.querySelectorAll('.input_block'),
          filter = document.querySelectorAll('.filter-item'),
          dateInp = document.querySelector('#finddate');
    filter.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
    dateInp.addEventListener('change', () => {
      dateItems.forEach(item => item.parentElement.style.cssText = '');
      dateItems.forEach(item => {
        if (item.textContent.indexOf(dateInp.value) == -1) {
          item.parentElement.style.cssText = 'display: none';
        }
      });
    });
    phInp.addEventListener('keyup', () => {
      clearTimeout(timeout);
      var timeout = setTimeout(() => {
        phItems.forEach(item => item.parentElement.style.cssText = '');
        phItems.forEach(item => {
          if (item.textContent.indexOf(phInp.value) == -1) {
            item.parentElement.style.cssText = 'display: none';
          }
        });
      }, 500);
    });
    inpBlock.forEach(item => {
      item.addEventListener('click', () => {
        if (item.querySelector('.input_block-list')) {
          item.querySelector('.input_block-list').classList.toggle('active');
          item.querySelector('.input_block-text img').classList.toggle('active');
        }
      });
    });
  } catch (e) {
    console.log(e.stack);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (search);

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

    if (promoSliderItems.length > 1) {
      setInterval(() => {
        setPromoSlide(iter >= promoSliderItems.length - 1 ? iter = 0 : ++iter);
      }, 10000);
    }
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

  try {
    //mobile blog slider
    const bSliderField = document.querySelector('.main__blog-items'),
          bSliderElems = document.querySelectorAll('.main__blog-item');
    let startPos = 0,
        count = 0;
    bSliderField.addEventListener('touchstart', e => {
      startPos = e.changedTouches[0].screenX;
    });
    bSliderField.addEventListener('touchend', e => {
      if (window.innerWidth <= 576) {
        if (startPos - e.changedTouches[0].screenX > 50) {
          count == bSliderElems.length - 1 ? count = 0 : count++;
        } else if (startPos - e.changedTouches[0].screenX < -50) {
          count == 0 ? count = bSliderElems.length - 1 : count--;
        }

        bSliderField.style.transform = `translateX(-${(bSliderElems[0].clientWidth + 10) * count}px)`;
      }
    });
  } catch (e) {
    console.log(e.stack);
  }

  try {
    //market sub menu
    const msSliderLine = document.querySelectorAll('.market-sub__right-slider-line'),
          msSliderOneItem = document.querySelector('.market-sub__right-slider-item');

    const getOffset = () => {
      return msSliderOneItem.clientHeight + 10;
    };

    msSliderLine.forEach((msSlider, i) => {
      const msSliderItems = msSlider.querySelectorAll('.market-sub__right-slider-item');
      let count = 0,
          range = 1,
          timeout = i == 0 ? 7000 : 7000 + 300 * i;
      setInterval(() => {
        if (count == 0) {
          range = 1;
        } else if (count == msSliderItems.length - 1) {
          range = -1;
        }

        count += range;
        msSlider.style.cssText = `transform: translateY(-${getOffset() * count}px)`;
      }, timeout);
    });
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
/* harmony import */ var _blocks_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/form */ "./assets/es6/blocks/form.js");
/* harmony import */ var _blocks_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/search */ "./assets/es6/blocks/search.js");






'use strict';

window.addEventListener('DOMContentLoaded', () => {
  (0,_blocks_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_modals__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_blocks_animate__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_blocks_mask__WEBPACK_IMPORTED_MODULE_2__["default"])('input[type="tel"]');
  (0,_blocks_form__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_blocks_search__WEBPACK_IMPORTED_MODULE_5__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map