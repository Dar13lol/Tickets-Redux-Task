import { FunctionComponent, MouseEventHandler, ReactElement } from "react";
import style from "./filterCompany.module.scss";
import { useAppDispatch } from "../../types/hooks.ts";
import { filterCompany } from "../../store/slices/ticketSlice.ts";
import { classToDefaultSort } from "../../store/slices/sortClassToggleSlice.ts";

const FilterCompany: FunctionComponent = (): ReactElement => {
    const dispatch = useAppDispatch();

    const checkedCompanies: string[] = [];

    const handleClick: MouseEventHandler<HTMLInputElement> = (event) => {
        if (event.currentTarget.checked) {
            checkedCompanies.push(event.currentTarget.value);
            dispatch(filterCompany(checkedCompanies));
            dispatch(classToDefaultSort());
        } else {
            checkedCompanies.splice(
                checkedCompanies.indexOf(event.currentTarget.value),
                1,
            );
            dispatch(filterCompany(checkedCompanies));
            dispatch(classToDefaultSort());
        }
    };

    return (
        <>
            <div className={style.filterCompany}>
                <span className={style.companyTitle}>Компании</span>
                <div className={style.company_point}>
                    <input
                        type={"checkbox"}
                        onClick={handleClick}
                        value={"Победа"}
                    />
                    <span className={style.companyName}>Победа</span>
                </div>
                <div className={style.company_point}>
                    <input
                        type={"checkbox"}
                        onClick={handleClick}
                        value={"RED WINGS"}
                    />
                    <span className={style.companyName}>Red Wings</span>
                </div>
                <div className={style.company_point}>
                    <input
                        type={"checkbox"}
                        onClick={handleClick}
                        value={"S7"}
                    />
                    <span className={style.companyName}>S7 Airlines</span>
                </div>
            </div>
        </>
    );
};

export default FilterCompany;
