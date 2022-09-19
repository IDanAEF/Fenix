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
            if(where == "center" || where == "")
                window.scrollBy(0, eAmt / 2);
            if (where == "top")
                window.scrollBy(0, eAmt);
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
                if (((window.pageYOffset + (window.innerHeight / 2)) >= contPos() && !stop && !allTop) || (window.pageYOffset + (window.innerHeight / 2) <= contPosBott() && !stop && !allBott)) {
                    removeScroll();
                    stop = true;
                }
                if (stop && !once) {
                    once = true;
                    //window.removeEventListener('scroll', scrollEvent);
                    //SmoothVerticalScrolling(marketItem[0], 575, 'top');
                    //window.scroll(0, contPos() - (window.innerHeight / 2));
                    window.scrollBy({
                        top: (marketItem[0].clientHeight / 2) + marketItem[0].getBoundingClientRect().top - (window.innerHeight / 2),
                        behavior: 'smooth'
                    });
                    interval = setInterval(() => {
                        window.scrollBy({
                            top: (marketItem[0].clientHeight / 2) + marketItem[0].getBoundingClientRect().top - (window.innerHeight / 2),
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
            return (marketItem[0].clientHeight / 2) + marketItem[0].getBoundingClientRect().y + window.pageYOffset;
        }

        const contPosBott = () => {
            //return marketItem[0].getBoundingClientRect().y + window.pageYOffset + window.innerHeight;
            return (marketItem[0].clientHeight / 2) + marketItem[0].getBoundingClientRect().y + window.pageYOffset;
        }

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
        }

        //main-page services-slider
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
                if ((window.pageYOffset + (window.innerHeight / 2) >= contPos2() && !stop2 && !allLeft) || (window.pageYOffset + (window.innerHeight / 2) <= contPosBott2() && !stop2 && !allRight)) {
                    removeScroll();
                    stop2 = true;
                }
                if (stop2 && !once2) {
                    once2 = true;
                    //window.removeEventListener('scroll', scrollEvent2);
                    //SmoothVerticalScrolling(sSliderWindow, 575, 'center');
                    //window.scroll(0, contPos2() - (window.innerHeight / 2));
                    window.scrollBy({
                        top: (sSliderWindow.clientHeight / 2) + sSliderWindow.getBoundingClientRect().top - (window.innerHeight / 2) - 107,
                        behavior: 'smooth'
                    });
                    interval2 = setInterval(() => {
                        window.scrollBy({
                            top: (sSliderWindow.clientHeight / 2) + sSliderWindow.getBoundingClientRect().top - (window.innerHeight / 2) - 107,
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

        function setSSlide(i = 0) {
            sSliderTap.forEach(item => item.classList.remove('active'));
            sSliderItem.forEach(item => item.classList.remove('slide'));

            sSliderTap[i].classList.add('active');
            sSliderRage.querySelector('.curr').textContent = (i + 1 < 10 ? '0' + (i + 1) : i + 1);

            //i == sSliderItem.length - 1 ? sSliderSkip.classList.add('hide') : sSliderSkip.classList.remove('hide');

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
            return (sSliderWindow.clientHeight / 2) + sSliderWindow.getBoundingClientRect().y + window.pageYOffset - 107;
        }

        const contPosBott2 = () => {
            //return sSliderWindow.getBoundingClientRect().y + window.pageYOffset + window.innerHeight;
            return (sSliderWindow.clientHeight / 2) + sSliderWindow.getBoundingClientRect().y + window.pageYOffset - 107;
        }

        if (sSliderItem[0]) {
            sSliderRage.querySelector('.all').textContent = (sSliderTap.length < 10 ? '0' + sSliderTap.length : sSliderTap.length);

            setSSlide();

            sSliderTap.forEach((item, i) => {
                item.addEventListener('click', () => {
                    count2 = i;
                    setSSlide(count2);
                });
            });

            let startPos = 0;
            
            sSliderLine.addEventListener('touchstart', (e) => {
                startPos = e.changedTouches[0].screenX;
            });
        
            sSliderLine.addEventListener('touchend', (e) => {
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
        }

        //smooth scroll
        document.querySelectorAll('a[href^="#"').forEach(link => {
            link.addEventListener('click', function(e) {
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
            return window.innerWidth <= 600 ? window.innerHeight / 1.05 : window.innerHeight / 1.2
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
            if (window.pageYOffset <= document.querySelector('body').clientHeight / 2 || window.innerHeight + window.pageYOffset >= document.querySelector('footer').getBoundingClientRect().y + (document.querySelector('footer').clientHeight / 2) + window.pageYOffset) {
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

export default animate;