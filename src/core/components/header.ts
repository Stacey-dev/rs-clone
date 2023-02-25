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
import { schedulesSaturdayData } from "../../utils/schedulesData";
import { schedulesSaturdayDataRu } from "../../utils/schedulesData";
import PricesPage from "../../pages/prices-calendar/prices";
import { createCalendarView } from "./create-calendar";
import { langArrBuyTicket } from "../../utils/dataLang";

const Buttoms: { id: string; text: string }[] = [
    {
        id: PageIds.PricesPage,
        text: 'Prices and Calendar',
    },
    {
        id: PageIds.SchedulesPage,
        text: 'Schedules',
    },
    {
        id: PageIds.QuizPage,
        text: 'Quiz',
    },
    {
        id: PageIds.CiutatPage,
        text: 'La Ciutat',
    },
    {
        id: PageIds.TicketPage,
        text: 'BUY YOUR TICKET',
    },
];
class Header extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className);
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
            buttonHTML.innerText = button.text;
            if (buttonHTML.textContent === "La Ciutat") {
                buttonHTML.href = "https://www.cac.es/va/home.html";
            } else {
                buttonHTML.href = `#${button.id}`;
            }
            buttonHTML.classList.add((button.id).split('&')[0]);
            if (buttonHTML.textContent === "BUY YOUR TICKET" || buttonHTML.textContent === "La Ciutat") {
                buttonHTML.setAttribute('target', '_blank')
            }
            pageButtons.append(buttonHTML);
        });

        const language = <HTMLSelectElement>document.createElement('select');
        language.classList.add('header_language');

        const option_language_en = <HTMLElement>document.createElement('option');
        option_language_en.classList.add('language_en');
        option_language_en.innerText = "en";

        const option_language_ru = <HTMLElement>document.createElement('option');
        option_language_ru.classList.add('language_ru');
        option_language_ru.innerText = 'ru';

        const themeToggler = <HTMLDivElement>document.createElement('div');
        themeToggler.classList.add('theme_toggler');

        language.append(option_language_en, option_language_ru);
        headerWrapper.append(logo, pageButtons, language, themeToggler);
        headerContainer.append(headerWrapper);
        this.container.append(headerContainer);

        window.onscroll = function () {
            let scrolled: number;
            scrolled = window.pageYOffset || document.documentElement.scrollTop;
            const header = <HTMLElement>document.querySelector('.container');
            const box_language = <HTMLElement>document.querySelector('.header_language');
            const box_ticket = <HTMLElement>document.querySelector('.ticket-page');
            const boxTheme = <HTMLElement>document.querySelector('.theme_toggler');
            if (scrolled > 5) {
                header.style.width = '';
                header.style.background = '#102f43';
                header.style.position = 'fixed';
                header.style.height = '60px';
                header.style.marginTop = '0';
                header.style.zIndex = '2000';
                header.style.transition = 'all 2s ease';
                box_language.style.display = 'none';
                box_ticket.style.display = 'none';
                boxTheme.style.display = 'none';
            }
            if (5 > scrolled) {
                header.style.background = 'none';
                box_language.style.display = 'grid';
                box_ticket.style.display = 'grid';
                boxTheme.style.display = 'block';
            }
        };

        themeToggler.addEventListener('click', (e: MouseEvent) => {
            const toggler = <HTMLDivElement>e.target;
            const body = <HTMLBodyElement>document.querySelector('body');

            const currentPageHash = window.location.hash.slice(1);

            const information = <HTMLElement>document.querySelector('.information');
            const pricesRightTile = <HTMLElement>document.querySelector('.tile_right');
            const tickets = <HTMLElement>document.querySelector('.tickets');
            const experiences = <HTMLElement>document.querySelector('.oceanographic-experiences');
            const conditions = <HTMLElement>document.querySelector('.conditions');
            const freeEntries = <HTMLElement>document.querySelector('.free-entries');

            const schedulesContent = <HTMLElement>document.querySelector('.schedules__content');
            const schedulesRightTile = <HTMLElement>document.querySelector('.schedules-tile_right');
            const schedulesTickets = <HTMLElement>document.querySelector('.tickets__wrapper');

            const quizTasks = <HTMLElement>document.querySelector('.tasks');
            const headerQuizContainer = <HTMLElement>document.querySelector('.containerHeaderQuiz');
            const btnQuiz = <HTMLElement>document.querySelector('.btnQuiz');
            const liLevel = <NodeListOf<Element>>document.querySelectorAll('.liLevel');
            const liLevelActive = <HTMLElement>document.querySelector('.liLevelActiv');
            const quizBox = <NodeListOf<Element>>document.querySelectorAll('.box');
            const quizTaskBox = <NodeListOf<Element>>document.querySelectorAll('.task_box');

            if (toggler instanceof HTMLDivElement) {
                if (toggler.classList.contains('dark')) {
                    toggler.classList.remove('dark');
                    body.style.backgroundColor = 'transparent';
                    switch (currentPageHash) {
                        case PageIds.PricesPage:
                        case '':
                            information.classList.remove('dark');
                            pricesRightTile.classList.remove('dark');
                            tickets.classList.remove('dark');
                            experiences.classList.remove('dark');
                            conditions.classList.remove('dark');
                            freeEntries.classList.remove('dark');
                            break;
                        case PageIds.SchedulesPage:
                            schedulesContent.classList.remove('dark');
                            schedulesRightTile.classList.remove('dark');
                            schedulesTickets.classList.remove('dark');
                        case PageIds.QuizPage:
                            quizTasks.classList.remove('dark');
                            headerQuizContainer.classList.remove('dark');
                            btnQuiz.classList.remove('dark');
                            liLevel.forEach((item) => item.classList.remove('dark'));
                            liLevelActive.classList.remove('dark');
                            quizBox.forEach((item) => item.classList.remove('dark'));
                            quizTaskBox.forEach((item) => item.classList.remove('dark'));
                    }
                } else {
                    toggler.classList.add('dark');
                    body.style.backgroundColor = '#102f43';
                    switch (currentPageHash) {
                        case PageIds.PricesPage:
                        case '':
                            information.classList.add('dark');
                            pricesRightTile.classList.add('dark');
                            tickets.classList.add('dark');
                            experiences.classList.add('dark');
                            conditions.classList.add('dark');
                            freeEntries.classList.add('dark');
                            break;
                        case PageIds.SchedulesPage:
                            schedulesContent.classList.add('dark');
                            schedulesRightTile.classList.add('dark');
                            schedulesTickets.classList.add('dark');
                        case PageIds.QuizPage:
                            quizTasks.classList.add('dark');
                            headerQuizContainer.classList.add('dark');
                            btnQuiz.classList.add('dark');
                            liLevel.forEach((item) => item.classList.add('dark'));
                            liLevelActive.classList.add('dark');
                            quizBox.forEach((item) => item.classList.add('dark'));
                            quizTaskBox.forEach((item) => item.classList.add('dark'));
                    }
                }
            }
        });
    }

    render(): HTMLElement {
        this.createHeader();

        const select = <HTMLSelectElement>this.container.querySelector('.header_language');
        let langInHash = window.location.hash.slice(1).split('=')[1];
        if (langInHash) {
            select.value = langInHash;
        }



        select.addEventListener('change', () => {

            if (window.location.hash.length !== 0) {
                let langInHash = window.location.hash.slice(1).split('=')[1];
                langInHash = select.value;
                const path = window.location.hash.slice(1).split('=')[0];
                const url = new URL(window.location.toString());
                url.hash = path + '=' + langInHash;
                window.history.pushState({}, '', url);
            }

            for (let key in langArr) {
                if (document.querySelector('.' + key)) {
                    document.querySelector('.' + key)!.innerHTML = langArr[key as keyof data][select.value as keyof { "ru": string, "en": string }];
                }
            }

            for (let key in langArrBuyTicket) {
                document.querySelectorAll('.' + key).forEach((el) => el!.innerHTML = langArrBuyTicket[key as keyof data][select.value as keyof { "ru": string, "en": string }]);
            }

            const ticketOptions = <HTMLDivElement>document.querySelector('.calendar__options');
            const conditionOptions = <HTMLDivElement>document.querySelector('.conditions__options');
            const freeEntriesOptions = <HTMLDivElement>document.querySelector('.free-entries__options');
            const schedulesTable = <HTMLDivElement>document.querySelector('.schedules__table');
            const calendar = <HTMLDivElement>document.querySelector('.calendar');


            if (select.value === 'ru') {
                document.querySelector('title')!.innerHTML = 'RS Клон';

                if (ticketOptions) {
                    ticketOptions!.innerHTML = '';
                    for (let elem of ticketsDataRu) {
                        ticketOptions!.append(createDropDownListTicket(elem));
                    }
                }

                if (conditionOptions) {
                    conditionOptions.innerHTML = '';
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
                if (calendar) {
                    calendar.innerHTML = "";
                    createCalendarView(calendar, 2023, PricesPage.currentMonth, select.value);
                }


            } else {
                document.querySelector('title')!.innerHTML = "RS Clone";

                if (ticketOptions) {
                    ticketOptions!.innerHTML = '';
                    for (let elem of ticketsData) {
                        ticketOptions!.append(createDropDownListTicket(elem));
                    }
                }

                if (conditionOptions) {
                    conditionOptions.innerHTML = '';
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
                if (calendar) {
                    calendar.innerHTML = "";
                    createCalendarView(calendar, 2023, PricesPage.currentMonth, select.value);
                }

            }

        })

        return this.container;
    }
}

export default Header;
