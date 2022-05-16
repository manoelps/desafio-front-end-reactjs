import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ContainerButton, LinkBottom } from "./styles";

import Button from "../../shared/components/Button";
import Table from "../../shared/components/Table";
import Accordion from "../../shared/components/Accordion";
import { IUsuario } from "../../shared/interfaces/interface.usuario";
import axios, { AxiosResponse } from "axios";
import api from "../../shared/api";
import Loader from "../../shared/components/Loader";

interface IListar {}

const Listar: FC<IListar> = () => {
    const [usuarios, setUsuarios] = useState<IUsuario[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        getUsuarios();
    }, []);

    const handleDeleteUser = (uuid: any) => {
        if (window.confirm("Excluir usuário selecionado?")) {
            const novosDadosLocalStorage = usuarios.filter((item) => item.cpf !== uuid);

            localStorage.setItem("usuarios", JSON.stringify(novosDadosLocalStorage));

            getUsuarios();
        }
    };

    const getUsuarios = () => {
        const localData: IUsuario[] = JSON.parse(localStorage.getItem("usuarios")!);

        if (!localData) {
            setIsLoading(true);
            axios
                .get(api)
                .then((res: AxiosResponse<IUsuario[]>) => {
                    if (!localData) {
                        localStorage.setItem("usuarios", JSON.stringify(res.data));
                    }

                    setUsuarios(localData ? localData : res.data);
                })
                .catch((error) => console.log(error))
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            setUsuarios(localData);
        }
    };

    return (
        <>
            <ContainerButton>
                <LinkBottom>
                    <Link to={"/cadastrar"} style={{ textDecoration: "none" }} data-testid="botao-novo-link">
                        <Button disable={false} isLoading={false} text={"Novo"} type="submit" />
                    </Link>
                </LinkBottom>
            </ContainerButton>

            {isLoading ? (
                <Loader />
            ) : (
                <Table usuarios={usuarios ? usuarios : []} handleDeleteUser={handleDeleteUser} />
            )}

            {usuarios.map((usuarios) => (
                <Accordion key={usuarios.cpf} usuarioView={usuarios} handleDeleteUser={handleDeleteUser} />
            ))}
        </>
    );
};

export default Listar;
