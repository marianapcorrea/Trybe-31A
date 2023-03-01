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
for (i = 0; i < numbers.length; i += 1) {
    if (i < numbers.length - 1) {
        numbersAfter.push(numbers[i] * numbers[i + 1]);
    } else {
        numbersAfter.push(numbers[i] * 2);
    }
}

console.log(numbersAfter);
