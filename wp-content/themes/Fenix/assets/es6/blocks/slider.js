function slider() {
    try {
        //promo main-page slider
        const promoSliderItems = document.querySelectorAll('.main__promo-slider-item');

        let iter = 0;

        const setPromoSlide = () => {
            promoSliderItems.forEach(item => item.classList.remove('active'));
            promoSliderItems[iter].classList.add('active');
        }

        setPromoSlide();

        if (promoSliderItems.length > 1) {
            setInterval(() => {
                setPromoSlide((iter >= promoSliderItems.length - 1 ? iter = 0 : ++iter));
            }, 10000);
        }
    } catch (e) {
        console.log(e.stack);
    }

    try {
        //stocks main-page slider
        const stocksSliderPage = document.querySelectorAll('.main__stocks-item');

        function setStocksPage(i = 0) {
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

        bSliderField.addEventListener('touchstart', (e) => {
            startPos = e.changedTouches[0].screenX;
        });
    
        bSliderField.addEventListener('touchend', (e) => {
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
        }

        msSliderLine.forEach((msSlider, i) => {
            const msSliderItems = msSlider.querySelectorAll('.market-sub__right-slider-item');

            let count = 0,
                range = 1,
                timeout = i == 0 ? 7000 : 7000 + (300 * i);

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

    try {
        //services slider
        const sSliderCont = document.querySelectorAll('.services-slider-target');

        sSliderCont.forEach(sSlider => {
            const sSliderTap = sSlider.querySelectorAll('.main__services-name'),
                  sSliderItem = sSlider.querySelectorAll('.main__services-page'),
                  sSliderLine = sSlider.querySelector('.main__services-pages'),
                  sSliderRage = sSlider.querySelector('.main__services-rage');

            let count2 = 0;

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
            }
        });
    } catch (e) {
        console.log(e.stack);
    }

    try {
        //mouse-touch move slider
        const sliderFields = document.querySelectorAll('.move-slider-field');

        sliderFields.forEach(slider => {
            let sliderTrack = slider.querySelector('.move-slider-line'),
                slides = slider.querySelectorAll('.move-slider-item'),
                scrollField = slider.querySelector('.move-slider-bar'),
                scrollSpan,
                slideWidth = window.innerWidth,
                slideIndex = 0,
                posInit = 0,
                posX1 = 0,
                posX2 = 0,
                posY1 = 0,
                posY2 = 0,
                posFinal = 0,
                isSwipe = false,
                isScroll = false,
                allowSwipe = true,
                transition = true,
                nextTrf = 0,
                prevTrf = 0,
                lastTrf = (slides.length - 1) * slideWidth,
                posThreshold = slideWidth * 0.1,
                trfRegExp = /([-0-9.]+(?=px))/,
                swipeStartTime,
                swipeEndTime,
            getEvent = function(event) {
                return (event.type.search('touch') !== -1) ? event.touches[0] : event;
            },
            slide = function() {
                if (transition) sliderTrack.style.transition = 'transform .5s';
                sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
                if (scrollSpan) {
                    scrollSpan.style.transform = `translateX(${100 * slideIndex}%)`;
                    scrollSpan.style.left = '';
                }
            },
            swipeStartSpan = function(event) {
                let evt = getEvent(event);

                if (allowSwipe) {

                    swipeStartTime = Date.now();
                    
                    transition = true;

                    nextTrf = (slideIndex + 1) * -slideWidth;
                    prevTrf = (slideIndex - 1) * -slideWidth;

                    posInit = posX1 = evt.clientX;
                    posY1 = evt.clientY;

                    sliderTrack.style.transition = '';

                    document.addEventListener('touchmove', swipeActionSpan);
                    document.addEventListener('mousemove', swipeActionSpan);
                    document.addEventListener('touchend', swipeEndSpan);
                    document.addEventListener('mouseup', swipeEndSpan);
                }
            },
            swipeActionSpan = function(event) {

                let evt = getEvent(event),
                style = sliderTrack.style.transform,
                transform = +style.match(trfRegExp)[0];

                posX2 = posX1 - evt.clientX;
                posX1 = evt.clientX;

                posY2 = posY1 - evt.clientY;
                posY1 = evt.clientY;

                if (!isSwipe && !isScroll) {
                    let posY = Math.abs(posY2);
                    if (posY > 7 || posX2 === 0) {
                        isScroll = true;
                        allowSwipe = false;
                    } else if (posY < 7) {
                        isSwipe = true;
                    }
                }

                if (isSwipe) {
                    if (slideIndex === 0) {
                        if (posInit > posX1) {
                            setTransform(transform, 0);
                            return;
                        } else {
                            allowSwipe = true;
                        }
                    }

                    if (slideIndex === (slides.length - 1)) {
                        if (posInit < posX1) {
                            setTransform(transform, lastTrf);
                            return;
                        } else {
                            allowSwipe = true;
                        }
                    }

                    if (posInit < posX1 && transform < nextTrf || posInit > posX1 && transform > prevTrf) {
                        reachEdge();
                        return;
                    }

                    sliderTrack.style.transform = `translate3d(${transform - -posX2}px, 0px, 0px)`;
                    if (scrollSpan) {
                        scrollSpan.style.left = `calc(${Math.abs((transform - -posX2) / (sliderTrack.clientWidth / 100)) * 3}% - ${scrollSpan.clientWidth * slideIndex * 3}px)`;
                    }
                }

            },
            swipeEndSpan = function() {
                posFinal = Math.abs(posInit - posX1);

                isScroll = false;
                isSwipe = false;

                document.removeEventListener('touchmove', swipeActionSpan);
                document.removeEventListener('mousemove', swipeActionSpan);
                document.removeEventListener('touchend', swipeEndSpan);
                document.removeEventListener('mouseup', swipeEndSpan);

                if (allowSwipe) {
                swipeEndTime = Date.now();
                if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 300) {
                    if (posInit > posX1) {
                    slideIndex--;
                    } else if (posInit < posX1) {
                    slideIndex++;
                    }
                }

                if (posInit !== posX1) {
                    allowSwipe = false;
                    slide();
                } else {
                    allowSwipe = true;
                }

                } else {
                    allowSwipe = true;
                }

            },
            swipeStart = function(event) {
                let evt = getEvent(event);

                if (allowSwipe) {

                    swipeStartTime = Date.now();
                    
                    transition = true;

                    nextTrf = (slideIndex + 1) * -slideWidth;
                    prevTrf = (slideIndex - 1) * -slideWidth;

                    posInit = posX1 = evt.clientX;
                    posY1 = evt.clientY;

                    sliderTrack.style.transition = '';

                    document.addEventListener('touchmove', swipeAction);
                    document.addEventListener('mousemove', swipeAction);
                    document.addEventListener('touchend', swipeEnd);
                    document.addEventListener('mouseup', swipeEnd);
                }
            },
            swipeAction = function(event) {

                let evt = getEvent(event),
                style = sliderTrack.style.transform,
                transform = +style.match(trfRegExp)[0];

                posX2 = posX1 - evt.clientX;
                posX1 = evt.clientX;

                posY2 = posY1 - evt.clientY;
                posY1 = evt.clientY;

                if (!isSwipe && !isScroll) {
                    let posY = Math.abs(posY2);
                    if (posY > 7 || posX2 === 0) {
                        isScroll = true;
                        allowSwipe = false;
                    } else if (posY < 7) {
                        isSwipe = true;
                    }
                }

                if (isSwipe) {
                    if (slideIndex === 0) {
                        console.log(posInit > posX1);
                        if (posInit < posX1) {
                            setTransform(transform, 0);
                            return;
                        } else {
                            allowSwipe = true;
                        }
                    }

                    if (slideIndex === (slides.length - 1)) {
                        if (posInit > posX1) {
                            setTransform(transform, lastTrf);
                            return;
                        } else {
                            allowSwipe = true;
                        }
                    }

                    if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
                        reachEdge();
                        return;
                    }

                    sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
                    if (scrollSpan) scrollSpan.style.left = `calc(${Math.abs((transform - posX2) / (sliderTrack.clientWidth / 100)) * 1.5}% - ${scrollSpan.clientWidth * slideIndex * 1.5}px)`;
                }

            },
            swipeEnd = function() {
                posFinal = posInit - posX1;

                isScroll = false;
                isSwipe = false;

                document.removeEventListener('touchmove', swipeAction);
                document.removeEventListener('mousemove', swipeAction);
                document.removeEventListener('touchend', swipeEnd);
                document.removeEventListener('mouseup', swipeEnd);

                if (allowSwipe) {
                swipeEndTime = Date.now();
                if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 300) {
                    if (posInit < posX1) {
                    slideIndex--;
                    } else if (posInit > posX1) {
                    slideIndex++;
                    }
                }

                if (posInit !== posX1) {
                    allowSwipe = false;
                    slide();
                } else {
                    allowSwipe = true;
                }

                } else {
                    allowSwipe = true;
                }

            },
            setTransform = function(transform, comapreTransform) {
                if (transform >= comapreTransform) {
                    if (transform > comapreTransform) {
                        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
                    }
                }
                allowSwipe = false;
            },
            reachEdge = function() {
                transition = false;
                swipeEnd();
                allowSwipe = true;
            };

            sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';

            sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
            sliderTrack.addEventListener('touchstart', swipeStart);
            sliderTrack.addEventListener('mousedown', swipeStart);

            if (scrollField) {
                scrollSpan = scrollField.querySelector('span');
                scrollSpan.style.width = `${100 / slides.length}%`;
                //scrollSpan.style.transition = 'transform .5s';
                scrollSpan.addEventListener('transitionend', () => allowSwipe = true);
                scrollSpan.addEventListener('touchstart', swipeStartSpan);
                scrollSpan.addEventListener('mousedown', swipeStartSpan);
            }

            window.addEventListener('resize', () => {
                slideWidth = window.innerWidth;
                sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
            });
        });
    } catch (e) {
        console.log(e.stack);
    }
}

export default slider;