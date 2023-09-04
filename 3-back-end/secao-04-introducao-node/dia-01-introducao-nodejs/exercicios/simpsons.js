const fs = require('fs').promises;

const mapCharacters = (characters) => characters.map(({id, name})=> console.log(`${id} - ${name}`))


const findById =async(id, characters)=>{
  const chosen = characters.find(character=> Number(character.id)===id);
  if (!chosen) {
    throw new Error('id não encontrado');
  }  return chosen
}

const readData = async ()=> {
  const data = await fs.readFile('./simpsons.json')
  const characters = JSON.parse(data)
  //mapCharacters(characters)
  const chosed = await findById(19,characters)

  console.log(chosed)

}

readData()