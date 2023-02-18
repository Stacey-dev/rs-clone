import Component from "../templates/components";
import { PageIds } from "../../pages/app/app";
import { langArr } from "../../utils/dataLang";
import { data } from "../../utils/dataLang";
import { ticketsData } from "../../utils/dataBuyTicket";
import { ticketsDataRu } from "../../utils/dataBuyTicket";
import { createDropDownListTicket } from "./drop-down-list";
import { createDropDownListCondition } from "./drop-down-list";
import { conditionsData } from "../../utils/dataCondition";
import { conditionsDataRu } from "../../utils/dataCondition";
import { freeEntriesData } from "../../utils/dataFreeEntries";
import { freeEntriesDataRu } from "../../utils/dataFreeEntries";
import { createSchedulesTable } from "./schedulesTable";
import { schedulesTableData } from "../../utils/schedulesData";
import { schedulesSaturdayData } from "../../utils/schedulesData";
import { schedulesTableDataRu } from "../../utils/schedulesData";
import { schedulesSaturdayDataRu } from "../../utils/schedulesData";

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
            buttonHTML.classList.add(button.id);
            if (buttonHTML.textContent === "BUY YOUR TICKET") {
                buttonHTML.setAttribute('target', '_blank')
            }

            pageButtons.append(buttonHTML);
        });

        const language = <HTMLSelectElement>document.createElement('select');
        language.classList.add('header_language');


        const option_language_en = <HTMLElement>document.createElement('option');
        option_language_en.classList.add('language_en');
        option_language_en.innerText = "en"

        const option_language_ru = <HTMLElement>document.createElement('option');
        option_language_ru.classList.add('language_ru');
        option_language_ru.innerText = "ru"

        language.append(option_language_en, option_language_ru);
        headerWrapper.append(logo, pageButtons, language);
        headerContainer.append(headerWrapper);
        this.container.append(headerContainer);


        window.onscroll = function () {
            let scrolled: number;
            scrolled = window.pageYOffset || document.documentElement.scrollTop;
            const header = <HTMLElement>document.querySelector(".container");
            const box_language = <HTMLElement>document.querySelector(".header_language");
            const box_ticket = <HTMLElement>document.querySelector(".ticket-page");
            if (scrolled > 5) {
                header.style.background = "#102f43";
                header.style.position = "fixed";
                header.style.height = "60px";
                header.style.marginTop = "0";
                header.style.zIndex = "6";
                header.style.transition = "all 2s ease";
                box_language.style.display = "none";
                box_ticket.style.display = "none";
            }
            if (5 > scrolled) {
                header.style.background = "none";
                box_language.style.display = "grid";
                box_ticket.style.display = "grid";
            }
        }
    }

    render(): HTMLElement {
        this.createHeader();

        const select = <HTMLSelectElement>this.container.querySelector('.header_language');



        select.addEventListener('change', () => {

            for (let key in langArr) {
                if (document.querySelector('.' + key)) {
                    console.log(document.querySelector('.' + key));
                    document.querySelector('.' + key)!.innerHTML = langArr[key as keyof data][select.value as keyof { "ru": string, "en": string }]
                }
            }

            const ticketOptions = <HTMLDivElement>document.querySelector('.calendar__options');
            const conditionOptions = <HTMLDivElement>document.querySelector('.conditions__options');
            const freeEntriesOptions = <HTMLDivElement>document.querySelector('.free-entries__options');
            const schedulesTable = <HTMLDivElement>document.querySelector('.schedules__table');



            if (select.value === 'ru') {
                document.querySelector('title')!.innerHTML = "RS Клон";

                if (ticketOptions) {
                    ticketOptions!.innerHTML = "";
                    for (let elem of ticketsDataRu) {
                        ticketOptions!.append(createDropDownListTicket(elem))
                    }
                }

                if (conditionOptions) {
                    conditionOptions.innerHTML = "";
                    conditionOptions.append(createDropDownListCondition(conditionsDataRu));
                }

                if (freeEntriesOptions) {
                    freeEntriesOptions.innerHTML = "";
                    freeEntriesOptions.append(createDropDownListCondition(freeEntriesDataRu));
                }
                if (schedulesTable) {
                    schedulesTable.innerHTML = "";
                    schedulesTable.append(createSchedulesTable(schedulesSaturdayDataRu));
                }


            } else {
                document.querySelector('title')!.innerHTML = "RS Clone";

                if (ticketOptions) {
                    ticketOptions!.innerHTML = "";
                    for (let elem of ticketsData) {
                        ticketOptions!.append(createDropDownListTicket(elem))
                    }
                }

                if (conditionOptions) {
                    conditionOptions.innerHTML = "";
                    conditionOptions.append(createDropDownListCondition(conditionsData));
                }

                if (freeEntriesOptions) {
                    freeEntriesOptions.innerHTML = "";
                    freeEntriesOptions.append(createDropDownListCondition(freeEntriesData));
                }
                if (schedulesTable) {
                    schedulesTable.innerHTML = "";
                    schedulesTable.append(createSchedulesTable(schedulesSaturdayData));
                }

            }

        })


        return this.container;


    }
}

export default Header;
