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

        setInterval(() => {
            setPromoSlide((iter >= promoSliderItems.length - 1 ? iter = 0 : ++iter));
        }, 7000);
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
        //main-page services-slider
        const sSliderTap = document.querySelectorAll('.main__services-name'),
              sSliderItem = document.querySelectorAll('.main__services-page'),
              sSliderLine = document.querySelector('.main__services-pages'),
              sSliderSkip = document.querySelector('.main__services-skip');

        let count = 0;

        function setSSlide(i = 0) {
            sSliderTap.forEach(item => item.classList.remove('active'));
            sSliderItem.forEach(item => item.classList.remove('slide'));

            sSliderTap[i].classList.add('active');

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
                count = i;
                setSSlide(count);
            });
        });

        let startPos = 0;
        
        sSliderLine.addEventListener('touchstart', (e) => {
            startPos = e.changedTouches[0].screenX;
        });
    
        sSliderLine.addEventListener('touchend', (e) => {
            if (startPos - e.changedTouches[0].screenX > 50 && count + 1 < sSliderItem.length) {
                count++;
                setSSlide(count);
            } else if (startPos - e.changedTouches[0].screenX < -50 && count - 1 >= 0) {
                count--;
                setSSlide(count);
            }
        });

        const sSliderWindow = document.querySelector('.main__services-window');

        const contPos = () => {
            return sSliderWindow.getBoundingClientRect().y + window.pageYOffset
        }

        const contPosBott = () => {
            return sSliderWindow.getBoundingClientRect().y + window.pageYOffset + window.innerHeight;
        }

        let stop = false,
            allLeft = false,
            allRight = true;

        sSliderSkip.addEventListener('click', () => {
            stop = false;
            allLeft = true;
            allRight = false;
            document.querySelector('html').classList.remove('fixed');
            document.querySelector('body').classList.remove('fixed');
        });

        window.addEventListener('scroll', () => {
            if (window.innerWidth >= 992) {
                if ((window.pageYOffset >= contPos() && !stop && !allLeft) || (window.pageYOffset + window.innerHeight <= contPosBott() && !stop && !allRight)) {
                    document.querySelector('html').classList.add('fixed');
                    document.querySelector('body').classList.add('fixed');
                    stop = true;
                }
                if (stop) {
                    window.scroll(0, contPos());
                }
            }
        });

        window.addEventListener('mousewheel', (e) => {
            if (stop && window.innerWidth >= 992) {
                if (e.deltaY > 0) {
                    count++;
                    if (count >= sSliderItem.length) {
                        stop = false;
                        count = sSliderItem.length - 1;
                        allLeft = true;
                        allRight = false;
                        document.querySelector('html').classList.remove('fixed');
                        document.querySelector('body').classList.remove('fixed');
                    } else {
                        setSSlide(count);
                    }
                    /*left -= 10;
                    if (left == -110) {
                        left = 0;
                        count++;
                    }
                    if (count < sSliderItem.length) {
                        sSliderItem[count].style.left = `${left}%`;
                    } else {
                        stop = false;
                        count = sSliderItem.length - 1;
                        left = 0;
                        allLeft = true;
                        allRight = false;
                        document.querySelector('html').classList.remove('fixed');
                        document.querySelector('body').classList.remove('fixed');
                    }*/
                } else {
                    count--;
                    if (count < 0) {
                        stop = false;
                        count = 0;
                        allLeft = false;
                        allRight = true;
                        document.querySelector('html').classList.remove('fixed');
                        document.querySelector('body').classList.remove('fixed');
                    } else {
                        setSSlide(count);
                    }
                    /*left += 10;
                    if (left == 110) {
                        left = 0;
                        count--;
                    }
                    if (count >= 1) {
                        sSliderItem[count].style.left = `${left}%`;
                    } else {
                        stop = false;
                        count = 1;
                        left = 100;
                        allRight = true;
                        allLeft = false;
                        document.querySelector('html').classList.remove('fixed');
                        document.querySelector('body').classList.remove('fixed');
                    }*/
                }
            }
        });
    } catch (e) {
        console.log(e.stack);
    }
}

export default slider;