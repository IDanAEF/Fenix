// window.addEventListener('DOMContentLoaded', () => {
//     try {
//         const mainSliderItems = document.querySelectorAll('.main__promo-slider-item');

//         const changeFile = () => {
//             mainSliderItems.forEach(slitem => {
//                 if (window.innerWidth <= 430 && slitem.getAttribute('data-mobile') && slitem.src != slitem.getAttribute('data-mobile')) {
//                     slitem.src = slitem.getAttribute('data-mobile');
//                 } else if (window.innerWidth > 430 && slitem.src != slitem.getAttribute('data-mainsrc')) {
//                     slitem.src = slitem.getAttribute('data-mainsrc');
//                 }
//             });
//         }

//         changeFile();

//         window.addEventListener('resize', () => {
//             changeFile();
//         });
//     } catch (e) {
//         console.log(e.stack);
//     }
// });