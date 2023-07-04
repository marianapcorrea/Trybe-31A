const fetchAPI = async (character) => {
  const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${character}`)
  const data = response.json()
  return data
} 

export default fetchAPI