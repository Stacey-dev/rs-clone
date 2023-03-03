import { QuizResult } from "./types";
import { Order } from "./types";
import { User } from "./types";
import { LoginData } from "../core/components/header";
import { url } from "./url";


export async function login(dataUser: LoginData) {
    const response = fetch(`${url}/login`, {
        method: 'POST',
        body: JSON.stringify(dataUser),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response
}

export async function registration(dataUser: LoginData) {
    const response = await fetch(`${url}/register`, {
        method: 'POST',
        body: JSON.stringify(dataUser),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response
}


export async function getTicketsUserFromServer() {
    try {
        const response = await fetch(`${url}/tickets`);
        const responseJson: Order[] = await response.json();
        return responseJson;
    } catch (e) {
        console.log('No tickets');
    }
}

export async function addTicketToAccount(ticket: Order) {
    const response = await fetch(`${url}/tickets`, {
        method: 'POST',
        body: JSON.stringify(ticket),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response
}

export async function getQuizResults(id: number) {
    const response = await fetch(`${url}/users/${id}`);
    const responseJson: User = await response.json();
    return responseJson.quizResults;
}

export async function getUser(id: number) {
    const response = await fetch(`${url}/users/${id}`);
    const responseJson: User = await response.json();
    return responseJson;
}


export async function updateResultQuizInServer(userId: number, quizRes: QuizResult): Promise<QuizResult> {
    const response: Response = await fetch(`${url}/users/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quizResult: quizRes })
    });
    return response.json();
}

export async function setResultQuizInServer(userId: number, quizResults: QuizResult[]) {
    const response: Response = await fetch(`${url}/users/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quizResults: quizResults })
    });
    return response.json();
}
