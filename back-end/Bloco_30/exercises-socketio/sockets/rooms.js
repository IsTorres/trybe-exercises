module.exports = (io) => io.on('connection', (socket) => {
  socket.on('joinRoom', ({ username, room }) => {
    socket.join(room);
    
    socket.emit('serverMessage', `Bem vindo ${username} ao chat de ${room}`);

    socket.broadcast.to(room).emit('serverMessage', `${username} acabou de entrar na sala`);
    
    socket.on('roomClientMessage', ({room, message}) => {
      io
        .to(room)
        .emit('serverMessage', `${ username }: ${ message }`);
    });
  });
});