import Page from "../../core/templates/page";
import './schedules.css'
import { renderBackground } from "../../core/components/background-video";
import Video from '../../assets/video/hoyenelparque_cabecera-video.mov'

class SchedulesPage extends Page {
    static TextObject = {
        MainTitle: 'Schedules Page'
    }

    constructor(id: string) {
        super(id);
    }

    render() {
        const tiles = document.createElement('div');
        tiles.classList.add("tile");
        const tilesLayout = `
        <div class="tile_left">AQUARIUM TODAY</div>
        <div class="tile_right">Check the activity schedules for today.
        <br>On Sunday, 5th febrary, Oceanogràfic hosts the final of the stage of La Volta a la Comunitat Valenciana.
        <br>Throughout the day, we will have free activities in the access square. For this reason, the aquarium parking will remain closed, but you can park your car in the vicinity of the enclosure or come by public transport.</div>`;

        tiles.innerHTML = tilesLayout;
        this.container.append(renderBackground(Video), tiles);
        return this.container;
    }
}

export default SchedulesPage
