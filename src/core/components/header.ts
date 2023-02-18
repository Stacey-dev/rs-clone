import Component from '../templates/components';
import { PageIds } from '../../pages/app/app';

const Buttons: { id: string; text: string }[] = [
  {
    id: PageIds.PricesPage,
    text: 'Prices and Calendar',
  },
  {
    id: PageIds.SchedulesPage,
    text: 'Schedules',
  },
  {
    id: PageIds.QuizPage,
    text: 'Quiz',
  },
  {
    id: PageIds.CiutatPage,
    text: 'La Ciutat',
  },
  {
    id: PageIds.TicketPage,
    text: 'BUY YOUR TICKET',
  },
];
class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  createHeader() {
    const headerContainer = <HTMLDivElement>document.createElement('div');
    headerContainer.classList.add('container');

    const headerWrapper = <HTMLDivElement>document.createElement('div');
    headerWrapper.classList.add('wrapper');

    const logo = document.createElement('div');
    logo.classList.add('header__logo');

    const pageButtons: HTMLDivElement = document.createElement('div');

    pageButtons.classList.add('header__nav');
    Buttons.forEach((button) => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${button.id}`;
      buttonHTML.innerText = button.text;
      buttonHTML.classList.add(button.id);
      if (buttonHTML.textContent === 'BUY YOUR TICKET') {
        buttonHTML.setAttribute('target', '_blank');
      }

      pageButtons.append(buttonHTML);
    });

    const language = <HTMLElement>document.createElement('select');
    language.classList.add('header_language');

    const option_language_en = <HTMLElement>document.createElement('option');
    option_language_en.classList.add('language_en');

    const option_language_ru = <HTMLElement>document.createElement('option');
    option_language_ru.classList.add('language_ru');

    const themeToggler = <HTMLDivElement>document.createElement('div');
    themeToggler.classList.add('theme_toggler');

    language.append(option_language_en, option_language_ru);
    headerWrapper.append(logo, pageButtons, language, themeToggler);
    headerContainer.append(headerWrapper);
    this.container.append(headerContainer);

    window.onscroll = function () {
      let scrolled: number;
      scrolled = window.pageYOffset || document.documentElement.scrollTop;
      const header = <HTMLElement>document.querySelector('.container');
      const box_language = <HTMLElement>document.querySelector('.header_language');
      const box_ticket = <HTMLElement>document.querySelector('.ticket-page');
      const boxTheme = <HTMLElement>document.querySelector('.theme_toggler');
      if (scrolled > 5) {
        header.style.width = '';
        header.style.background = '#102f43';
        header.style.position = 'fixed';
        header.style.height = '60px';
        header.style.marginTop = '0';
        header.style.zIndex = '6';
        header.style.transition = 'all 2s ease';
        box_language.style.display = 'none';
        box_ticket.style.display = 'none';
        boxTheme.style.display = 'none';
      }
      if (5 > scrolled) {
        header.style.background = 'none';
        box_language.style.display = 'grid';
        box_ticket.style.display = 'grid';
        boxTheme.style.display = 'block';
      }
    };

    themeToggler.addEventListener('click', (e) => {
      const toggler = <HTMLDivElement>e.target;
      const body = <HTMLBodyElement>document.querySelector('body');

      const currentPageHash = window.location.hash.slice(1);

      const information = <HTMLElement>document.querySelector('.information');
      const pricesRightTile = <HTMLElement>document.querySelector('.tile_right');
      const tickets = <HTMLElement>document.querySelector('.tickets');
      const experiences = <HTMLElement>document.querySelector('.oceanographic-experiences');
      const conditions = <HTMLElement>document.querySelector('.conditions');
      const freeEntries = <HTMLElement>document.querySelector('.free-entries');

      const schedulesContent = <HTMLElement>document.querySelector('.schedules__content');
      const schedulesRightTile = <HTMLElement>document.querySelector('.schedules-tile_right');
      const schedulesTickets = <HTMLElement>document.querySelector('.tickets__wrapper');

      if (toggler instanceof HTMLDivElement) {
        if (toggler.classList.contains('dark')) {
          toggler.classList.remove('dark');
          body.style.backgroundColor = 'transparent';
          switch (currentPageHash) {
            case PageIds.PricesPage:
              information.classList.remove('dark');
              pricesRightTile.classList.remove('dark');
              tickets.classList.remove('dark');
              experiences.classList.remove('dark');
              conditions.classList.remove('dark');
              freeEntries.classList.remove('dark');
              break;
            case PageIds.SchedulesPage:
              schedulesContent.classList.remove('dark');
              schedulesRightTile.classList.remove('dark');
              schedulesTickets.classList.remove('dark');
          }
        } else {
          toggler.classList.add('dark');
          body.style.backgroundColor = '#102f43';
          switch (currentPageHash) {
            case PageIds.PricesPage:
              information.classList.add('dark');
              pricesRightTile.classList.add('dark');
              tickets.classList.add('dark');
              experiences.classList.add('dark');
              conditions.classList.add('dark');
              freeEntries.classList.add('dark');
              break;
            case PageIds.SchedulesPage:
              schedulesContent.classList.add('dark');
              schedulesRightTile.classList.add('dark');
              schedulesTickets.classList.add('dark');
          }
        }
      }
    });
  }

  render(): HTMLElement {
    this.createHeader();
    return this.container;
  }
}

export default Header;
