const slider = [...document.querySelectorAll('.slider_picture')];
let currentElement;
let value;
let position = 0;
slider[position].classList.toggle('slider_picture--show');
export const changeSlider = (change) => {
    currentElement = slider[position];
    position += change;
    value = position;
    if (value < 0) {
        position = slider.length - 1;
    }
    if (value === slider.length) {
        position = 0;
    }
    currentElement.classList.toggle('slider_picture--show');
    slider[position].classList.toggle('slider_picture--show');
};
