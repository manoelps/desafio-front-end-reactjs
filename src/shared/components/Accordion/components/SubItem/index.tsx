import { FC } from "react";
import { ItemContainer, SubItemContainer, SubItemTitle, SubItemValue, SubBody } from "./style";
import { IUsuario } from "../../../../interfaces/interface.usuario";

interface ISubItem {
    registro: IUsuario;
}

const SubItem: FC<ISubItem> = ({ registro }) => {
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
                    <div style={{ textAlign: "end" }}> editar | excluir</div>
                </SubItemContainer>
            </SubBody>
        </ItemContainer>
    );
};

export default SubItem;
