const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const createIngridientLiEl = function (ingridient) {
    const ingridientLiEl = document.createElement('li');
    ingridientLiEl.textContent = ingridient;
    return ingridientLiEl;
};

const ingridientsList = ingredients.map(ingridient => createIngridientLiEl(ingridient));

const list = document.querySelector('#ingredients');
list.append(...ingridientsList);

