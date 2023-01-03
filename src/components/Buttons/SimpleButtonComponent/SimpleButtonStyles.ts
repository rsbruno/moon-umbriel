import { themes } from '@themes/index'
import styled from 'styled-components/native'

export const FullButton = styled.TouchableOpacity.attrs(({ type }) => ({
  activeOpacity: .8
}))`
    width: 100%;
    height: 50px;
    border-radius: 30px;
    overflow: hidden;
    padding: 0 25px;
    background: ${themes.colors.DARK_500};
    align-items: center;
    justify-content: center;
`

export const FullButtonText = styled.Text`
  font-family: ${themes.font.family.TITLE_MEDIUM};
  font-size: ${themes.font.size.NORMAL}px;
  color: ${themes.colors.LIGHT_500};
`