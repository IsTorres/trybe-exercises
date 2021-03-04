// COLOQUE SEU CÓDIGO AQUI:
// 1- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM ';
document.body.appendChild(h1); // usar apenas 'append' = undefined;

// 2 - Adicione a tag div com a classe main-content como filho da tag body ;
let div = document.createElement('div');
document.body.appendChild(div);
div.className = 'main-content'; 
// outros modos de add class: input.classList.add("foo"); input.setAttribute("class", "foo");

// 3 - Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let div2 = document.createElement('div');
div2.className = 'center-content';

let mainContent = document.querySelector('.main-content');
mainContent.appendChild(div2);

// 4 - Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let p = document.createElement('p');
div2.appendChild(p);