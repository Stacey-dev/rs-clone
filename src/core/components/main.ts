import Component from "../templates/components";

class Main extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className);
    }

    appendNewPage(pageHTML: HTMLElement) {
        const mainContainer = document.querySelector('main');
        if (mainContainer instanceof HTMLElement) {
            mainContainer.insertAdjacentElement('afterbegin', pageHTML);
        }
    }

    render() {
        return this.container;
    }
}

export default Main;
