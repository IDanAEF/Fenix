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

        let countFile = 2,
            allInp = [];

        function addNewInp(fileText) {
            let fileName = document.createElement('div');
            fileName.classList.add('file_name');
            fileName.setAttribute('data-inp', countFile);
            fileName.innerHTML = `${fileText}<div class="close"><span></span><span></span></div>`;
            fileBlock.prepend(fileName);
            fileInpLabel.innerHTML = '<div class="plus"><span></span><span></span></div>Добавить еще файл';

            let newInp = document.createElement('input');
            newInp.type = 'file';
            newInp.name = `file-${countFile}`;
            newInp.size = '40';
            newInp.className = 'wpcf7-form-control wpcf7-file';
            newInp.id = `file-${countFile}`;
            newInp.accept = 'audio/*,video/*,image/*';
            newInp.setAttribute('aria-invalid', 'false');

            allInp.push(countFile);
            console.log(allInp);

            fileInpLabel.before(newInp);
            fileInpLabel.setAttribute('for', `file-${countFile++}`);

            newInp.addEventListener('change', () => {
                if (newInp.files[0]) {
                    addNewInp(newInp.files[0]['name']);
                }
            });
        }

        function removeInp(elem) {
            let inpId = elem.parentElement.getAttribute('data-inp');
            allInp = allInp.filter(item => item != inpId);
            console.log(allInp);
            elem.parentElement.remove();
            fileBlock.querySelector(`#file-${inpId}`).remove();
            if (allInp.length == 0) {
                countFile = 2;
                fileInpLabel.setAttribute('for', `file`);
                fileInpLabel.innerHTML = '<div class="gray_arrow"><img src="/wp-content/themes/Fenix/assets/images/arrow_gray.svg" alt=""></div>Прикрепить файл';
            }
        }

        fileBlock.addEventListener('click', (e) => {
            e.composedPath().forEach(item => {
                if (item.nodeName == "DIV" && item.classList.contains('close')) {
                    removeInp(item);
                }
            });
        });

        fileInp.addEventListener('change', () => {
            if (fileInp.files[0]) {
                addNewInp(fileInp.files[0]['name']);
            }
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