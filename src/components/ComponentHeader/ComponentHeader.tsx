import { themes } from "@themes/index";
import React from "react";
import { ButtonEvent, CenterContent, Container, HeaderTitle, LeftContent, RightContent } from "./HeaderStyles";
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

interface IHeaderComponentProps {
    headerTitle?: string,
    hideLeftContent?: boolean,
    hideRightContent?: boolean,
    onPressLeftIcon?: () => void
}

export function ComponentHeader({ headerTitle, hideLeftContent, hideRightContent, onPressLeftIcon }: IHeaderComponentProps) {
    return <>
        <Container>
            <LeftContent>
                {!hideLeftContent &&
                    <ButtonEvent onPress={() => onPressLeftIcon && onPressLeftIcon()}>
                        <AntDesign name="arrowleft" size={26} color={themes.colors.DARK_500} />
                    </ButtonEvent>
                }
            </LeftContent>
            <CenterContent>
                {headerTitle && <HeaderTitle>{headerTitle}</HeaderTitle>}
            </CenterContent>
            <RightContent>
                {!hideRightContent &&
                    <ButtonEvent>
                        <EvilIcons name="gear" size={32} color={themes.colors.DARK_500} />
                    </ButtonEvent>
                }
            </RightContent>
        </Container>
    </>
}