import { FC } from "react";
import Button from "../../shared/components/Button";

interface IListar {}

const Listar: FC<IListar> = () => {
    return (
        <>
            <Button disable={true} isLoading={false} text="Cadastrar" type="submit" />
        </>
    );
};

export default Listar;
