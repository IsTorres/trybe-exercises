let n = 5;

function sumArrayN(params) {
  let array = params
  let sumArray = [];

  for(let i = 0; i <= array; i += 1){
    sumArray.push(n - i);
  }

  let totalSum = 0;

  for(let j = 0; j < sumArray.length; j += 1){
    totalSum = j + totalSum;
  }
    return totalSum;
}

console.log(sumArrayN(n));