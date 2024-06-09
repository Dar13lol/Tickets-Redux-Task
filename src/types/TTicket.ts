export interface Ticket {
    id: number;
    from: string;
    to: string;
    company: string;
    price: number;
    currency: "Р";
    time: TicketTime;
    duration: number;
    transfers: number;
}

export interface TicketTime {
    startTime: string;
    endTime: string;
}

export interface TicketsState {
    list: Ticket[];
}

export interface OneTicketProps extends Ticket {}
