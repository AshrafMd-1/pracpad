import './index.css';

const fontSizeInput = document.getElementById('fontSize');
const reloadButton = document.getElementById('reload');
const editor = document.getElementById('editor');
const alwaysOnTopButton = document.getElementById('always-on-top');
const alwaysOnTopIcon = document.querySelector('#always-on-top i');

let isAlwaysOnTop = false;

fontSizeInput.addEventListener('input', () => {
  editor.style.fontSize = `${fontSizeInput.value}px`;
});

reloadButton.addEventListener('click', () => {
  editor.innerHTML = '';
  editor.style.fontFamily = 'initial';
  editor.style.fontSize = 'initial';
});

editor.contentEditable = 'true';

const toggleAlwaysOnTop = () => {
  isAlwaysOnTop = !isAlwaysOnTop;

  alwaysOnTopButton.classList.toggle('always-on-top-on', isAlwaysOnTop);
  alwaysOnTopButton.classList.toggle('always-on-top-off', !isAlwaysOnTop);

  api.toggleAlwaysOnTop();
};

alwaysOnTopButton.addEventListener('click', toggleAlwaysOnTop);