let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function bigestName(params) {
  let array = params;
  let bigetsName = 0;
  let result = 0;
  
  for (let index = 0; index < array.length; index++) {
    let element = array[index].length;
    if(element > bigetsName){
      bigetsName = element;
      result = array[index];
    }
  }
  return result;
}

console.log(bigestName(names));