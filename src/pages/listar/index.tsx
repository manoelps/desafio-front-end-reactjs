import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ContainerButton, LinkBottom } from "./styles";

import Button from "../../shared/components/Button";
import Table from "../../shared/components/Table";
import Accordion from "../../shared/components/Accordion";
import { IUsuario } from "../../shared/interfaces/interface.usuario";

interface IListar {}

const Listar: FC<IListar> = () => {
    const [usuarios, setUsuarios] = useState<IUsuario[]>([]);

    useEffect(() => {
        getUsuariosLocalStorage();
    }, []);

    const getUsuariosLocalStorage = async () => {
        const dadosLocalStorage: IUsuario[] = await JSON.parse(localStorage.getItem("usuarios")!);
        setUsuarios(dadosLocalStorage);
    };

    const handleDeleteUser = (uuid: any) => {
        if (window.confirm("Excluir usuário selecionado?")) {
            const novosDadosLocalStorage = usuarios.filter((item) => item.uuid !== uuid);

            localStorage.setItem("usuarios", JSON.stringify(novosDadosLocalStorage));

            getUsuariosLocalStorage();
        }
    };

    return (
        <>
            <ContainerButton>
                <LinkBottom>
                    <Link to={"/cadastrar"} style={{ textDecoration: "none" }}>
                        <Button disable={false} isLoading={false} text={"Novo"} type="submit" />
                    </Link>
                </LinkBottom>
            </ContainerButton>

            <Table usuarios={usuarios ? usuarios : []} handleDeleteUser={handleDeleteUser} />

            {usuarios.map((usuarios) => (
                <Accordion key={usuarios.uuid} usuarioView={usuarios} handleDeleteUser={handleDeleteUser} />
            ))}
        </>
    );
};

export default Listar;
