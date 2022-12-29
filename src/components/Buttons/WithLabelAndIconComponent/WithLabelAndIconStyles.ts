import { themes } from '@themes/index'
import styled from 'styled-components/native'

export const FullButton = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: .8
}))`
    width: 100%;
    height: 60px;
    border-radius: 30px;
    overflow: hidden;
    margin: 8px 0;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const ContentLabel = styled.View`
    flex: 1;
    height: 100%;
    margin-right: 8px;
    border-radius:30px;
    overflow: hidden;
    border: ${() => `solid 1px ${themes.colors.DARK_200}`};
    align-items:flex-start;
    justify-content:center;
    padding:0 25px;
`

export const ContentLogo = styled.View`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    align-items:center;
    justify-content:center;
    border: ${() => `solid 1px ${themes.colors.DARK_200}`};
`
export const LabelButton = styled.Text`
    color: ${themes.colors.DARK_200};
    font-family: ${themes.font.family.TITLE_MEDIUM};
    font-size: ${themes.font.size.NORMAL}px;
`

export const LogoIcon = styled.Image`
    width: 35px;
    height: 35px;
    resize: both;
`