import { loadBackImage, loadNextImage} from './app/services/load.service.js'

const slider = [...document.querySelectorAll('.slider_picture')];
let currentElement:Element;
let value:number;
let position = 0;
slider[position].classList.toggle('slider_picture--show');

const changeSlider = (change: number) => {
  currentElement = slider[position];
  position += change;

  value = position;
  if(value < 0) {
    position = slider.length - 1;
  }

  if(value === slider.length) {
    position = 0;
  }

  currentElement.classList.toggle('slider_picture--show');
  slider[position].classList.toggle('slider_picture--show');
}

const buttonBack: HTMLButtonElement|null = document.querySelector('[data-btnBack]');
buttonBack?.addEventListener('click', () => {
  changeSlider(-1);
});

const buttonNext: HTMLButtonElement|null = document.querySelector('[data-btnNext]');
buttonNext?.addEventListener('click', () => {
  changeSlider(1);
});





