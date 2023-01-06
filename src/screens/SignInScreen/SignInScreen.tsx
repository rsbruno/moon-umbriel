import React, { useEffect, useState } from "react";
import { Keyboard, StatusBar } from "react-native";

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'
import * as yup from "yup";

import { Buttons } from "@components/Buttons";
import { Inputs } from "@components/Inputs";
import { themes } from "@themes/index";

import {
    ContainerSignIn, FooterContainer, FormContainer
} from "./SignInStyles";
import { useAuth } from "@contexts/authContext";
import { Modal } from "@components/Modal";
import { ComponentHeader } from "@components/ComponentHeader/ComponentHeader";
import { ComponentSafeKeyBoard } from "@components/ComponentSafeKeyBoard/ComponentSafeKeyBoard";
import { asyncStorageService } from "@services/asyncStorageService";
import { useNavigation } from "@react-navigation/native";
import { routes } from "@routes/routes";

interface FormSignInData {
    user: string;
    password: string;
}

const schema = yup.object({
    user: yup.string()
        .required("Informe seu Usuário ou Email")
        .when('$userIsEmail', (isEmail: boolean, schema: any) =>
            isEmail ? schema.email("O email informado não é válido") : schema
        ),
    password: yup.string()
        .required("Informe a sua senha")
}).required();

export function SignInScreen() {

    const { signIn } = useAuth()

    const navigation = useNavigation()

    const onBlurAll = () => Keyboard.dismiss()

    const [userIsEmail, setUserIsEmail] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { control, handleSubmit, watch, formState: { errors } } = useForm<FormSignInData>({
        defaultValues: {
            user: 'rsbruno',
            password: '123456',
        },
        resolver: yupResolver(schema),
        context: { userIsEmail }
    });

    const onSubmit = async (data) => {
        setIsLoading(true)
        signIn(data).finally(() => setIsLoading(false))

        const data2 = await asyncStorageService.getData(asyncStorageService.NAMES.STORAGE_USER)
        console.log(data2)
    };

    const userValue = watch('user')

    useEffect(() => setUserIsEmail(() => userValue && userValue.includes('@')), [userValue])

    const signInAccount = () => navigation.navigate(routes.publics.FIRST_SIGN_UP_SCREEN as never)

    return <>
        <StatusBar
            backgroundColor={themes.colors.BACKGROUND_900}
            barStyle='dark-content'
        />
        <ComponentSafeKeyBoard>
            <ContainerSignIn>
                <ComponentHeader headerTitle='Entrar' hideLeftContent hideRightContent />
                <FormContainer>
                    <Inputs.TextInput
                        control={control}
                        name="user"
                        placeholder='usuário ou email'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        errors={errors}
                    />
                    <Inputs.Password control={control} errors={errors} name="password" placeholder='senha' />
                    <Buttons.SimpleButton theme='dark' label='ENTRAR' onPress={handleSubmit(onSubmit)} isLoading={isLoading} />
                    <FooterContainer>
                        <Buttons.SimpleButton theme='simple' size={48.5} label='Google' onPress={handleSubmit(onSubmit)} />
                        <Buttons.SimpleButton theme='dark' size={48.5} label='Criar Conta' onPress={signInAccount} />
                    </FooterContainer>
                </FormContainer>
            </ContainerSignIn>
        </ComponentSafeKeyBoard>
    </>
}


