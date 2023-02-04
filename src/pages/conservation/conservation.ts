import Page from "../../core/templates/page";

class ConservationPage extends Page {
    static TextObject = {
        MainTitle: 'Conservation Page'
    }

    constructor(id: string) {
        super(id);
    }

    render() {
        const title: HTMLHeadingElement = this.createTitle(ConservationPage.TextObject.MainTitle);
        this.container.append(title)
        return this.container;
    }
}

export default ConservationPage
