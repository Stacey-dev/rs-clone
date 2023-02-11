import { Tickets } from "../../utils/dataBuyTicket";
import { Ticket } from "../../utils/dataBuyTicket";

export function createOptionByuingTicket(arr: Tickets[], containerForOptions: HTMLElement) {
    for (let ticketsGroup of arr) {
        const title = document.createElement('div');
        title.classList.add('selection__option-title');
        containerForOptions.append(title)

        for (let elem of ticketsGroup) {

            title.innerHTML = elem.title;

            const container = document.createElement('div');
            container.classList.add('selection__option-container');

            if (ticketsGroup.indexOf(elem) % 2 === 0) {
                container.classList.add('selection__option-container_filed')
            }

            const priceTicket = document.createElement('div');
            priceTicket.classList.add('selection__ticket-price');
            priceTicket.innerHTML = elem.price;

            const nameTicket = document.createElement('div');
            nameTicket.classList.add('selection__ticket-name');
            nameTicket.innerHTML = elem.name;

            const reduceAmount = document.createElement('span');
            reduceAmount.classList.add('selection__reduce-amount');
            reduceAmount.innerHTML = '-';

            const amountTickets = document.createElement('input');
            amountTickets.type = 'number';
            amountTickets.min = '0';
            amountTickets.value = "0"
            amountTickets.classList.add('selection__ticket-amount');
            amountTickets.innerHTML = '0'

            const increaseAmount = document.createElement('span');
            increaseAmount.classList.add('selection__increase-amount');
            increaseAmount.innerHTML = '+';
            container.append(priceTicket, nameTicket, reduceAmount, amountTickets, increaseAmount);
            containerForOptions.append(container)
        }

    }

}
