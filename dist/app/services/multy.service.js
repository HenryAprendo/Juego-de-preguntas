import { data } from '../data/images.data.js';
let lastPosition;
let valid = false;
let valueInit = 0;
let valueFinal = 2;
let positionFirst = 0;
let positionFinal = 0;
let limitFinal = data.length;
let limitInit = 0;
const container = [];
const images = document.querySelectorAll('.multy_image');
images.forEach(item => {
    const img = item;
    container.push(img);
});
export const changeSliderMulty = (change) => {
    valueInit += change;
    console.log(valueInit);
    valueFinal += change;
    console.log('valueFinal', valueFinal);
    console.log('datalenght', data.length);
    if (valueInit >= 0 && valueFinal <= data.length - 1 && !valid) {
        positionFirst = valueInit;
        positionFinal = valueFinal;
        lastPosition = positionFirst;
        console.log('lastPosition', lastPosition);
    }
    if (valueFinal === data.length) {
        valueFinal = 0;
        positionFinal = valueFinal;
        valueInit = lastPosition + 1;
        positionFirst = valueInit;
        valid = true;
    }
    else if (valid) {
        if (positionFirst == data.length) {
            valueInit = 0;
            positionFirst = valueInit;
            positionFinal = 2;
        }
        else {
            positionFirst += 1;
            valueFinal += 1;
            positionFinal = valueFinal;
            console.log('positionFinal', positionFinal);
        }
    }
    container[0].src = data[positionFirst];
    container[1].src = data[positionFirst + 1];
    container[2].src = data[positionFinal];
};
