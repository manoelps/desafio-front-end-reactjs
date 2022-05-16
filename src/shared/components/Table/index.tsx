import { FC } from "react";
import { Link } from "react-router-dom";
import { maskCPFNumber, maskPhoneNumber } from "../../../utils/masks";
import { IUsuario } from "../../interfaces/interface.usuario";
import { CustomTable, TableHead, TableBody, TableRow, TableHeader, TableColumn } from "./styles";

interface ITable {
    usuarios: IUsuario[];
    handleDeleteUser: (uuid: any) => void;
}

const Table: FC<ITable> = ({ usuarios, handleDeleteUser }) => {
    return (
        <CustomTable data-testid="table">
            <TableHead>
                <TableRow index={0}>
                    <TableHeader style={{ textAlign: "left" }}>Nome</TableHeader>
                    <TableHeader>E-mail</TableHeader>
                    <TableHeader>CPF</TableHeader>
                    <TableHeader>Telefone</TableHeader>
                    <TableHeader style={{ textAlign: "right" }}>Ações</TableHeader>
                </TableRow>
            </TableHead>

            <TableBody>
                {usuarios.map(({ name, email, cpf, phone }, index) => (
                    <TableRow index={index} key={index} data-testid="table-rows">
                        <TableColumn style={{ textAlign: "left" }}>{name}</TableColumn>
                        <TableColumn>{email}</TableColumn>
                        <TableColumn>{maskCPFNumber(cpf)}</TableColumn>
                        <TableColumn>{maskPhoneNumber(phone)}</TableColumn>
                        <TableColumn style={{ textAlign: "right" }}>
                            <Link
                                to={`/cadastrar/${cpf}`}
                                style={{ textDecoration: "none", color: "blue" }}
                                data-testid="table-edit-link"
                            >
                                editar
                            </Link>{" "}
                            |{" "}
                            <span
                                onClick={() => handleDeleteUser(cpf)}
                                style={{ cursor: "pointer", color: "red" }}
                            >
                                excluir
                            </span>
                        </TableColumn>
                    </TableRow>
                ))}
            </TableBody>
        </CustomTable>
    );
};

export default Table;
