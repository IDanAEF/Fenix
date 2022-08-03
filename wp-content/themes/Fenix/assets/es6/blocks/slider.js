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
}

export default slider;