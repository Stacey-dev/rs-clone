const highWorkLoad = [
  {
    month: 1,
    days: [4, 14],
  },
  {
    month: 2,
    days: [8, 9],
  },
  {
    month: 3,
    days: [3, 4, 5, 6, 7, 8, 9, 29, 30],
  },
  {
    month: 4,
    days: [1],
  },
  {
    month: 6,
    days: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  },
  {
    month: 9,
    days: [13, 14],
  },
  {
    month: 11,
    days: [6, 7, 8, 9],
  },
];

const mediumWorkLoad = [
  {
    month: 1,
    days: [13, 15, 22, 23],
  },
  {
    month: 11,
    days: [26, 27, 28, 29, 30],
  },
];

function getAllSaturdays(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const saturdays = [];

  for (let i = 0; i <= new Date(year, month, 0).getDate(); i++) {
    const date = new Date(year, month, i);

    if (date.getDay() == 6) {
      saturdays.push(date.getDate());
    }
  }
  return saturdays;
}

export function createCalendar(elem: HTMLDivElement, year: number, month: number, lng: string) {
  const d = new Date(year, month);
  const saturdays = getAllSaturdays(d);

  let table = '<table>';

  // заполнить первый ряд от понедельника
  // и до дня, с которого начинается месяц
  // * * * | 1  2  3  4
  for (let i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  }

  // ячейки календаря с датами
  while (d.getMonth() == month) {
    table += '<td>' + d.getDate() + '</td>';

    if (getDay(d) % 7 == 6) {
      // вс, последний день - перевод строки
      table += '</tr><tr>';
    }

    d.setDate(d.getDate() + 1);
  }

  // добить таблицу пустыми ячейками, если нужно
  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
  }
  // закрыть таблицу
  table += '</tr></table>';

  elem.innerHTML = table;

  const td = <HTMLCollectionOf<HTMLTableCellElement>>elem.getElementsByTagName('td');

  for (const item of td) {
    if (!item.textContent) {
      item.style.background = 'white';
    }
    if (item.textContent) {
      item.classList.add('td__fill');
    }
    if (month === 2 || month === 3 || month === 4 || month === 5 || month === 6 || month === 8 || month === 9) {
      item.classList.add('td__medium-workloud');
    }
    if (month === 7) {
      item.classList.add('td__highg-workloud');
    }
    for (const dataMonth of highWorkLoad) {
      if (dataMonth.month === month) {
        if (dataMonth.days.includes(Number(item.textContent))) {
          item.classList.add('td__highg-workloud');
        }
      }
    }
    for (const dataMonth of mediumWorkLoad) {
      if (dataMonth.month === month) {
        if (dataMonth.days.includes(Number(item.textContent))) {
          item.classList.add('td__medium-workloud');
        }
      }
    }
  }

  for (const item of td) {
    const workHours = document.createElement('p');
    workHours.classList.add('calendar__workHours');

    if (saturdays.includes(Number(item.textContent))) {
      workHours.innerText = `${lng === 'ru' ? '10-20 ч' : '10-20 h'}`;
    } else {
      workHours.innerText = `${lng === 'ru' ? '10-18 ч' : '10-18 h'}`;
    }
    item.append(workHours);
  }
  for (const item of td) {
    if (item.textContent && item.className.includes('td__highg-workloud')) {
      const message = document.createElement('div');
      message.innerText = `${
        lng === 'ru'
          ? 'Внимание! Билеты лучше приобрести заранее'
          : 'Attention! It is better to buy tickets in advance!'
      }`;
      message.classList.add('calendar__message');
      item.append(message);
    } else if (item.textContent && item.className.includes('td__medium-workloud')) {
      const message = document.createElement('div');
      message.innerText = `${lng === 'ru' ? 'Средняя загруженность' : 'Medium workload'}`;
      message.classList.add('calendar__message');
      item.append(message);
    } else if (item.textContent && item.className.includes('td__fill')) {
      const message = document.createElement('div');
      message.innerText = `${lng === 'ru' ? 'Низкая загруженность' : 'Low workload'}`;
      message.classList.add('calendar__message');
      item.append(message);
    }
  }
}

function getDay(date: Date) {
  // получить номер дня недели, от 0(пн) до 6(вс)
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

export function createCalendarView(elem: HTMLDivElement, year: number, numMonth: number, lng: string) {
  const monthName: string = new Date(year, numMonth).toLocaleString(`${lng}`, {
    month: 'long',
  });

  const monthContainer = document.createElement('div');
  monthContainer.classList.add('calendar__month-container');

  const monthNameContainer = document.createElement('h3');
  monthNameContainer.classList.add('calendar__monthName');
  monthNameContainer.innerText = `${monthName} ${year}`;

  const calendar = document.createElement('div');
  calendar.classList.add('calendar');

  createCalendar(calendar, year, numMonth, lng);

  monthContainer.append(monthNameContainer);

  const workloadContainer = document.createElement('div');
  workloadContainer.classList.add('calendar__workLoad');
  workloadContainer.innerHTML = `<div class="calenadr__workLoad">
    <div class="workLoad__low"></div>
    <span class="calendar__workLoad_text">- ${lng === 'ru' ? 'низкая загруженность ' : 'low workload '}</span>
    <div class="workLoad__medium"></div>
    <span class="calendar__workLoad_text">- ${lng === 'ru' ? 'средняя загруженность ' : 'medium workload '}</span>
    <div class="workLoad__high"></div>
    <span class="calendar__workLoad_text">- ${lng === 'ru' ? 'высокая загруженность ' : 'high workload '}</span>
</div>`;

  elem.append(monthContainer, calendar, workloadContainer);
}
