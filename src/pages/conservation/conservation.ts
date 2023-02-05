import Page from "../../core/templates/page";
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

        this.container.append(renderBackground(Video));
        return this.container;
    }
}

export default ConservationPage
