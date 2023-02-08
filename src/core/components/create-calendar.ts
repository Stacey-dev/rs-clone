export function createCalendar(elem: HTMLDivElement, year: number, month: number) {

    var d = new Date(year, month);

    var table = '<table>';

    // заполнить первый ряд от понедельника
    // и до дня, с которого начинается месяц
    // * * * | 1  2  3  4
    for (var i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    // ячейки календаря с датами
    while (d.getMonth() == month) {
        if (getDay(d) === 5) {
            table += '<td>' + d.getDate() + '<br>' + '10-20 h' + '</td>';
        } else {
            table += '<td>' + d.getDate() + '<br>' + '10-18 h' + '</td > ';
        }


        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    if (getDay(d) != 0) {
        for (var i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }
    // закрыть таблицу
    table += '</tr></table>';

    elem.innerHTML = table;

    const td = <HTMLCollectionOf<HTMLTableCellElement>>elem.getElementsByTagName('td');

    for (let item of td) {
        if (item.textContent) {
            item.classList.add('td__fill')
        }
    }

}

function getDay(date: Date) { // получить номер дня недели, от 0(пн) до 6(вс)
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}



export function createCalendarView(elem: HTMLDivElement, year: number, numMonth: number) {

    const monthName: string = new Date(year, numMonth).toLocaleString('en', {
        month: 'long'
    });

    const monthContainer = document.createElement('div');
    monthContainer.classList.add('calendar__month-container');

    const monthNameContainer = document.createElement('h3');
    monthNameContainer.classList.add('calendar__monthName');
    monthNameContainer.innerText = `${monthName} ${year}`;

    const calendar = document.createElement('div');
    calendar.classList.add('calendar');

    createCalendar(calendar, year, numMonth);

    monthContainer.append(monthNameContainer);
    elem.append(monthContainer, calendar);
}
