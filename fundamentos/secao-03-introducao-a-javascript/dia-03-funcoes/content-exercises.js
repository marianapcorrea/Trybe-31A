console.log("It's alive!");
/* Desenvolva cada exercício a seguir com o uso de funções.

Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que: */
let balance = 3000.0;
let value = 300;
//Adicione um valor ao saldo.
function sum(balance, value) {
    console.log(balance + value);
}
sum(balance, value);

//Subtraia um valor do saldo.
function subtraction(balance, value) {
    console.log(balance - value);
}
subtraction(balance, value);

//Multiplique o valor do saldo por uma taxa.
function multiplication(balance, value) {
    console.log(balance * value);
}
multiplication(balance, value);

//Divida o valor do saldo.
function division(balance, value) {
    console.log(balance / value);
}
division(balance, value);
