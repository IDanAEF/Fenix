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
            item.addEventListener('click', (e) => {
                if (e.composedPath().some(it => it.nodeName == 'LI' && it.classList.contains('menu-item-has-children'))
                    && !e.composedPath().some(it => it.nodeName == 'UL' && it.classList.contains('sub-menu'))) {
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

        window.addEventListener('click', (e) => {
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

export default modals;