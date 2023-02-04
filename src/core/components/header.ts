import Component from "../templates/components";
import { PageIds } from "../../pages/app/app";

const Buttoms: { id: string, text: string }[] = [
    {
        id: PageIds.PricesPage,
        text: 'Prices and Calendar'
    },
    {
        id: PageIds.SchedulesPage,
        text: 'Schedules'
    },
    {
        id: PageIds.ConservationPage,
        text: 'Conservation'
    },
    {
        id: PageIds.CiutatPage,
        text: 'La Ciutat'
    },
    {
        id: PageIds.TicketPage,
        text: 'BUY YOUR TICKET'
    }

]
class Header extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className)
    }

    createHeader() {
        const headerContainer = <HTMLDivElement>document.createElement('div');
        headerContainer.classList.add('container');

        const headerWrapper = <HTMLDivElement>document.createElement('div');
        headerWrapper.classList.add('wrapper');

        const logo = document.createElement('div');
        logo.classList.add('header__logo')

        const pageButtons: HTMLDivElement = document.createElement('div');

        pageButtons.classList.add('header__nav')
        Buttoms.forEach((button) => {
            const buttonHTML = document.createElement('a');
            buttonHTML.href = `#${button.id}`;
            buttonHTML.innerText = button.text;
            buttonHTML.classList.add(button.id)
            pageButtons.append(buttonHTML);
        });

        headerWrapper.append(logo, pageButtons);
        headerContainer.append(headerWrapper);
        this.container.append(headerContainer);
    }

    render(): HTMLElement {
        this.createHeader();
        return this.container;
    }
}

export default Header;
