const token = 6069023429865292
const url= `https://superheroapi.com/api.php/${token}`

const btn = document.querySelector('button')
const img = document.querySelector('img')
const hero = document.querySelector('h2')

const generateRandomID = () =>Math.floor(Math.random() * 731)
const generateImage = (url) => {
 img.src = `${url}/image/url`
 img.alt = `${url}/image`
}

const getCharacter = async()=>{
const id = generateRandomID()
try{
const api = await fetch(`${url}/${id}`) 
const data = await api.json()
console.log(data)
img.src = data.image.url
img.alt = data.name
hero.innerHTML = data.name
} catch (err) {
  alert('Herói não encontrado.')
}


}


window.onload = () =>{
  getCharacter()
  btn.addEventListener('click', (e)=> { 
    e.preventDefault()
    getCharacter()})
}