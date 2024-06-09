import { FunctionComponent, ReactElement } from "react";
import { OneTicketProps } from "../../types/TTicket.ts";
import style from "./ticket.module.scss";
import pobeda from "../../assets/pobeda.svg";
import redWings from "../../assets/redWings.svg";
import s7 from "../../assets/s7.svg";
import { plural } from "../../utils/plural.ts";
import { getTimeFromMinutes } from "../../utils/getTimeFromMinutes.ts";

const OneTicket: FunctionComponent<OneTicketProps> = ({
    from,
    to,
    company,
    price,
    currency,
    time,
    duration,
    transfers,
}): ReactElement => {
    let img;

    if (company === "Победа") {
        img = pobeda;
    } else if (company === "RED WINGS") {
        img = redWings;
    } else {
        img = s7;
    }

    return (
        <>
            <div className={style.ticket_container}>
                <div className={style.ticket_container__position}>
                    <div className={style.ticket_info__pricetimefromto}>
                        <span className={style.ticket_price__text}>
                            {price + " " + currency}
                        </span>
                        <span className={style.ticket_fromto_text}>
                            {from + " - " + to}
                        </span>
                        <span className={style.ticket_time_text}>
                            {time.startTime + " - " + time.endTime}
                        </span>
                    </div>
                    <div className={style.ticket_info__duration}>
                        <span className={style.ticket_fromto_text}>В пути</span>
                        <span className={style.ticket_time_text}>
                            {getTimeFromMinutes(duration)}
                        </span>
                    </div>
                    <div className={style.ticket_info__company}>
                        <img
                            className={style.ticket_info__img}
                            src={img}
                            alt={"company image"}
                        />
                        <span className={style.ticket_fromto_text}>
                            Пересадки
                        </span>
                        <span className={style.ticket_time_text}>
                            {plural(transfers, {
                                zero: "Без пересадок",
                                one: `${transfers} пересадка`,
                                two: `${transfers} пересадки`,
                            })}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OneTicket;
