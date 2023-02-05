import Page from "../../core/templates/page";
import './prices.css';
import { renderBackground } from "../../core/components/background-video";
import Video from '../../assets/video/video-Oceanografic_Valencia.mov';


class PricesPage extends Page {
    static TextObject = {
        MainTitle: 'Prices Page'
    }

    constructor(id: string) {
        super(id);
    }


    render() {
        const tiles = document.createElement('div');
        const tilesLayout = `<div class="tile">
        <div class="tile_left">PRICES AND SCHEDULES</div>
        <div class="tile_right">You can buy tickets online, avoiding queues and wait-times, or at the ticket office.</div>
    </div>`;
        tiles.innerHTML = tilesLayout;

        const information = document.createElement('div')
        const informationLayout = `<div class="tickets">
        <div class="tickets__wrapper">
            <h2 class="tickets__header">Tickets</h2>
            <button class="tickets__button" id="tickets-but">BUY YOUR COMBINED TICKETS</button>
            <div class="tickets__calendar block">
                <div class="calendar__left block_left">
                    <p class="calendar__text">Choose the day of your visit in the calendar to see the Price of the
                        ticket
                    </p>
                    <div class="calendar__schedules"></div>
                </div>
                <div class="calendar__right block_right">
                    <p class="calendar__text">Combine the Oceanogràfic ticket with a visit to the Príncep Felipe Science Museum where you will find a large selection of activities related to scientific learning and technological development and/or with a screening in the Hemisfèric in IMAX format.
                    </p>
                    <div class="calendar__options"></div>
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
        information.innerHTML = informationLayout
        this.container.append(renderBackground(Video), tiles, information);

        return this.container;
    }
}

export default PricesPage
