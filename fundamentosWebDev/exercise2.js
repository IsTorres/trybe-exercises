// Utilize template literals para que a chamada console.log(oddsAndEvens); 
// retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// console.log(oddsAndEvens);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort(function(a, b){
  return a - b;
})

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
