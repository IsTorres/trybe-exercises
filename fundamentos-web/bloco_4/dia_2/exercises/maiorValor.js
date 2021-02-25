let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let higherNumber = 0;

for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index] > higherNumber){
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);

// OOOoooor...

let orderNum = numbers.sort(function(a,b){return b - a});

//  Fonte: developer.mozilla.org - array.prototype.sort()
//  function '.sort' ordena de acordo com a pontuação unicode.
//  para ter certeza da ordenação correta, deve-se fornecer
//  um 'paramentro' de comparação entre 2 elementos do array, no caso, uma function.
//  na qual compara o elemento 'a' com o 'b':
//  Se a - b == numero negativo --> a é menor que b;
//  Se a - b == numero positivo --> a é maior que b;
//  Se a - b == 0 --> a é igual b

console.log(orderNum[0]);