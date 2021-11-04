module.exports = (io) => io.on('connection', (socket) => {
  socket.on('clientTarefa', (message) => {
    console.log(`teste`);
    io.emit('serverTarefa', message);
  });
});