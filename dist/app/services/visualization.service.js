let option;
export const visualOptionSelected = (element) => {
    if (option) {
        option.classList.remove('selected');
    }
    option = element;
    element.classList.add('selected');
};
export const visualResponseCorrect = (rta) => {
    option.classList.remove('selected');
    const optionSelected = option.textContent;
    if (optionSelected == rta) {
        option.classList.add('correct');
    }
    else {
        option.classList.add('incorrect');
    }
};
export const resetStateVisual = () => {
    if (option) {
        option.classList.remove('incorrect', 'correct');
    }
};
//# sourceMappingURL=visualization.service.js.map