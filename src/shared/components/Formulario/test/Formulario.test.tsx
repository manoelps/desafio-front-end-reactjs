import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Formulario from "..";

describe("Teste Tela Formulario", () => {
    const urlTelaInicial = "http://localhost/";

    test("Verifica se a navegação para  a tela de listagem funciona", () => {
        render(
            <BrowserRouter>
                <Formulario uuid={undefined} />
            </BrowserRouter>
        );

        const botaoCancelar = screen.getByText("Cancelar");

        fireEvent.click(botaoCancelar);

        expect(window.location.href).toBe(urlTelaInicial);
    });
});
