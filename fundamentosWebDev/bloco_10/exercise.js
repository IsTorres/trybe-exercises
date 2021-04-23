const { string } = require("yargs");

// 1,2,3 - Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
const randomNumber = () => Math.floor(Math.random() * 100);
console.log(randomNumber);

// 4 - Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

const uppCase = (string) => string.toUpperCase();
const firstLetter = (string) => string[0];
const concatString = (str1, str2) => str1 + str2;

//

module.exports = { randomNumber, uppCase, firstLetter, concatString };