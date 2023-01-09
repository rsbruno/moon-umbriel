import React, { ReactNode, useState } from "react";
import { Controller } from "react-hook-form";
import { TextInputProps } from "react-native";
import Picker from 'react-native-picker-horizontal';


interface IWheelComponentProps extends TextInputAdditionalProps, TextInputProps {
    renderItem: (item: any, index: any) => JSX.Element;
    data: any,
    initialIndex?: number
}

export default function WheelComponent({ control, name, errors, renderItem, data, initialIndex, ...props }: IWheelComponentProps) {
    return <>
        <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
                <Picker
                    //@ts-ignore
                    data={data}
                    renderItem={renderItem}
                    itemWidth={50}
                    onChange={onChange}
                    initialIndex={value || initialIndex || 0}
                />
            )}
            name={name}
        />
    </>
}