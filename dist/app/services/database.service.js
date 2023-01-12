import { data } from '../question/question.data.js';
import { add, disabledNext } from './addContent.service.js';
import { reset, messaggeFinal } from '../services/calculate.service.js';
/**
 * En esta variable se almacena un objeto proveniente de un generador, desde el cual se ejecuta su
 * método next.
 */
let getQuestion;
/**
 * Esta función inicia un generador, en el que durante la ejecución del método next devuelve un
 * objeto tipo Question que son las preguntas provenientes de la database.
 * El generador finalizara cuando ya no haya mas preguntas tipo Question que devolver.
 * @returns get(): Generator<Question>
 */
const initFunction = () => {
    function* get() {
        let index = 0;
        while (index < data.length) {
            yield data[index];
            index++;
        }
    }
    return get();
};
/**
 *
 * Esta función se encarga de iniciar un nuevo juego de preguntas,
 * y de reiniciar el generador para una nueva ronda de preguntas.
 * También reinicia los resultados de un ronda terminada.
 * Esta asociada al botón "Nuevo juego" de la plantilla.
 */
export const init = () => {
    console.log('Inicio del Juego');
    getQuestion = initFunction();
    const response = getQuestion.next();
    console.log(response.value);
    add(response.value);
    reset();
};
/**
 * Está función se encarga de solicitar la siguiente pregunta a contestar,
 * utilizando el método next del objeto generador guardado en la variable getQuestion.
 * También envia ejecuta la finalización de la ronda de preguntas.
 */
export const next = () => {
    const response = getQuestion.next();
    if (!response.done) {
        console.log(response.value);
        add(response.value);
    }
    else {
        messaggeFinal();
        disabledNext();
        console.log('Finalizaste. Ver resultados');
    }
};
//# sourceMappingURL=database.service.js.map