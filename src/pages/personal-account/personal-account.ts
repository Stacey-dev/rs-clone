import Page from "../../core/templates/page";
import './personal-account.css';
import Header from "../../core/components/header";
import { Order } from "../app/app";
import { drawTicket } from "../../core/components/drawTicket";

type User = {
    email: string,
    firstName: string,
    lastName: string,
    id: number
}

class PersonalAccPage extends Page {
    static TextObject = {
        MainTitle: 'Personal accaunt Page'
    }

    constructor(id: string) {
        super(id);
    }
    getAuthToken() {
        return localStorage.accessToken
    }

    async getNameUser() {
        const response = await fetch(`https://rs-clone-server-production-43e3.up.railway.app/users/${Header.userId}`);
        const responseJson: User = await response.json();
        return responseJson.firstName
    }

    async getTicketsUser() {
        try {
            const response = await fetch("https://rs-clone-server-production-43e3.up.railway.app/600/tickets", {
                headers: {
                    "Authorization": `Bearer ${this.getAuthToken()}`
                }
            });
            const responseJson: Order[] = await response.json();
            console.log("RESPONS TICKET", responseJson)
            return responseJson
        } catch (e) {
            console.log("No tickets")
        }

    }



    render() {
        // const title: HTMLHeadingElement = this.createTitle(PersonalAccPage.TextObject.MainTitle);
        const layoutString: string = `<div class="personal__background">
        <div class="tickets__wrapper">
            <div class="personal__data">
                <div class="personal__name">Name
                    <div class="name-user"></div>
                </div>
                <div class="personal__tickets">Buying history
                    <div class="users-tickets"></div>
                </div>
            </div>
        </div>
    </div>`
        const layoutPersonal = document.createElement('div');
        layoutPersonal.innerHTML = layoutString;
        this.container.append(layoutPersonal);

        const nameUser = <HTMLDivElement>this.container.querySelector('.name-user');
        const valuesLocStor: string[] = Object.values(localStorage);
        const nameUserValue = JSON.parse(valuesLocStor[1]).name;
        const userId = JSON.parse(valuesLocStor[1]).id;
        nameUser.innerHTML = nameUserValue;

        const usersTickets = <HTMLDivElement>layoutPersonal.querySelector('.users-tickets')


        this.getTicketsUser().then((ticketsArray) => {
            const usersTicketsArray = ticketsArray!.filter((el) => el.userId === userId);
            drawTicket(usersTickets, usersTicketsArray);
            const totalPrice = <HTMLParagraphElement>usersTickets.querySelector('.ticket__total-price');
            totalPrice.remove()
        }).catch((e) => {
            usersTickets.innerHTML = "No tickets"
            console.log("No tickets")
        })






        return this.container;
    }
}

export default PersonalAccPage
