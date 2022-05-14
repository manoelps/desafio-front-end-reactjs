import styled from "styled-components";

interface IInputText {
    error?: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0 10px 0;
`;

export const InputContainer = styled.div``;

export const Title = styled.div`
    font-size: 18px;
    color: ${({ theme }) => theme.gray};
`;

export const InputText = styled.input<IInputText>`
    width: 100%;
    padding: 5px 0px 2px 5px;
    border: none;
    //border-bottom: ${({ error, theme }) => (error ? `2px solid ${theme.red}` : `2px solid ${theme.gray2}`)};
    border-bottom: ${({ error, theme }) => (error ? `1px solid ${theme.red}` : `1px solid ${theme.gray1}`)};
    box-sizing: border-box;
    resize: vertical;
    font-size: 20px;
    font-weight: bold;
    //color: ${({ theme }) => theme.gray2};
    color: ${({ theme }) => theme.black};
    :focus {
        outline: none;
        color: ${({ theme }) => theme.gray1};
    }
`;

export const Message = styled.div`
    margin-top: 5px;
    color: ${({ theme }) => theme.red};
`;
