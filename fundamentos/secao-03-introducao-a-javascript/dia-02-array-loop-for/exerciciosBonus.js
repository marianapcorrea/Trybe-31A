// Exercícios - Bônus - Ordenação Bubble Sort

//Ordene o array numbers em ordem crescente e imprima seus valores.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i = 0; i < numbers.length; i += 1) {
    for (j = 0; j < numbers.length - i - 1; j += 1) {
        if (numbers[j] > numbers[j + 1]) {
            let position = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = position;
        }
    }
}
console.log("Crescente: " + numbers);
