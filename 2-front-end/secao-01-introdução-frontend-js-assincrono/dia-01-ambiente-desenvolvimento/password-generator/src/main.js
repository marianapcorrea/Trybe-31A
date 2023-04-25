// Código fornecido pela Trybe

import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
});

document.getElementById('copy-btn').addEventListener('click', () => {
  copy(displayPasswordEl.innerHTML);
  alert('Copiado!');
});
