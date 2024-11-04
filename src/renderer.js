import './index.css';

const fontSizeInput = document.getElementById('fontSize');
const refreshButton = document.getElementById('refresh');
const editor = document.getElementById('editor');
const alwaysOnTopButton = document.getElementById('always-on-top');
const minimizeButton = document.getElementById('window-minimize');
const closeButton = document.getElementById('window-close');

let isAlwaysOnTop = false;

fontSizeInput.addEventListener('input', () => {
  editor.style.fontSize = `${fontSizeInput.value}px`;
});

refreshButton.addEventListener('click', () => {
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

minimizeButton.addEventListener('click', () => {
  api.windowMinimizeButton();
});

closeButton.addEventListener('click', () => {
  api.windowCloseButton();
});