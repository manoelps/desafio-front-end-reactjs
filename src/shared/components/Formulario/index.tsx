import { FC, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import InputError from "../InputError";
import Button from "../Button";

import {
    Container,
    FormGridContainer,
    InputCard,
    Title,
    InputContainer,
    InputText,
    ContainerButton,
} from "./styles/index";
import { IUsuario } from "../../interfaces/interface.usuario";
import { maskCPFNumber, maskPhoneNumber } from "../../../utils/masks";
import { useNavigate } from "react-router-dom";

interface IFormulario {
    uuid: string | undefined;
}

const schema = yup
    .object({
        name: yup.string().min(3).required(),
        cpf: yup.string().min(14).required(),
        phone: yup.string().required(),
        email: yup.string().email().required(),
    })
    .required();

const Formulario: FC<IFormulario> = ({ uuid }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<IUsuario>({
        resolver: yupResolver(schema),
    });

    const onlyNumber = (value: string) => {
        return value.replace(/[^0-9]/g, "");
    };

    const onSubmit = (data: IUsuario) => {
        const getDadosLocalStorage: IUsuario[] = JSON.parse(localStorage.getItem("usuarios")!);

        if (uuid) {
            if (isLoading) {
            } else {
                const novosDadosLocalStorage = getDadosLocalStorage.map((obj) =>
                    obj.cpf === uuid
                        ? {
                              ...obj,
                              name: nameValue,
                              email: emailValue,
                              cpf: onlyNumber(cpfValue),
                              phone: onlyNumber(phoneValue),
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
                    (usuarios) => maskCPFNumber(usuarios.cpf) === maskCPFNumber(cpfValue)
                );

                if (buscaDadosUsuarioLocalStorage?.cpf) {
                    alert("CPF/Usuário já cadastrado!");
                } else {
                    data = {
                        ...data,
                        name: nameValue,
                        email: emailValue,
                        cpf: onlyNumber(cpfValue),
                        phone: onlyNumber(phoneValue),
                    };

                    getDadosLocalStorage.push(data);
                    localStorage.setItem("usuarios", JSON.stringify(getDadosLocalStorage));
                    animateLoading(1000);
                    setIsLoading(true);
                }
            }
        }
    };

    const nameValue = watch("name");
    const cpfValue = watch("cpf");
    const phoneValue = watch("phone");
    const emailValue = watch("email");

    const animateLoading = (time: number) => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
            if (!isLoading) {
                navigate("/", { replace: true });
            }
        }, time);

        return () => clearTimeout(timeout);
    };

    const onError = (error: any) => {
        //console.log(error);
    };

    const isButtonDisabled = () => {
        return nameValue === "" || cpfValue === "" || phoneValue === "" || emailValue === "";
    };

    useEffect(() => {
        setValue("phone", maskPhoneNumber(phoneValue));
    }, [phoneValue]);

    useEffect(() => {
        setValue("cpf", maskCPFNumber(cpfValue));
    }, [cpfValue]);

    useEffect(() => {
        if (uuid) {
            const dadosLocalStorage: IUsuario[] = JSON.parse(localStorage.getItem("usuarios")!);

            const buscaDadosUsuarioLocalStorage = dadosLocalStorage.find((usuarios) => usuarios.cpf === uuid);

            setValue("name", buscaDadosUsuarioLocalStorage?.name);
            setValue("cpf", maskCPFNumber(buscaDadosUsuarioLocalStorage?.cpf!));
            setValue("phone", maskCPFNumber(buscaDadosUsuarioLocalStorage?.phone!));
            setValue("email", buscaDadosUsuarioLocalStorage?.email);
        }
    }, []);

    const handleBackPage = () => {
        navigate("/", { replace: true });
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <FormGridContainer>
                    <InputCard>
                        <Title>Nome completo (sem abreviações)</Title>
                        <InputContainer>
                            <InputText
                                {...register("name")}
                                type="text"
                                name="name"
                                placeholder="Ex: José Santos"
                                maxLength={250}
                                error={errors.name?.type && true}
                            />
                        </InputContainer>
                        {errors.name?.type && <InputError type={errors.name.type} field="name" />}
                    </InputCard>

                    <InputCard>
                        <Title>E-mail</Title>
                        <InputContainer>
                            <InputText
                                {...register("email")}
                                type="email"
                                name="email"
                                placeholder="Ex: josesantos@gmail.com"
                                maxLength={250}
                                error={errors.email?.type && true}
                            />
                        </InputContainer>
                        {errors.email?.type && <InputError type={errors.email.type} field="email" />}
                    </InputCard>

                    <InputCard>
                        <Title>CPF</Title>
                        <InputContainer>
                            <InputText
                                {...register("cpf")}
                                type="text"
                                name="cpf"
                                placeholder="Ex: 413.871.851-60"
                                maxLength={14}
                                error={errors.cpf?.type && true}
                                readOnly={uuid ? true : false}
                            />
                        </InputContainer>
                        {errors.cpf?.type && <InputError type={errors.cpf.type} field="cpf" />}
                    </InputCard>

                    <InputCard>
                        <Title>Telefone</Title>
                        <InputContainer>
                            <InputText
                                {...register("phone")}
                                type="text"
                                name="phone"
                                placeholder="Ex: (42) 99999-9999"
                                maxLength={15}
                                error={errors.phone?.type && true}
                            />
                        </InputContainer>
                        {errors.phone?.type && <InputError type={errors.phone.type} field="phone" />}
                    </InputCard>
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
                        disable={isButtonDisabled()}
                        isLoading={isLoading}
                        text={uuid ? "Salvar" : "Cadastrar"}
                    />
                </ContainerButton>
            </form>
        </Container>
    );
};

export default Formulario;
