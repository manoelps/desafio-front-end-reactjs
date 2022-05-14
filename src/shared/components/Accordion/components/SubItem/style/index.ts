import styled from "styled-components";

interface ISubBody {
    isOpen?: boolean;
}

export const ItemContainer = styled.div`
    border-bottom: ${({ theme }) => `2px solid ${theme.primary}`};
    border-left: ${({ theme }) => `2px solid ${theme.primary}`};
    border-right: ${({ theme }) => `2px solid ${theme.primary}`};
`;

export const SubItemContainer = styled.div`
    padding: 4px 20px;
    border-top: ${({ theme }) => `2px solid ${theme.gray2}`};
`;

export const SubItemTitle = styled.div`
    font-weight: bold;
`;

export const SubItemValue = styled.div`
    margin-left: 20px;
`;

export const SubBody = styled.div<ISubBody>`
    background: ${({ theme }) => theme.gray3};
`;
