import { FC } from "react";
import { useParams } from "react-router-dom";
import Formulario from "../../shared/components/Formulario";

interface ICadastrar {}

const Cadastrar: FC<ICadastrar> = () => {
    const { uuid } = useParams();

    return <Formulario uuid={uuid} />;
};

export default Cadastrar;
