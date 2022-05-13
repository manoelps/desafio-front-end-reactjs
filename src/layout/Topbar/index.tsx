import { FC } from "react";
import { Container, ContainerArea, Logo, LogoContainer } from "./styles";

interface ITopbar {}

const Topbar: FC<ITopbar> = () => (
    <Container>
        <ContainerArea>
            <LogoContainer>
                <Logo src={require("../../shared/images/logo.png")} alt="Logo" />
            </LogoContainer>
        </ContainerArea>
    </Container>
);

export default Topbar;
