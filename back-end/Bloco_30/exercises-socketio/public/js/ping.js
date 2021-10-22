const socket = window.io();
// io() por default = mesmo endpoint que está sendo acessado, mas pode ser alterado passndo o novo link por parametro. 
// Exp: io('http://localhost:5000');

const btn = document.querySelector('#pingBtn');

btn.addEventListener('click', (evt) => {
  socket.emit('ping');
  return false;
});

// cria li com o ping
const createMsg = (msg) => {
  const salveMsg = document.querySelector('#msg');
  const li = document.createElement('li');
  li.innerHTML = msg ;
  salveMsg.appendChild(li);
};

// evts emitidos pelo back
socket.on('salve', (msg) => createMsg(msg));
socket.on('pong', (mensagem) => createMsg(mensagem));