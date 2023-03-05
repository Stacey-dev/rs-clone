import Page from '../../core/templates/page';
import './prices.css';
import { renderBackground } from '../../core/components/background-video';
import Video from '../../assets/video/video-Oceanografic_Valencia.mov';
import { createCalendarView } from '../../core/components/create-calendar-price';
import { highlightCell } from '../../utils/highlightCells';
import { createDropDownListTicket } from '../../core/components/drop-down-list';
import { createDropDownListCondition } from '../../core/components/drop-down-list';
import { ticketsData } from '../../utils/dataAllTickets';
import { conditionsData } from '../../utils/dataCondition';
import { freeEntriesData } from '../../utils/dataFreeEntries';
import { langArr } from '../../utils/dataLang';
import { langArrHeaderFooter } from '../../utils/dataLang';
import { ticketsDataRu } from '../../utils/dataAllTickets';
import { conditionsDataRu } from '../../utils/dataCondition';
import { freeEntriesDataRu } from '../../utils/dataFreeEntries';
import { PageIds } from '../../utils/types';
import { switchValueLanguageInHash } from '../../utils/switchValueLangInHash';
import { translateToAnotherLang } from '../../utils/translateToAnotherlanguage';

export class PricesPage extends Page {
    static TextObject = {
        MainTitle: 'Prices Page',
    };
    static currentMonth: number;
    static currentYear: number;

    constructor(id: string) {
        super(id);
        PricesPage.currentMonth = new Date().getMonth();
        PricesPage.currentYear = new Date().getFullYear();
    }

    render() {
        const select = <HTMLSelectElement>document.querySelector('.header_language');

        switchValueLanguageInHash(select);



        const content = document.createElement('div');
        content.classList.add('price-calendar__content');

        const tiles: HTMLDivElement = document.createElement('div');
        tiles.classList.add('tile');

        const tilesLayout = `
        <div class="tile_left">PRICES AND SCHEDULES</div>
        <div class="tile_right">You can buy tickets online, avoiding queues and wait-times, or at the ticket office.</div>`;
        tiles.innerHTML = tilesLayout;

        const information: HTMLDivElement = document.createElement('div');
        information.classList.add('information');
        const informationLayout = `<div class="tickets">
        <div class="tickets__wrapper">
            <h2 class="tickets__header tickets__header_tickets">Tickets</h2>
            <a href=#${PageIds.TicketPage} class="tickets__button" id="tickets-but" target="_blank">BUY YOUR COMBINED TICKETS</a>
            <div class="tickets__calendar block">
                <div class="calendar__left block_left">
                    <p class="calendar__text price-calendar__text_head">Choose the day of your visit in the calendar to see the Price of the
                        ticket
                    </p>
                    <div class="calendar__schedules">
                        <div id="calendar" class="calendar"></div>
                    </div>
                </div>
                <div class="calendar__right block_right">
                    <p class="calendar__text price-calendar__text_description">Combine the Oceanogràfic ticket with a visit to the Príncep Felipe Science Museum where you will find a large selection of activities related to scientific learning and technological development and/or with a screening in the Hemisfèric in IMAX format.
                    </p>
                    <div class="calendar__options">

                    </div>

                </div>
                </div>
            </div>
        </div>
    </div>
    <div class="oceanographic-experiences">
        <div class="tickets__wrapper">
            <div class="experiences block">
                <div class="experiences__left block_left">
                    <h2 class="tickets__header tickets__header_experiences">Oceanographic Experiences</h2>
                    <a href=#${PageIds.TicketPage} class="tickets__button experiences-but" id="experiences-but" target="_blank">BUY YOUR EXPERIENCE</a>
                </div>
                <div class="experiences__right block_right">
                    <div class="expeirences__options">
                    <div class="option">
    <div class="expeirences-option__name expeirences-option-1">Sleep with the Sharks only Oceanogràfic schools</div>
    <div class="option__price">
        <div class="option__price-value">90 &euro;</div>
    </div>
</div>
<div class="option">
    <div class="expeirences-option__name expeirences-option-2">Sleep with the Sharks Oceanogràfic O+M+H schools</div>
    <div class="option__price">
        <div class="option__price-value">95 &euro;</div>
    </div>
</div>
<div class="option">
    <div class="expeirences-option__name expeirences-option-3">Sleep with the Sharks only Oceanogràfic individuals
    </div>
    <div class="option__price">
        <div class="option__price-value">95 &euro;</div>
    </div>
</div>
<div class="option">
    <div class="expeirences-option__name expeirences-option-4">Sleep with the Sharks Oceanogràfic O+M+H individuals</div>
    <div class="option__price">
        <div class="option__price-value">100 &euro;</div>
    </div>
</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="conditions">
        <div class="tickets__wrapper">
            <div class="conditions__block block">
                <div class="conditions__left block_left">
                    <h2 class="conditions__header">CONDITIONS</h2>
                    <p class="conditions__text">Free entry for children under the age of 4
                        <br><br>Ticket offices will close an hour before the aquarium closes. To leave and re-enter Oceanogràfic
                        using the same ticket check
                        <br><br>the terms and conditions at the Information Point.
                        <br><br>10% VAT is applied on tickets for Museu de las Ciències Príncep Felipe and 21% VAT on tickets for
                        the Hemisfèric and Oceanogràfic. VAT is included in the ticket price-</p>
                </div>
                <div class="conditions__right block_right">
                    <div class="conditions__options"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="free-entries">
        <div class="tickets__wrapper">
            <div class="block">
                <div class="free-entries__left block_left">
                    <h2 class="free-entries__header">FREE ENTRIES</h2>
                </div>
                <div class="free-entries__right block_right">
                    <div class="free-entries__options"></div>
                </div>
            </div>
        </div>
    </div>
    `;
        information.innerHTML = informationLayout;
        content.append(tiles, information);

        this.container.append(renderBackground(Video), content);


        const calendarContainer = <HTMLDivElement>this.container.querySelector('.calendar__schedules');
        const butPrev: HTMLButtonElement = document.createElement('button');
        const butNext: HTMLButtonElement = document.createElement('button');
        butPrev.classList.add('calendar__button_left');
        butNext.classList.add('calendar__button_right');
        calendarContainer.append(butPrev, butNext);

        const calendar = <HTMLDivElement>this.container.querySelector('.calendar');

        createCalendarView(calendar, PricesPage.currentYear, PricesPage.currentMonth, select.value);
        const calendarCells = <HTMLCollectionOf<Element>>this.container.getElementsByClassName('td__fill');
        highlightCell(calendarCells);

        butNext.addEventListener('click', () => {
            calendar.innerHTML = '';
            PricesPage.currentMonth++;
            if (PricesPage.currentMonth > 11) {
                PricesPage.currentMonth = 0;
                PricesPage.currentYear++;
            }
            createCalendarView(calendar, PricesPage.currentYear, PricesPage.currentMonth, select.value);
            highlightCell(calendarCells);
        });

        butPrev.addEventListener('click', () => {
            calendar.innerHTML = '';
            PricesPage.currentMonth--;
            if (PricesPage.currentMonth < 0) {
                PricesPage.currentMonth = 11;
                PricesPage.currentYear--;
            }
            createCalendarView(calendar, PricesPage.currentYear, PricesPage.currentMonth, select.value);
            highlightCell(calendarCells);
        });

        const ticketOptions = <HTMLDivElement>this.container.querySelector('.calendar__options');

        for (const elem of ticketsData) {
            ticketOptions.append(createDropDownListTicket(elem));
        }

        const conditionOptions = <HTMLDivElement>this.container.querySelector('.conditions__options');
        conditionOptions.append(createDropDownListCondition(conditionsData));

        const freeEntriesOptions = <HTMLDivElement>this.container.querySelector('.free-entries__options');
        freeEntriesOptions.append(createDropDownListCondition(freeEntriesData));

        if (select.value === 'ru') {
            document.querySelector('title')!.innerHTML = 'RS Клон';
            ticketOptions!.innerHTML = '';
            for (const elem of ticketsDataRu) {
                ticketOptions!.append(createDropDownListTicket(elem));
            }
            conditionOptions.innerHTML = '';
            conditionOptions.append(createDropDownListCondition(conditionsDataRu));
            freeEntriesOptions.innerHTML = '';
            freeEntriesOptions.append(createDropDownListCondition(freeEntriesDataRu));
        }

        window.addEventListener('load', () => {
            content.classList.add('toTop');
        });


        //___________________________________________________переключение на другой язык

        translateToAnotherLang(langArr, this.container, select);
        translateToAnotherLang(langArrHeaderFooter, document, select);

        //________________________________________________________________________________

        return this.container;
    }
}

export default PricesPage;
