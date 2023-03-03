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
    PersonalAccauntPageRu = 'personal-page&lang=ru',
    ErrorPage = 'error-page',
}

export const enum ErrorTypes {
    Error_404 = 404,
}

export interface LanguageArr {
    [key: string]: { "ru": string, "en": string };
}

export type Order = {
    name: string | null;
    date: string | null;
    amount: number | null;
    price: number | null;
    userId: number | null;
}

export type Ticket = {
    title: string,
    name: string,
    price: string,
    buyOnline: boolean;
}

export type Tickets = Ticket[];

type Condition = {
    title: string;
    people: string[];
    explanation: string;
}

export type Conditions = Condition[];

type TableCell = {
    hour: string;
    activity: string;
    location: string;
    status: string;
    clarification: boolean;
};

export type TableCells = TableCell[];

export type User = {
    email: string;
    name: string;
    surname: string,
    phone: string,
    password: string;
    quizResults: QuizResult[] | null;
    id: number;
}

export type QuizResult = {
    scoreLevel1: number;
    scoreLevel2: number;
    scoreLevel3: number;
    scoreLevel4: number;
}
