import { themes } from '@themes/index'
import { MotiView } from 'moti'
import styled from 'styled-components/native'

export const BaseContainer = styled.View`
    position: relative;
    width: 100%;
    height: 60px;
    border-radius: 30px;
    border: ${() => `solid 1px ${themes.colors.DARK_200}`};
    padding: 0 25px;
    margin: 8px 0;
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

export const ContainerText = styled.Text`
    color: ${themes.colors.DARK_200};
    font-family: ${themes.font.family.TITLE_NORMAL};
    text-transform: capitalize;
`