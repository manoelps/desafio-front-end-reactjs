import { FC } from "react";

import Formulario from "../../shared/components/Formulario";

interface ICadastro {}

const Cadastro: FC<ICadastro> = () => {
    return (
        <>
            <Formulario cadastrar={true} uuid={"c8b4af71-747e-42a1-8513-d4242c86ac74"} />
        </>
    );
};

export default Cadastro;
