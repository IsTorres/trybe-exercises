let n = 5;

let imputLine = '';

for(let i = 0; i < n; i+= 1){
  for(let index = 0; index < n; index+= 1){
    imputLine += '*'
  }
  console.log(imputLine);
  imputLine = ''
}