import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Table from "..";

const MockedTable = () => {
    return (
        <BrowserRouter>
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
                handleDeleteUser={() => {}}
            />
        </BrowserRouter>
    );
};

describe("Teste de Tablela", () => {
    test("Verifica se a tabela existe", () => {
        render(<MockedTable />);

        const table = screen.getByTestId("table");

        expect(table).toBeInTheDocument();
    });

    test("Verifica se os dados foram carregados", () => {
        render(<MockedTable />);

        const tableRows = screen.getAllByTestId("table-rows");

        expect(tableRows).toHaveLength(4);
    });

    test("Verifica se a url do botão editar está correta", () => {
        render(<MockedTable />);

        const tableEditLink = screen.getAllByTestId("table-edit-link");

        expect(tableEditLink[0].getAttribute("href")).toBe("/cadastrar/26899337649");
    });
});
