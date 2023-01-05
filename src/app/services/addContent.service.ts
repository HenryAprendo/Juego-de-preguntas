import { Question } from "../question/question.model.js";
import { calculate } from '../services/calculate.service.js';
import { visualOptionSelected, visualResponseCorrect, resetStateVisual } from '../services/visualization.service.js';
/**
 * Almacena el valor de la respuesta correcta.
 */
let rtaCorrect = '';

/**
 * Almacena el valor de la opción seleccionada como respuesta.
 */
let optionSelected: string|null = '';

/**
 * Cuando está en false, habilita para obtener la respuesta de la opción seleccionada.
 * Cuando está en true, evita que se vuelva a responder una pregunta ya solucionada.
 */
let enable = false;

/**
 * Es elemento contenedor de los botones al cual se le asigna y remueve una clase para obtener la lógica
 * que permita ver la habilitación de los botones "siguiente" y "confirmar"
 */
const content: HTMLElement|null = document.querySelector('[data-content]');
content?.classList.add('content_disabled--confirm', 'content_disabled--next');

const confirm: HTMLButtonElement|null = document.querySelector('[data-enter]');
const nextQuestion: HTMLButtonElement|null = document.querySelector('[data-next]');

/**
 *  Esta función se ejecuta al hacer click en el botón confirmar, y se encarga de comparar entre la respuesta seleccionada y el valor
 * correcto proporcionado. El resultado es manejado por la función calculate que administra los resultados en el servicio.
 * Además, habilita el bóton next y deshabilita el botón confirm con su respectivas indicaciones visuales.
 */

export const verifyOptionSelect = () => {
  const rta:boolean = (optionSelected == rtaCorrect) ? true : false;
  nextQuestion?.removeAttribute('disabled');
  content?.classList.remove('content_disabled--next');
  confirm?.setAttribute('disabled', 'true');
  content?.classList.add('content_disabled--confirm');
  calculate(rta);
  enable = true;
  visualResponseCorrect(rtaCorrect);
  console.log(rta);
};

/**
 * Por cada opción de respuesta agrega un evento click, deshabilita el botón next y habilita el botón confirm.
 * Ademas, obtiene el contenido de la opción seleccionada y lo asigna a rtaCorrect.
 * @param data
 * Éste parametro contiene la respuesta correcta a ser comparada con la opción seleccionada.
 */
const addEvent = (data:string) => {
  resetStateVisual()
  enable = false;
  // nextQuestion?.setAttribute('disabled', 'true');
  // content?.classList.add('content_disabled--next');
  disabledNext();
  const options = document.querySelectorAll('.options');
  options.forEach( option => {
    option.addEventListener('click', (e) => {

      if(!enable){
        const element = e.target as HTMLElement;
        rtaCorrect = data;
        optionSelected = element.textContent;
        confirm?.removeAttribute('disabled');
        content?.classList.remove('content_disabled--confirm');
        visualOptionSelected(element);
      }

    });
  });
}

export const disabledNext = () => {
  nextQuestion?.setAttribute('disabled', 'true');
  content?.classList.add('content_disabled--next');
}

/**
 * Renderiza las preguntas con sus respectivas opciones de respuestas.
 * @param data
 * Recibe data como parametro, el cual contiene el objeto tipo Question con la información a renderizar
 */
export const add = (data:Question) => {

  addEvent(data.correct);

  const question: HTMLElement|null = document.querySelector('[data-question]');
  if(question)
    question.textContent = data.description;

  const option_a: HTMLElement|null = document.querySelector('[data-option-a]');
  if(option_a)
    option_a.textContent = data.response.option_a;

  const option_b: HTMLElement|null = document.querySelector('[data-option-b]');
  if(option_b)
    option_b.textContent = data.response.option_b;

  const option_c: HTMLElement|null = document.querySelector('[data-option-c]');
  if(option_c)
    option_c.textContent = data.response.option_c;

  const option_d: HTMLElement|null = document.querySelector('[data-option-d]');
  if(option_d)
    option_d.textContent = data.response.option_d;

}













