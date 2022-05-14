import styled from "styled-components";

interface IButtonMain {
    disable: boolean;
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
    padding: 20px;
    font-size: 14pt;
    border: none;
    border-radius: 50px;
    font-weight: bold;
    background-color: ${({ disable, theme }) => (disable ? `${theme.gray3}` : `${theme.green}`)};
    color: ${({ disable, theme }) => (disable ? `${theme.gray4}` : `${theme.white}`)};
    cursor: pointer;

    :hover {
        opacity: ${({ disable }) => (disable ? `100%` : `70%`)};
    }

    //width: 200px;
`;
