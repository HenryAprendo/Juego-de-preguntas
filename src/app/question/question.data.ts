import { lEVELS, Question } from "./question.model.js";

export const data: Question[] = [
  {
    id: '1',
    description: '¿Cuál es el nombre del primer rey del reino del norte, cuya capital era samaria?',
    response: {
      option_a: 'El rey Uzias',
      option_b: 'El rey Jeroboam',
      option_c: 'El rey Jehu',
      option_d: 'El rey David'
    },
    level: lEVELS.INTERMEDIE,
    correct: 'El rey Jeroboam'
  },
  {
    id: '2',
    description:'¿En que dispensación vivio el patriarca Abraham, considerado el padre de la fe?',
    response: {
      option_a: 'La gracia',
      option_b: 'La ley',
      option_c: 'La promesa',
      option_d: 'El gobierno humano'
    },
    level: lEVELS.INTERMEDIE,
    correct: 'La promesa'
  },
  {
    id: '3',
    description: `¿Qué caracteristicas tenia la generación que se levanto despues de la muerte de Josue y de los ancianos que salieron de Egipto?`,
    response: {
      option_a: 'No conocieron al Dios de sus padres y se volvieron a la idolatria',
      option_b: 'Obedecieron a los preceptos de Dios y fueron prosperados',
      option_c: 'Se hicieron abominables a Jehova por que se apartarón de sus sendas',
      option_d: 'La opción a y c'
    },
    level: lEVELS.EASY,
    correct: 'La opción a y c'
  },
  {
    id: '4',
    description: `¿A que pecado esta asociado el salmo 51 de David, en el cuál el reconoce su maldad e implora el perdón de Dios?`,
    response: {
      option_a: 'Al hecho de que david tuvo muchas mujeres para si desobedeciendo a Dios',
      option_b: 'Al adulterio cometido por David con Betsabe mujer de Urias Heteo y al homicidio de Urias Heteo cuando lo envió a lo mas recio de la batalla',
      option_c: 'Se hicieron abominables a Jehova por que se apartarón de sus sendas',
      option_d: 'Cuando censo al pueblo desobedeciendo el mandato de Jehova y trayendo el mal para el pueblo de Israel'
    },
    level: lEVELS.INTERMEDIE,
    correct: 'Al adulterio cometido por David con Betsabe mujer de Urias Heteo y al homicidio de Urias Heteo cuando lo envió a lo mas recio de la batalla'
  },
  {
    id: '5',
    description: 'Cual de los siguientes no es un profeta menor',
    response: {
      option_a: 'Eliseo',
      option_b: 'Joel',
      option_c: 'Oseas',
      option_d: 'Amós'
    },
    level: lEVELS.EASY,
    correct: 'Eliseo'
  },
  {
    id: '6',
    description: '¿Cuantos Libros tiene la biblia en total y cuantos están en el antiguo y nuevo testamento?',
    response: {
      option_a: '57 en total, 30 en el antiguo testamento y 27 en el nuevo testamento',
      option_b: '66 en total, 27 en el antiguo testamento y 39 en el nuevo testamento',
      option_c: '66 en total, 39 en el antiguo testamento y 27 en el nuevo testamento',
      option_d: '70 en total, 40 en el antiguo testamento y 30 en el nuevo testamento'
    },
    level: lEVELS.EASY,
    correct: '66 en total, 39 en el antiguo testamento y 27 en el nuevo testamento'
  },
  {
    id:'7',
    description: '¿Que hizo posible el derramamiento de la sangre de Cristo en la cruz de calvario?',
    response: {
      option_a: 'El pago de los pecados y transgresiones que habian bajo el antiguo pacto, y el perdón de los pecados',
      option_b: 'El inicio del nuevo pacto en su sangre',
      option_c: 'El rescate de nuestra vana manera de vivir por medio de la sangre preciosa de Cristo',
      option_d: 'Todas las anteriores'
    },
    level: lEVELS.EASY,
    correct: 'Todas las anteriores'
  },
  {
    id: '8',
    description: '¿Cuál fue él pecado cometido por Israel que le trajo como consecuencia ser llevado cautivo por el imperio Asirio?',
    response: {
      option_a: 'La adoración a los becerros de oro hechos en tiempos de Jeroboam, uno en Dan y otro en Bet el',
      option_b: 'Sirvieron al ejercito de los cielos, a los baales y Asera, fornicando asi delante de Jehova su Dios',
      option_c: 'Las opciones 1, 2 y 3',
      option_d: 'Atribuyeron sus riquezas a los idolos de las naciones y se olvidarón de Jehova su Dios, confiados en lo que tenian'
    },
    level: lEVELS.EASY,
    correct: 'Las opciones a, b y d'
  },
  {
    id: '9',
    description: '¿Que partes componen la armadura de Dios, según el apostol Pablo?',
    response : {
      option_a: 'El cinto de la verdad, La coraza de Justicia, el escudo de la fe',
      option_b: 'El yelmo de la salvación, La espada del Espíritu que es la palabra de Dios, la oracion y el calzado de los pies por el evangelio',
      option_c: 'El cinto de la verdad, La coraza de Justicia, el escudo de la fe, El yelmo de la salvación, La espada del Espíritu que es la palabra de Dios, la oracion y el calzado de los pies por el evangelio',
      option_d: 'La oración, el escudo de la fé, calzados los pies con el apresto del evangelio'
    },
    level: lEVELS.EASY,
    correct:'El cinto de la verdad, La coraza de Justicia, el escudo de la fe, El yelmo de la salvación, La espada del Espíritu que es la palabra de Dios, la oracion y el calzado de los pies por el evangelio'
  },
  {
    id: '10',
    description: 'Son atributos absolutos y exclusivos de Dios, y por lo tanto no pueden ser compartidos con el ser humano',
    response: {
      option_a: 'Misericordia, Gracia, Bondad',
      option_b: 'Omnipotencia, Omnipresencia, Omniciencia, Santidad, Amor',
      option_c: 'Benignidad, Inmutabilidad, Infinidad, Verdad, Espíritu',
      option_d: 'Soberania, Omnipotencia, Omnipresencia, Omniciencia, Inmutabilidad, en esencia Espíritu, Infinidad, Eternidad'
    },
    level: lEVELS.INTERMEDIE,
    correct: 'Soberania, Omnipotencia, Omnipresencia, Omniciencia, Inmutabilidad, en esencia Espíritu, Infinidad, Eternidad'
  }

]



















