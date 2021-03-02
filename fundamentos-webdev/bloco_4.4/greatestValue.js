let array = [2, 3, 6, 7, 10, 1];

function greatestNumber(value){
  let array = value;
  let greatestNumber = 0;
  let greatestIndex = 0;

  for(let i = 0; i < array.length; i += 1){
    if(array[i] > greatestNumber){
      greatestNumber = array[i];
      greatestIndex = i;
    }
  }
  return greatestIndex;
}

console.log(greatestNumber(array));