// OBJ
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: 'Sim'
};

// // Msg concatenada:
// console.log(`Bem vinda, ${info.personagem}!`);

// Add new parameter:
// info['recorrente'] = 'Sim';

// // Show object:
// console.log(info);

// Show object key's:
// for (let key in info) {
//   console.log(key);
// }

// // Show object value's:
// for (let key in info) {
//   console.log(info[key]);
// }

// New OBJ:
let info2 = {
  personagem: 'Tio patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente:'Sim'
}

for (let key in info) {
  if(
    info[key] === info.recorrente &&
    info[key] === 'Sim' &&
    info2[key] === 'Sim'
    ){
    console.log('Ambos recorrentes');
  } else {
    console.log(info[key] + ' e ' + info2[key]);
  }
}