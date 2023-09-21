const fs = require('fs').promises
const path = require('path')

const express = require('express');

const app = express();
app.use(express.json());


async function fileReader() {
  try {
    const data = await fs.readFile(path.resolve(__dirname,'./movies.json'))
    return JSON.parse(data)
  }
  catch(error) {
    console.error(`Erro ao ler o arquivo: ${error.message}`);
  }
}

async function fileWriter(data){
  try {
  await fs.writeFile(path.resolve(__dirname,'./movies.json'), data)
  }
  catch(error) {
    console.error(`Erro ao atualizar o arquivo: ${error.message}`);
  }
}

app.get('/', (req, res) => {
  res.status(200).json({message: 'works'})
})

app.get('/movies', async (req, res) => {
  const movies = await fileReader();
  const response = res.status(200).json(movies)
  return response
})

app.get('/movies/:id', async (req, res) => {
  const id = Number(req.params.id);
  const movies = await fileReader();

  const movie = movies && movies.find(m => m.id === id);
  const response = res.status(200).json(movie)
  return response
})

app.post('/movies', async (req, res) => {
  const { movie, price } = req.body;
  const movies = await fileReader();
  
  const newId = movies[movies.length - 1].id + 1;

  const newMovie = {newId, movie, price};

  res.status(201).json([...movies, newMovie]);
})

app.put('/movies/:id', async (req, res) => {
  const { movie, price } = req.body;
  const id = Number(req.params.id);
  const movies = await fileReader();
  
  const index = movies && movies.findIndex(m => m.id === id);

  movies[index] = {id, movie, price};
  const updatedMovie = JSON.stringify(movies)

  fileWriter(updatedMovie)

  res.status(201).json(movies[index]);
})

app.delete('/movies/:id', async (req, res) => {
  const id = Number(req.params.id);
  const movies = await fileReader();
  
  const updatedMovies = JSON.stringify(movies.filter(m => m.id !== id),null, 2)


  fileWriter(updatedMovies)

  res.status(204).end();
})


module.exports = app

