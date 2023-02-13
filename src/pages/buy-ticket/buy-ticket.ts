import Page from "../../core/templates/page";
import './buy-ticket.css'
import { createInputCalendar } from "../../core/components/create-calendar-tickets";
import { createOptionByuingTicket } from "../../core/components/optionsBuyingTickets";
import { ticketsData } from "../../utils/dataBuyTicket";
import { addCardImg } from "../../core/components/addCardImg";
import CardLogo from '../../assets/icons/card-logo.png';
import AmericanExpr from '../../assets/icons/american-express.svg'
import Mastercard from '../../assets/icons/mastercard.svg'
import Visa from '../../assets/icons/visa.png'
import UnionPay from '../../assets/icons/union-pay.png'
import App from "../app/app";

type Order = {
    name: string | null,
    amount: number | null,
    price: number | null
}

// export const orders: Order[] = [];

class TicketPage extends Page {
    static TextObject = {
        MainTitle: 'Ticket Page'
    }

    constructor(id: string) {
        super(id);
    }

    render() {

        const background = document.createElement('div');
        background.classList.add('buy-ticket__backg');
        const buyingTicketContainer = document.createElement('div');
        buyingTicketContainer.innerHTML =
            `<div class="tickets__container">
        <div class="tickets__wrapper">
            <div class="tickets__nav">
                <button class="selection__button tickets__buttons_filed">Select your Oceanogràfic Tickets</button>
                <button disabled class="registration__button">Make a purchase</button>
                <button disabled class="payment__button">Payment</button>
            </div>
            <div class="progress"></div>
            <div class="tickets__selection">
                <div class="selection__calendar">
                </div>
                <div class="selection__warning">Select your entry time for Oceanogràfic València. You can enter Oceanogràfic València from the time selected.</div>
                <div class="selection"></div>
            </div>
            <div class="tickets__registration hidden">

            <div class="registration__input-container">
              <label class="registration__label" for="name">Enter your name</label>
              <input class="registration__input" type="text" id="name" required minlength="2" maxlength="20" pattern="[a-zA-ZА-Яа-яЁё]+">
            </div>
            <div class="registration__input-container">
              <label class="registration__label" for="surname">Enter your surname</label>
              <input class="registration__input" type="text" id="surname" required minlength="2" maxlength="20" pattern="[a-zA-ZА-Яа-яЁё]+">
            </div>
            <div class="registration__input-container">
                <label class="registration__label" for="phone">Enter your phone</label>
                <input class="registration__input" type="tel" id="phone" required pattern="[+][0-9]{3}[0-9]{2}[0-9]{7}" placeholder="+375291234567">
            </div>
            <div class="registration__input-container">
              <label class="registration__label" for="t2">Enter your e-mail address</label>
              <input class="registration__input" type="email" id="t2" name="email" required>
            </div>

            </div>
            <div class="ticket__payment hidden">
                <p class="payment__title">Credit card details</p>
                <div class="payment__card-form">
                    <div class="f">
                        <label for="ccn">Credit Card Number:</label>
                        <div class="payment__container-card-img">
                        </div>
                        <input id="ccn" class="ccn " type="tel" inputmode="numeric" pattern="[0-9\s]{19}" autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx">
                    </div>
                    <div class="f">
                        <label for="valid">Valid</label>
                        <input id="valid" class="valid " type="tel" inputmode="numeric" pattern="[0-9\s]{5}" autocomplete="cc-number" maxlength="5" placeholder="Valid Thru">
                    </div>
                    <div class="f">
                        <label for="cvv">CVV:</label>
                        <input id="cvv" class="cvv " type="tel" inputmode="numeric" pattern="[0-9\s]{3}" autocomplete="cc-number" maxlength="3" placeholder="Code">
                    </div>
                </div>
            </div>
        </div>
    </div>`


        this.container.append(background, buyingTicketContainer);
        const calendar = <HTMLElement>this.container.querySelector('.selection__calendar');

        const selection = <HTMLElement>this.container.querySelector('.selection');
        createInputCalendar(calendar);

        const makingOrderButt = <HTMLButtonElement>this.container.querySelector('.registration__button');
        const selectionButt = <HTMLButtonElement>this.container.querySelector('.selection__button');
        const paymentButt = <HTMLButtonElement>this.container.querySelector('.payment__button');

        const selectionContainer = <HTMLDivElement>this.container.querySelector('.tickets__selection');
        const registrationContainer = <HTMLDivElement>this.container.querySelector('.tickets__registration');
        const paymentContainer = <HTMLDivElement>this.container.querySelector('.ticket__payment');
        const progress = <HTMLDivElement>this.container.querySelector('.progress');
        const registrInputs = <HTMLCollectionOf<HTMLInputElement>>this.container.getElementsByClassName('registration__input');


        for (let elem of registrInputs) {
            elem.addEventListener('input', () => {
                if (!registrInputs[0].validity.patternMismatch && !registrInputs[0].validity.tooShort && !registrInputs[0].validity.valueMissing && !registrInputs[1].validity.patternMismatch && !registrInputs[1].validity.tooShort && !registrInputs[1].validity.valueMissing && !registrInputs[2].validity.patternMismatch && !registrInputs[2].validity.valueMissing && !registrInputs[2].validity.typeMismatch && !registrInputs[3].validity.typeMismatch && !registrInputs[3].validity.valueMissing) {
                    paymentButt.disabled = false
                }
            })

        }

        createOptionByuingTicket(ticketsData, selection, makingOrderButt);

        selectionButt.addEventListener('click', () => {
            progress.style.width = "calc(100% / 3)";
            progress.style.transition = "1000ms"
            progress.style.transitionTimingFunction = "linear";

            selectionButt.classList.add('tickets__buttons_filed');
            makingOrderButt.classList.remove('tickets__buttons_filed');
            paymentButt.classList.remove('tickets__buttons_filed')

            selectionContainer.classList.remove('hidden');
            registrationContainer.classList.add('hidden');
            paymentContainer.classList.add('hidden');
        })

        makingOrderButt.addEventListener('click', () => {
            progress.style.width = "calc(200% / 3)";
            progress.style.transition = "1000ms"
            progress.style.transitionTimingFunction = "linear";

            selectionButt.classList.remove('tickets__buttons_filed');
            makingOrderButt.classList.add('tickets__buttons_filed');
            paymentButt.classList.remove('tickets__buttons_filed')

            selectionContainer.classList.add('hidden');
            registrationContainer.classList.remove('hidden');
            paymentContainer.classList.add('hidden');
        });

        paymentButt.addEventListener('click', () => {

            progress.style.width = "calc(300% / 3)";
            progress.style.transition = "1000ms"
            progress.style.transitionTimingFunction = "linear";

            selectionButt.classList.remove('tickets__buttons_filed');
            makingOrderButt.classList.remove('tickets__buttons_filed');
            paymentButt.classList.add('tickets__buttons_filed')


            selectionContainer.classList.add('hidden');
            registrationContainer.classList.add('hidden');
            paymentContainer.classList.remove('hidden');

        })

        const cardImgContainer = <HTMLDivElement>this.container.querySelector('.payment__container-card-img');
        addCardImg(cardImgContainer, CardLogo)

        //_______________________________________________________card number

        const cardNumberInp = <HTMLInputElement>this.container.querySelector('.ccn');

        cardNumberInp.addEventListener("input", () => cardNumberInp.value = formatNumber(cardNumberInp.value.replaceAll(" ", "")));

        const formatNumber = (number: string) => number.split("").reduce((seed, next, index) => {
            if (number[0] === "3") {
                addCardImg(cardImgContainer, AmericanExpr)
            } else if (number[0] === "4") {
                addCardImg(cardImgContainer, Visa)
            } else if (number[0] === "5") {
                addCardImg(cardImgContainer, Mastercard)
            } else if (number[0] === "6") {
                addCardImg(cardImgContainer, UnionPay)
            }
            if (index !== 0 && !(index % 4)) seed += " ";
            return seed + next;
        }, "");

        //_______________________________________________________card valid

        const inputValid = <HTMLInputElement>this.container.querySelector('.valid');


        inputValid.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key !== "backspace" && event.key !== "delete") {
                if (inputValid.value.length == 2) {
                    inputValid.value = (inputValid.value + '/');
                }
            } else if (event.key === "backspace" || event.key === "delete") {
                inputValid.value = ""
            }

        })



        return this.container;
    }
}

export default TicketPage
