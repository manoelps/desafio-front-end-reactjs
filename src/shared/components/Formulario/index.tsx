import { FC, useEffect, useState } from "react";

import { useFormik } from "formik";

import * as Yup from "yup";
import { setLocale } from "yup";

import { Container, FormGridContainer, ContainerButton } from "./styles/index";
import Input from "../Input";
import Button from "../Button";
import { maskPhoneNumber, maskCPFNumber } from "../../../utils/masks";
import { useNavigate } from "react-router-dom";
import { IUsuario } from "../../interfaces/interface.usuario";

interface IFormulario {
    uuid: string | undefined;
}

setLocale({
    mixed: {
        required: "Campo obrigatório",
    },
    string: {
        email: "Preencha um e-mail válido",
        min: "Campo deve conter 3 caracteres ou mais",
        matches: "O número de celular informado é inválido",
    },
});

const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).required(),
    cpf: Yup.string().required(),
    phone: Yup.string().required(),
    email: Yup.string().email().required(),
});

const Formulario: FC<IFormulario> = ({ uuid }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: "",
            cpf: "",
            phone: "",
            email: "",
        },
        validationSchema,
        onSubmit: (values) => handleBotaoSalvar(values),
    });

    const onlyNumber = (value: string) => {
        return value.replace(/[^0-9]/g, "");
    };

    const handleBotaoSalvar = (values: { name: string; cpf: string; phone: string; email: string }) => {
        const getDadosLocalStorage: IUsuario[] = JSON.parse(localStorage.getItem("usuarios")!);

        if (uuid) {
            if (isLoading) {
            } else {
                const novosDadosLocalStorage = getDadosLocalStorage.map((obj) =>
                    obj.cpf === uuid
                        ? {
                              ...obj,
                              name: values.name,
                              email: values.email,
                              cpf: onlyNumber(values.cpf),
                              phone: onlyNumber(values.phone),
                          }
                        : obj
                );

                localStorage.setItem("usuarios", JSON.stringify(novosDadosLocalStorage));
            }

            animateLoading(1000);
            setIsLoading(true);
        } else {
            if (!isLoading) {
                const buscaDadosUsuarioLocalStorage = getDadosLocalStorage.find(
                    (usuarios) => maskCPFNumber(usuarios.cpf) === maskCPFNumber(values.cpf)
                );

                if (buscaDadosUsuarioLocalStorage?.cpf) {
                    alert("CPF/Usuário já cadastrado!");
                } else {
                    values = {
                        ...values,
                        name: values.name,
                        email: values.email,
                        cpf: onlyNumber(values.cpf),
                        phone: onlyNumber(values.phone),
                    };

                    getDadosLocalStorage.push(values);
                    localStorage.setItem("usuarios", JSON.stringify(getDadosLocalStorage));
                    animateLoading(1000);
                    setIsLoading(true);
                }
            }
        }
    };

    useEffect(() => {
        formik.setFieldValue("phone", maskPhoneNumber(formik.values.phone));
    }, [formik.values.phone]);

    useEffect(() => {
        formik.setFieldValue("cpf", maskCPFNumber(formik.values.cpf));
    }, [formik.values.cpf]);

    const animateLoading = (time: number) => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
            if (!isLoading) {
                navigate("/", { replace: true });
            }
        }, time);

        return () => clearTimeout(timeout);
    };

    useEffect(() => {
        if (uuid) {
            const dadosLocalStorage: IUsuario[] = JSON.parse(localStorage.getItem("usuarios")!);

            const buscaDadosUsuarioLocalStorage = dadosLocalStorage.find((usuarios) => usuarios.cpf === uuid);

            formik.setFieldValue("name", buscaDadosUsuarioLocalStorage?.name);
            formik.setFieldValue("cpf", maskCPFNumber(buscaDadosUsuarioLocalStorage?.cpf!));
            formik.setFieldValue("phone", maskPhoneNumber(buscaDadosUsuarioLocalStorage?.phone!));
            formik.setFieldValue("email", buscaDadosUsuarioLocalStorage?.email);
        }
    }, []);

    const handleBackPage = () => {
        navigate("/", { replace: true });
    };

    return (
        <Container>
            <form onSubmit={formik.handleSubmit}>
                <FormGridContainer>
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

                    <Input
                        title={"E-mail"}
                        type={"text"}
                        error={formik.errors.email ? true : false}
                        name={"email"}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        placeholder="Ex: josesantos@gmail.com"
                        maxLength={250}
                        message={formik.errors.email}
                    />

                    <Input
                        title={"CPF"}
                        type={"text"}
                        error={formik.errors.cpf ? true : false}
                        name={"cpf"}
                        onChange={formik.handleChange}
                        value={formik.values.cpf}
                        placeholder="Ex: 413.871.851-60"
                        maxLength={14}
                        message={formik.errors.cpf}
                        readOnly={uuid ? true : false}
                    />

                    <Input
                        title={"Telefone"}
                        type={"text"}
                        error={formik.errors.phone ? true : false}
                        name={"phone"}
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        placeholder="Ex: (42) 99999-9999"
                        maxLength={15}
                        message={formik.errors.phone}
                    />

                    {formik.setTouched.name}
                </FormGridContainer>

                <ContainerButton>
                    <Button
                        type="button"
                        disable={isLoading ? true : false}
                        isLoading={false}
                        text={"Cancelar"}
                        handleClick={() => {
                            handleBackPage();
                        }}
                    />

                    <Button
                        type={"submit"}
                        disable={false}
                        isLoading={isLoading}
                        text={uuid ? "Salvar" : "Cadastrar"}
                    />
                </ContainerButton>
            </form>
        </Container>
    );
};

export default Formulario;
