const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');


nameInputRef.addEventListener('input', (event) => {
    nameOutputRef.textContent = event.target.value;
    if(nameOutputRef.textContent === ''){
        nameOutputRef.textContent = 'незнакомец';
    }
});

