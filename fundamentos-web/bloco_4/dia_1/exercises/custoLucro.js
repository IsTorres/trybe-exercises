let custo = 10;
let venda = 35;

if(custo >= 0 && venda >= 0){
  let custoTotal = custo * 1.2;
  let lucroTotal = (venda - custoTotal) * 1000;
  console.log(lucroTotal);
} else {
  console.log("Erro, os valores não podem ser negativos");
}
