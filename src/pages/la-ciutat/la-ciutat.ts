import Page from "../../core/templates/page";

class CiutatPage extends Page {
    static TextObject = {
        MainTitle: 'La-ciutat Page'
    }

    constructor(id: string) {
        super(id);
    }

    render() {
        const title: HTMLHeadingElement = this.createTitle(CiutatPage.TextObject.MainTitle);
        this.container.append(title)
        return this.container;
    }
}

export default CiutatPage
