const express = require('express');
require('dotenv').config();

// const {
//   getReasonPhrase,
//   getStatusCode, 
// } = require('http-status-codes');

const {
  criaTarefa,
  todasTarefas,
} = require('./controller/tarefaController');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'server on' })
})

app.get('/tarefas', todasTarefas)

app.post('/', criaTarefa)

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));