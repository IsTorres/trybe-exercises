let n = 5;
let symbol = '*'
let imputLine = ''
let nPosition = n;

for(let index = 0; index < n; index += 1){
  for(let i = 0; i <= n; i += 1 ){
    if(i < nPosition) {
      imputLine += ' '
    } else {
      imputLine += symbol;
    }
  };

  console.log(imputLine);
  imputLine = ''
  nPosition -= 1;
}