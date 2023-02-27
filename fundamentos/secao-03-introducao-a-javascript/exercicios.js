console.log("It's alive!");

let a = 15;
let b = 9;
let c = 22;
let d = -25;

/* 
Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
 */

console.log("Adição = " + (a + b));
console.log("Subtração = " + (a - b));
console.log("Multiplicação = " + a * b);
console.log("Divisão = " + a / b);
console.log("Resto = " + (a % b));

/*
 Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.
 */

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

/*
Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados. 
*/
if (a > b && a > c) {
    console.log(a);
}
if (b > a && b > c) {
    console.log(b);
} else {
    console.log(c);
}

/* 
Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo.
*/
if (d > 0) {
    console.log("Positivo");
}
if (d < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

/* 
 Utilize if/else para escrever um código que defina três variaveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

Um ângulo será considerado inválido se não tiver um valor positivo.

*/

let angA = 20;
let angB = 110;
let angC = -40;

if (angA + angB + angC == 180 && angA > 0 && angB > 0 && angC > 0) {
    console.log("True");
}
if (angA + angB + angC !== 180 && angA > 0 && angB > 0 && angC > 0) {
    console.log("False");
} else {
    console.log("Erro: insira um valor positivo");
}

/* 
Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.
Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais)
*/
let peca = "Torre";
let peca_lowerCase = peca.toLowerCase();

switch (peca_lowerCase) {
    case "peão":
    case "peao":
        console.log(
            "Peão: move uma casa à frente. No primeiro movimento, pode mover-se duas casas de uma vez. Captura as peças que estejam uma casa à frente, na diagonal."
        );
        break;
    case "torre":
        console.log(
            "Torre: move-se em linha reta, na forma de cruz (tanto na vertical quanto na horizontal) quantas casas desejar."
        );
        break;
    case "cavalo":
        console.log(
            "Cavalo: Movimenta-se em 'L', sendo duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, e assim por diante. Pode pular outras peças. "
        );
        break;
    case "bispo":
        console.log("Bispo: Move-se na diagonalm quantas casas desejar.");
        break;
    case "rainha":
    case "dama":
        console.log(
            "Rainha/Dama: Movimenta-se em qualquer direção (vertical, horizontal e diagonal), quantas casas desejar."
        );
        break;
    case "rei":
        console.log(
            "Rei: Movimenta-se em qualquer direção (vertical, horizontal e diagonal), apenas uma casa por vez."
        );
        break;
    default:
        console.log("Digite um nome de peça válido.");
}

/* 
Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/
let porcentagem = -200;

if (porcentagem < 0 || porcentagem > 100) {
    console.log("Nota inválida");
} else if (porcentagem >= 90) {
    console.log(" A");
} else if (porcentagem >= 80) {
    console.log(" B");
} else if (porcentagem >= 70) {
    console.log(" C");
} else if (porcentagem >= 60) {
    console.log(" D");
} else if (porcentagem >= 50) {
    console.log(" E");
} else if (porcentagem < 50) {
    console.log("F)");
}

/* 
Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
Bônus: use somente um if.
*/
if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    console.log(true);
} else {
    console.log(false);
}

/* 
Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.
Bônus: use somente um if.
*/
if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
    console.log(true);
} else {
    console.log(false);
}
