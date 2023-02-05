window.addEventListener('DOMContentLoaded', () => {
    try {
        const targetBtns = document.querySelectorAll('.sub_banners_place'),
            targetVid = document.querySelectorAll('.market-sub video[data-load]');

        const loadVideos = () => {
            targetVid.forEach(vid => {
                vid.src = vid.getAttribute('data-load');
            });
            targetBtns.forEach(btn => btn.removeEventListener('click', loadVideos));
        }

        targetBtns.forEach(btn => btn.addEventListener('click', loadVideos));
    } catch (e) {
        console.log(e.stack);
    }

    try {
        const popup = document.querySelector('.popup.popup-load');

        if (popup) {
            setTimeout(() => {
                popup.classList.add('active');
                document.querySelector('body').classList.add('fixed');
                document.querySelector('html').classList.add('fixed');
            }, 3000);

            popup.addEventListener('click', (e) => {
                if (e.target == popup || e.target.classList.contains('popup__close')) {
                    popup.classList.remove('active');
                    document.querySelector('body').classList.remove('fixed');
                    document.querySelector('html').classList.remove('fixed');
                }
            });
        }
    } catch (e) {
        console.log(e.stack);
    }
});