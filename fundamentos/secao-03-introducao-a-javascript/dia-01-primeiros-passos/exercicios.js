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

/* 
Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do ) da empresa ao vender mil produtos.produto
Atente para o fato de que um imposto de 20% incide sobre o custo do produto.
Seu código deve emitir uma mensagem de erro e encerrar caso algum dos valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo e deve considerar que o imposto de 20% faz parte do valor de custo.

valorCustoTotal = valorCusto + impostoSobreOCusto;
lucro = valorVenda - valorCustoTotal (lucro de um produto);
*/

let valorCusto = 52;
let valorVenda = 132;
let impostoSobreOCusto = valorCusto * 0.2;

if (valorCusto == 0 || valorVenda == 0) {
    console.log("Valor inválido");
} else {
    let valorCustoTotal = valorCusto + impostoSobreOCusto;
    let lucro = valorVenda - valorCustoTotal;

    let lucroTotal = lucro * 1000;
    console.log("R$" + lucroTotal.toFixed(2));
}

/* 
Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

INSS (Instituto Nacional do Seguro Social)

Salário bruto até R$ 1.556,94: alíquota de 8%

Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR (Imposto de Renda)

Até R$ 1.903,98: isento de imposto de renda

De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo: Uma pessoa que possui o salário bruto de R$ 3.000,00, terá como primeiro desconto referente à contribuição do INSS. O cálculo será:

O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

Para pegar o valor do IR, temos um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda, que representa um desconto de R$ 200,25.
R$ 142,80 parcela a se deduzir do imposto de renda.
Fazendo a conta para obtermos o valor do imposto de renda temos: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45

O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.


*/

let salarioBruto = 3000.0;
console.log("Salario Bruto: R$ " + salarioBruto);
let aliquotaINSS;

if (salarioBruto <= 0) {
    console.log("Insira um número válido.");
} else if (salarioBruto <= 1556.94) {
    aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto > 1556.95 && salarioBruto <= 2594.92) {
    aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82) {
    aliquotaINSS = salarioBruto * 0.11;
} else if (salarioBruto > 5189.82) {
    aliquotaINSS = 570.88;
}

console.log("AliquotaINSS: R$ " + aliquotaINSS);

let salarioBase = salarioBruto - aliquotaINSS;
console.log("Salario Base: R$ " + salarioBase);

let aliquotaIR;
if (salarioBase <= 0) {
    console.log("Insira um número válido.");
    aliquotaIR;
} else if (salarioBase <= 1903.98) {
    aliquotaIR = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    aliquotaIR = salarioBase * 0.075 - 142.8;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    aliquotaIR = salarioBase * 0.15 - 354.8;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    aliquotaIR = salarioBase * 0.225 - 636.13;
} else if (salarioBase >= 4664.68) {
    aliquotaIR = salarioBase * 0.275 - 869.36;
}

console.log("AliquotaIR: R$ " + aliquotaIR);

let salarioLiquido = salarioBase - aliquotaIR;

console.log("Salario Liquido: R$ " + salarioLiquido);
