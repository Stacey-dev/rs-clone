
export function createInputCalendar(container: HTMLElement) {
    let date = new Date();
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');

    const label = document.createElement('label');
    label.classList.add('selection__calendar-label')
    label.setAttribute('for', 'start');
    label.innerText = 'Select date:';
    const input = document.createElement('input');
    input.setAttribute('type', 'date');
    input.id = 'start';
    input.classList.add('selection__tickets-date')
    input.value = `${year}-${month}-${day}`;

    input.min = input.value;
    input.max = '2024-01-01';
    container.append(label, input);
}
