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
}

export default slider;