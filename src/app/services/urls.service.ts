import { data } from '../data/images.data.js';

let position = 0;

export const next = () => {
  const url = data[position];
  position += 1;
  return url;
}

export const back = () => {
  position -= 1;
  const url = data[position];
  return url;
}
