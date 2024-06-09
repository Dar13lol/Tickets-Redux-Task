import { FunctionComponent, MouseEventHandler, ReactElement } from "react";
import style from "./filterTransfers.module.scss";
import { useAppDispatch } from "../../types/hooks.ts";
import { filterTransfers } from "../../store/slices/ticketSlice.ts";
import { classToDefaultSort } from "../../store/slices/sortClassToggleSlice.ts";

const FilterTransfers: FunctionComponent = (): ReactElement => {
    const dispatch = useAppDispatch();

    const checkedArr: number[] = [];

    const handleClick: MouseEventHandler<HTMLInputElement> = (event) => {
        if (event.currentTarget.checked) {
            checkedArr.push(Number(event.currentTarget.value));
            dispatch(filterTransfers(checkedArr));
            dispatch(classToDefaultSort());
        } else {
            checkedArr.splice(
                checkedArr.indexOf(Number(event.currentTarget.value)),
                1,
            );
            dispatch(filterTransfers(checkedArr));
            dispatch(classToDefaultSort());
        }
    };

    return (
        <>
            <div className={style.transfers}>
                <div>
                    <span className={style.transfers_title}>
                        Количество пересадок
                    </span>
                </div>
                <div className={style.transfers_check__container}>
                    <input
                        type='checkbox'
                        className={style.checkbox}
                        onClick={handleClick}
                        value={0}
                    />
                    <span className={style.transfers_check__title}>
                        Без пересадок
                    </span>
                </div>
                <div className={style.transfers_check__container}>
                    <input
                        type='checkbox'
                        className={style.checkbox}
                        onClick={handleClick}
                        value={1}
                    />
                    <span className={style.transfers_check__title}>
                        1 Пересадка
                    </span>
                </div>
                <div className={style.transfers_check__container}>
                    <input
                        type='checkbox'
                        className={style.checkbox}
                        onClick={handleClick}
                        value={2}
                    />
                    <span className={style.transfers_check__title}>
                        2 Пересадки
                    </span>
                </div>
                <div className={style.transfers_check__container}>
                    <input
                        type='checkbox'
                        className={style.checkbox}
                        onClick={handleClick}
                        value={3}
                    />
                    <span className={style.transfers_check__title}>
                        3 Пересадки
                    </span>
                </div>
            </div>
        </>
    );
};

export default FilterTransfers;
