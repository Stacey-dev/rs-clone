import { Tickets } from "../../utils/dataBuyTicket";
import { Ticket } from "../../utils/dataBuyTicket";
import App from "../../pages/app/app";
import { drawTicket } from "./drawTicket";


type Order = {
    name: string | null,
    amount: number | null,
    price: number | null
}

export function createOptionByuingTicket(arr: Tickets[], containerForOptions: HTMLElement, button: HTMLButtonElement, date: string, containerForTickets: HTMLDivElement) {
    for (let ticketsGroup of arr) {
        const title = document.createElement('div');
        title.classList.add('selection__option-title');
        containerForOptions.append(title)

        for (let elem of ticketsGroup) {
            let amount: number = 0;

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

            reduceAmount.addEventListener('click', () => {
                App.orders.length === 0 ? button.disabled = true : button.disabled = false;

                if (amount > 1) {
                    amount--;
                    amountTickets.value = `${amount}`;

                    const updateOrder = App.orders.filter((order) => order.name === elem.name && order.date === date);
                    updateOrder[0].amount = amount;
                    updateOrder[0].price = +(updateOrder[0].price! - parseFloat(elem.price)).toFixed(2);
                    App.orders.length === 0 ? button.disabled = true : button.disabled = false;
                    drawTicket(containerForTickets, App.orders);
                    console.log("its", App.orders)

                } else if (amount === 1) {
                    amount--;
                    amountTickets.value = `${amount}`;

                    const indexUpdateOrder = App.orders.findIndex((item) => item.name === elem.name && item.date === date);

                    App.orders.splice(indexUpdateOrder, 1);
                    App.orders.length === 0 ? button.disabled = true : button.disabled = false;
                    drawTicket(containerForTickets, App.orders)
                }


            });

            const amountTickets = document.createElement('input');
            amountTickets.type = 'number';
            amountTickets.min = '0';
            amountTickets.value = `${amount}`
            amountTickets.classList.add('selection__ticket-amount');

            const increaseAmount = document.createElement('span');
            increaseAmount.classList.add('selection__increase-amount');
            increaseAmount.innerHTML = '+';

            increaseAmount.addEventListener('click', () => {
                button.disabled = false;
                amount++;
                amountTickets.value = `${amount}`;
                const updateOrder = App.orders.filter((order) => order.name === elem.name && order.date === date);

                if (updateOrder.length !== 0) {
                    updateOrder[0].amount = amount;
                    updateOrder[0].price = +(updateOrder[0].price! + parseFloat(elem.price)).toFixed(2);

                    drawTicket(containerForTickets, App.orders)
                } else {
                    App.orders.push({
                        name: elem.name,
                        date: date,
                        amount: amount,
                        price: parseFloat(elem.price)
                    });
                    drawTicket(containerForTickets, App.orders)
                }
                console.log("its", App.orders)
            });




            container.append(priceTicket, nameTicket, reduceAmount, amountTickets, increaseAmount);
            containerForOptions.append(container)
        }

    }

}

function createTicket(date: string) {

}