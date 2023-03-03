import Page from '../../core/templates/page';
import './personal-account.css';
import { drawTicket } from '../../core/components/drawTicket';
import { createQuizResults } from '../../core/components/drawQuizResult';
import { getQuizResults } from '../../utils/requests';
import { getTicketsUserFromServer } from '../../utils/requests';
import { langArr } from '../../utils/dataLang';
import { LanguageArr } from '../../utils/types';


class PersonalAccPage extends Page {
    static TextObject = {
        MainTitle: 'Personal accaunt Page',
    };
    level1: number;
    level2: number;
    level3: number;
    level4: number;

    constructor(id: string) {
        super(id);
        this.level1 = 0;
        this.level2 = 0;
        this.level3 = 0;
        this.level4 = 0;
    }
    getAuthToken() {
        return localStorage.accessToken;
    }

    render() {
        const select = <HTMLSelectElement>document.querySelector('.header_language');

        if (select.value === 'ru') {
            let langInHash = window.location.hash.slice(1).split('=')[1];
            langInHash = select.value;
            const path = window.location.hash.slice(1).split('=')[0];
            const url = new URL(window.location.toString());
            url.hash = path + '=' + langInHash;
            window.history.pushState({}, '', url);
            select.value = 'ru';
        }

        const layoutString = `<div class="personal__background">
        <div class="tickets__wrapper">
            <div class="personal__data">
                <div class="personal__name"><span class ="personal__name_title">Name</span>
                    <div class="name-user"></div>
                    <div class="surname-user"></div>
                    <div class="phone-user"></div>
                    <div class="personal-statistic"><span class ="personal__statistic_title">There are no quiz results yet</span>
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

        //___________________________________________________переключение на другой язык
        if (select.value === 'ru') {
            for (const key in langArr) {
                if (this.container.querySelector('.' + key)) {
                    this.container.querySelector('.' + key)!.innerHTML =
                        langArr[key as keyof LanguageArr][select.value as keyof { ru: string; en: string }];
                }
            }
        }
        //________________________________________________________________________________

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
                    statisticContainer.innerHTML = `<span class="personal__statistic_title">The best results of the quiz</span>`;
                    createQuizResults(statisticContainer, results, select.value);
                }
            })
            .catch((e) => {
                console.log('There are no quiz results yet');
            })

        return this.container;
    }
}

export default PersonalAccPage;
