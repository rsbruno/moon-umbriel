import { useAnimationState, useDynamicAnimation } from "moti";
import React, { useEffect, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, StatusBar, ModalProps, Dimensions, ActivityIndicator } from "react-native";
import { ContentLoading, ContentLoadingText, ModalContainer } from "./LoadingStyles";

interface ILoadingComponentProps extends ModalProps {

}


export default function LoadingComponent(props: ILoadingComponentProps) {
    const animation = useDynamicAnimation(() => ({
        opacity: 0,
        height: 0,
    }))

    useEffect(() => {
        const currentheight = Dimensions.get('window').height
        if (props.visible) {
            animation.animateTo({
                height: currentheight,
                opacity: [0, { value: 1, delay: 100, }],
            })
        } else {
            animation.animateTo({
                opacity: 0,
                height: [currentheight, { value: 0, delay: 100 }],
            })
        }
    }, [props.visible]);

    return <>
        <ModalContainer state={animation} transition={{
            type: 'timing',
        }}>
            <ContentLoading>
                <ActivityIndicator size={50}  color='#000' />
                <ContentLoadingText>Só um momento...</ContentLoadingText>
            </ContentLoading>
        </ModalContainer>
    </>
}

