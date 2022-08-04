import slider from "./blocks/slider";
import modals from "./blocks/modals";
import mask from './blocks/mask';

'use strict';

window.addEventListener('DOMContentLoaded', () => {
    slider();
    modals();
    mask('input[type="tel"]');
});