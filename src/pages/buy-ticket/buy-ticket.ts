import Page from "../../core/templates/page";
import './buy-ticket.css'
import { createInputCalendar } from "../../core/components/create-calendar-tickets";
import { createOptionByuingTicket } from "../../core/components/optionsBuyingTickets";
import { ticketsData } from "../../utils/dataBuyTicket";

class TicketPage extends Page {
    static TextObject = {
        MainTitle: 'Ticket Page'
    }

    constructor(id: string) {
        super(id);
    }

    render() {

        const background = document.createElement('div');
        background.classList.add('buy-ticket__backg');
        const buyingTicketContainer = document.createElement('div');
        buyingTicketContainer.innerHTML =
            `<div class="tickets__container">
        <div class="tickets__wrapper">
            <div class="tickets__nav">
                <button class="selection__button tickets__buttons_filed">Select your Oceanogràfic Tickets</button>
                <button class="registration__button">Make a purchase</button>
                <button class="payment__button">Payment</button>
            </div>
            <div class="progress"></div>
            <div class="tickets__selection">
                <div class="selection__calendar">
                </div>
                <div class="selection__warning">Select your entry time for Oceanogràfic València. You can enter Oceanogràfic València from the time selected.</div>
                <div class="selection"></div>
            </div>
            <div class="tickets__registration"></div>
            <div class="ticket__payment"></div>
        </div>
    </div>`


        this.container.append(background, buyingTicketContainer);
        const calendar = <HTMLElement>this.container.querySelector('.selection__calendar');

        const selection = <HTMLElement>this.container.querySelector('.selection');
        createInputCalendar(calendar);
        createOptionByuingTicket(ticketsData, selection)
        return this.container;
    }
}

export default TicketPage
