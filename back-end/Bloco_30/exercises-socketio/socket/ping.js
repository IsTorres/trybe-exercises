module.exports = (io) => {
  io.on('connection', (socket) => {
    // console.log(`Usuário conectado. ID: ${socket.id} `);
    
    socket.emit('salve', 'salve mano de brusque!');
  
    socket.on('ping', () => {
      console.log(`${socket.id} emitu um ping`);
      io.emit('pong', `${socket.id} emitiu um pong`)
    });
    
  });  
};