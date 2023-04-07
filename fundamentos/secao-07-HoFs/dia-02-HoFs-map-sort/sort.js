//Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

//people.sort((a, b) => a.name > b.name ? 1: -1);

//Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.
people.sort((a, b) => a.age < b.age ? 1: -1);


console.log(people);