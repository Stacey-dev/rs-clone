import { Order } from "../../utils/types";

export function drawTicket(containerForTickets: HTMLDivElement, arr: Order[]) {
    containerForTickets.innerHTML = '';

    for (const order of arr) {
        const container = document.createElement('div');
        container.classList.add('ticket');

        const ticketAmount = document.createElement('p');
        ticketAmount.classList.add('ticket__amount');
        ticketAmount.innerHTML = `${order.amount} x ${(order.price! / order.amount!).toFixed(1)} &euro;`;

        const y = order.date!.split('-')[0];
        const m = order.date!.split('-')[1];
        const day = order.date!.split('-')[2];

        const monthName: string = new Date(+y, +m - 1).toLocaleString('en', {
            month: 'long',
        });

        const dayOfWeekName = new Date(+y, +m - 1, +day).toLocaleDateString('en', {
            weekday: 'long',
        });

        const ticketDate = document.createElement('p');
        ticketDate.classList.add('ticket__date');
        ticketDate.innerHTML = `${dayOfWeekName}, ${day} ${monthName} ${y}`;

        const ticketName = document.createElement('p');
        ticketName.classList.add('ticket__name');
        ticketName.innerText = order.name!;

        container.append(ticketName, ticketAmount, ticketDate);
        containerForTickets.append(container);
    }

    const result = arr.reduce((summ, current) => summ + current.price!, 0).toFixed(2);

    const totalPrice = document.createElement('p');
    totalPrice.classList.add('ticket__total-price');
    totalPrice.innerHTML = `Total price: <span class="total-price-value">${result}</span> &euro;`;

    containerForTickets.append(totalPrice);
}
