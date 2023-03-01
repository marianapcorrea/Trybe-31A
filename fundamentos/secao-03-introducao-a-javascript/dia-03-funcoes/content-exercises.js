console.log("It's alive!");
/* Desenvolva cada exercício a seguir com o uso de funções.

Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que: */
/* let balance = 3000.0;
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
subtraction(balance, value); */

//Multiplique o valor do saldo por uma taxa.
/* function multiplication(balance, value) {
    console.log(balance * value);
}
multiplication(balance, value);

//Divida o valor do saldo.
function division(balance, value) {
    console.log(balance / value);
}
division(balance, value);
 */

//Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.
let clientesTrybeBank = ["Ada", "John", "Gus"];

function newClient(client) {
    if (typeof client === "string") {
        clientesTrybeBank.push(client);
        return clientesTrybeBank;
    } else {
        return "Type Error: Yous should only use the string type.";
    }
}
console.log(newClient("Beta"));
console.log(newClient(1));

//Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, caso o parâmetro não seja do tipo string e caso o(a) cliente não exista dentro do array.
