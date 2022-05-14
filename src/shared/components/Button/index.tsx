import { FC } from "react";

import { BotaoCadastrar, Loading } from "./styles/index";

interface IButton {
    disable: boolean;
    isLoading: boolean;
    text: string;
    type?: "button" | "submit";
}

const Button: FC<IButton> = ({ disable, isLoading, text, type }) => {
    return (
        <BotaoCadastrar disable={disable} type={type} disabled={disable}>
            {isLoading ? <Loading /> : text}
        </BotaoCadastrar>
    );
};

export default Button;
