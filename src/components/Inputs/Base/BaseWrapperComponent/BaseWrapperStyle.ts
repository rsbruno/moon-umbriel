import { themes } from '@themes/index'
import { MotiView } from 'moti'
import styled from 'styled-components/native'
import themez from 'styled-theming';

const InputNormalStyle = {
    border: `solid 1px ${themes.colors.DARK_200}`
};

const InputErrorStyle = {
    border: `solid 1px ${themes.colors.ERROR_500}`
};

const InputStatusStyle = themez('mode', {
    normal: InputNormalStyle,
    error: InputErrorStyle
});

export const BaseContainer = styled.View`
    ${InputStatusStyle}
    position: relative;
    width: ${props => props.size ? `${props.size}%` : '100%'};
    height: 50px;
    border-radius: 30px;
    padding: 0 25px;
    margin-top: ${props => props.removeMargin ? 0 : '13px'};
`

export const ContainerLabel = styled(MotiView)`
    background: #FFF;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:-20%;
    left: 20px;
    padding: 0 8px;
`

const LabelNormalStyle = {
    color: themes.colors.DARK_200
};

const LabelErrorStyle = {
    color: themes.colors.ERROR_500
};

const LabelStatusStyle = themez('mode', {
    normal: LabelNormalStyle,
    error: LabelErrorStyle
});

export const ContainerText = styled.Text`
    ${LabelStatusStyle}
    font-family: ${themes.font.family.TITLE_NORMAL};
    text-transform: capitalize;
`

export const ErrorView = styled.View`
    position: absolute;
    bottom: 0;
    left: 25px;
`

export const ErrorText = styled.Text`
    color: ${themes.colors.ERROR_500};
    font-family: ${themes.font.family.TITLE_NORMAL};
    font-size: ${themes.font.size.SM}px;
`