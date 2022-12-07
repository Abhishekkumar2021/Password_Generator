const span = document.querySelector('span');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const text = span.innerText;
    navigator.clipboard.writeText(text);
    button.innerText = 'Copied!';
    setTimeout(() => {
        button.innerText = 'Copy password';
    }
    , 3000);
});