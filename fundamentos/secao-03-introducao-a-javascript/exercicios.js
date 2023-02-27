console.log("It's alive!");

let a = 15;
let b = 9;
let c = 21;

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
