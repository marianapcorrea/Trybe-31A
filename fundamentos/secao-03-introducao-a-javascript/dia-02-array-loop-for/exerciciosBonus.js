// Exercícios - Bônus - Ordenação Bubble Sort

//Ordene o array numbers em ordem crescente e imprima seus valores.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* for (i = 0; i < numbers.length; i += 1) {
    for (j = 0; j < numbers.length - i - 1; j += 1) {
        if (numbers[j] > numbers[j + 1]) {
            let position = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = position;
        }
    }
}
console.log("Crescente: " + numbers); */

//Ordene o array numbers em ordem decrescente e imprima seus valores.

/* for (i = 0; i < numbers.length; i += 1) {
    for (j = 0; j < numbers.length - i - 1; j += 1) {
        if (numbers[j] < numbers[j + 1]) {
            let position = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = position;
        }
    }
}
console.log("Decrescente: " + numbers);
 */
//
//Ordene o array numbers em ordem decrescente e imprima seus valores.

/* for (i = 0; i < numbers.length; i += 1) {
    for (j = 0; j < numbers.length - i - 1; j += 1) {
        if (numbers[j] < numbers[j + 1]) {
            let position = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = position;
        }
    }
}
console.log("Decrescente: " + numbers);
 */
//Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja valor seguinte, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:
// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

let numbersAfter = [];
/* for (i = 0; i < numbers.length; i += 1) {
    if (i < numbers.length - 1) {
        numbersAfter.push(numbers[i] * numbers[i + 1]);
    } else {
        numbersAfter.push(numbers[i] * 2);
    }
}

console.log(numbersAfter); */

//Escreva um algoritmo que, dado um valor n positivo, ou seja, n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n
let n = 5;
let unit = "*";
let line = "";
let square = "";

/* for (let squareWidth = 0; squareWidth < n; squareWidth += 1) {
    line = line + unit;
}
for (let squareHeight = 0; squareHeight < n; squareHeight += 1) {
    square = square + line + " \n";
}
console.log(square); */
//Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

/* let triangle = "";
for (let i = 0; i < n; i += 1) {
    triangle = triangle + unit;
    console.log(triangle);
} */

//Agora, inverta o lado do triângulo. Por exemplo:

//Depois, faça uma pirâmide com n asteriscos de base. Por exemplo:
/* n = 5

    *
  ***
*****
*/

//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Para isso, assuma que o valor de n será sempre ímpar. Por exemplo:
/* 
n = 7

     *   
    * *  
   *   * 
*******
*/

//Faça um algoritmo que indique se um número definido em uma variável é primo ou não.
//Dica: você vai precisar fazer um loop que vá de 0 ao número definido. Além disso, vai precisar fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
