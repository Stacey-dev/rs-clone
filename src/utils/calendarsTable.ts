function getDay(date: Date) {
    // получить номер дня недели, от 0(пн) до 6(вс)
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

export function createCalendarsTable(tablesTag: string, date: Date, month: number): string {
    // заполнить первый ряд от понедельника
    // и до дня, с которого начинается месяц
    // * * * | 1  2  3  4
    for (let i = 0; i < getDay(date); i++) {
        tablesTag += '<td></td>';
    }

    // ячейки календаря с датами
    while (date.getMonth() == month) {
        tablesTag += '<td>' + date.getDate() + '</td>';

        if (getDay(date) % 7 == 6) {
            // вс, последний день - перевод строки
            tablesTag += '</tr><tr>';
        }

        date.setDate(date.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    if (getDay(date) != 0) {
        for (let i = getDay(date); i < 7; i++) {
            tablesTag += '<td></td>';
        }
    }
    // закрыть таблицу
    return tablesTag += '</tr></table>';
}
