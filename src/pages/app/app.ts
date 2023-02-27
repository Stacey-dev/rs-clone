import Page from '../../core/templates/page';
import PricesPage from '../prices-calendar/prices';
import SchedulesPage from '../schedules/schedules';
import QuizPage from '../quiz/quiz';
import CiutatPage from '../la-ciutat/la-ciutat';
import TicketPage from '../buy-ticket/buy-ticket';
import PersonalAccPage from '../personal-account/personal-account';
import ErrorPage from '../error/error';
import { ErrorTypes } from '../error/error';
import Header from '../../core/components/header';
import Footer from '../../core/components/footer/footer';
import Main from '../../core/components/main';

export const enum PageIds {
  PricesPage = 'prices-page&lang=en',
  PricesPageRu = 'prices-page&lang=ru',
  SchedulesPage = 'schedules-page&lang=en',
  SchedulesPageRu = 'schedules-page&lang=ru',
  QuizPage = 'quiz-page&lang=en',
  QuizPageRu = 'quiz-page&lang=ru',
  CiutatPage = 'ciutat-page&lang=en',
  TicketPage = 'ticket-page&lang=en',
  TicketPageRu = 'ticket-page&lang=ru',
  PersonalAccauntPage = 'personal-page&lang=en',
  ErrorPage = 'error-page',
}
export type Order = {
  name: string | null;
  date: string | null;
  amount: number | null;
  price: number | null;
  userId: number | null;
};

class App {
  private static container: HTMLElement = document.body;
  private static defaultPageId = 'current-page';
  initialPage: PricesPage;
  private header: Header;
  private footer: Footer;
  static main: Main;
  static orders: Order[] = [];

  static renderNewPage(idPage: string): void {
    const currentPageHTML: Element | null = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }

    let page: Page | null = null;

    const splittedHash: string[] = window.location.hash.slice(1).split('?');
    const path: string = splittedHash[0];

    if (
      idPage === PageIds.PricesPage ||
      path === '' ||
      path.includes(PageIds.PricesPage) ||
      path.includes(PageIds.PricesPageRu)
    ) {
      page = new PricesPage(idPage);
    } else if (
      idPage === PageIds.SchedulesPage ||
      path.includes(PageIds.SchedulesPage) ||
      path.includes(PageIds.SchedulesPageRu)
    ) {
      page = new SchedulesPage(idPage);
    } else if (path.includes(PageIds.QuizPage) || path.includes(PageIds.QuizPageRu)) {
      page = new QuizPage(idPage);
    } else if (path.includes(PageIds.CiutatPage)) {
      page = new CiutatPage(idPage);
    } else if (path.includes(PageIds.TicketPage) || path.includes(PageIds.TicketPageRu)) {
      page = new TicketPage(idPage);
    } else if (path.includes(PageIds.PersonalAccauntPage)) {
      page = new PersonalAccPage(idPage);
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
    });
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
    App.container.append(this.footer.render());
  }
}
export default App;
