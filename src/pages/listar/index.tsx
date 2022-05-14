import { FC } from "react";
import Accordion from "../../shared/components/Accordion";
import Table from "../../shared/components/Table";

interface IListar {}

const Listar: FC<IListar> = () => {
    return (
        <>
            <Table
                usuarios={[
                    {
                        name: "Joao da Silva",
                        cpf: "26899337649",
                        phone: "4233335555",
                        email: "joao@joaosilva.com.br",
                    },
                    {
                        name: "Maria Antonieta",
                        cpf: "65138896180",
                        phone: "1255553333",
                        email: "maria@mariaantonieta.com.br",
                    },
                    {
                        name: "Luiz Souza",
                        cpf: "32420496329",
                        phone: "1144446666",
                        email: "luiz@luizsouza.com.br",
                    },
                    {
                        name: "Marcos Silva",
                        cpf: "24146898030",
                        phone: "1188887777",
                        email: "marcos@marcossilva.com.br",
                    },
                ]}
            />

            <Accordion
                usuarioView={{
                    name: "Joao da Silva",
                    cpf: "26899337649",
                    phone: "4233335555",
                    email: "joao@joaosilva.com.br",
                }}
            />

            <Accordion
                usuarioView={{
                    name: "Joao da Silva",
                    cpf: "26899337649",
                    phone: "4233335555",
                    email: "joao@joaosilva.com.br",
                }}
            />
            <Accordion
                usuarioView={{
                    name: "Joao da Silva",
                    cpf: "26899337649",
                    phone: "4233335555",
                    email: "joao@joaosilva.com.br",
                }}
            />
            <Accordion
                usuarioView={{
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
