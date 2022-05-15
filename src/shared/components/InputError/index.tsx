import { FC } from "react";
import { FildError } from "./styles";

interface IInputError {
    message: string;
    type?: string;
    field?: string;
}

const InputError: FC<IInputError> = ({ message }: IInputError) => {
    return <FildError> {message}</FildError>;
};

export default InputError;
