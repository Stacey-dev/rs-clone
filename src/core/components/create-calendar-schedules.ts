import { createCalendarsTable } from "../../utils/calendarsTable";

export function createCalendarView(elem: HTMLDivElement, lng: string) {
    const monthName: string = new Date().toLocaleString(`${lng}`, {
        month: 'long',
    });

    const year = new Date().getFullYear();

    const monthContainer = document.createElement('div');
    monthContainer.classList.add('sched-calendar__month-container');

    const monthNameContainer = document.createElement('h3');
    monthNameContainer.classList.add('calendar__monthName');
    monthNameContainer.innerText = `${monthName} ${year}`;

    const calendar = document.createElement('div');
    calendar.classList.add('calendar_schedules-page');

    createCalendar(calendar);

    monthContainer.append(monthNameContainer);
    elem.append(monthContainer, calendar);
}


function createCalendar(container: HTMLDivElement) {
    const dayMonthCurrent = new Date().getDate();
    const yearCurrent = new Date().getFullYear();
    const monthCurrent = new Date().getMonth();

    const d = new Date(yearCurrent, monthCurrent);

    let table = '<table><tr><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th><th>Su</th></tr><tr>';

    container.innerHTML = createCalendarsTable(table, d, monthCurrent);

    const calendarTable = <HTMLCollectionOf<HTMLTableElement>>container.getElementsByTagName('table');
    for (const item of calendarTable) {
        item.classList.add('sched-calendar__table');
    }

    const td = <HTMLCollectionOf<HTMLTableCellElement>>container.getElementsByTagName('td');

    for (const item of td) {
        if (item.textContent === `${dayMonthCurrent}`) {
            item.classList.add('td__highlight');
            item.classList.add('td__futureDay');
        } else if (Number(item.textContent) < dayMonthCurrent && item.textContent) {
            item.classList.add('td__pastDay');
        } else if (Number(item.textContent) > dayMonthCurrent && item.textContent) {
            item.classList.add('td__futureDay');
        }
    }
}

export function getAllSaturdays() {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();

    const saturdays = [];

    for (let i = 0; i <= new Date(year, month, 0).getDate(); i++) {
        const date = new Date(year, month, i);

        if (date.getDay() == 6) {
            saturdays.push(date.getDate());
        }
    }
    return saturdays;
}
