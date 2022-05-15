import { FC, useEffect, useState } from "react";
import Content from "../../layout/Content";
import { ContainerButton } from "./styles";
import Topbar from "../../layout/Topbar";
import { Link } from "react-router-dom";
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

    // const getUsuariosLocalStorage = () => {
    //     if (localStorage.getItem("usuarios")) {
    //         const dadosLocalStorage: IUsuario[] = JSON.parse(localStorage.getItem("usuarios")!);

    //         setUsuarios(usuarios);
    //         // const buscaDadosUsuarioLocalStorage = dadosLocalStorage.find(
    //         //     (usuarios) => usuarios.uuid === uuid
    //         // );
    //     }
    // };

    useEffect(() => {
        console.log(usuarios);
    }, [usuarios]);

    return (
        <>
            <ContainerButton>
                <Link to={"/cadastro"} style={{ textDecoration: "none" }}>
                    <Button disable={false} isLoading={false} text={"Novo"} />
                </Link>
            </ContainerButton>

            <Table usuarios={usuarios ? usuarios : []} />

            <Accordion
                usuarioView={{
                    uuid: "5555",
                    name: "Joao da Silva",
                    cpf: "26899337649",
                    phone: "4233335555",
                    email: "joao@joaosilva.com.br",
                }}
            />
        </>
    );
};

export default Listar;
