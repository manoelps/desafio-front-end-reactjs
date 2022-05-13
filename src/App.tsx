import { ThemeProvider } from "styled-components";
import theme from "./shared/theme";

import Listar from "../src/pages/listar/index";
import Cadastro from "../src/pages/cadastro/index";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route index element={<Listar />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
