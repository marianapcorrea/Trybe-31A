//Crie uma variável player e atribua a ela um objeto que contenha as variáveis listadas na sequência.
/* let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals: { golden: 2, silver: 3 },
};
//Acesse as chaves name, lastName e age por meio da sintaxe meuObjeto.chave e concatene as informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.
console.log(player.name);
console.log(player.lastName);
console.log(player.age); 

//Adicione ao objeto a chave bestInTheWorld por meio da sintaxe meuObjeto.chave = valor e atribua a essa chave um array que contenha as datas em que a jogadora Marta foi considerada a melhor do mundo.
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(player);
//Acesse a chave bestInTheWorld por meio da sintaxe meuObjeto['chave'] e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.
console.log(`A jogadora Marta Silva foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes`)

//Acesse a chave medals por meio da sintaxe meuObjeto.chave e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.
console.log(
    `A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver}  medalhas de prata`
);
*/

//FOR/IN

//Com base no objeto a seguir, utilize for/in e imprima no console a mensagem 'Olá, xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
    person1: "João",
    person2: "Maria",
    person3: "Jorge",
};
for (keys in names) {
    console.log(`Olá, ${names[keys]}`);
}

//Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
let car = {
    model: "A3 Sedan",
    manufacturer: "Audi",
    year: 2020,
};
for (keys in car) {
    console.log(keys, car[keys]);
}
