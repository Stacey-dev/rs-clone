import { QuisResult } from "../pages/personal-account/personal-account"
import { Order } from "../pages/app/app";
import { User } from "../pages/personal-account/personal-account";
import { LoginData } from "../core/components/header";
import { url } from "./url";

type DataUser = {
    email: string;
    name: string;
    quisResult: QuisResult | null;
    id: number;
}

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

export async function getQuizResult(id: number) {
    const response = await fetch(`${url}/users/${id}`);
    const responseJson: User = await response.json();
    return responseJson.quisResult;
}

export async function getUser(id: number) {
    const response = await fetch(`${url}/users/${id}`);
    const responseJson: User = await response.json();
    return responseJson;
}


export async function updateResultQuizInServer(userId: number, quizRes: QuisResult): Promise<QuisResult> {
    const response: Response = await fetch(`${url}/users/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quisResult: quizRes })
    });
    return response.json();
}
