let piece = '17';

switch(piece.toLowerCase()) {
  // Fonte: developer.mozilla.org : String.prototype.toLowerCase()
  case 'peao' :
    console.log("ande 1 ou 2 casas p/ frente");
    break;

  case 'torre' :
    console.log("ande qualquer numero de casas em sentido vertical ou horizontal");
    break;

  case 'cavalo' :
    console.log("Movimento em formato de L sendo ele formado por 3 e 2 casa, dependendo da direção");
    break;
  case 'bispo' :
    console.log("ande qualquer numero de casas, mas apena em sentido diagonal");
    break;

  case 'rei' :
    console.log("ande apenas uma casa em qualquer direção");
    break;

  case 'rainha' :
    console.log("ande qualquer numero de casas em qualquer direção");
    break;

  default:
    console.log("Isso não é uma peça de xadrez");
}
