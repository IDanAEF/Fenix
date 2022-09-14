function form() {
    async function postData(url, data) {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });
    
        return await res.text();
    }

    try {
        //main feed
        const mFeed = document.querySelector('.main__feed form'),
              fileInp = mFeed.querySelector('#file'),
              fileBlock = mFeed.querySelector('.file_block'),
              fileInpLabel = fileBlock.querySelector('.file_label');

        mFeed.addEventListener('submit', () => {
            mFeed.querySelector('.policy').classList.add('mt');
        });

        let countFiles = 0;

        mFeed.addEventListener('click', (e) => {
            if (e.composedPath().filter(item => item.nodeName == 'A' && item.classList.contains('remove-file')).length > 0) {
                countFiles--;
                if (countFiles <= 0) {
                    fileInpLabel.innerHTML = '<div class="gray_arrow"><img src="/wp-content/themes/Fenix/assets/images/arrow_gray.svg" alt=""></div>Прикрепить файл';
                }
            }
        });

        fileInp.addEventListener('change', () => {
            countFiles++;
            fileInpLabel.innerHTML = '<div class="plus"><span></span><span></span></div>Добавить еще файл';
        });
    } catch (e) {
        console.log(e.stack);
    }

    try {
        //letter
        const letterForm = document.querySelector('.main__letter-form form');

        letterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let formData = new FormData(letterForm);

            postData('http://fenix.tw1.ru/?na=s', formData)
            .then(() => {
                letterForm.querySelector('.main__letter-form-mess').textContent = 'Спасибо за подписку!';
            })
            .catch(() => {
                letterForm.querySelector('.main__letter-form-mess').textContent = 'Что-то пошло не так!';
            });
        });
    } catch (e) {
        console.log(e.stack);
    }
}

export default form;