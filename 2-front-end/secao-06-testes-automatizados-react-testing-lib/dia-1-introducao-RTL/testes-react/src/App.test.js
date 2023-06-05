// App.test.js
import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import ValidEmail from './ValidEmail';


// Adicione esse teste.
test('Verificando se o botão e o campo email estão funcionando.', () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');

  act(()=> {
    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(btnSend);
  })

  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

