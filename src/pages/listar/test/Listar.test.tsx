import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Listar from "..";

describe("Teste de Lista", () => {
    const urlTelaCadastro = "http://localhost/cadastrar";
    const rotaTelacadastro = "/cadastrar";

    test("Verifica se a url do botão novo está correta", () => {
        render(
            <BrowserRouter>
                <Listar />
            </BrowserRouter>
        );

        const botaoNovoLink = screen.getByTestId("botao-novo-link");

        expect(botaoNovoLink.getAttribute("href")).toBe(rotaTelacadastro);
    });

    test("Verifica se a navegação para  a tela de cadastro funciona", () => {
        render(
            <BrowserRouter>
                <Listar />
            </BrowserRouter>
        );

        const botaoNovoLink = screen.getByTestId("botao-novo-link");

        fireEvent.click(botaoNovoLink);

        expect(window.location.href).toBe(urlTelaCadastro);
    });
});
