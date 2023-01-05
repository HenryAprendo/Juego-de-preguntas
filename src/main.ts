import { init, next } from "./app/services/database.service.js";
import { verifyOptionSelect } from "./app/services/addContent.service.js";

const initPlay: HTMLButtonElement|null = document.querySelector('[data-init]');
initPlay?.addEventListener('click', init);

const confirm: HTMLButtonElement|null = document.querySelector('[data-enter]');
confirm?.addEventListener('click', verifyOptionSelect);
confirm?.setAttribute('disabled', 'true');

const nextQuestion: HTMLButtonElement|null = document.querySelector('[data-next]');
nextQuestion?.addEventListener('click', next);
nextQuestion?.setAttribute('disabled', 'true');















