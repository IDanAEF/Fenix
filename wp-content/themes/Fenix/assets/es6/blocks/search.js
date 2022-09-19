function search() {
    try {
        //profile search
        const phInp = document.querySelector('#findphone'),
              phItems = document.querySelectorAll('.phone-search'),
              dateItems = document.querySelectorAll('.date-search'),
              inpBlock = document.querySelectorAll('.input_block'),
              filter = document.querySelectorAll('.filter-item'),
              dateInp = document.querySelector('#finddate');

        filter.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });

        dateInp.addEventListener('change', () => {
            dateItems.forEach(item => item.parentElement.style.cssText = '');
            dateItems.forEach(item => {
                if (item.textContent.indexOf(dateInp.value) == -1) {
                    item.parentElement.style.cssText = 'display: none';
                }
            });
        });

        phInp.addEventListener('keyup', () => {
            clearTimeout(timeout);

            var timeout = setTimeout(() => {
                phItems.forEach(item => item.parentElement.style.cssText = '');
                phItems.forEach(item => {
                    if (item.textContent.indexOf(phInp.value) == -1) {
                        item.parentElement.style.cssText = 'display: none';
                    }
                });
            }, 500);
        });

        inpBlock.forEach(item => {
            item.addEventListener('click', () => {
                if (item.querySelector('.input_block-list')) {
                    item.querySelector('.input_block-list').classList.toggle('active');
                    item.querySelector('.input_block-text img').classList.toggle('active');
                }
            });
        });
    } catch (e) {
        console.log(e.stack);
    }
}

export default search;