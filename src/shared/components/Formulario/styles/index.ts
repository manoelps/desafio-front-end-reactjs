import styled from "styled-components";
import globalConfig from "../../../../utils";

interface IInputText {
    error?: boolean;
}

export const Container = styled.div`
    padding: 30px;

    @media (min-width: ${globalConfig.minWidth}) {
        padding: 0px;
    }
`;

export const FormGridContainer = styled.div`
    display: grid;
    grid-template-columns: auto;

    @media (min-width: ${globalConfig.minWidth}) {
        grid-template-columns: auto auto;
        gap: 20px;
    }
`;

export const InputCard = styled.div``;

export const InputContainer = styled.div``;

export const Title = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.gray};
`;

export const InputText = styled.input<IInputText>`
    width: 100%;
    padding: 5px 0px 2px 5px;
    margin-bottom: 10px;
    border: none;
    //border-bottom: ${({ error, theme }) => (error ? `2px solid ${theme.red}` : `2px solid ${theme.gray2}`)};
    border-bottom: ${({ error, theme }) => (error ? `1px solid ${theme.red}` : `1px solid ${theme.gray1}`)};
    box-sizing: border-box;
    resize: vertical;
    font-size: 14px;
    font-weight: bold;
    //color: ${({ theme }) => theme.gray2};
    color: ${({ theme }) => theme.black};
    :focus {
        outline: none;
        color: ${({ theme }) => theme.gray1};
    }

    ::placeholder {
        font-size: 15px;
        color: ${({ theme }) => theme.gray4};
        font-weight: normal;
    }

    @media (min-width: ${globalConfig.minWidth}) {
        min-width: 250px;
        margin-bottom: auto;
    }
`;

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    margin: 40px 0;
    gap: 10px;

    @media (min-width: ${globalConfig.minWidth}) {
        justify-content: flex-end;
        flex-direction: row;
        margin: 30px 0;
    }
`;
