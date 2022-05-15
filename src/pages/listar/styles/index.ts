import styled from "styled-components";
import globalConfig from "../../../utils";

export const ContainerButton = styled.div`
    width: 100%;

    @media (min-width: ${globalConfig.minWidth}) {
        display: flex;
        justify-content: flex-end;
        margin: 30px 0;
    }
`;
