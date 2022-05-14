import styled from "styled-components";
import globalConfig from "../../../../utils";

interface IBody {
    isOpen: boolean;
}

export const Container = styled.div`
    padding: 10px 5px 0 5px;
    margin: 0 0 5px 0;

    @media (min-width: ${globalConfig.minWidth}) {
        display: none;
    }
`;

export const Title = styled.div`
    background: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    height: 55px;
    color: ${({ theme }) => theme.white};
    font-weight: bold;
    padding: 0 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

export const TitleDescription = styled.div`
    flex: 1;
`;

export const IconContainer = styled.div`
    padding: 0 12px;
`;

export const Body = styled.div<IBody>`
    height: ${({ isOpen }) => (isOpen ? "auto" : 0)};
    overflow: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    transition: 0.3s;
`;
