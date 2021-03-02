let listOfNum = [2, 3, 2, 5, 8, 2, 3];

function mostRepeatedNumb(params) {
  let array = params;
  let repeatedNum = 0;
  let repeatedNumIndex = 0;
  let mostRepeated = 0;

  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    for (let i = 0; i < array.length; i++) {
      if(element === array[i]){
        repeatedNum += 1;
      }
    }
    if(repeatedNum > mostRepeated){
      mostRepeated = repeatedNum;
      repeatedNumIndex = element;
    }
    repeatedNum = 0;
  }
  return repeatedNumIndex;
}
console.log(mostRepeatedNumb(listOfNum));