import Flag from '../assets/icons/1f1ec-1f1e7.svg';
import NewEvent from '../assets/icons/1f195.svg';

export const schedulesExplEng = `* Activity included in the price of the general admission.
    <br>** To enjoy this activity it is necessary to purchase the corresponding ticket. Find out about the conditions at the box office.
    <br>The schedules are susceptible of modifications depending on the influx of public, meteorological or biological conditions of our animals. Therefore, we recommend that you get information directly at the Information Point of the Access Building on the day of your visit.`;
export type TableCell = {
  hour: string;
  activity: string;
  location: string;
  status: string;
  clarification: boolean;
};

export type TableCells = TableCell[];

export const schedulesTableData: TableCells = [
  {
    hour: '10:00',
    activity: 'OPENING',
    location: 'Oceanografic Valencia',
    status: 'Scheduled',
    clarification: false,
  },
  {
    hour: '10:00 - 17:45',
    activity: 'WETLANDS',
    location: 'WETLANDS',
    status: 'Scheduled',
    clarification: false,
  },
  {
    hour: '11:45',
    activity: 'PRESENTATION OF DOLPHINS*',
    location: 'Dolphinarium',
    status: 'Scheduled',
    clarification: true,
  },
  {
    hour: '12:30',
    activity: `4D CINEMA  - OCTOPUSES <img src=${Flag} class="activity__icon"/>**`,
    location: 'Red Sea Auditorium',
    status: 'Scheduled',
    clarification: false,
  },
  {
    hour: '13:00',
    activity: `4D CINEMA - <img src=${NewEvent} class="activity__icon"/> TURTLES. THE ODYSSEY OF THE TURTLE**`,
    location: 'Red Sea Auditorium',
    status: 'Scheduled',
    clarification: false,
  },
  {
    hour: '13:30',
    activity: '4D CINEMA - 20.000 LEAGUES UNDER THE SEA **',
    location: 'Red Sea Auditorium',
    status: 'Scheduled',
    clarification: false,
  },
  {
    hour: '14:00',
    activity: '4D CINEMA  - SHARKS. A BBC DOCUMENTARY**',
    location: 'Red Sea Auditorium',
    status: 'Scheduled',
    clarification: false,
  },
  {
    hour: '16:00',
    activity: 'PRESENTATION OF DOLPHINS*',
    location: 'Dolphinarium',
    status: 'Scheduled',
    clarification: true,
  },
  {
    hour: '18:00',
    activity: 'CLOSE',
    location: 'Oceanografic',
    status: 'Scheduled',
    clarification: false,
  },
];

export const schedulesSaturdayData: TableCells = [
  {
    hour: '10:00',
    activity: 'OPENING',
    location: 'Oceanografic Valencia',
    status: 'Scheduled',
    clarification: false,
  },
  {
    hour: '10:00 - 18:30',
    activity: 'WETLANDS',
    location: 'WETLANDS',
    status: 'Scheduled',
    clarification: false,
  },
  {
    hour: '11:45',
    activity: 'PRESENTATION OF DOLPHINS*',
    location: 'Dolphinarium',
    status: 'Scheduled',
    clarification: true,
  },
  {
    hour: '13:00',
    activity: `4D CINEMA - <img src=${NewEvent} class="activity__icon"/> TURTLES. THE ODYSSEY OF THE TURTLE**`,
    location: 'Red Sea Auditorium',
    status: 'Scheduled',
    clarification: false,
  },
  {
    hour: '13:30',
    activity: '4D CINEMA - 20.000 LEAGUES UNDER THE SEA **',
    location: 'Red Sea Auditorium',
    status: 'Scheduled',
    clarification: false,
  },
  {
    hour: '14:00',
    activity: 'PRESENTATION OF DOLPHINS*',
    location: 'Dolphinarium',
    status: 'Scheduled',
    clarification: true,
  },
  {
    hour: '14:00',
    activity: `4D CINEMA  - SHARKS <img src=${Flag} class="activity__icon"/> A BBC DOCUMENTARY**`,
    location: 'Red Sea Auditorium',
    status: 'Scheduled',
    clarification: false,
  },
  {
    hour: '14:30',
    activity: `4D CINEMA  - OCTOPUSES**`,
    location: 'Red Sea Auditorium',
    status: 'Scheduled',
    clarification: false,
  },
  {
    hour: '16:00',
    activity: `4D CINEMA - <img src=${NewEvent} class="activity__icon"/> TURTLES. THE ODYSSEY OF THE TURTLE**`,
    location: 'Red Sea Auditorium',
    status: 'Scheduled',
    clarification: false,
  },
  {
    hour: '16:30',
    activity: `PRESENTATION OF DOLPHINS*`,
    location: 'Dolphinarium',
    status: 'Scheduled',
    clarification: false,
  },
  {
    hour: '16:30',
    activity: '4D CINEMA - 20.000 LEAGUES UNDER THE SEA **',
    location: 'Red Sea Auditorium',
    status: 'Scheduled',
    clarification: false,
  },
  {
    hour: '17:00',
    activity: '4D CINEMA  - SHARKS. A BBC DOCUMENTARY**',
    location: 'Red Sea Auditorium',
    status: 'Scheduled',
    clarification: false,
  },
  {
    hour: '17:30',
    activity: `4D CINEMA  - OCTOPUSES**`,
    location: 'Red Sea Auditorium',
    status: 'Scheduled',
    clarification: false,
  },
  {
    hour: '18:00',
    activity: 'PRESENTATION OF DOLPHINS*',
    location: 'Dolphinarium',
    status: 'Scheduled',
    clarification: true,
  },
  {
    hour: '20:00',
    activity: 'CLOSE',
    location: 'Oceanografic',
    status: 'Scheduled',
    clarification: false,
  },
];

export const schedulesTableDataRu: TableCells = [
  {
    hour: '10:00',
    activity: 'ОТКРЫТИЕ',
    location: 'Океанографическая Валенсия',
    status: 'Запланировано',
    clarification: false,
  },
  {
    hour: '10:00 - 17:45',
    activity: 'ВОДНО-БОЛОТНЫЕ УГОДЬЯ',
    location: 'Wetlands',
    status: 'Запланировано',
    clarification: false,
  },
  {
    hour: '11:45',
    activity: 'ПРЕДСТАВЛЕНИЕ ДЕЛЬФИНОВ*',
    location: 'Дельфинарий',
    status: 'Запланировано',
    clarification: true,
  },
  {
    hour: '12:30',
    activity: `КИНОТЕАТР 4D - ОСЬМИНОГИ <img src=${Flag} class="activity__icon"/>**`,
    location: 'Аудитория Красного моря',
    status: 'Запланировано',
    clarification: false,
  },
  {
    hour: '13:00',
    activity: `КИНОТЕАТР 4D - <img src=${NewEvent} class="activity__icon"/> ЧЕРЕПАХИ**`,
    location: 'Аудитория Красного моря',
    status: 'Запланировано',
    clarification: false,
  },
  {
    hour: '13:30',
    activity: 'КИНОТЕАТР 4D - 20.000 ЛЬЕ ПОД ВОДОЙ **',
    location: 'Аудитория Красного моря',
    status: 'Запланировано',
    clarification: false,
  },
  {
    hour: '14:00',
    activity: 'КИНОТЕАТР 4D - АКУЛЫ. ДОКУМЕНТАЛЬНЫЙ ФИЛЬМ BBC**',
    location: 'Аудитория Красного моря',
    status: 'Запланировано',
    clarification: false,
  },
  {
    hour: '16:00',
    activity: 'ПРЕДСТАВЛЕНИЕ ДЕЛЬФИНОВ*',
    location: 'Дельфинарий',
    status: 'Запланировано',
    clarification: true,
  },
  {
    hour: '18:00',
    activity: 'ЗАКРЫТИЕ',
    location: 'Океанографический парк',
    status: 'Запланировано',
    clarification: false,
  },
];

export const schedulesSaturdayDataRu: TableCells = [
  {
    hour: '10:00',
    activity: 'ОТКРЫТИЕ',
    location: 'Океанографическая Валенсия',
    status: 'Запланировано',
    clarification: false,
  },
  {
    hour: '10:00 - 18:30',
    activity: 'ВОДНО-БОЛОТНЫЕ УГОДЬЯ',
    location: 'Wetlands',
    status: 'Запланировано',
    clarification: false,
  },
  {
    hour: '11:45',
    activity: 'ПРЕДСТАВЛЕНИЕ ДЕЛЬФИНОВ*',
    location: 'Дельфинарий',
    status: 'Запланировано',
    clarification: true,
  },
  {
    hour: '13:00',
    activity: `КИНОТЕАТР 4D - <img src=${NewEvent} class="activity__icon"/> ЧЕРЕПАХИ**`,
    location: 'Аудитория Красного моря',
    status: 'Запланировано',
    clarification: false,
  },
  {
    hour: '13:30',
    activity: 'КИНОТЕАТР 4D - 20.000 ЛЬЕ ПОД ВОДОЙ **',
    location: 'Аудитория Красного моря',
    status: 'Запланировано',
    clarification: false,
  },
  {
    hour: '14:00',
    activity: 'ПРЕДСТАВЛЕНИЕ ДЕЛЬФИНОВ*',
    location: 'Дельфинарий',
    status: 'Запланировано',
    clarification: true,
  },
  {
    hour: '14:00',
    activity: `КИНОТЕАТР 4D - АКУЛЫ <img src=${Flag} class="activity__icon"/> ДОКУМЕНТАЛЬНЫЙ ФИЛЬМ BBC**`,
    location: 'Аудитория Красного моря',
    status: 'Запланировано',
    clarification: false,
  },
  {
    hour: '14:30',
    activity: `КИНОТЕАТР 4D - ОСЬМИНОГИ**`,
    location: 'Аудитория Красного моря',
    status: 'Запланировано',
    clarification: false,
  },
  {
    hour: '16:00',
    activity: `КИНОТЕАТР 4D - <img src=${NewEvent} class="activity__icon"/> ЧЕРЕПАХИ**`,
    location: 'Аудитория Красного моря',
    status: 'Запланировано',
    clarification: false,
  },
  {
    hour: '16:30',
    activity: `ПРЕДСТАВЛЕНИЕ ДЕЛЬФИНОВ*`,
    location: 'Дельфинарий',
    status: 'Запланировано',
    clarification: false,
  },
  {
    hour: '16:30',
    activity: 'КИНОТЕАТР 4D - 20.000 ЛЬЕ ПОД ВОДОЙ **',
    location: 'Аудитория Красного моря',
    status: 'Запланировано',
    clarification: false,
  },
  {
    hour: '17:00',
    activity: 'КИНОТЕАТР 4D - АКУЛЫ. ДОКУМЕНТАЛЬНЫЙ ФИЛЬМ BBC**',
    location: 'Аудитория Красного моря',
    status: 'Запланировано',
    clarification: false,
  },
  {
    hour: '17:30',
    activity: `КИНОТЕАТР 4D - ОСЬМИНОГИ**`,
    location: 'Аудитория Красного моря',
    status: 'Запланировано',
    clarification: false,
  },
  {
    hour: '18:00',
    activity: ' ПРЕДСТАВЛЕНИЕ ДЕЛЬФИНОВ*',
    location: 'Дельфинарий',
    status: 'Запланировано',
    clarification: true,
  },
  {
    hour: '20:00',
    activity: 'ЗАКРЫТИЕ',
    location: 'Океанографический парк',
    status: 'Запланировано',
    clarification: false,
  },
];
