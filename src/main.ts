import { loadBackImage, loadNextImage} from './app/services/load.service.js'

const img:HTMLImageElement|null = document.querySelector('[data-img]');

const buttonBack: HTMLButtonElement|null = document.querySelector('[data-btnBack]');
buttonBack?.addEventListener('click', () => {
  loadBackImage(img)
});

const buttonNext: HTMLButtonElement|null = document.querySelector('[data-btnNext]');
buttonNext?.addEventListener('click', () => {
  loadNextImage(img);
});

console.log('test de ajuste')
