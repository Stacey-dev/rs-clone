import Page from "../../core/templates/page";

class PricesPage extends Page {
    static TextObject = {
        MainTitle: 'Prices Page'
    }

    constructor(id: string) {
        super(id);
    }

    render() {
        const title: HTMLHeadingElement = this.createTitle(PricesPage.TextObject.MainTitle);
        this.container.append(title)
        return this.container;
    }
}

export default PricesPage
