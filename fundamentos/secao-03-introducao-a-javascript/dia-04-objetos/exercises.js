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

/* //Leitura de Objetos
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

console.log(`Julia tem ${leitor.livrosFavoritos.length} livros favoritos`); */

/* //Pedido de clientes
//Imagine que você seja responsável por cuidar do sistema de entrega de um restaurante e que precise enviar mensagens com as informações da compra. Para isso, use o seguinte código:

//Complete a função customerInfo() para que seu retorno seja similar a 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.

//Complete a função orderModifier() para que seu retorno seja similar a 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
//              Modifique o nome da pessoa compradora para Luiz Silva;
//              Modifique o valor total da compra para R$ 50,00.

let order = {
    name: "Rafael Andrade",
    phoneNumber: "11-98763-1416",
    address: {
        street: "Rua das Flores",
        number: "389",
        apartment: "701",
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: "Coca-Cola Zero",
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: "Ana Silveira",
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};
function customerInfo(order) {
    let buyer = "Ana Silveira";
    console.log(
        `Olá, ${buyer}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, ${order.address.number}, AP: ${order.address.apartment}`
    );
}

customerInfo(order);

function orderModifier(order) {
    let buyer = (order.name = "Luiz Silva");
    let value = (order.payment.total = 50);
    console.log(
        `Olá, ${buyer}, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ ${value},00.`
    );
}

orderModifier(order);
 */
//Organizando lições

let lesson1 = {
    materia: "Matemática",
    numeroEstudantes: 20,
    professor: "Maria Clara",
    turno: "manhã",
};

let lesson2 = {
    materia: "História",
    numeroEstudantes: 20,
    professor: "Carlos",
};

let lesson3 = {
    materia: "Matemática",
    numeroEstudantes: 10,
    professor: "Maria Clara",
    turno: "noite",
};

//Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.
lesson2.turno = "noite";
console.log(lesson2);

//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listKeys(objc) {
    for (key in objc) {
        console.log(key);
    }
}

listKeys(lesson1);

//Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
function lenghtOfObj(obj) {
    console.log(Object.keys(obj).length);
}
lenghtOfObj(lesson3);

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function listValue(obj) {
    for (value in obj) {
    }
    console.log(Object.values(obj));
}
listValue(lesson1);

//Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Executar o comando console.log(allLessons)
let allLessons = {};

Object.assign(allLessons, { lesson1 }, { lesson2 }, { lesson3 });

console.log(allLessons);

//Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
function totalStudents(myObjc) {
    let occorrences = 0;
    let objKeys = Object.keys(myObjc);
    for (key in objKeys) {
        occorrences += myObjc[objKeys[key]].numeroEstudantes;
    }

    console.log(occorrences);
}

totalStudents(allLessons);

//Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto.
function keyValue(obj, key) {
    console.log(Object.values(obj)[key]);
}

keyValue(lesson1, 0);

//Crie uma função que verifique se o par chave/valor existe na função. Essa função deve possuir três parâmetros:o objeto, o nome da chave e o valor dela. Por exemplo:
function verifyPropertie(obj, key, value) {
    let input = Object.entries(obj);
    let status = false;
    for (let keys in input) {
        if (input[keys][0] === key && input[keys][1] === value) {
            status = true;
        } else {
            status = false;
        }
    }
    return status;
}
console.log(verifyPropertie(lesson3, "turno", "noite"));
console.log(verifyPropertie(lesson3, "materia", "Maria Clara"));
