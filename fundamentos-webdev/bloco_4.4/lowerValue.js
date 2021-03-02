let array = [2, 4, 6, 7, 10, 0, -3]; 

function lowerValue(value){
  let array = value;
  let lowerValue = 0;
  let lowerIndex = 0;
  
  for(let i = 0; i < array.length; i += 1){
    if(array[i] < lowerValue){
      lowerValue = array[i];
      lowerIndex = i;
    }
  }
  return lowerIndex;
}

console.log(lowerValue(array));