import styled from "styled-components";
import globalConfig from "../../../utils";

export const Container = styled.nav`
    border-bottom: ${({ theme }) => `2px solid ${theme.primary}`};
    padding: 0 12px;
`;

export const ContainerArea = styled.div`
    width: 100%;
    max-width: ${globalConfig.maxWidth};
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
`;

export const LogoContainer = styled.div``;

export const Logo = styled.img`
    width: 155px;

    @media (min-width: ${globalConfig.minWidth}) {
        width: 250px;
    }
`;
