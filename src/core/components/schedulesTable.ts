import { TableCells } from '../../utils/schedulesData';
export function createSchedulesTable(arr: TableCells) {
  const container = document.createElement('div');
  container.classList.add('sched-table');

  for (const elem of arr) {
    const cell = document.createElement('div');
    cell.classList.add('sched-table__cell');
    if (elem.clarification) {
      cell.classList.add('sched-table__cell_filled');
    }

    const hour = document.createElement('div');
    hour.classList.add('sched-table__hour');
    hour.innerHTML = elem.hour;

    const activity = document.createElement('div');
    activity.classList.add('sched-table__activity');
    activity.innerHTML = elem.activity;

    const location = document.createElement('div');
    location.classList.add('sched-table__location');
    location.innerHTML = elem.location;

    const status = document.createElement('div');
    status.classList.add('sched-table__status');
    status.innerHTML = elem.status;

    cell.append(hour, activity, location, status);
    container.append(cell);
  }
  return container;
}
