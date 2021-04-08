
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
function containsA() {
  // escreva seu código aqui
  return names.reduce((acNames, cName) => acNames + cName.split('').reduce((acc, letra) => 
    letra === 'A' || letra === 'a' ? acc + 1 : acc, 0), 0);
}


assert.deepStrictEqual(containsA(), 20);

// function dale() {
//   const x = 'Adervandes';
//   return x.split('').reduce((acc, letra) => letra === 'A' || letra === 'a' ? acc + 1 : acc, 0)
// }
// console.log(dale());
