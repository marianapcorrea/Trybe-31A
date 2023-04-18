/* 
Parte I
Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status e, ao final, retornam os resultados da rodada.
*/

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = [ mage, warrior, dragon ];

// Crie uma função que retorne o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const generateDragonDamage = () => Math.floor(Math.random() * (dragon.strength - 15 + 1) + 15);

// Crie uma função que retorne o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const generateWarriorDamage = () => Math.floor(Math.random() * (warrior.strength*warrior.weaponDmg - warrior.strength + 1) + warrior.strength);

// Crie uma função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disso, a função deve ter uma condicional: caso o mago tenha menos de 15 de mana, o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”), e a mana gasta é 0.

const generateMageDamage = () => Math.floor(Math.random() * (mage.intelligence*2 - mage.intelligence + 1) + mage.intelligence);

const manaSpended = () => mage.mana >=15 ? mage.mana -=15 :   'Não possui mana suficiente'


 const generateMageDamageAndManaSpended = () => {
  return {
    damage: generateMageDamage(), 
    mana: manaSpended()
  }
} ;


/* 
Parte II
Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions. O objeto será composto por ações do jogo, e cada ação é por definição uma HOF, pois, nesse caso, são funções que recebem como parâmetro outra função.
*/

// Crie a primeira HOF que compõe o objeto gameActions.
// Ela será a função que simula o turno do personagem warrior. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor da chave damage do warrior.

const warriorTurn = () => {
  const damage = warrior.damage = generateWarriorDamage()
  dragon.healthPoints -= damage
} 

/* 
Crie a segunda HOF que compõe o objeto gameActions.
Ela será a função que simula o turno do personagem mage. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor das chaves damagee mana do mage.
*/
const mageTurn = () => {
  const damage = mage.damage = generateMageDamage(); 
  dragon.healthPoints -= damage
}

/* 
Crie a terceira HOF que compõe o objeto gameActions.
Ela será a função que simula o turno do monstro dragon. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disso, ela também deve atualizar o valor da chave damage do monstro.
*/
const dragonTurn = () => {
  const damage = dragon.damage = generateDragonDamage() 
  mage.healthPoints -= damage;
  warrior.healthPoints -= damage;
}

// Adicione ao objeto gameActions uma função de primeira classe que retorna o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.
 
const gameActions = {
  warriorTurn: () =>warriorTurn(),
  mageTurn: () =>mageTurn(),
  dragonTurn: () =>dragonTurn(),
  updateCharacters : () => battleMembers
};

// console.log(battleMembers)
gameActions.warriorTurn()
gameActions.mageTurn()
gameActions.dragonTurn()
console.log(gameActions.updateCharacters());