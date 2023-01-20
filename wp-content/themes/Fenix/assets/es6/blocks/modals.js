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
                item.addEventListener('click', () => {
                    item.classList.toggle('active');
                    item.querySelector('.orange_left').classList.toggle('active');
                    item.querySelector('.light_right').classList.toggle('active');
                    item.nextElementSibling.classList.toggle('active');
                });
            });
        }   
    } catch (e) {
        console.log(e.stack);
    }

    try {
        //sub-menu
        const liWithSub = document.querySelectorAll('header li.menu-item-has-children');

        const marketSub = document.querySelectorAll('.market-sub');

        if (liWithSub[0]) {
            function setPadding() {
                liWithSub.forEach(item => {
                    item.querySelector('.sub-menu').style.cssText = `padding-left: ${item.getBoundingClientRect().left}px; left: -${item.getBoundingClientRect().left}px;`;
                    if (item.classList.contains('sub_banners_place')) {
                        marketSub.forEach(mitem => {
                            if (item.classList.contains(mitem.getAttribute('data-place'))) {
                                mitem.style.cssText = `padding-left: ${item.getBoundingClientRect().left}px; padding-right: ${document.querySelector('.container').getBoundingClientRect().left}px`;
                            }
                        });
                    }
                });
            }
    
            function hideFields() {
                liWithSub.forEach(its => {
                    its.querySelector('.sub-menu').classList.remove('open');
                    its.classList.remove('select');
                });
                marketSub.forEach(mitem => mitem.classList.remove('open'));
            }
    
            setPadding();
    
            liWithSub.forEach(item => {
                item.addEventListener('click', (e) => {
                    if (e.composedPath().some(it => it.nodeName == 'LI' && it.classList.contains('menu-item-has-children') && !it.classList.contains('sub_banners_place'))
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
                    if (e.composedPath().some(it => it.nodeName == 'LI' && it.classList.contains('menu-item-has-children') && it.classList.contains('sub_banners_place'))) {
                        e.preventDefault();

                        marketSub.forEach(mitem => {
                            if (item.classList.contains(mitem.getAttribute('data-place'))) {
                                if (mitem.classList.contains('open')) {
                                    mitem.classList.remove('open');
                                    item.classList.remove('select');
                                } else {
                                    hideFields();
                                    mitem.classList.add('open');
                                    item.classList.add('select');
                                }     
                            }
                        });
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
        }
    } catch (e) {
        console.log(e.stack);
    }

    try {
        //cases blocks
        const casesItems = document.querySelectorAll('.main__cases-item');

        if (casesItems[0]) {
            casesItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    if (window.innerWidth > 576) {
                        window.location.href = item.getAttribute('data-url');
                    } else if (window.innerWidth <= 576) {
                        if (item.classList.contains('active') && !e.composedPath().some(it => it.nodeName == 'DIV' && it.classList.contains('main__cases-item-target'))) {
                            window.location.href = item.getAttribute('data-url');
                        }
                        if (e.composedPath().some(it => it == item || (it.nodeName == 'DIV' && it.classList.contains('main__cases-item-target')))) {
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

        const openField = (name) => {
            authFields.forEach(item => item.classList.remove('active'));
            name.classList.add('active');
        }

        remembBtn.addEventListener('click', () => {
            openField(authRememb);
        });
        
        authRememb.querySelector('#authemail-rememb').addEventListener('click', () => {
            if (authRememb.querySelector('#authemail-rememb').classList.contains('failed')) {
                authRememb.querySelector('#authemail-rememb').value = '';
                authRememb.querySelector('#authemail-rememb').classList.remove('failed');
            }
        });

        authRememb.querySelector('form').addEventListener('submit', (e) => {
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

export default modals;