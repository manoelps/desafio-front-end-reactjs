import { fireEvent, getByLabelText, render, screen } from "@testing-library/react";
import Input from "..";
import { useFormik } from "formik";

const MocketForm = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            cpf: "",
            phone: "",
            email: "",
        },
        onSubmit: (values) => {},
    });

    return (
        <Input
            title={"Nome completo (sem abreviações)"}
            type={"text"}
            error={formik.errors.name ? true : false}
            name={"name"}
            onChange={formik.handleChange}
            value={formik.values.name}
            message={formik.errors.name}
            readOnly={false}
            placeholder="Ex: José Santos"
            maxLength={250}
        />
    );
};

describe("Teste de input", () => {
    test("Verifica se o input está na página", () => {
        const placeHolder = "Ex: José Santos";
        render(
            <Input
                title={"Nome"}
                type={"text"}
                error={false}
                name={"name"}
                value={""}
                placeholder={placeHolder}
                onChange={() => {}}
            />
        );

        const input = screen.getByPlaceholderText(placeHolder);

        expect(input).toBeInTheDocument();
    });

    test("Verifica se o input mostra o que está sendo digitado", async () => {
        const placeHolder = "Ex: José Santos";
        const nome = "José Santos";
        render(<MocketForm />);

        const input = screen.getByPlaceholderText(placeHolder);

        fireEvent.change(input, { target: { value: nome } });

        expect(input).toHaveValue(nome);
    });
});
