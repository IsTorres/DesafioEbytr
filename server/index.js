const express = require('express');
require('dotenv').config();

const app = express();
const http = require('http');

const PORT = process.env.PORT || 3001;

const server = http.createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: '*', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }});


io.emit('dale', 'alaosaoslaosld');

const {
  // criaTarefa,
  todasTarefas,
} = require('./controller/tarefaController');

require('./sockets/tarefa')(io);

app.get('/', (req, res) => {
  res.json({ message: 'server on' })
})

app.get('/tarefas', todasTarefas)

// app.post('/', criaTarefa)

server.listen(3002, () => console.log(`Server listening on ${PORT} `));
