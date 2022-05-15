import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

import { ThemeProvider } from "styled-components";
import theme from "./shared/theme";

import Listar from "../src/pages/listar/index";
import Cadastrar from "./pages/cadastrar/index";

import Topbar from "./layout/Topbar";
import Content from "./layout/Content";

import { IUsuario } from "./shared/interfaces/interface.usuario";
import api from "./shared/api";

function App() {
    useEffect(() => {
        getUsuarios();
    }, []);

    const getUsuarios = () => {
        axios
            .get(api)
            .then((res: AxiosResponse<IUsuario[]>) => {
                if (!localStorage.getItem("usuarios")) {
                    localStorage.setItem("usuarios", JSON.stringify(res.data));
                }
            })
            .catch((error) => console.log(error))
            .finally(() => {});
    };

    return (
        <ThemeProvider theme={theme}>
            <Topbar />
            <Content>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Listar />} />
                        <Route path="/cadastrar/:uuid" element={<Cadastrar />} />
                        <Route path="/cadastrar" element={<Cadastrar />} />
                        <Route element={<Listar />} />
                    </Routes>
                </BrowserRouter>
            </Content>
        </ThemeProvider>
    );
}

export default App;
