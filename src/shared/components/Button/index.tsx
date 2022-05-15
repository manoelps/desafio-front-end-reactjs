import { FC } from "react";

import { BotaoCadastrar, Loading } from "./styles/index";

interface IButton {
    disable: boolean;
    isLoading: boolean;
    text: string;
    type?: "button" | "submit";
    handleClick?: () => void;
}

const Button: FC<IButton> = ({ disable, isLoading, text, type, handleClick }) => {
    return (
        <BotaoCadastrar disable={disable} type={type} disabled={disable} onClick={handleClick}>
            {isLoading ? <Loading /> : text}
        </BotaoCadastrar>
    );
};

export default Button;
