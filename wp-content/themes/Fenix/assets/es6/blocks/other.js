const other = () => {
    try {
        const mainSliderItems = document.querySelectorAll('.main__promo-slider-item');

        const changeFile = () => {
            mainSliderItems.forEach(slitem => {
                if (window.innerWidth <= 430 && slitem.getAttribute('data-mobile') && slitem.src != slitem.getAttribute('data-mobile')) {
                    slitem.src = slitem.getAttribute('data-mobile');
                } else if (window.innerWidth > 430 && slitem.src != slitem.getAttribute('data-mainsrc')) {
                    slitem.src = slitem.getAttribute('data-mainsrc');
                }
            });
        }

        changeFile();

        window.addEventListener('resize', () => {
            changeFile();
        });
    } catch (e) {
        console.log(e.stack);
    } 

    //audit scheme anim
    try {
        const scheme = document.querySelector('.audit__scheme');

        if (scheme) {
            window.addEventListener('scroll', () => {
                if (window.scrollY + window.innerHeight >= scheme.getBoundingClientRect().y + window.innerHeight / 2) {
                    scheme.classList.remove('dont-play');
                }
            });
        }
    } catch (e) {
        console.log(e.stack);
    }

    //load more items
    try {
        const loadField = document.querySelectorAll('.load-more-field');

        loadField.forEach(field => {
            const loadItems = field.querySelectorAll('.load-more-item'),
                  loadBtn = field.querySelector('.load-more-btn');

            let count = -1,
                page = +field.getAttribute('data-view');

            loadItems.forEach((item, i) => {
                if (i >= page) {
                    item.style.display = 'none';
                    count = page;
                }
            });

            if (count != -1) {
                loadBtn.style.display = '';

                loadBtn.addEventListener('click', () => {
                    for(let i = count; i < count + page; i++) {
                        loadItems[i].style.display = '';
                    }
                    count += page;

                    if (!loadItems[count]) {
                        loadBtn.style.display = 'none';
                    }
                });
            }
        });
    } catch (e) {
        console.log(e.stack);
    }

    //load more items ajax
    try {
        async function getData(url) {
            let res = await fetch(url, {
                method: "GET"
            });
        
            return await res.text();
        }

        const loadField = document.querySelectorAll('.load-more-field-ajax');

        loadField.forEach(field => {
            const loadBtn = field.querySelector('.load-more-btn'),
                  loadContainer = field.querySelector('.load-container-items');

            field.getAttribute('data-all') > field.getAttribute('data-view') ? loadBtn.style.display = '' : '';

            let url = field.getAttribute('data-url') + '?action='+field.getAttribute('data-action');

            loadBtn.addEventListener('click', () => {
                url += '&items='+field.querySelectorAll('.load-more-item').length;

                if (field.querySelector('.load-more-item-two')) {
                    url += '&items-two='+field.querySelectorAll('.load-more-item-two').length;
                }
            
                getData(url)
                .then((res) => {
                    let data = JSON.parse(res);
                    loadContainer.innerHTML += data['cont'];

                    data['more'] ? loadBtn.style.display = '' : loadBtn.style.display = 'none';
                });
            });
        });
    } catch (e) {
        console.log(e.stack);
    }

    //load text
    try {
        const loadText = document.querySelectorAll('.load-text');

        loadText.forEach(text => {
            const readBtn = text.querySelector('.load-target'),
                  readText = text.querySelector('.load-mobile');
                
            readBtn.addEventListener('click', () => {
                readText.style.display = 'inline';
                readBtn.remove();
            });
        });
    } catch (e) {
        console.log(e.stack);
    }
}

export default other;