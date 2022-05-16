import { FC } from "react";
import InputError from "../InputError";

import { InputText, Container, InputContainer, Title, InputCard } from "./styles/index";

interface IInput {
    title: string;
    message?: string;
    type: string;
    error: boolean;
    name: string;
    value: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    readOnly?: boolean;
    maxLength?: number;
}

const Input: FC<IInput> = ({
    title,
    message,
    type,
    error,
    name,
    value,
    placeholder,
    onChange,
    readOnly,
    maxLength,
}) => {
    return (
        <Container>
            <InputCard>
                <Title>{title}</Title>
                <InputContainer>
                    <InputText
                        type={type}
                        name={name}
                        onChange={onChange}
                        error={error}
                        value={value}
                        placeholder={placeholder}
                        readOnly={readOnly}
                        maxLength={maxLength}
                    />
                </InputContainer>
            </InputCard>
        </Container>
    );
};

export default Input;
