import { themes } from '@themes/index'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import themez from 'styled-theming'

const ButtonDark = {
    border: `solid 1px ${themes.colors.DARK_500}`,
    background: themes.colors.DARK_500
};

const ButtonDisabled = {
    border: `solid 1px ${themes.colors.DARK_200}`,
    background: themes.colors.DARK_200
};

const ButtonModeStyle = themez('mode', {
    dark: ButtonDark,
    disabled: ButtonDisabled
});

export const ContainerButton = styled(TouchableOpacity).attrs({
    activeOpacity: .8,
})`
    ${ButtonModeStyle}
    width: 100%;
    height: 50px;
    border-radius: 30px;
    overflow: hidden;
    margin: 8px 0;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    position: relative;
`

const LabelDark = {
    color: themes.colors.LIGHT_500
};

const LabelDisabled = {
    color: themes.colors.DARK_500
};

const LabelModeStyle = themez('mode', {
    dark: LabelDark,
    disabled: LabelDisabled
});

export const LabelButton = styled.Text`
    ${LabelModeStyle}
    font-family: ${themes.font.family.TITLE_MEDIUM};
    font-size: ${themes.font.size.NORMAL}px;
`

const IconInLeft = {
    position: 'absolute',
    left: 0,
};

const IconInRight = {
    position: 'absolute',
    right: 0,
};

const IconNormal = {
    position: 'relative',
};


const IconModeStyle = themez('iconPosition', {
    left: IconInLeft,
    right: IconInRight,
    normal: IconNormal
});


export const IconContainer = styled.View`
    ${IconModeStyle}
    width: 50px;
    height: 50px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
`