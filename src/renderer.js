import './index.css';

const fontSizeInput = document.getElementById('fontSize');
const reloadButton = document.getElementById('reload');
const editor = document.getElementById('editor');

fontSizeInput.addEventListener('input', () => {
  editor.style.fontSize = `${fontSizeInput.value}px`;
});

reloadButton.addEventListener('click', () => {
  editor.innerHTML = '';
  editor.style.fontFamily = 'initial';
  editor.style.fontSize = 'initial';
});

editor.contentEditable = 'true';