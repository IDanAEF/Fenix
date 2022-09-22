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
    
    try {
        //auth form
        const authModal = document.querySelector('.auth'),
              checkInput = authModal.querySelector('#authcheck'),
              checkLabelImg = authModal.querySelector('.auth__form-check-field label img');

        checkInput.checked ? checkLabelImg.classList.toggle('active') : '';

        checkInput.addEventListener('change', () => {
            checkLabelImg.classList.toggle('active');
        });
    } catch (e) {
        console.log(e.stack);
    }
    try {
        //personal form validate
        const mForm = document.querySelector('.auth__field.main-form form'),
              mInputs = mForm.querySelectorAll('.auth__form-block');

        mForm.querySelector('button').addEventListener('click', (e) => {
            mInputs.forEach(item => {
                if (!item.querySelector('input').value) {
                    e.preventDefault();
                    const mLabel = item.querySelector('label'),
                          mInput = item.querySelector('input'); 

                    let labelText = mLabel.textContent;

                    mLabel.textContent = 'Заполните поле';

                    mLabel.classList.add('fail');
                    mInput.classList.add('fail');

                    mInput.addEventListener('focus', () => {
                        mLabel.classList.remove('fail');
                        mInput.classList.remove('fail');
                        mLabel.textContent = labelText;
                    });
                }
            });
        });
    } catch (e) {
        console.log(e.stack);
    }
}

export default form;