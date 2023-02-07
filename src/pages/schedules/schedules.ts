import Page from "../../core/templates/page";
import './schedules.css'
import { renderBackground } from "../../core/components/background-video";
import Video from '../../assets/video/hoyenelparque_cabecera-video.mov'
import { schedulesExplEng } from "../../utils/schedulesData";
import { createSchedulesTable } from "../../core/components/schedulesTable";
import { schedulesTableData } from "../../utils/schedulesData";
import { createCalendarView } from "../../core/components/create-calendar-schedules";

class SchedulesPage extends Page {
    static TextObject = {
        MainTitle: 'Schedules Page'
    }
    currentMonth: number;
    currentYear: number;

    constructor(id: string) {
        super(id);
        this.currentMonth = 1;
        this.currentYear = 2023;
    }

    render() {

        const content = document.createElement('div');
        content.classList.add('schedules__content');

        const tiles = document.createElement('div');
        tiles.classList.add("tile");
        const tilesLayout = `
        <div class="schedules-tile_left">AQUARIUM TODAY</div>
        <div class="tile_right">Check the activity schedules for today.
        <br>On Sunday, 5th febrary, Oceanogràfic hosts the final of the stage of La Volta a la Comunitat Valenciana.
        <br>Throughout the day, we will have free activities in the access square. For this reason, the aquarium parking will remain closed, but you can park your car in the vicinity of the enclosure or come by public transport.</div>`;

        tiles.innerHTML = tilesLayout;
        const information = document.createElement('div');
        information.classList.add('tickets__wrapper')
        information.innerHTML = `<div class="schedules__buttons-top">
        <button class="schedules__button-left">Reset</button>
        <button class="schedules__button-right">Calendar
        </button>
        <div class="schedules__calendar"></div>
    </div>
    <div class="schedules__table"></div>
    <div class="schedules__explanation">${schedulesExplEng}</div>
    <button class="schedules__button-bottom">Other activities</button>`

        content.append(tiles, information)
        this.container.append(renderBackground(Video), content);

        const schedulesTable = <HTMLDivElement>this.container.querySelector('.schedules__table');
        schedulesTable.append(createSchedulesTable(schedulesTableData))

        const buttonToCalendar = <HTMLButtonElement>this.container.querySelector('.schedules__button-right');

        const calendarContainer = <HTMLDivElement>this.container.querySelector('.schedules__calendar');
        calendarContainer.classList.add('hidden')


        const butPrev: HTMLButtonElement = document.createElement('button');
        const butNext: HTMLButtonElement = document.createElement('button');
        butPrev.classList.add('calendar__button_left');
        butNext.classList.add('calendar__button_right');
        calendarContainer.append(butPrev, butNext);

        createCalendarView(calendarContainer, this.currentYear, this.currentMonth);

        buttonToCalendar.addEventListener('click', () => {
            calendarContainer.classList.toggle("hidden")

        })
        const calendar = <HTMLDivElement>this.container.querySelector('.calendar');

        butNext.addEventListener('click', () => {

            calendar.innerHTML = "";
            this.currentMonth++;
            if (this.currentMonth > 11) {
                this.currentMonth = 0;
                this.currentYear++;
            }
            createCalendarView(calendar, this.currentYear, this.currentMonth);


        })

        butPrev.addEventListener('click', () => {
            calendar.innerHTML = "";
            this.currentMonth--;
            if (this.currentMonth < 0) {
                this.currentMonth = 11;
                this.currentYear--;
            }
            createCalendarView(calendar, this.currentYear, this.currentMonth);


        })

        window.addEventListener('load', () => {
            content.classList.add('schedules__toTop')
        })




        return this.container;
    }
}

export default SchedulesPage
