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

export default modals;