const clients = [
  {
    name: 'João da Silva',
    age: 28,
    email: 'joao.silva@gmail.com',
    phone: '(11) 5555-5555',
    address: {
      street: 'Rua dos Lírios',
      number: 123,
      neighborhood: 'Jardim Primavera',
      city: 'São Paulo',
      state: 'SP',
      cep: '01234-567',
    },
  },
  {
    name: 'Maria Souza',
    age: 35,
    email: 'maria.souza@hotmail.com',
    address: {
      street: 'Rua dos Cravos',
      number: 456,
      neighborhood: 'Copacabana',
      city: 'Rio de Janeiro',
      state: 'RJ',
      cep: '12345-678',
    },
  },
  {
    name: 'Pedro Oliveira',
    age: 42,
    email: 'pedro.oliveira@gmail.com',
    address: {
      street: 'Rua das Margaridas',
      number: 789,
      neighborhood: 'Boa Viagem',
      city: 'Recife',
      state: 'PE',
      cep: '23456-789',
    },
  },
  {
    name: 'Ana Santos',
    age: 25,
    email: 'ana.santos@gmail.com',
    phone: '(71) 5555-5555',
    address: {
      street: 'Rua dos Girassóis',
      number: 1011,
      neighborhood: 'Barra',
      city: 'Salvador',
      state: 'BA',
      cep: '34567-890',
    },
  },
  {
    name: 'Luiz Costa',
    age: 32,
    email: 'luiz.costa@hotmail.com',
    address: {
      street: 'Rua das Acácias',
      number: 1213,
      neighborhood: 'Centro',
      city: 'Belo Horizonte',
      state: 'MG',
      cep: '45678-901',
    },
  },
  {
    name: 'Isabela Almeida',
    age: 37,
    email: 'isabela.almeida@gmail.com',
    phone: '(21) 5555-5555',
    address: {
      street: 'Rua das Hortênsias',
      number: 1415,
      neighborhood: 'Botafogo',
      city: 'Rio de Janeiro',
      state: 'RJ',
      cep: '56789-012',
    },
  },
  {
    name: 'Rafael Ferreira',
    age: 29,
    email: 'rafael.ferreira@hotmail.com',
    address: {
      street: 'Rua das Orquídeas',
      number: 1617,
      neighborhood: 'Pinheiros',
      city: 'São Paulo',
      state: 'SP',
      cep: '67890-123',
    },
  },
];

const findPersonByName = (name) => {
  let client
  try {
    for(let i = 0; i < clients.length; i++) {
      if (clients[i].name === name) {
        client = clients[i];
        console.log(`Destinatário: ${client.name}. Endereço: ${client.address.street}, ${client.address.number}, ${client.address.neighborhood}, ${client.address.city} - ${client.address.state}. CEP: ${client.address.cep}`);
      }
  } 
  if (!client) {
      throw new Error('Pessoa não encontrada, tente novamente')
    }
} catch (e) {
  console.error(e.message)
}
}


const findPersonByPosition = (position) => {
  try {
    if (position>clients.length) {
      throw new Error('Posição inválida, tente novamente')
    } 
    console.log(`Cliente: ${clients[position].name}. email: ${clients[position].email}.`);
  }catch (e) {
  console.error(e.message)
}
};

const findPeopleByState = (state) => {
  try {
    let clientList = []
    for (let i = 0; i < clients.length; i++) {
      if (clients[i].address.state === state) {
        clientList.push(clients[i].name);
      }
    }
    console.log(clientList)
    if ( clientList.length === 0 ) {
      throw new Error('Ops, nenhuma pessoa mora nesse estado, tente outro')
    }
  } catch (e) {
    console.log(e.message)
  }
};

    //findPersonByName('Isabela ')
    // findPersonByPosition(1)
    //findPeopleByState('RJ')
/* 
A função findPersonByName() recebe um nome por parâmetro e retorna a string: 'Destinatário: Ana Santos. Endereço: Rua dos Girassóis, 1011, Barra, Salvador - BA. CEP: 34567-890 '.
Caso a função findPersonByName() não encontre pessoas na lista de clientes, lance uma exceção com a mensagem 'Pessoa não encontrada, tente novamente'.
A função findPersonByPosition() recebe uma posição (do array) por parâmetro e retorna uma string com o nome e o e-mail da pessoa. Cliente: João da Silva. email: joao.silva@gmail.com.
Caso a função findPersonByPosition() não localize uma pessoa por posição, lance uma exceção com a mensagem 'Posição inválida, tente novamente'.
A função findPeopleByState recebe um estado por parâmetro e retorna um array contendo o nome das pessoas que moram naquele estado.
Caso a função findPeopleByState localize nenhuma pessoa no estado, lance uma exceção com a mensagem 'Ops, nenhuma pessoa mora nesse estado, tente outro'
 */

const validateInfo = (name, age) => {
  if (!name || !age) {
    throw new Error("Todas as informações são necessárias");
  }
};

const validateLegalAge = (age) => {
  if (age < 18) {
    throw new Error(
      "Ops, infelizmente nesse momento você não pode fazer as aulas"
    );
  }
};

const studentRegister = (name, age) => {
  try {
    validateInfo(name, age);
    validateLegalAge(age);
    return `${name}, boas-vindas à AuTrybe!`;
  } catch (error) {
    return error.message;
  }
};

console.log(studentRegister("Carlos", 18)); // Fluxo completo
console.log(studentRegister("Carlos", 12)) // Fluxo de exceção
console.log(studentRegister("Renan")) // Fluxo de exceção
