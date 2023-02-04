abstract class Page {
    protected container: HTMLElement;
    static TextObject: {} = {};

    constructor(id: string) {
        this.container = document.createElement('div');
        this.container.id = id;
    }

    protected createTitle(text: string): HTMLHeadingElement {
        const headerTitle: HTMLHeadingElement = document.createElement('h1');
        headerTitle.innerText = text;
        return headerTitle;
    }

    render(): HTMLElement {
        return this.container
    }
}

export default Page
