import { FC } from "react";

import { Container } from "./styles";

interface IContent {
    children: JSX.Element;
}

const Content: FC<IContent> = ({ children }) => {
    return <Container>{children}</Container>;
};

export default Content;
