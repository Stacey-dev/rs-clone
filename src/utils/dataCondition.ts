export type Condion = {
    title: string;
    people: string[];
    explanation: string;
}

export type Conditions = Condion[];

export const conditionsData: Conditions = [{
    title: "REDUCED ADMISSION",
    people: ["Children aged 4 to 12. Free entry for children aged 0 to 3 (proof of age required)", "People over 65 and/or retirees on presentation of relevant documentation.", "Pensioners with relevant documentation.", "People with functional disabilities with relevant documentation."],
    explanation: "People who qualify for reduced admission can buy tickets online or at the ticket office, and show relevant documentation/proof on entry."
}, {
    title: "GROUPS",
    people: ["Groups of 20 or more."],
    explanation: "This price is applicable when booked at least 24 hours before the visit. You can make your reservation at the ticket office, by phone on 960470647or writing to us at reservas@oceanografic.org."
}, {
    title: "SCHOOL GROUPS",
    people: ["Groups of pupils in formal education (minimum 15 people) from 1st year of Infant Education (3 years old)", "Groups from rural areas, social and curricular diversification programmes even if they are made up of less than 15 people.", "Universities and adult education centres."],
    explanation: "This price is applicable when booked at least 24 hours before the visit. You can make your reservation at the ticket office, by phone on 960470647 or writing to us at reservas@oceanografic.org."
}
]

export const conditionsDataRu: Conditions = [{
    title: "Дети, пенсионеры, инвалиды",
    people: ["Дети от 4 до 12 лет. Бесплатный вход для детей от 0 до 3 лет (требуется подтверждение возраста).", "Лица старше 65 лет и/или пенсионеры при предъявлении соответствующих документов.", "Пенсионеры с соответствующими документами.", "Люди с функциональными нарушениями с соответствующей документацией."],
    explanation: "Люди, которые имеют право на льготный вход, могут купить билеты онлайн или в кассе и предъявить соответствующие документы / доказательства при входе."
}, {
    title: "Билеты для группы",
    people: ["Группы от 20 человек и более."],
    explanation: "Эта цена действительна при бронировании не менее чем за 24 часа до посещения. Вы можете сделать заказ в кассе, по телефону 960470647 или написать нам по адресу reservas@oceanografic.org."
}, {
    title: "Билеты для группы школьников",
    people: ["Группы школьников начального или базового образования (минимум 15 человек)", "Группы из сельской местности, программы социальной и учебной диверсификации, даже если они состоят менее чем из 15 человек.", "Университеты и центры обучения взрослых."],
    explanation: "Эта цена действительна при бронировании не менее чем за 24 часа до посещения. Вы можете сделать заказ в кассе, по телефону 960470647 или написать нам по адресу reservas@oceanografic.org."
}
]
