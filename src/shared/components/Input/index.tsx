import { FC } from "react";

import { InputText, Container, InputContainer, Message, Title } from "./styles/index";

interface IInput {
    title: string;
    message?: string;
    type: string;
    error: boolean;
    name: string;
    value?: string | number;
    placeholder?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<IInput> = ({ title, message, type, error, name, value, placeholder, onChange }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <InputContainer>
                <InputText
                    type={type}
                    name={name}
                    onChange={onChange}
                    error={error}
                    value={value}
                    placeholder={placeholder}
                />
            </InputContainer>
            {error && <Message>{message}</Message>}
        </Container>
    );
};

export default Input;
