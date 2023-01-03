import { themes } from '@themes/index'
import { MotiView } from 'moti'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'

export const Container = styled(TouchableOpacity).attrs({
    activeOpacity: .8,
})`
    width: 100%;
    height: 50px;
    flex-direction:row;
    justify-content: flex-start;
    align-items:center;
`

export const CheckBoxWrapper = styled.View`
    width: 16px;
    height: 16px;
    border: solid 1px ${themes.colors.DARK_500};
    align-items: center;
    justify-content: center;
`

export const CheckBoxbackground = styled(MotiView)`
    width: 84%;
    height: 84%;
    background: ${themes.colors.DARK_500};
`

export const CheckBoxText = styled.Text`
    font-family: ${themes.font.family.TITLE_NORMAL};
    font-size: ${themes.font.size.NORMAL}px;
    color: ${themes.colors.DARK_500};
    margin-left: 8px;
`