import Page from "../../core/templates/page";
import './prices.css';
import { renderBackground } from "../../core/components/background-video";
import Video from '../../assets/video/video-Oceanografic_Valencia.mov';
import { createCalendarView } from "../../core/components/create-calendar";
import { highlightCell } from "../../utils/highlightCells";


class PricesPage extends Page {
    static TextObject = {
        MainTitle: 'Prices Page'
    }
    currentMonth: number;
    currentYear: number;

    constructor(id: string) {
        super(id);
        this.currentMonth = 1;
        this.currentYear = 2023;
    }


    render() {
        const tiles: HTMLDivElement = document.createElement('div');
        const tilesLayout: string = `<div class="tile">
        <div class="tile_left">PRICES AND SCHEDULES</div>
        <div class="tile_right">You can buy tickets online, avoiding queues and wait-times, or at the ticket office.</div>
    </div>`;
        tiles.innerHTML = tilesLayout;

        const information: HTMLDivElement = document.createElement('div')
        const informationLayout: string = `<div class="tickets">
        <div class="tickets__wrapper">
            <h2 class="tickets__header">Tickets</h2>
            <button class="tickets__button" id="tickets-but">BUY YOUR COMBINED TICKETS</button>
            <div class="tickets__calendar block">
                <div class="calendar__left block_left">
                    <p class="calendar__text">Choose the day of your visit in the calendar to see the Price of the
                        ticket
                    </p>
                    <div class="calendar__schedules">
                        <div id="calendar" class="calendar"></div>
                    </div>
                </div>
                <div class="calendar__right block_right">
                    <p class="calendar__text">Combine the Oceanogràfic ticket with a visit to the Príncep Felipe Science Museum where you will find a large selection of activities related to scientific learning and technological development and/or with a screening in the Hemisfèric in IMAX format.
                    </p>
                    <div class="calendar__options">
                    <div class="options__title">
                        <p class="options__header">OCEANOGRAFIC -> ONLINE-TICKET</p>
                        <div>&#9660;</div>
                    </div>
                    <div class="options__choose">
                    <div class="option general-ticket">
                        <div class="calendar__options_info">General Ticket</div>
                        <div class="calendar__options_price">
                        <button class="option__ticket">
                        </button>
                        <p class="option__price-value">33.70 &euro;</p>
                        </div>
                    </div>
                    <div class="option child-ticket">
                        <div class="calendar__options_info">Child Ticket (4 - 12 years)</div>
                        <div class="calendar__options_price">
                        <button class="option__ticket">
                        </button>
                        <p class="option__price-value">25 &euro;</p>
                        </div>
                    </div>
                    <div class="option senior-ticket ">
                        <div class="calendar__options_info">Senior ticket</div>
                        <div class="calendar__options_price">
                        <button class="option__ticket">
                        </button>
                        <p class="option__price-value">25 &euro;</p>
                        </div>
                    </div>
                    <div class="option ticket-for-disabled">
                        <div class="calendar__options_info">Ticket for disabled</div>
                        <div class="calendar__options_price">
                        <button class="option__ticket">
                        </button>
                        <p class="option__price-value">25 &euro;</p>
                        </div>
                    </div>
                    <div class="option group-ticket">
                        <div class="calendar__options_info">Group</div>
                        <div class="calendar__options_price">
                        <button class="option__ticket">
                        </button>
                        <p class="option__price-value">22.20 &euro;</p>
                        </div>
                    </div>
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
                    <h2 class="tickets__header">Oceanographic Experiences</h2>
                    <button class="tickets__button" id="experiences-but">BUY YOUR EXPERIENCE</button>
                </div>
                <div class="experiences__right block_right">
                    <div class="expeirences__options"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="conditions">
        <div class="tickets__wrapper">
            <div class="block">
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
    `
        information.innerHTML = informationLayout;

        this.container.append(renderBackground(Video), tiles, information);

        const calendarContainer = <HTMLDivElement>this.container.querySelector('.calendar__schedules');
        const butPrev: HTMLButtonElement = document.createElement('button');
        const butNext: HTMLButtonElement = document.createElement('button');
        butPrev.classList.add('calendar__button_left');
        butNext.classList.add('calendar__button_right');
        calendarContainer.append(butPrev, butNext)

        const calendar = <HTMLDivElement>this.container.querySelector('.calendar');

        createCalendarView(calendar, this.currentYear, this.currentMonth);
        const calendarCells = <HTMLCollectionOf<Element>>this.container.getElementsByClassName('td__fill');
        highlightCell(calendarCells);

        butNext.addEventListener('click', () => {
            calendar.innerHTML = "";
            this.currentMonth++;
            if (this.currentMonth > 11) {
                this.currentMonth = 0;
                this.currentYear++;
            }
            createCalendarView(calendar, this.currentYear, this.currentMonth);
            highlightCell(calendarCells);
        })

        butPrev.addEventListener('click', () => {
            calendar.innerHTML = "";
            this.currentMonth--;
            if (this.currentMonth < 0) {
                this.currentMonth = 11;
                this.currentYear--;
            }
            createCalendarView(calendar, this.currentYear, this.currentMonth);
            highlightCell(calendarCells);
        })

        const select = <HTMLDivElement>this.container.querySelector('.options__title');
        const options = <HTMLDivElement>this.container.querySelector('.options__choose');

        select.addEventListener('click', () => {
            options.classList.toggle('visible')
        })



        return this.container;
    }
}

export default PricesPage
