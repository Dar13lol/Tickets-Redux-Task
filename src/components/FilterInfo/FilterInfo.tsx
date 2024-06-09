import { FunctionComponent, MouseEventHandler, ReactElement } from "react";
import style from "./filterInfo.module.scss";
import arrow from "../../assets/image 7.svg";
import { useAppDispatch, useAppSelector } from "../../types/hooks.ts";
import { settingsClassToggle } from "../../store/slices/settingsClassToggle.ts";
import FilterCompany from "../FilterCompany/FilterCompany.tsx";
import FilterTransfers from "../FilterTransfers/FilterTransfers.tsx";

const FilterInfo: FunctionComponent = (): ReactElement => {
    const settingsActive = useAppSelector(
        (state) => state.classToggleSettings.settingsClass,
    );

    const tickets = useAppSelector((state) => state.tickets.list);

    const dispatch = useAppDispatch();

    const handleClick: MouseEventHandler<HTMLDivElement> = () => {
        dispatch(settingsClassToggle());
    };

    return (
        <>
            <section className={style.filterInfo}>
                <div className={style.filterInfo_settingsBar}>
                    <div>
                        <span className={style.filterInfo_text}>
                            {tickets.length > 2
                                ? "Любая авиакомпания"
                                : tickets.map((company) => company.company)}
                            ,
                            {tickets.length > 2
                                ? " любое кол-во пересадок"
                                : tickets.map((transfer) => transfer.transfers)}
                        </span>
                    </div>
                    <div
                        className={style.filterInfo_settingsButton}
                        onClick={handleClick}
                    >
                        <span className={style.filterInfo_settingsText}>
                            Открыть настройки
                        </span>
                        <img
                            src={arrow}
                            alt={"стрелочка"}
                            className={style.filterInfo_arrow}
                        />
                    </div>
                </div>
                {settingsActive && (
                    <div className={style.filterInfo_settingsOptions}>
                        <FilterCompany />
                        <FilterTransfers />
                    </div>
                )}
            </section>
        </>
    );
};

export default FilterInfo;
