import Component from "../templates/components";

class Footer extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className)
    }

    createFooter() {
        const footerContainer = document.createElement('div');
        footerContainer.classList.add('container');

        const footerWrapper = document.createElement('div');
        footerWrapper.classList.add('header__wrapper');

        const footerText = document.createElement('div');
        footerText.innerHTML = "Здесь будет footer"

        footerWrapper.append(footerText)
        footerContainer.append(footerWrapper);
        this.container.append(footerContainer);
    }

    render(): HTMLElement {
        this.createFooter();
        return this.container;
    }
}

export default Footer;
