const inputRangeRef = document.querySelector('#font-size-control');
const textToChangeRef = document.querySelector('#text');


inputRangeRef.addEventListener('input', (event) => {
    textToChangeRef.style.fontSize = event.target.value + "px";
});