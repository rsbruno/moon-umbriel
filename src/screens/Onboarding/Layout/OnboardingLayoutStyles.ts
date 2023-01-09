import { themes } from '@themes/index'
import styled from 'styled-components'
import themez from 'styled-theming'

export const OnboardingLayout = styled.View`
    flex: 1;
    background: ${themes.colors.BACKGROUND_900};
`

export const HeaderLayout = styled.View`
    width:100%;
    height: 60px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
`

const IdicatorModeUnVisited = {
    background: themes.colors.DARK_200
}

const IndicatorModeVisited = {
    background: themes.colors.PRIMARY_700
}

const IndicatorModeFinished = {
    background: themes.colors.PRIMARY_600
}

const IndicatorMode = themez('idicatormode', {
    unVisited: IdicatorModeUnVisited,
    visited: IndicatorModeVisited,
    finished: IndicatorModeFinished,
})


export const LayoutStepIndicator = styled.View`
    ${IndicatorMode}
    flex: 1;
    height: 4px;
    margin-right: 1px;
    border-radius: 3px;
   
`

export const LayoutContent = styled.View`
    flex: 1;
`

export const LayoutFooter = styled.View`
    height: 80px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0 25px;
`

