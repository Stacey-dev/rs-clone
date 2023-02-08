import Flag from '../assets/icons/1f1ec-1f1e7.svg'
import NewEvent from '../assets/icons/1f195.svg'

export const schedulesExplEng: string = `* Actividad incluida en el precio de la entrada general.
    <br>** Para disfrutar de esta actividad es necesario adquirir la entrada correspondiente.Infórmate de las condiciones en taquilla.
    <br>The schedules are susceptible of modifications according to the affluence of public, meteorological or biological conditions of our animals.Therefore, we recommend that you inquire directly at the Access Building Information Point on the day of your visit.`
export type TableCell = {
    hour: string,
    activity: string,
    location: string,
    status: string,
    clarification: boolean
}

export type TableCells = TableCell[];

export const schedulesTableData: TableCells = [
    {
        hour: "10:00",
        activity: "APERTURA",
        location: "Oceanografic Valencia",
        status: "Scheduled",
        clarification: false

    }, {
        hour: "10:00 - 17:45",
        activity: "HUMEDALES",
        location: "HUMEDALES",
        status: "Scheduled",
        clarification: false
    }, {
        hour: "11:45",
        activity: "PRESENTACIÓN DE DELFINES*",
        location: "Delfinario",
        status: "Scheduled",
        clarification: true
    }, {
        hour: "12:30",
        activity: `CINE 4D - TENTÁCULOS <img src=${Flag} class="activity__icon"/>**`,
        location: "Auditorio Mar Rojo",
        status: "Scheduled",
        clarification: false
    }, {
        hour: "13:00",
        activity: `CINE 4D - <img src=${NewEvent} class="activity__icon"/> TORTUGAS. LA ODISEA DE LA TORTUGA**`,
        location: "Auditorio Mar Rojo",
        status: "Scheduled",
        clarification: false
    }, {
        hour: "13:30",
        activity: "CINE 4D - 20.000 LEGUAS DE VIAJE SUBMARINO **",
        location: "Auditorio Mar Rojo",
        status: "Scheduled",
        clarification: false
    }, {
        hour: "14:00",
        activity: "CINE 4D - TIBURÓN. UN DOCUMENTAL DE LA BBC**",
        location: "Auditorio Mar Rojo",
        status: "Scheduled",
        clarification: false
    }, {
        hour: "16:00",
        activity: "PRESENTACIÓN DE DELFINES*",
        location: "Delfinario",
        status: "Scheduled",
        clarification: true
    }, {
        hour: "18:00",
        activity: "CIERRE",
        location: "Oceanografic",
        status: "Scheduled",
        clarification: false
    }

]

export const schedulesSaturdayData: TableCells = [
    {
        hour: "10:00",
        activity: "APERTURA",
        location: "Oceanografic Valencia",
        status: "Scheduled",
        clarification: false

    }, {
        hour: "10:00 - 18:30",
        activity: "HUMEDALES",
        location: "HUMEDALES",
        status: "Scheduled",
        clarification: false
    }, {
        hour: "11:45",
        activity: "PRESENTACIÓN DE DELFINES*",
        location: "Delfinario",
        status: "Scheduled",
        clarification: true
    }, {
        hour: "12:30",
        activity: `CINE 4D - TENTÁCULOS**`,
        location: "Auditorio Mar Rojo",
        status: "Scheduled",
        clarification: false
    }, {
        hour: "13:00",
        activity: `CINE 4D - <img src=${NewEvent} class="activity__icon"/> TORTUGAS. LA ODISEA DE LA TORTUGA**`,
        location: "Auditorio Mar Rojo",
        status: "Scheduled",
        clarification: false
    }, {
        hour: "13:30",
        activity: "CINE 4D - 20.000 LEGUAS DE VIAJE SUBMARINO **",
        location: "Auditorio Mar Rojo",
        status: "Scheduled",
        clarification: false
    }, {
        hour: "14:00",
        activity: "PRESENTACIÓN DE DELFINES*",
        location: "Delfinario",
        status: "Scheduled",
        clarification: true
    }, {
        hour: "14:00",
        activity: `CINE 4D - TIBURÓN <img src=${Flag} class="activity__icon"/> UN DOCUMENTAL DE LA BBC**`,
        location: "Auditorio Mar Rojo",
        status: "Scheduled",
        clarification: false
    }, {
        hour: "16:00",
        activity: `CINE 4D - <img src=${NewEvent} class="activity__icon"/> TORTUGAS. LA ODISEA DE LA TORTUGA**`,
        location: "Auditorio Mar Rojo",
        status: "Scheduled",
        clarification: false
    }, {
        hour: "16:30",
        activity: "CINE 4D - 20.000 LEGUAS DE VIAJE SUBMARINO **",
        location: "Auditorio Mar Rojo",
        status: "Scheduled",
        clarification: false
    }, {
        hour: "17:00",
        activity: "CINE 4D - TIBURÓN. UN DOCUMENTAL DE LA BBC**",
        location: "Auditorio Mar Rojo",
        status: "Scheduled",
        clarification: false
    }, {
        hour: "17:30",
        activity: `CINE 4D - TENTÁCULOS**`,
        location: "Auditorio Mar Rojo",
        status: "Scheduled",
        clarification: false
    }, {
        hour: "18:00",
        activity: "PRESENTACIÓN DE DELFINES*",
        location: "Delfinario",
        status: "Scheduled",
        clarification: true
    }, {
        hour: "20:00",
        activity: "CIERRE",
        location: "Oceanografic",
        status: "Scheduled",
        clarification: false
    }

]
