import { FunctionComponent, ReactElement } from "react";
import airplane from "../../assets/icon.svg";
import style from "./header.module.scss";

const Header: FunctionComponent = (): ReactElement => {
    return (
        <>
            <header className={style.header}>
                <img
                    src={airplane}
                    alt={"airplane"}
                    className={style.airplane}
                />
                <p className={style.header_text}>Поиск авиабилетов</p>
            </header>
        </>
    );
};

export default Header;
