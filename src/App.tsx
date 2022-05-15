import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

import { ThemeProvider } from "styled-components";
import theme from "./shared/theme";

import Listar from "../src/pages/listar/index";
import Cadastro from "../src/pages/cadastro/index";

import Topbar from "./layout/Topbar";
import Content from "./layout/Content";

import { IUsuario } from "./shared/interfaces/interface.usuario";
import api from "./shared/api";

function App() {
    const [usuarios, setUsuarios] = useState<IUsuario[]>([]);

    useEffect(() => {
        getUsuarios();
    }, []);

    const getUsuarios = () => {
        axios
            .get(api)
            .then((res: AxiosResponse<IUsuario[]>) => {
                setUsuarios(res.data);

                if (!localStorage.getItem("usuarios")) {
                    localStorage.setItem("usuarios", JSON.stringify(res.data));
                }
            })
            .catch((error) => console.log(error))
            .finally(() => {});
    };

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Topbar />
                <Content>
                    <Routes>
                        <Route index element={<Listar />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                    </Routes>
                </Content>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
