import { ScrollView } from "moti";
import React, { ReactNode } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

interface IKeyBoardWrapperFormsComponentProps {
    keyboardVerticalOffset?: number,
    children: ReactNode;
}

export function KeyBoardWrapperFormsComponent(props: IKeyBoardWrapperFormsComponentProps) {
    const { keyboardVerticalOffset, children } = props
    return <>
        <KeyboardAvoidingView
            behavior={Platform.OS === 'android' ? 'height' : 'padding'}
            style={{ flex: 1 }}
            keyboardVerticalOffset={keyboardVerticalOffset || 40}
        >
            <ScrollView contentContainerStyle={{ width: '100%', height: '100%' }}>
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    </>
}
