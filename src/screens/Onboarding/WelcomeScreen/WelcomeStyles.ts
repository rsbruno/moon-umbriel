import { themes } from '@themes/index'
import { Dimensions } from 'react-native'
import styled from 'styled-components'
import themez from 'styled-theming'

export const WelcomeContainer = styled.View`
    flex:1;
    background: ${themes.colors.PRIMARY_500};
`

export const FigureContainer = styled.View`
    height: 250px;
    align-items: center;
    justify-content: center;
`

export const WelcomeTitle = styled.Text`
    font-family: ${themes.font.family.TITLE_MEDIUM};
    font-size: ${themes.font.size.LG}px;
    line-height: 24px;
    color: ${themes.colors.LIGHT_500};
    margin-top: 25px;
    width: 100%;
    text-align: left;

`

export const WelcomeSubTitle = styled.Text`
    font-family: ${themes.font.family.TITLE_MEDIUM};
    font-size: ${themes.font.size.NORMAL}px;
    line-height: 18px;
    color: ${themes.colors.DARK_500};
    margin-top: 15px;
    width: 100%;
    text-align: left;

`

export const FooterContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 25px;
    padding-bottom: 10px;
    background: ${themes.colors.PRIMARY_500};
`

export const StepContainer = styled.View`
   width: 100%;
   height: 100%;
   padding: 30px;
   justify-content: center;
   align-items: center;
`

export const NavigationContainer = styled.View`
    width: 100%;
    flex-direction: row;
    padding: 0 30px;
`

const NavigationModeNormal = {
    width: '10px',
    background: themes.colors.LIGHT_500
}

const NavigationModeActived = {
    width: '36px',
    background: themes.colors.PRIMARY_700
}

const NavigationMode = themez('navmode', {
    normal: NavigationModeNormal,
    actived: NavigationModeActived
})

export const NavigationStep = styled.View`
    ${NavigationMode}
    height: 10px;
    border-radius: 7px;
    margin-right: 5px;
`