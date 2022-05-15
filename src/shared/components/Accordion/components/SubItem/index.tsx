import { FC } from "react";
import { ItemContainer, SubItemContainer, SubItemTitle, SubItemValue, SubBody } from "./style";
import { IUsuario } from "../../../../interfaces/interface.usuario";
import { Link } from "react-router-dom";

interface ISubItem {
    registro: IUsuario;
    handleDeleteUser: (uuid: any) => void;
}

const SubItem: FC<ISubItem> = ({ registro, handleDeleteUser }) => {
    return (
        <ItemContainer key={registro.cpf}>
            <SubBody>
                <SubItemContainer>
                    <SubItemTitle>E-mail</SubItemTitle>
                    <SubItemValue>{registro.email}</SubItemValue>
                </SubItemContainer>
                <SubItemContainer>
                    <SubItemTitle>CPF</SubItemTitle>
                    <SubItemValue>{registro.cpf}</SubItemValue>
                </SubItemContainer>
                <SubItemContainer>
                    <SubItemTitle>Telefone</SubItemTitle>
                    <SubItemValue>{registro.phone}</SubItemValue>
                </SubItemContainer>
                <SubItemContainer>
                    <div style={{ textAlign: "end" }}>
                        <Link to={`/cadastrar/${registro.cpf}`} style={{ textDecoration: "none" }}>
                            editar
                        </Link>{" "}
                        |{" "}
                        <span
                            onClick={() => handleDeleteUser(registro.cpf)}
                            style={{ cursor: "pointer", color: "red" }}
                        >
                            excluir
                        </span>
                    </div>
                </SubItemContainer>
            </SubBody>
        </ItemContainer>
    );
};

export default SubItem;
