import { FC } from "react";
import { FildError } from "./styles";
import errors from "../../../utils/errors.json";

interface IInputError {
    type: string;
    field: string;
}

const InputError: FC<IInputError> = ({ type, field }: IInputError) => {
    //@ts-expect-error
    return <FildError> {errors[field][type]}</FildError>;
};

export default InputError;
