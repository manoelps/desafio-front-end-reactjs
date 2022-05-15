import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import theme from "./shared/theme";

import Listar from "../src/pages/listar/index";
import Cadastrar from "./pages/cadastrar/index";

import Topbar from "./layout/Topbar";
import Content from "./layout/Content";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Topbar />
            <Content>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Listar />} />
                        <Route path="/cadastrar/:uuid" element={<Cadastrar />} />
                        <Route path="/cadastrar" element={<Cadastrar />} />
                    </Routes>
                </BrowserRouter>
            </Content>
        </ThemeProvider>
    );
}

export default App;
