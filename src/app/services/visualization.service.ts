
let option: HTMLElement;

export const visualOptionSelected = (element:HTMLElement) => {
  if(option){
    option.classList.remove('selected');
  }
  option = element;
  element.classList.add('selected');
}

export const visualResponseCorrect = (rta:string) => {
  option.classList.remove('selected');
  const optionSelected = option.textContent;
  if(optionSelected == rta) {
    option.classList.add('correct');
  }
  else {
    option.classList.add('incorrect');
  }
}

export const resetStateVisual = () => {
  if(option){
    option.classList.remove('incorrect','correct');
  }
}













