export interface Question {
  id: string;
  description: string;
  response: Answer;
  level: lEVELS;
  correct: string;
}

export interface Answer {
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
}

export enum lEVELS {
  EASY =  "easy",
  INTERMEDIE = "intermedie",
  DIFFICULT = "difficult",
}

