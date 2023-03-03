/* // Exercícios - objetos e for/in

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

//Imprima no console uma mensagem de boas-vindas para a personagem acima, na qual tenha o nome dela. Para isso, utilize a sintaxe meuObjeto.chave.
console.log("Bem vinda, " + info.personagem);

//Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor.
info["recorrente"] = "Sim";
console.log(info);

//Faça um for/in que mostre todas as chaves do objeto
for (let key in info) {
    console.log(key);
}

//Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto.
for (let key in info) {
    console.log(info[key]);
}

//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves
let newInfo = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim",
};

for (key in info) {
    if (key === "recorrente" && info[key] === "Sim" && newInfo[key] === "Sim") {
        console.log("Ambos recorrentes");
    } else {
        console.log(`${info[key]} e ${newInfo[key]}`);
    }
}
 */

//Leitura de Objetos
let leitor = {
    nome: "Julia",
    sobrenome: "Pessoa",
    idade: 21,
    livrosFavoritos: [
        {
            titulo: "O Pior Dia de Todos",
            autor: "Daniela Kopsch",
            editora: "Tordesilhas",
        },
    ],
};

console.log(
    `O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama "${leitor.livrosFavoritos[0].titulo}"`
);

//Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto que contenha as seguintes informações:

leitor.livrosFavoritos.push({
    titulo: "Harry Potter e o Prisioneiro de Azkaban",
    autor: "JK Rowling",
    editora: "Rocco",
});

console.log(`Julia tem ${leitor.livrosFavoritos.length} livros favoritos`);
