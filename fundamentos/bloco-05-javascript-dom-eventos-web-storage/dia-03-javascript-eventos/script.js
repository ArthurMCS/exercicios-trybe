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

 /*  Exercício 1:
  O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
  Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
  Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
  Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li> */

function calendardays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
    for (let i in dezDaysList) {
        let days = document.createElement('li')
        days.className = 'day'
        days.innerText = dezDaysList[i]
        let nameOfDays = document.querySelector('#days')
        nameOfDays.appendChild(days)

        if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
            days.className += ' holiday'
        }
        
        if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
            days.className += ' friday'
            //console.log(days)
        }
    }
} calendardays()
  
/* Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */

function holidaysbutton(Name) {
    let button = document.createElement('button')
    button.className = 'btn-holiday'
    let buttonContainer = document.querySelector('.buttons-container')
    buttonContainer.appendChild(button)
    button.innerText = Name
}
holidaysbutton('feriados')



function buttonSettings() {
    let buttonHoliday = document.querySelector('.btn-holiday')
    buttonHoliday.addEventListener('click', buttonSettings)
    let holidays = document.querySelectorAll('.holiday')
    
    let backgroundcolor = 'rgb ()'
    
    for (let index in holidays) {
        
    }

}


