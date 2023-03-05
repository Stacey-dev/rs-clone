import Page from '../../core/templates/page';
import './personal-account.css';
import { drawTicket } from '../../core/components/drawTicket';
import { createQuizResults } from '../../core/components/drawQuizResult';
import { getQuizResults } from '../../utils/requests';
import { getTicketsUserFromServer } from '../../utils/requests';
import { langArr } from '../../utils/dataLang';
import { switchValueLanguageInHash } from '../../utils/switchValueLangInHash';
import { translateToAnotherLang } from '../../utils/translateToAnotherlanguage';
import { langArrHeaderFooter } from '../../utils/dataLang';


class PersonalAccPage extends Page {
    static TextObject = {
        MainTitle: 'Personal accaunt Page',
    };
    level1: number;
    level2: number;
    level3: number;
    level4: number;
    langInHash: string | null;

    constructor(id: string) {
        super(id);
        this.level1 = 0;
        this.level2 = 0;
        this.level3 = 0;
        this.level4 = 0;
        this.langInHash = window.location.hash.slice(1).split('=')[1];
    }

    render() {
        const select = <HTMLSelectElement>document.querySelector('.header_language');
        switchValueLanguageInHash(select);

        const layoutString = `<div class="personal__background">
        <div class="tickets__wrapper">
            <div class="personal__data">
                <div class="personal__name"><span class ="personal__name_title">Name</span>
                    <div class="name-user"></div>
                    <div class="surname-user"></div>
                    <div class="phone-user"></div>
                    <div class="personal-statistic"><span class ="personal__statistic_title">${select.value === 'en' ? 'There are no quiz results yet' : 'Результаты викторины отсутствуют'}</span>
                    </div>
                </div>
                <div class="personal__tickets"><span class ="personal__tickets_title">Buying history</span>
                    <div class="users-tickets"></div>
                </div>
            </div>
        </div>
    </div>
    `;
        const layoutPersonal = document.createElement('div');
        layoutPersonal.innerHTML = layoutString;
        this.container.append(layoutPersonal);

        const nameUser = <HTMLDivElement>this.container.querySelector('.name-user');
        const surnameUser = <HTMLDivElement>this.container.querySelector('.surname-user');
        const phoneUser = <HTMLDivElement>this.container.querySelector('.phone-user');
        const statisticContainer = <HTMLDivElement>this.container.querySelector('.personal-statistic');


        const userAsString = localStorage.getItem("user");
        const nameUserValue: string = userAsString !== null ? JSON.parse(userAsString).name : "The user is not logged in";
        const surnameUserValue: string = userAsString !== null ? JSON.parse(userAsString).surname : "The user is not logged in";
        const phoneUserValue: string = userAsString !== null ? JSON.parse(userAsString).phone : "The user is not logged in";

        const userId: number = userAsString !== null ? JSON.parse(userAsString).id : null;
        nameUser.innerHTML = nameUserValue;
        surnameUser.innerHTML = surnameUserValue;
        phoneUser.innerHTML = phoneUserValue;

        const usersTickets = <HTMLDivElement>layoutPersonal.querySelector('.users-tickets');

        getTicketsUserFromServer()
            .then((ticketsArray) => {
                const usersTicketsArray = ticketsArray!.filter((el) => el.userId === userId);
                drawTicket(usersTickets, usersTicketsArray);
                const totalPrice = <HTMLParagraphElement>usersTickets.querySelector('.ticket__total-price');
                totalPrice.remove();
            })
            .catch(() => {
                usersTickets.innerHTML = 'No tickets';
                console.log('No tickets');
            });

        getQuizResults(userId)
            .then((results) => {
                if (results) {
                    statisticContainer.innerHTML = "";
                    statisticContainer.innerHTML = `<span class="personal__statistic_title">${select.value === 'en' ? 'The best results of the quiz' : 'Лучшие результаты викторины'}</span>`;
                    createQuizResults(statisticContainer, results, select.value);
                }
            })
            .catch((e) => {
                console.log('There are no quiz results yet');
            })

        //___________________________________________________переключение на другой язык

        translateToAnotherLang(langArr, this.container, select);
        translateToAnotherLang(langArrHeaderFooter, document, select);
        //________________________________________________________________________________

        return this.container;
    }
}

export default PersonalAccPage;
