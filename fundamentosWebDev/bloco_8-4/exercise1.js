
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

// Dada uma matriz de matrizes, transforme em uma única matriz.
function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acc, crr) => acc.concat(crr), []);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);