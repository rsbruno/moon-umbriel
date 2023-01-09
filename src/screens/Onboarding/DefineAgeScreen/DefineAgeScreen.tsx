import { Buttons } from "@components/Buttons";
import React from "react";
import { Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';

import { ButtonConfigContainer, ButtonConfigTitle, DefineAgeContainer, HeaderPiker, OnboardingInputs, ResultPikerText, WheelPikerContainer, WheelPikerOption, WheelPikerTitle, WhellComponent } from './DefineAgeStyles'
import { Inputs } from "@components/Inputs";
import { useForm } from "react-hook-form";

const rednerItem = (item, index) => (
    <WheelPikerOption>
        {parseFloat(item).toFixed(2)}
    </WheelPikerOption>
);

interface ButtonOnboardingConfigProps {
    title: string;
    config: string;
}

const Items = Array.from(Array(100).keys());

const ButtonOnboardingConfig = ({ title, config }: ButtonOnboardingConfigProps) => {
    return <>
        <ButtonConfigContainer>
            <ButtonConfigTitle>{title}</ButtonConfigTitle>
            <ResultPikerText>{config}</ResultPikerText>
            <Buttons.OnlyIcon
                IconComponent={<Feather
                    name={'chevron-right'}
                    size={24}
                />}
                theme='gray'
                size={50}
                sizeUnity='px'
                bdRadius={15}
            />
        </ButtonConfigContainer>
    </>
}

export function DefineAgeScreen() {

    const { control, handleSubmit, formState: { errors, isValid }, getValues } = useForm<any>({
    });


    return <>
        <DefineAgeContainer>
            <OnboardingInputs>
                <ButtonOnboardingConfig title="Idade" config="25 anos" />
                <ButtonOnboardingConfig title="Peso" config="70 kg" />
                <ButtonOnboardingConfig title="Altura" config="1,79 m" />
            </OnboardingInputs>




            <WheelPikerContainer>
                <HeaderPiker />
                <WheelPikerTitle>Altura (m)</WheelPikerTitle>
                <WhellComponent>
                    <Inputs.Wheel
                        control={control} errors={null}
                        renderItem={rednerItem}
                        initialIndex={2}
                        data={Items}
                        name='teste'
                    />
                </WhellComponent>
                <Buttons.SimpleButton label="Confirmar" theme='light' size={50} />
            </WheelPikerContainer>

            {/* <PickerComp /> */}
        </DefineAgeContainer>
    </>

}