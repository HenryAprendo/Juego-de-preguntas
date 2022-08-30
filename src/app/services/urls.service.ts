import { data } from '../data/images.data.js';

let position = -1;
let url: string;
const validIncrement = (position >= -1) && (position <= data.length - 1);

export const next = () => {
  if (position >= -1 && position < data.length-1) {
    position += 1;
    url = data[position];
    return url;
  }
}

export const back = () => {
  if(position > 0){
    position = position - 1;
    url = data[position];
    return url;
  }
}
