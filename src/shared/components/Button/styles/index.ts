import styled from "styled-components";
import globalConfig from "../../../../utils";

interface IButtonMain {
    disable: boolean;
    type?: "button" | "submit";
}

export const Loading = styled.div`
    border: 3px solid #f3f3f3;
    border-top: 3px solid transparent;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const BotaoCadastrar = styled.button<IButtonMain>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 45px;
    font-size: 14pt;
    font-weight: bold;
    color: ${({ disable, theme }) => (disable ? `${theme.gray4}` : `${theme.white}`)};
    border: none;
    border-radius: 50px;

    background-color: ${({ type, disable, theme }) =>
        type === "submit" ? (disable ? `${theme.gray3}` : `${theme.green}`) : `${theme.gray}`};

    cursor: pointer;

    :hover {
        opacity: ${({ disable }) => (disable ? `100%` : `70%`)};
    }

    @media (min-width: ${globalConfig.minWidth}) {
        width: 200px;
        margin: 5px 0;
    }
`;
