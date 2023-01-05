let msg: HTMLElement|null = null;

let total: number = 0;
let correct: number = 0;
let porcentajeCorrect: number = 0;
let incorrect: number = 0;
let porcentajeIncorrect: number = 0;

const resCorrect:HTMLElement|null = document.querySelector('[data-correct]');
const resIncorrect:HTMLElement|null = document.querySelector('[data-incorrect]');
const numTotal:HTMLElement|null = document.querySelector('[data-total]');
// const porCorrect:HTMLElement|null = document.querySelector('[data-correct-porciento]');
// const porIncorrect:HTMLElement|null = document.querySelector('[data-incorrect-porciento]');

export const calculate = (rta:boolean) => {
  rta ? correct++ : incorrect++;
  total++;
  displayResults();
}

export const calcPorcentaje = () => {
  porcentajeCorrect = (correct * 100) / total;
  porcentajeIncorrect = (incorrect * 100) / total;
  displayPorcents();
}

const toCompare = () => {
  if(correct >= 8){
    return true
  }
  return false;
}

export const messaggeFinal = () => {

  const message1 = '!GANASTE!';
  const message2 = 'PERDISTE x';

  const container: HTMLElement|null = document.querySelector('[data-container]');
  container?.classList.add('main_container-msg');
  msg = document.createElement('p');
  msg.classList.add('message_final');

  if(toCompare()) {
    msg.textContent = message1;
    msg.style.color = 'green';
  }
  else {
    msg.textContent = message2;
    msg.style.color = 'red';
  }

  container?.appendChild(msg);
}

const displayResults = () => {
  if(resCorrect) resCorrect.innerHTML = `Respuestas correctas: ${correct}`;
  if(resIncorrect) resIncorrect.innerHTML = `Respuestas incorrectas: ${incorrect}`;
  if(numTotal) numTotal.innerHTML = `Total de preguntas: ${total}`;
}

const displayPorcents = () => {
  // if(porCorrect) porCorrect.innerHTML = `Porcentaje de respuestas correctas: ${porcentajeCorrect}% `;
  // if(porIncorrect) porIncorrect.innerHTML = `Porcentaje de respuestas incorrectas: ${porcentajeIncorrect}% `;
}

export const reset = () => {

  msg?.remove();

  total = 0;
  if(numTotal) numTotal.innerHTML = `Total de preguntas: ${total}`;

  correct = 0;
  if(resCorrect) resCorrect.innerHTML = `Respuestas correctas: ${correct}`;
  // porcentajeCorrect = 0;
  // if(porCorrect) porCorrect.innerHTML = `Porcentaje de respuestas correctas: ${porcentajeCorrect}% `;
  incorrect = 0;
  if(resIncorrect) resIncorrect.innerHTML = `Respuestas incorrectas: ${incorrect}`;
  // porcentajeIncorrect = 0;
  // if(porIncorrect) porIncorrect.innerHTML = `Porcentaje de respuestas incorrectas: ${porcentajeIncorrect}% `;
}




