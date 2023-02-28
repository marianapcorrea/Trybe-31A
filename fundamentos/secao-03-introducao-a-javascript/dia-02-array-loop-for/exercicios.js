console.log("It's alive");
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/* 
Lidando com arrays

Percorra o array imprimindo todos os valores contidos nele com a função console.log().*/
/* for (let number of numbers) {
    console.log(number);
} */

//Some todos os valores contidos no array e imprima o resultado.
/* let numbers_sum = 0;
for (let number of numbers) {
    numbers_sum += number;
}
console.log(numbers_sum);
 */
//Calcule e imprima a média aritmética dos valores contidos no array.
/* let numbers_sum = 0;
let numbers_media;
for (let number of numbers) {
    numbers_sum += number;
}
numbers_media = numbers_sum / numbers.length;
console.log(numbers_media); */

//Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.
/* if (numbers_media > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}
 */
//Utilizando for, descubra o maior valor contido no array e imprima-o.
/* let highestValue = 0;
for (let i = 0; i <= numbers.length; i += 1) {
    if (numbers[i] > highestValue) {
        highestValue = numbers[i];
    }   
}
console.log("highestValue: " + highestValue); */

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
let odd_sum = 0;
for (let number of numbers) {
    if (number % 2 !== 0) {
        odd_sum += 1;
    }
}
if (odd_sum === 0) {
    console.log("Nenhum valor ímpar encontrado");
} else {
    console.log(odd_sum);
}
//Utilizando for, descubra o menor valor contido no array e imprima-o.

//Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
