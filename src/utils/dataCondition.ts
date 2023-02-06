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
