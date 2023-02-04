import Page from "../../core/templates/page";
import { renderBackground } from "../../core/components/background-video"
import Video from '../../assets/video/video-Oceanografic_Valencia.mov'

class PricesPage extends Page {
    static TextObject = {
        MainTitle: 'Prices Page'
    }

    constructor(id: string) {
        super(id);
    }

    render() {

        this.container.append(renderBackground(Video))
        return this.container;
    }
}

export default PricesPage
