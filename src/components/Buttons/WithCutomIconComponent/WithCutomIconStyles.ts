import { themes } from '@themes/index'
import { ButtonComponentStyles } from '@themes/theming/ButtonComponentStyles';
import { ButtonTextStyles } from '@themes/theming/ButtonTextsStyles';
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import themez from 'styled-theming'

export const ContainerButton = styled(TouchableOpacity).attrs({
    activeOpacity: .8,
})`
    ${ButtonComponentStyles}
    width: ${props => props.size ? `${props.size}%` : '100%'};
    height: 50px;
    border-radius: 30px;
    overflow: hidden;
    margin: 8px 0;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    position: relative;
`

export const LabelButton = styled.Text`
    ${ButtonTextStyles}
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