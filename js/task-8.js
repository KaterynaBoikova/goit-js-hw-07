const elementCountRef = document.querySelector('#controls input');
const btnCreateRef = document.querySelector('button[data-action="render"]');
const btnRemoveRef = document.querySelector('button[data-action="destroy"]');
const divs = document.querySelector('#boxes');

function random() {
    return Math.floor(Math.random() * (255 - 0 + 1) + 0);
};

function createBoxes(amount) {
    let boxes = [];
    for (let i = 0, k = 30; i < amount; i += 1, k += 10) {
        const createDiv = document.createElement('div');
        createDiv.style.backgroundColor = `rgb(${random()},${random()},${random()})`;
        createDiv.style.width = k + "px";
        createDiv.style.height = k + "px";
        boxes.push(createDiv);
    }
    ;
    return divs.append(...boxes);
};

function destroyBoxes() {
    while (divs.firstChild) {
        divs.removeChild(divs.lastChild);
    }
};

btnCreateRef.addEventListener('click', (event) => {
    createBoxes(elementCountRef.value);
});
btnRemoveRef.addEventListener('click', destroyBoxes);