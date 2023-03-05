import { Tickets } from '../../utils/types';
import { Ticket } from '../../utils/types';
import { Conditions } from '../../utils/types';
import { PageIds } from '../../utils/types';

export function createDropDownListTicket(arrData: Tickets) {
    const container = document.createElement('div');

    const containerForName = document.createElement('div');
    containerForName.classList.add('options__container-name');

    const containerName = document.createElement('p');
    containerName.classList.add('container__name');

    const containerArrow = document.createElement('div');
    containerArrow.classList.add('container__arrow');
    containerArrow.innerHTML = '&#9660;';

    containerForName.append(containerName, containerArrow);

    const containerForList = document.createElement('div');
    containerForList.classList.add('options__container-list');
    containerForList.classList.add('hidden');

    containerForName.addEventListener('click', () => {
        containerForList.classList.toggle('hidden');
        if (containerForList.className === 'options__container-list') {
            containerArrow.innerHTML = '';
            containerArrow.innerHTML = '&#9650;';
        } else {
            containerArrow.innerHTML = '';
            containerArrow.innerHTML = '&#9660;';
        }
    });

    for (const elem of arrData) {
        containerForList.append(createListTicket(elem));
        containerName.innerText = elem.title;
    }

    container.append(containerForName, containerForList);
    return container;
}

function createListTicket(obj: Ticket): HTMLDivElement {
    const container = document.createElement('div');
    container.classList.add('option');

    const containerName = document.createElement('div');
    containerName.classList.add('option__name');
    containerName.innerText = obj.name;

    const containerPrice = document.createElement('div');
    containerPrice.classList.add('option__price');
    const priceValue = document.createElement('p');
    priceValue.classList.add('option__price-value');
    priceValue.innerHTML = obj.price;

    if (obj.buyOnline) {
        const ticketButton = document.createElement('a');
        ticketButton.setAttribute('target', '_blank');
        ticketButton.href = `#${PageIds.TicketPage}`;
        ticketButton.classList.add('option__ticket');
        containerPrice.append(ticketButton, priceValue);
    } else {
        containerPrice.append(priceValue);
    }

    container.append(containerName, containerPrice);
    return container;
}

export function createDropDownListCondition(arrData: Conditions) {
    const container = document.createElement('div');

    for (const elem of arrData) {
        const containerForName = document.createElement('div');
        containerForName.classList.add('condition-options__name');

        const containerName = document.createElement('p');
        containerName.innerHTML = elem.title;

        const containerArrow = document.createElement('div');
        containerArrow.innerHTML = '&#9660;';

        containerForName.append(containerName, containerArrow);

        const containerForList = document.createElement('div');
        containerForList.classList.add('condition-options__list');
        containerForList.classList.add('hidden');

        containerForName.addEventListener('click', () => {
            containerForList.classList.toggle('hidden');
            containerForName.classList.toggle('condition-options__name_bcgr');
            if (containerForList.className === 'condition-options__list') {
                containerArrow.innerHTML = '';
                containerArrow.innerHTML = '&#9650;';
            } else {
                containerArrow.innerHTML = '';
                containerArrow.innerHTML = '&#9660;';
            }
        });

        const people = document.createElement('ul');
        for (const item of elem.people) {
            const li = document.createElement('li');
            li.innerHTML = item;
            people.append(li);
        }

        const explanation = document.createElement('div');
        explanation.innerHTML = elem.explanation;
        containerForList.append(people, explanation);
        container.append(containerForName, containerForList);
    }

    return container;
}
