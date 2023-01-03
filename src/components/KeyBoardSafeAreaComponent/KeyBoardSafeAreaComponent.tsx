import { ScrollView } from "moti";
import React, { ReactNode } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

interface IKeyBoardSafeAreaComponentProps {
    keyboardVerticalOffset?: number,
    children: ReactNode;
}

export function KeyBoardSafeAreaComponent(props: IKeyBoardSafeAreaComponentProps) {
    const { keyboardVerticalOffset, children } = props
    return <>
        <KeyboardAvoidingView
            behavior='height'
            style={{ flex: 1 }}
            keyboardVerticalOffset={40}
        >
            {children}
        </KeyboardAvoidingView>
    </>
}
