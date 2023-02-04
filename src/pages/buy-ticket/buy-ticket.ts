import Page from "../../core/templates/page";

class TicketPage extends Page {
    static TextObject = {
        MainTitle: 'Ticket Page'
    }

    constructor(id: string) {
        super(id);
    }

    render() {
        const title: HTMLHeadingElement = this.createTitle(TicketPage.TextObject.MainTitle);
        this.container.append(title)
        return this.container;
    }
}

export default TicketPage
