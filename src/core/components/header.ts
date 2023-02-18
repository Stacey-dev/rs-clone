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
        id: PageIds.QuizPage,
        text: 'Quiz'
    },
    {
        id: PageIds.CiutatPage,
        text: 'La Ciutat'
    },
    {
        id: PageIds.TicketPage,
        text: 'BUY YOUR TICKET'
    },

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
        logo.classList.add('header__logo');

        const pageButtons: HTMLDivElement = document.createElement('div');

        pageButtons.classList.add('header__nav')
        Buttoms.forEach((button) => {
            const buttonHTML = document.createElement('a');
            buttonHTML.href = `#${button.id}`;
            buttonHTML.innerText = button.text;
            buttonHTML.classList.add(button.id)
            pageButtons.append(buttonHTML);
        });

        const language = <HTMLElement>document.createElement('select');
        language.classList.add('header_language');

        const option_language_en = <HTMLElement>document.createElement('option');
        option_language_en.classList.add('language_en');

        const option_language_ru = <HTMLElement>document.createElement('option');
        option_language_ru.classList.add('language_ru');
  
        language.append(option_language_en, option_language_ru);
        headerWrapper.append(logo, pageButtons, language);
        headerContainer.append(headerWrapper);
        this.container.append(headerContainer);

        
        window.onscroll = function() {
            let scrolled: number;
                  scrolled = window.pageYOffset || document.documentElement.scrollTop;
                  const header = <HTMLElement>document.querySelector(".container");
                  const box_language = <HTMLElement>document.querySelector(".header_language");
                  const box_ticket = <HTMLElement>document.querySelector(".ticket-page");
            if(scrolled > 5){
                header.style.background = "#102f43";
                header.style.position = "fixed";
                header.style.height = "60px";
                header.style.marginTop = "0";
                header.style.zIndex = "2000";
                header.style.transition = "all 2s ease";
                box_language.style.display = "none";
                box_ticket.style.display = "none";
            }
            if(5 > scrolled){
                header.style.background = "none";
                box_language.style.display = "grid";
                box_ticket.style.display = "grid";
            }
        }
    }

    render(): HTMLElement {
        this.createHeader();
        return this.container;
    }
}

export default Header;
