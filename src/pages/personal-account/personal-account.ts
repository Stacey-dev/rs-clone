import Page from '../../core/templates/page';
import './personal-account.css';
import { drawTicket } from '../../core/components/drawTicket';
import { createQuizResults } from '../../core/components/bestQuizResult';
import { getQuizResult } from '../../utils/requests';
import { getTicketsUserFromServer } from '../../utils/requests';

export type User = {
    email: string;
    name: string;
    surname: string,
    phone: string,
    password: string;
    quisResult: QuisResult | null;
    id: number;
};

export type QuisResult = {
    scoreLevel1: number;
    scoreLevel2: number;
    scoreLevel3: number;
    scoreLevel4: number;
};

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

        const layoutString = `<div class="personal__background">
        <div class="tickets__wrapper">
            <div class="personal__data">
                <div class="personal__name">Name
                    <div class="name-user"></div>
                    <div class="surname-user"></div>
                    <div class="phone-user"></div>
                    <div class="personal-statistic">There are no quiz results yet
                    </div>
                </div>
                <div class="personal__tickets">Buying history
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


        getQuizResult(userId)
            .then((quizResult) => {
                if (quizResult) {
                    statisticContainer.innerHTML = "";
                    statisticContainer.innerHTML = "The best result of the quiz";

                    this.level1 = quizResult.scoreLevel1;
                    this.level2 = quizResult.scoreLevel2;
                    this.level3 = quizResult.scoreLevel3;
                    this.level4 = quizResult.scoreLevel4;

                    createQuizResults(statisticContainer, this.level1, this.level2, this.level3, this.level4)
                }
            })
            .catch((e) => {
                statisticContainer.innerHTML = "";
                statisticContainer.innerHTML = 'There are no quiz results yet';
                console.log('There are no quiz results yet')
            })


        return this.container;
    }
}

export default PersonalAccPage;
