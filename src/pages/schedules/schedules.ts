import Page from "../../core/templates/page";
import './schedules.css'

class SchedulesPage extends Page {
    static TextObject = {
        MainTitle: 'Schedules Page'
    }

    constructor(id: string) {
        super(id);
    }

    render() {
        const title: HTMLHeadingElement = this.createTitle(SchedulesPage.TextObject.MainTitle);

        const background = document.createElement('div');
        background.classList.add('abc')

        this.container.append(title, background)
        return this.container;
    }
}

export default SchedulesPage
