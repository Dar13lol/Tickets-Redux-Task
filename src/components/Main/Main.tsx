import { FunctionComponent, ReactElement } from "react";
import FilterTransfers from "../FilterTransfers/FilterTransfers.tsx";
import FilterCompany from "../FilterCompany/FilterCompany.tsx";
import Sort from "../Sort/Sort.tsx";
import TicketList from "../Tickets/TicketList.tsx";
import style from "./main.module.scss";
import FilterInfo from "../FilterInfo/FilterInfo.tsx";
import { useAppSelector } from "../../types/hooks.ts";
import * as classNames from "classnames";

const Main: FunctionComponent = (): ReactElement => {
    const settingsActive = useAppSelector(
        (state) => state.classToggleSettings.settingsClass,
    );

    return (
        <>
            <main className={style.main}>
                <div className={style.main_filters_area}>
                    <div className={style.main_filters_transfers}>
                        <FilterTransfers />
                    </div>
                    <div className={style.main_filters_company}>
                        <FilterCompany />
                    </div>
                </div>
                <div className={style.main_tickets_area}>
                    <Sort />
                    <div
                        className={
                            settingsActive
                                ? classNames(
                                      style.main_tickets_filterBlock,
                                      style.main_tickets_filterBlockActive,
                                  )
                                : style.main_tickets_filterBlock
                        }
                    >
                        <FilterInfo />
                    </div>
                    <TicketList />
                    <button className={style.main__button}>
                        Загрузить еще билеты
                    </button>
                </div>
            </main>
        </>
    );
};

export default Main;
