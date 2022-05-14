import { FC } from "react";
import { normalizeCPF, normalizePhoneNumber } from "../../../utils/masks";
import { IUsuario } from "../../interfaces/interface.usuario";
import { CustomTable, TableHead, TableBody, TableRow, TableHeader, TableColumn } from "./styles";

interface ITable {
    usuarios: IUsuario[];
}

const Table: FC<ITable> = ({ usuarios }) => (
    <CustomTable>
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
                <TableRow index={index} key={index}>
                    <TableColumn style={{ textAlign: "left" }}>{name}</TableColumn>
                    <TableColumn>{email}</TableColumn>
                    <TableColumn>{normalizeCPF(cpf)}</TableColumn>
                    <TableColumn>{normalizePhoneNumber(phone)}</TableColumn>
                    <TableColumn style={{ textAlign: "right" }}>editar | exluir</TableColumn>
                </TableRow>
            ))}
        </TableBody>
    </CustomTable>
);

export default Table;