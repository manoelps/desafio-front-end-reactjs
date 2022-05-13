import { FC, useEffect, useState } from "react";

import axios, { Axios, AxiosResponse } from "axios";
import api from "../../shared/api";
import { IUsuario } from "../../shared/interfaces/interface.usuario";

interface IContent {}

const Content: FC<IContent> = () => {
    const [usuarios, setUsuarios] = useState<IUsuario[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        getUsuarios();
    }, []);

    const getUsuarios = () => {
        axios
            .get(api)
            .then((res: AxiosResponse<IUsuario[]>) => {
                setUsuarios(res.data);

                console.log(res);

                // [
                //     {
                //       "name": "Joao da Silva",
                //       "cpf": "26899337649",
                //       "phone": "4233335555",
                //       "email": "joao@joaosilva.com.br"
                //     },
                //     {
                //       "name": "Maria Antonieta",
                //       "cpf": "65138896180",
                //       "phone": "1255553333",
                //       "email": "maria@mariaantonieta.com.br"
                //     },
                //     {
                //       "name": "Luiz Souza",
                //       "cpf": "32420496329",
                //       "phone": "1144446666",
                //       "email": "luiz@luizsouza.com.br"
                //     }
                //   ]
            })
            .catch((error) => console.log(error))
            .finally();
    };

    console.log(usuarios);

    return (
        <>
            <h1>Conteúdo página</h1>
        </>
    );
};

export default Content;
