// COLOQUE SEU CÓDIGO AQUI:
// 1- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM ';
document.body.appendChild(h1); // usar apenas 'append' = undefined;

// 2 - Adicione a tag div com a classe main-content como filho da tag body ;
let mainContent = document.createElement('div');
document.body.appendChild(mainContent);
mainContent.className = 'main-content'; 
// outros modos de add class: input.classList.add("foo"); input.setAttribute("class", "foo");

// 3 - Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let centerContent = document.createElement('div');
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);

// 4 - Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let p = document.createElement('p');
centerContent.appendChild(p);

// 5 - Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let leftContent = document.createElement('div');
mainContent.appendChild(leftContent);
leftContent.className = 'left-content';

// 6 - Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let rightContent = document.createElement('div');
mainContent.appendChild(rightContent);
rightContent.className = 'right-content';

// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let img = document.createElement('img');
leftContent.appendChild(img);
img.src = 'https://picsum.photos/200';
img.className = 'small-image';

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let ul = document.createElement('ul');
rightContent.appendChild(ul);

for(let i = 1; i <= 10; i += 1) {
  let li = document.createElement('li');
  ul.appendChild(li);
  li.innerText = i;
}

// 9 - Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
for(let i = 0; i < 3; i += 1) {
  let h3 = document.createElement('h3');
  mainContent.appendChild(h3);
}