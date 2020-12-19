const inputRef = document.querySelector('#validation-input');
const validLength = inputRef.getAttribute('data-length');
const convertToNum = Number(validLength);

inputRef.addEventListener('blur', (event) => {
    if (event.target.value.length === convertToNum) {
        return inputRef.classList.add("valid");
    }
    return inputRef.classList.add("invalid");
});