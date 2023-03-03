/* Parte I
🚀 Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.

🚀 Modifique a variável para que respeite o escopo em que está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.

Copie o código a seguir e rode-o para verificar sua saída. */
/* function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
        console.log("Idade dentro do for:", idade);
    }
    //console.log("Idade fora do for:", idade); // retire essa linha ao implementar o tipo de variável correta.
}
imprimeIdade(); */

//Altere o valor das propriedades do objeto para que respeite as características da variável do tipo const.
//Copie o código a seguir e rode-o para verificar sua saída.
// Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
/* const pessoa = {
    nome: "Henri",
    idade: 20,
};
(pessoa.nome = "Luna"),
    (pessoa.idade = 19),
    // Altere essa estrutura para corrigir o erro.
    console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);
 */
//🚀 Modifique a variável para que não ocorra Erro.
/* let favoriteFood = "Lasanha";
favoriteFood = "Hambúrguer";
console.log(favoriteFood); */

//Modifique as concatenações para template literals.
/* const name = "Adriana";
const lastName = "Soares";
console.log(`Olá,  ${name} ${lastName}!`);

function soma(a, b) {
    let resultado = a + b;
    return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de  ${a} +  ${b}  é:  ${soma(a, b)}`);
 */

// Modifique a estrutura das funções a seguir para que elas sejam arrow functions.
/* const numeroAleatorio = () => Math.random();
console.log(numeroAleatorio()); */

/* const hello = (nome) => `Olá, ${nome}!`;
let nome = "Ivan";
console.log(hello(nome)); */

/* const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
let nome = "Ivan";
let sobrenome = "Pires";
console.log(nomeCompleto(nome, sobrenome)); */

//🚀 Altere a expressão if/else utilizando ternary operator.
/* let speed = 90;
const speedCar = (speed) =>
    speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;

console.log(speedCar(speed)); */

// 1 - Crie a função ligarDesligar, que ligue e desligue um motor de um carro.

let ligarDesligar = (status) => {
    let changedStatus = status !== "ligado" ? "ligado" : "desligado";
    console.log(`O motor está ${changedStatus}`);
    return changedStatus;
};
// 2 - Crie a função circleArea, que calcule a área de um círculo.
let circleArea = (r) => {
    if (typeof r !== "number") {
        return "O parâmetro radius deve ser um número";
    }
    let pi = 3.14;
    let area = pi * r * r;
    return `Essa é a área do círculo: ${area}`;
};

// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.
let longestWord = (phrase) => {
    let phraseArray = phrase.split(" ");
    let biggestWord = "";
    for (let word in phraseArray) {
        if (biggestWord.length < phraseArray[word].length) {
            biggestWord = phraseArray[word];
        }
    }
    return biggestWord;
};
