function animate() {
    try {
        //main market scroll
        const marketItem = document.querySelectorAll('.main__market-item');

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
            allBott = true;

        function scrollEvent() {
            if (window.innerWidth >= 992) {
                if (((window.pageYOffset + (window.innerHeight / 2)) >= contPos() && !stop && !allTop) || (window.pageYOffset + (window.innerHeight / 2) <= contPosBott() && !stop && !allBott)) {
                    document.querySelector('html').classList.add('fixed');
                    document.querySelector('body').classList.add('fixed');
                    stop = true;
                }
                if (stop) {
                    window.scroll(0, contPos() - (window.innerHeight / 2));
                }
            }
        }

        function wheelEvent(e) {
            if (stop && window.innerWidth >= 992) {
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

            i == sSliderItem.length - 1 ? sSliderSkip.classList.add('hide') : sSliderSkip.classList.remove('hide');

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
            return sSliderWindow.getBoundingClientRect().y + window.pageYOffset
        }

        const contPosBott2 = () => {
            return sSliderWindow.getBoundingClientRect().y + window.pageYOffset + window.innerHeight;
        }

        let stop2 = false,
            allLeft = false,
            allRight = true,
            once2 = false,
            timing = false,
            skipTop = false;

        sSliderSkip.addEventListener('click', () => {
            stop2 = false;
            allLeft = true;
            allRight = false;
            skipTop = true;
            document.querySelector('html').classList.remove('fixed');
            document.querySelector('body').classList.remove('fixed');
        });

        function setAnimSlide(delta) {
            if (delta > 0) {
                count2++;
                if (count2 >= sSliderItem.length) {
                    stop2 = false;
                    count2 = sSliderItem.length - 1;
                    allLeft = true;
                    allRight = false;
                    document.querySelector('html').classList.remove('fixed');
                    document.querySelector('body').classList.remove('fixed');
                    once2 = false;
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
                    document.querySelector('html').classList.remove('fixed');
                    document.querySelector('body').classList.remove('fixed');
                    once2 = false;
                } else {
                    setSSlide(count2);
                }
            }
        }

        const marketPos = document.querySelector('#market').getBoundingClientRect().top + window.pageYOffset;

        function scrollEvent2() {
            if (skipTop && marketPos <= window.pageYOffset) {
                skipTop = false;
            } else if (!skipTop && window.innerWidth >= 992) {
                if ((window.pageYOffset >= contPos2() && !stop2 && !allLeft) || (window.pageYOffset + window.innerHeight <= contPosBott2() && !stop2 && !allRight)) {
                    document.querySelector('html').classList.add('fixed');
                    document.querySelector('body').classList.add('fixed');
                    stop2 = true;
                }
                if (stop2) {
                    window.scroll(0, contPos2());
                }
            }
        }

        function wheelEvent2(e) {
            if (stop2 && window.innerWidth >= 992) {
                if (!timing) {
                    timing = true;
                    setAnimSlide(e.deltaY);
                    setTimeout(() => {
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

                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
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
}

export default animate;