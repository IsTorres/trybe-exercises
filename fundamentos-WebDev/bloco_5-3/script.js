function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

// Escreva seu código abaixo.
// Povoa a ul days 
function createDaysOfMonth () {
  // Lista dos dias
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  const monthDays = document.querySelector('#days');

  // For p/ criar, inserir o txt(dia) e afiliar as li's à ul days
  for (let i = 0; i < dezDaysList.length; i += 1) {
    const days = dezDaysList[i];
    const monthDayListItem = document.createElement('li');
    monthDayListItem.innerHTML = days;

    monthDays.appendChild(monthDayListItem);
  }
}
createDaysOfMonth();

// Cria botão de feriado
function holydays(param) {
  // Cria botão, insere string e add id 'btn-holyday'
  const holydayBtn = document.createElement('button');
  holydayBtn.innerText = param;
  holydayBtn.id = 'btn-holyday';

  // captura div especifica pela class e afilia o botão a ela
  const btnContainer = document.querySelector('.buttons-container');
  btnContainer.appendChild(holydayBtn);
}
holydays('Feriados');

