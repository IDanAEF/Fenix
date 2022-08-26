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

        const contPos = () => {
            //return marketItem[0].getBoundingClientRect().y + window.pageYOffset
            return (marketItem[0].clientHeight / 2) + marketItem[0].getBoundingClientRect().y + window.pageYOffset;
        }

        const contPosBott = () => {
            //return marketItem[0].getBoundingClientRect().y + window.pageYOffset + window.innerHeight;
            return (marketItem[0].clientHeight / 2) + marketItem[0].getBoundingClientRect().y + window.pageYOffset;
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

        window.addEventListener('scroll', scrollEvent);
        window.addEventListener('wheel', wheelEvent);

        //main-page services-slider
        const sSliderTap = document.querySelectorAll('.main__services-name'),
              sSliderItem = document.querySelectorAll('.main__services-page'),
              sSliderLine = document.querySelector('.main__services-pages'),
              sSliderSkip = document.querySelector('.main__services-skip'),
              sSliderRage = document.querySelector('.main__services-rage');

        let count2 = 0;

        sSliderRage.querySelector('.all').textContent = (sSliderTap.length < 10 ? '0' + sSliderTap.length : sSliderTap.length);

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

        const sSliderWindow = document.querySelector('.main__services-window');

        const contPos2 = () => {
            //return sSliderWindow.getBoundingClientRect().y + window.pageYOffset
            return (sSliderWindow.clientHeight / 2) + sSliderWindow.getBoundingClientRect().y + window.pageYOffset;
        }

        const contPosBott2 = () => {
            //return sSliderWindow.getBoundingClientRect().y + window.pageYOffset + window.innerHeight;
            return (sSliderWindow.clientHeight / 2) + sSliderWindow.getBoundingClientRect().y + window.pageYOffset;
        }

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

        sSliderSkip.addEventListener('click', () => {
            stop2 = false;
            allLeft = true;
            allRight = false;
            skipTop = true;
            once2 = false;
            addScroll();
            clearInterval(interval2);
        });

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

        const marketPos = document.querySelector('#market').getBoundingClientRect().top + window.pageYOffset;

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
                        top: (sSliderWindow.clientHeight / 2) + sSliderWindow.getBoundingClientRect().top - (window.innerHeight / 2) - 50,
                        behavior: 'smooth'
                    });
                    interval2 = setInterval(() => {
                        window.scrollBy({
                            top: (sSliderWindow.clientHeight / 2) + sSliderWindow.getBoundingClientRect().top - (window.innerHeight / 2) - 50,
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
                    }, 1000);
                }
                if (e.deltaY < 0 && rightAnimate || e.deltaY > 0 && leftAnimate) {
                    leftAnimate = false;
                    rightAnimate = false;
                    clearTimeout(timeout);
                    setAnimSlide(e.deltaY);
                    timeout = setTimeout(() => {
                        timing = false;
                    }, 1000);
                }
            }
        }

        window.addEventListener('scroll', scrollEvent2);
        window.addEventListener('wheel', wheelEvent2);
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

                setTimeout(() => {
                    scrollingPage = false;
                    if (link.classList.contains('back_top')) {
                        allTop = false;
                        allBott = true;
                        allLeft = false;
                        allRight = true;
                        once2 = false;
                        once = false;
                        clearInterval(interval2);
                        clearInterval(interval);
                    }
                }, 1000);

                SmoothVerticalScrolling(scrollTarget, 275, 'top');

                /*window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });*/
            });
        });
    } catch (e) {
        console.log(e.stack);
    }

    /*try {
        //text animate
        const targetText = document.querySelectorAll('.text_animate');

        function returnHeight() {
            return window.innerWidth <= 600 ? window.innerHeight / 1.05 : window.innerHeight / 1.2
        }

        targetText.forEach(item => {
            if (returnHeight() + window.pageYOffset >= item.getBoundingClientRect().y + window.pageYOffset) {
                item.classList.add('anim');
            }
        });

        window.addEventListener('scroll', () => {
            targetText.forEach(item => {
                if (returnHeight() + window.pageYOffset >= item.getBoundingClientRect().y + window.pageYOffset) {
                    item.classList.add('anim');
                }
            });
        });
    } catch (e) {
        console.log(e.stack);
    }*/

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