function animate() {
    try {
        //main market scroll
        const marketItem = document.querySelectorAll('.main__market-item');

        const contPos = () => {
            return marketItem[0].getBoundingClientRect().y + window.pageYOffset
        }

        const contPosBott = () => {
            return marketItem[0].getBoundingClientRect().y + window.pageYOffset + window.innerHeight;
        }

        let count = 1,
            top = 100,
            stop = false,
            allTop = false,
            allBott = true;

        window.addEventListener('scroll', () => {
            if ((window.pageYOffset >= contPos() && !stop && !allTop) || (window.pageYOffset + window.innerHeight <= contPosBott() && !stop && !allBott)) {
                document.querySelector('html').classList.add('fixed');
                document.querySelector('body').classList.add('fixed');
                stop = true;
            }
            if (stop) {
                window.scroll(0, contPos());
            }
        });

        window.addEventListener('mousewheel', (e) => {
            if (stop) {
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
        });
    } catch (e) {
        console.log(e.stack)
    }

    try {
        //text animate
        const targetText = document.querySelectorAll('.text_animate');

        targetText.forEach(item => {
            if ((window.innerHeight / 1.2) + window.pageYOffset >= item.getBoundingClientRect().y + window.pageYOffset) {
                item.classList.add('anim');
            }
        });

        window.addEventListener('scroll', () => {
            targetText.forEach(item => {
                if ((window.innerHeight / 1.2) + window.pageYOffset >= item.getBoundingClientRect().y + window.pageYOffset) {
                    item.classList.add('anim');
                }
            });
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
            if (window.pageYOffset <= document.querySelector('body').clientHeight / 2 || window.innerHeight + window.pageYOffset >= document.querySelector('footer').getBoundingClientRect().y + window.pageYOffset) {
                backTop.classList.remove('active');
            }
        });
    } catch (e) {
        console.log(e.stack);
    }

    try {
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
}

export default animate;