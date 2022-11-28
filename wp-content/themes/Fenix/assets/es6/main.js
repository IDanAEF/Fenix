import slider from "./blocks/slider";
import modals from "./blocks/modals";
import mask from './blocks/mask';
import animate from "./blocks/animate";
import form from "./blocks/form";
import search from "./blocks/search";
import points from "./blocks/points";
import other from "./blocks/other";

'use strict';

window.addEventListener('DOMContentLoaded', () => {
    slider();
    modals();
    animate();
    mask('input[type="tel"]');
    form();
    search();
    points();
    other();
});