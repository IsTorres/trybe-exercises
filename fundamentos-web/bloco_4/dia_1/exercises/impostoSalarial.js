let salarioBruto = 3500.00;

let salarioBase;
let salarioLiquido;
let impostoDeRenda;

if(salarioBruto <= 1556.94){
  salarioBase = salarioBruto - (salarioBruto * 0.08);
} else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
  salarioBase = salarioBruto - (salarioBruto * 0.09);
} else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
  salarioBase = salarioBruto - (salarioBruto * 0.11); 
} else {
  salarioBase = salarioBruto - (salarioBruto - 570.88);
}

if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
  impostoDeRenda = (salarioBase * 0.075) - 142.80;
} else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
  impostoDeRenda = (salarioBase * 0.15) - 354.80;
} else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
  impostoDeRenda = (salarioBase * 0.225) - 636.13;
} else if(salarioBase > 4664.68){
  impostoDeRenda = (salarioBase * 0.275) - 869.36;
} else {
  impostoDeRenda = 0;
}

salarioLiquido = salarioBase - impostoDeRenda;

console.log(salarioBase);
console.log(impostoDeRenda);
console.log(salarioLiquido);