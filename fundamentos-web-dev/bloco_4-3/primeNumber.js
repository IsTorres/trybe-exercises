function primeNumber(param){
  let n = param
  let divisorCount = 0;

  for(let i = 2; i <= n; i += 1){
    if(n % i === 0){
      divisorCount += 1;
    }
  }

  if(divisorCount > 1){
    return false;
  } else {
    return true;
  }
}

console.log(primeNumber(9));