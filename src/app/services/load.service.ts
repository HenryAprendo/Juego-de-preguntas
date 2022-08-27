import { next, back } from './urls.service.js';


export const loadNextImage = (img:HTMLImageElement|null) => {
  const url = next();
  console.log(url);
  if(img){
    img.src = url;
  }
}

export const loadBackImage = (img:HTMLImageElement|null) => {
  const url = back();
  console.log(url);
  if(img){
    img.src = url;
  }
}
