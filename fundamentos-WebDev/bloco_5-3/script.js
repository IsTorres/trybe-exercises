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
    const day = dezDaysList[i];
    const dayOfMonth = document.createElement('li');

    if (day === 24 | day === 31){
      dayOfMonth.className = 'day holiday';
      dayOfMonth.innerHTML = day;
      monthDays.appendChild(dayOfMonth);
    } else if (day === 4 | day === 11 | day === 18) {
      dayOfMonth.className = 'friday';
      dayOfMonth.innerHTML = day;
      monthDays.appendChild(dayOfMonth);
    } else if (day === 25) {
      dayOfMonth.className = 'day holiday friday'
      dayOfMonth.innerHTML = day;
      monthDays.appendChild(dayOfMonth);
    } else {
      dayOfMonth.className = 'day';
      dayOfMonth.innerHTML = day;
      monthDays.appendChild(dayOfMonth);
    }
  }
}
createDaysOfMonth();

// Cria botão de feriado
function createHolydayBtn(param) {
  const button = document.createElement('button');
  // captura div especifica pela class e afilia o botão a ela
  const btnContainer = document.querySelector('.buttons-container');

  button.innerText = param;
  button.id = 'btn-holiday';
  btnContainer.appendChild(button);
}
createHolydayBtn('Feriados');

function showHolidays () {
  // Captura o botão pela id
  let btnHoliday = document.querySelector('#btn-holiday');
  // pega elementos com class especifica
  let holidayDays = document.querySelectorAll('.holiday');

  let backgroundColor = 'rgb(238,238,238)';
  let fontNewColor = 'white';
  let fontColor = '#777';
  let newColor = 'green';

  // Cria evento de mudança de bg-color com click + (if/else)
  btnHoliday.addEventListener('click', function(){
    // For passa por totos elementos
    for(let i = 0; i < holidayDays.length; i += 1) {
      if (holidayDays[i].style.backgroundColor === newColor) {
        holidayDays[i].style.backgroundColor = backgroundColor;
        holidayDays[i].style.color = fontColor;
      } else {
        holidayDays[i].style.backgroundColor = newColor;
        holidayDays[i].style.color = fontNewColor;
      }
    }
  })
}
showHolidays();

function dayMouseOver () {
  let day = document.querySelector('#days');
  
  day.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
}
dayMouseOver();

function dayMouseOut () {
  let day = document.querySelector('#days');

  day.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
}
dayMouseOut();
