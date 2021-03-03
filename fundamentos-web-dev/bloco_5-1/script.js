/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
       - document.getElementById()
       - document.getElementsByClassName()
       - document.getElementsByTagName()
Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
Crie uma função que mude a cor do quadrado vermelho para branco.
Crie uma função que corrija o texto da tag <h1>.
Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

// exe1:
function toTwoYears() {
  let paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerHTML = 'Me vejo evoluindo sempre! :)'
}
toTwoYears();

// exe2:
function trybeGreen() {
  let square = document.getElementsByClassName('main-content')[0];
  square.style.background = 'rgb(76,164,109)';
}
trybeGreen();

// exe3:
function centerSquareColor() {
  let centerSquare = document.getElementsByClassName('center-content')[0];
  centerSquare.style.background = 'rgb(255,255,255)';
}
centerSquareColor();

// exe4:
function textH1() {
  let text = document.getElementsByClassName('title')[0];
  text.innerHTML = 'Exercício 5.1 - JavaScripit';
}
textH1();

// exe5:
function textP() {
  let text = document.getElementsByTagName('p');
  for (let i = 0; i < text.length; i += 1) {
    text[i].style.textTransform = 'uppercase';
  }
}
textP();

// exe6:
function printConsoleP() {
  let content = document.getElementsByTagName('p');
  for (let i = 0; i < content.length; i += 1) {
    console.log(document.getElementsByTagName('p')[i].innerHTML);
  }
}
printConsoleP();