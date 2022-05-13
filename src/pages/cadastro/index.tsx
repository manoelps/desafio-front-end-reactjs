import { FC } from "react";

import Content from "../../layout/Content";
import Topbar from "../../layout/Topbar";

interface ICadastro {}

const Cadastro: FC<ICadastro> = () => {
    return (
        <>
            <Topbar />
            <Content />
        </>
    );
};

export default Cadastro;
