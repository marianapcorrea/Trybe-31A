/* Nova pessoa contratada
Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. Para isso:

crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada. */

const generateEmail = (employee) => {
  return { employee, email: `${employee.toLowerCase().replace(' ', '_')}@trybe.com` }
}

const newEmployees = () => {
  const employees = {
    id1: generateEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: generateEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: generateEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// console.log(newEmployees())

/* Sorteador de loteria
Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”). */
const checkBet = (bet, lottery) => bet === lottery

const runLottery = (bet, callback) => {
  const lottery= Math.ceil(Math.random()*5);
  const result = callback(bet, lottery) ? 'Você acertou!' : 'Não foi dessa vez...';
  return `O numero sorteado foi ${lottery}. ${result}`;
}

//console.log(runLottery(4, checkBet))

/* Corretor automático de exame
Crie uma HOF que receberá três parâmetros:

O primeiro será um array de respostas corretas (soluções);

O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:

Uma resposta correta adiciona 1 ponto à pontuação final;

A ausência de uma resposta não altera a pontuação (quando for “N.A”);

Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

 */

const RIGHT_ANSWERS =       ['A', 'C',      'B', 'D', 'A', 'A', 'D',    'A', 'D','C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) return 1;
  if (studentAnswer === 'N.A') return  0;
  else return  -0.5;
}

const giveGrade = (rightAnswer, studentAnswer, callback) => {
  let grade = 0;
  for (let i = 0; i < rightAnswer.length; i+=1) {
    grade += callback(rightAnswer[i], studentAnswer[i]);
  }
  return grade;
}

// console.log(giveGrade(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers))

/* Instruções para a realização dos exercícios
Nos exercícios a seguir, você trabalhará com uma estrutura de dados representando uma lista de livros contendo informações como nome do livro, gênero, pessoa autora do livro e data de lançamento.

Em cada exercício, será pedido que você encontre ou produza alguma informação a respeito dessa lista utilizando as funções que você aprendeu hoje. Todos os exercícios contêm um código-base. Você deverá copiar esse código e salvá-lo em um arquivo nomeado conforme o número do exercício, completando a função vazia.

Por exemplo, o exercício 1 deve ser salvo no arquivo exercise1.js, e assim por diante. */

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
//const expectedResult = 'Stephen King';
const authorBornIn1947 = () => books.find((book)=>book.author.birthYear === 1947).author.name
//console.log(authorBornIn1947())

//Retorne o nome do livro com menor número de caracteres (menor nome).
//const expectedResult = 'Duna';
const smallerName = () => {
  let nameBook=books[0].name;
books.forEach((book) => {
  let currentBook=book.name
  console.log(currentBook.length)
  if (currentBook.length < nameBook.length) nameBook = currentBook
})
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName())