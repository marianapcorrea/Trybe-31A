import validator from 'validator';
import './style.css';

const button = document.querySelector('button');
const result = document.querySelector('#result');

button.addEventListener('click', (e) => {
  e.preventDefault();
  const selector = document.querySelector('select').value;
  const input = document.querySelector('#input');

  const dataType = {
    email: validator.isEmail(input.value),
    lowercase: validator.isLowercase(input.value),
    empty: validator.isEmpty(input.value),
    url: validator.isURL(input.value),
  };
  result.innerHTML = dataType[selector];
  input.value = '';
  // result.innerHTML = ' ';
});
