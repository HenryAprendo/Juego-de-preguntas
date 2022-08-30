import { next, back } from './urls.service.js';


export const loadNextImage = (img:HTMLImageElement|null) => {
  const url:string|undefined = next();
  console.log(url);
  if(img && url){
    img.src = url;
  }
}

export const loadBackImage = (img:HTMLImageElement|null) => {
  const url:string|undefined = back();
  console.log(url);
  if(img && url){
    img.src = url;
  }
}
