export type Ticket = {
    title: string,
    name: string,
    price: string,
    buyOnline: boolean;
}

export type Tickets = Ticket[];

export const ticketsData: Tickets[] = [
    [{
        title: "OCEANOGRAFIC -> ONLINE-TICKET",
        name: "General Ticket",
        price: "33.70 &euro;",
        buyOnline: true
    }, {
        title: "OCEANOGRAFIC -> ONLINE-TICKET",
        name: "Child Ticket (4 - 12 years)",
        price: "25 &euro;",
        buyOnline: true
    }, {
        title: "OCEANOGRAFIC -> ONLINE-TICKET",
        name: "Senior Ticket",
        price: "25 &euro;",
        buyOnline: true
    }, {
        title: "OCEANOGRAFIC -> ONLINE-TICKET",
        name: "Ticket for disabled",
        price: "25 &euro;",
        buyOnline: true
    }, {
        title: "OCEANOGRAFIC -> ONLINE-TICKET",
        name: "Group Ticket",
        price: "22.20 &euro;",
        buyOnline: false
    },
    ], [{
        title: "OCEANOGRAFIC -> DISCOUNT-TICKET",
        name: "Adult of large or single-parent family, student, unemployed people",
        price: "28.65 &euro;",
        buyOnline: false
    }, {
        title: "OCEANOGRAFIC -> DISCOUNT-TICKET",
        name: "Student large family",
        price: "24.35 &euro;",
        buyOnline: false
    }, {
        title: "OCEANOGRAFIC -> DISCOUNT-TICKET",
        name: "Reduced of large or single-parent family",
        price: "21.25 &euro;",
        buyOnline: false
    }
    ], [{
        title: "OCEANOGRAFIC -> SUPPLEMENTS",
        name: "4D Cinema",
        price: "3 &euro;",
        buyOnline: true
    }, {
        title: "OCEANOGRAFIC -> SUPPLEMENTS",
        name: "Digital audio guide",
        price: "4 &euro;",
        buyOnline: false
    }, {
        title: "OCEANOGRAFIC -> SUPPLEMENTS",
        name: "El mar en tus manos",
        price: "7 &euro;",
        buyOnline: true
    }, {
        title: "OCEANOGRAFIC -> SUPPLEMENTS",
        name: "Backstage Tour",
        price: "12 &euro;",
        buyOnline: true
    }
    ], [{
        title: "OCEANOGRAFIC + MUSEU DE LES CIENCIES",
        name: "General Ticket",
        price: "35.90 &euro;",
        buyOnline: true
    }, {
        title: "OCEANOGRAFIC + MUSEU DE LES CIENCIES",
        name: "Reduced admission ",
        price: "27.20 &euro;",
        buyOnline: true
    }, {
        title: "OCEANOGRAFIC + MUSEU DE LES CIENCIES",
        name: "Student, adult of large or single parent families, unemployed people",
        price: "30.85 &euro;",
        buyOnline: false
    }, {
        title: "OCEANOGRAFIC + MUSEU DE LES CIENCIES",
        name: "Large family reduced admission",
        price: "23.45 &euro;",
        buyOnline: false
    }, {
        title: "OCEANOGRAFIC + MUSEU DE LES CIENCIES",
        name: "Student large family reduced admission",
        price: "26.55 &euro;",
        buyOnline: false
    }, {
        title: "OCEANOGRAFIC + MUSEU DE LES CIENCIES",
        name: "GROUP",
        price: "23.60 &euro;",
        buyOnline: false
    }
    ], [{
        title: "OCEANOGRAFIC + HEMISFERIC",
        name: "General admission",
        price: "35.90 &euro;",
        buyOnline: true
    }, {
        title: "OCEANOGRAFIC + HEMISFERIC",
        name: "Reduced admission ",
        price: "27.20 &euro;",
        buyOnline: true
    }, {
        title: "OCEANOGRAFIC + HEMISFERIC",
        name: "Student, adult of large or single parent families, unemployed people",
        price: "30.85 &euro;",
        buyOnline: false
    }, {
        title: "OCEANOGRAFIC + HEMISFERIC",
        name: "Large family reduced admission",
        price: "23.45 &euro;",
        buyOnline: false
    }, {
        title: "OCEANOGRAFIC + HEMISFERIC",
        name: "Large family student",
        price: "26.55 &euro;",
        buyOnline: false
    }, {
        title: "OCEANOGRAFIC + HEMISFERIC",
        name: "GROUP",
        price: "23.60 &euro;",
        buyOnline: false
    }
    ], [{
        title: "OCEANOGRAFIC + HEMISFERIC + MUSEU DE LES CIENCIES",
        name: "General admission",
        price: "41.90 &euro;",
        buyOnline: true
    }, {
        title: "OCEANOGRAFIC + HEMISFERIC + MUSEU DE LES CIENCIES",
        name: "Reduced admission ",
        price: "33.20 &euro;",
        buyOnline: true
    }, {
        title: "OCEANOGRAFIC + HEMISFERIC + MUSEU DE LES CIENCIES",
        name: "Student, adult of large or single parent families, unemployed people",
        price: "36.85 &euro;",
        buyOnline: false
    }, {
        title: "OCEANOGRAFIC + HEMISFERIC + MUSEU DE LES CIENCIES",
        name: "Large family reduced admission",
        price: "29.45 &euro;",
        buyOnline: false
    }, {
        title: "OCEANOGRAFIC + HEMISFERIC + MUSEU DE LES CIENCIES",
        name: "Large family student",
        price: "32.55 &euro;",
        buyOnline: false
    }, {
        title: "OCEANOGRAFIC + HEMISFERIC + MUSEU DE LES CIENCIES",
        name: "GROUP",
        price: "28.30 &euro;",
        buyOnline: false
    }
    ], [{
        title: "HEMISFERIC",
        name: "General admission",
        price: "8.70 &euro;",
        buyOnline: true
    }, {
        title: "HEMISFERIC",
        name: "Reduced admission ",
        price: "6.70 &euro;",
        buyOnline: true
    }, {
        title: "HEMISFERIC",
        name: "Student, adult of large or single parent families, unemployed people",
        price: "7.40 &euro;",
        buyOnline: false
    }, {
        title: "HEMISFERIC",
        name: "Large family reduced admission",
        price: "5.70 &euro;",
        buyOnline: false
    }, {
        title: "HEMISFERIC",
        name: "Large family student",
        price: "6.26 &euro;",
        buyOnline: false
    }, {
        title: "HEMISFERIC",
        name: "GROUP",
        price: "6.30 &euro;",
        buyOnline: false
    }
    ], [{
        title: "MUSEU DE LES CIENCIES",
        name: "General admission",
        price: "8.70 &euro;",
        buyOnline: true
    }, {
        title: "MUSEU DE LES CIENCIES",
        name: "Reduced admission ",
        price: "6.70 &euro;",
        buyOnline: true
    }, {
        title: "MUSEU DE LES CIENCIES",
        name: "Student, adult of large or single parent families, unemployed people",
        price: "7.40 &euro;",
        buyOnline: false
    }, {
        title: "MUSEU DE LES CIENCIES",
        name: "Large family reduced admission",
        price: "5.70 &euro;",
        buyOnline: false
    }, {
        title: "MUSEU DE LES CIENCIES",
        name: "Large family student",
        price: "6.26 &euro;",
        buyOnline: false
    }, {
        title: "MUSEU DE LES CIENCIES",
        name: "GROUP",
        price: "6.30 &euro;",
        buyOnline: false
    }
    ], [{
        title: "HEMISFERIC + MUSEU DE LES CIENCIES",
        name: "General admission",
        price: "13 &euro;",
        buyOnline: true
    }, {
        title: "HEMISFERIC + MUSEU DE LES CIENCIES",
        name: "Reduced admission ",
        price: "10 &euro;",
        buyOnline: true
    }, {
        title: "HEMISFERIC + MUSEU DE LES CIENCIES",
        name: "Student, adult of large or single parent families, unemployed people",
        price: "11.05 &euro;",
        buyOnline: false
    }, {
        title: "HEMISFERIC + MUSEU DE LES CIENCIES",
        name: "Large family reduced admission",
        price: "8.50 &euro;",
        buyOnline: false
    }, {
        title: "HEMISFERIC + MUSEU DE LES CIENCIES",
        name: "Large family student",
        price: "9.39 &euro;",
        buyOnline: false
    }, {
        title: "HEMISFERIC + MUSEU DE LES CIENCIES",
        name: "GROUP",
        price: "9.45 &euro;",
        buyOnline: false
    }
    ]
]
