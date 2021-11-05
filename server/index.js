require('dotenv').config();
const express = require('express');
const app = express();

// app.use(require('cors'));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const {
  criaTarefa,
  todasTarefas,
  deleteTarefa,
} = require('./controller/tarefaController');

const PORT = process.env.PORT || 3001;

app.use(express.static(__dirname)); 

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api', (req, res) => {
  res.json({ message: 'server on' })
})

app.get('/tarefas', todasTarefas)

app.post('/', criaTarefa)

app.delete('/:id', deleteTarefa)

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));