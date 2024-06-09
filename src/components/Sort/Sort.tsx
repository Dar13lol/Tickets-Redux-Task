import { FunctionComponent, MouseEventHandler, ReactElement } from "react";
import style from "./sortPrice.module.scss";
import { useAppDispatch, useAppSelector } from "../../types/hooks.ts";
import {
    sortByPrice,
    sortByTime,
    sortByTransfers,
} from "../../store/slices/ticketSlice.ts";
import * as classNames from "classnames";
import { classToggleSort } from "../../store/slices/sortClassToggleSlice.ts";

const Sort: FunctionComponent = (): ReactElement => {
    const currentClass = useAppSelector(
        (state) => state.classToggleSort.sortClass,
    );

    const dispatch = useAppDispatch();

    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        if (event.currentTarget.value === "price") {
            dispatch(classToggleSort(event.currentTarget.value));
            dispatch(sortByPrice());
        } else if (event.currentTarget.value === "time") {
            dispatch(classToggleSort(event.currentTarget.value));
            dispatch(sortByTime());
        } else if (event.currentTarget.value === "transfers") {
            dispatch(classToggleSort(event.currentTarget.value));
            dispatch(sortByTransfers());
        }
    };
    return (
        <section className={style.sort}>
            <button
                className={
                    currentClass === "price"
                        ? classNames(style.sort_buttonActive, style.sort_button)
                        : style.sort_button
                }
                onClick={handleClick}
                value={"price"}
            >
                Самый дешевый
            </button>
            <button
                className={
                    currentClass === "time"
                        ? classNames(style.sort_buttonActive, style.sort_button)
                        : style.sort_button
                }
                onClick={handleClick}
                value={"time"}
            >
                Самый быстрый
            </button>
            <button
                className={
                    currentClass === "transfers"
                        ? classNames(style.sort_buttonActive, style.sort_button)
                        : style.sort_button
                }
                onClick={handleClick}
                value={"transfers"}
            >
                Самый оптимальный
            </button>
        </section>
    );
};

export default Sort;
