import { themes } from '@themes/index'
import styled from 'styled-components'

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    padding: 0 15px;
    padding-top: 5px;
    padding-bottom: 15px;
`
export const LeftContent = styled.View`
    width: 50px;
    height: 50px;
`
export const CenterContent = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`
export const RightContent = styled.View`
    width: 50px;
    height: 50px;
`

export const HeaderTitle = styled.Text`
   font-family: ${themes.font.family.TITLE_BOLD};
   font-size: ${themes.font.size.NORMAL}px;
`

export const ButtonEvent = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    flex: 1;
    align-items: center;
    justify-content: center;
`