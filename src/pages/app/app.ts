import Page from "../../core/templates/page";
import PricesPage from "../prices-calendar/prices";
import SchedulesPage from "../schedules/schedules";
import ConservationPage from "../conservation/conservation";
import CiutatPage from "../la-ciutat/la-ciutat";
import TicketPage from "../buy-ticket/buy-ticket";
import ErrorPage from "../error/error";
import { ErrorTypes } from "../error/error";
import Header from "../../core/components/header";
import Footer from "../../core/components/footer";
import Main from '../../core/components/main';

export const enum PageIds {
    PricesPage = 'prices-page',
    SchedulesPage = 'schedules-page',
    ConservationPage = 'conservation-page',
    CiutatPage = 'ciutat-page',
    TicketPage = 'ticket-page',
    ErrorPage = 'error-page',
}

class App {
    private static container: HTMLElement = document.body;
    private static defaultPageId: string = 'current-page';
    initialPage: PricesPage;
    private header: Header;
    private footer: Footer;
    static main: Main;

    static renderNewPage(idPage: string): void {
        const currentPageHTML: Element | null = document.querySelector(`#${App.defaultPageId}`);
        if (currentPageHTML) {
            currentPageHTML.remove()
        }

        let page: Page | null = null;

        const splittedHash: string[] = window.location.hash.slice(1).split('?');
        const path: string = splittedHash[0];

        if (idPage === PageIds.PricesPage ||
            path === '' ||
            path.includes(PageIds.PricesPage)
        ) {
            page = new PricesPage(idPage);
        } else if (idPage === PageIds.SchedulesPage || path.includes(PageIds.SchedulesPage)) {
            page = new SchedulesPage(idPage);
        } else if (path.includes(PageIds.ConservationPage) || path.includes(PageIds.ConservationPage)) {
            page = new ConservationPage(idPage);
        } else if (path.includes(PageIds.CiutatPage) || path.includes(PageIds.CiutatPage)) {
            page = new CiutatPage(idPage);
        } else if (path.includes(PageIds.TicketPage) || path.includes(PageIds.TicketPage)) {
            page = new TicketPage(idPage);
        } else {
            page = new ErrorPage(idPage, ErrorTypes.Error_404);
        }

        if (page) {
            const pageHTML = page.render();
            pageHTML.id = App.defaultPageId;
            App.main.appendNewPage(pageHTML);
        }
    }

    private enableRouteChange(): void {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            App.renderNewPage(hash);
        })
    }

    constructor() {
        this.initialPage = new PricesPage('prices-calendar');
        this.header = new Header('header', 'header');
        this.footer = new Footer('footer', 'footer');
        App.main = new Main('main', 'main');
    }

    run(): void {
        this.enableRouteChange();
        App.container.append(this.header.render());
        App.container.append(App.main.render());
        App.renderNewPage('/');
        App.container.append(this.footer.render())
    }
}
export default App
