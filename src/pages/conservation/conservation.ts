import Page from "../../core/templates/page";
import './conservations.css'
import { renderBackground } from "../../core/components/background-video";
import Video from '../../assets/video/header_Fund_05_720p.mp4';

class ConservationPage extends Page {
    static TextObject = {
        MainTitle: 'Conservation Page'
    }

    constructor(id: string) {
        super(id);
    }

    render() {
        const tiles = document.createElement('div');
        const informationLayout = ` 
        <div class="wrapper_tiles">
          <div class="colum_tiles_left">
            <ul class="ul_tiles_left">
              <li class="li_left li_oceanografic"><h2 class="h2">OCEANOGRÀFIC FOUNDATION</h2></li>
              <li class="li_left li_hover li_dissemination"><h2 class="h2">DISSEMINATION</h2></li>
              <li class="li_left li_hover li_scientific_projects"><h2 class="h2">SCIENTIFIC PROJECTS</h2></li>
              <li class="li_left li_hover li_colloborate"><h2 class="h2">COLLABORATE WITH US</h2></li>
              <li class="li_left li_hover li_eaam"><h2 class="h2">EAAM 2023</h2></li>
            </ul>
          </div>
          <div class="colum_tiles_right">
            <ul class="ul_tiles_right">
              <li class="li_text">
                <p class="text1">The Oceanogràfic Foundation was created to reinforce and extend the work that the Oceanogràfic carries out to protect the marine environment.</p>
                <p class="text2">Our commitment is to provide new knowledge, to work towards animals’ care and well-being of animals, and to inform and raise the awareness of society to improve the conservation of species and their natural habitat.</p>
                <button class="collaborate_button">sea turtle tracking</button>
              </li>
              <li class="li_right li_hover li_foundation"><h2 class="h2">FOUNDATION</h2></li>
              <li class="li_right li_hover li_conservation"><h2 class="h2">CONSERVATION</h2></li>
              <li class="li_right li_hover li_research"><h2 class="h2">RESEARCH</h2></li>
              <li class="li_right li_hover li_papers"><h2 class="h2">PAPERS</h2></li>
            </ul>
          </div>
        </div>
        `;
        tiles.innerHTML = informationLayout

        this.container.append(renderBackground(Video), tiles);
        return this.container;
    }
}

export default ConservationPage
