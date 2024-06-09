import { FunctionComponent, ReactElement } from "react";
import { useAppSelector } from "../../types/hooks.ts";
import OneTicket from "./OneTicket.tsx";
import style from "./ticket.module.scss";

const TicketList: FunctionComponent = (): ReactElement => {
    const tickets = useAppSelector((state) => state.tickets.list);

    return (
        <>
            <div className={style.one_ticket}>
                {tickets.map((ticket) => (
                    <OneTicket key={ticket.id} {...ticket} />
                ))}
            </div>
        </>
    );
};

export default TicketList;
