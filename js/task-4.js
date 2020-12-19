const counterRef = document.querySelector('#value');
let counterValue = counterRef.textContent;
const btnIncRef = document.querySelector('button[data-action="increment"]');
const btnDecRef = document.querySelector('button[data-action="decrement"]');
function increment (){
    counterValue = Number(counterValue+1)
    counterRef.textContent = counterValue;
};
function decrement (){
    counterValue = Number(counterValue-1)
    counterRef.textContent = counterValue;
};

btnIncRef.addEventListener('click', increment);
btnDecRef.addEventListener('click', decrement);
