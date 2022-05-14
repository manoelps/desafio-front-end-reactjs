import { FC, useEffect } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { phoneNumber } from "../../../utils/validations";
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
import { normalizeCPF, normalizePhoneNumber } from "../../../utils/masks";

interface IFormulario {}

const schema = yup
    .object({
        name: yup.string().required(),
        cpf: yup.number().positive().required(),
        phone: yup.string().matches(phoneNumber).required(),
        email: yup.string().email().required(),
    })
    .required();

const Formulario: FC<IFormulario> = () => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<IUsuario>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: IUsuario) => console.log(data);

    const onError = (error: any) => {
        //console.log(error);
    };

    const phoneValue = watch("phone");

    useEffect(() => {
        setValue("phone", normalizePhoneNumber(phoneValue));
    }, [phoneValue]);

    const cpfValue = watch("cpf");

    useEffect(() => {
        setValue("cpf", normalizeCPF(cpfValue));
    }, [cpfValue]);

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
                                error={errors.name?.type && true}
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
                                error={errors.name?.type && true}
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
                    <Button type="submit" disable={false} isLoading={false} text="Cadastrar" />
                </ContainerButton>
            </form>
        </Container>
    );
};

export default Formulario;
