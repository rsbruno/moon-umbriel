import { themes } from '@themes/index'
import { Dimensions, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

export const DefineAgeContainer = styled.View`
   width: ${Dimensions.get('screen').width}px;
   height: 100%;
   padding: 0 25px;
   padding-bottom: 20px;
`

export const HeaderTitleContainer = styled.View`
    justify-content: center;
    align-items: center;
  

`

export const OnboardingInputs = styled.TouchableOpacity`
        flex: 1;
`




export const ButtonConfigContainer = styled(TouchableOpacity).attrs({
    activeOpacity: .8,
})`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
`

export const ButtonConfigTitle = styled.Text`
    flex:1;

`

export const ResultPikerText = styled.Text`
    margin: 0 12px;

`

export const HeaderPiker = styled.View`
    width: 10%;
    height: 2px;
    border-radius: 3px;
    margin-bottom: 5px;
    background: ${themes.colors.DARK_500};
`

export const WheelPikerContainer = styled.View`
    width: 100%;
    height: 200px;
    background: ${themes.colors.PRIMARY_500};
    border-radius: 20px;
    align-items: center;
    padding: 10px;
`

export const WhellComponent = styled.View`
    flex: 1;
`

export const WheelPikerTitle = styled.Text`
    border-radius: 30px;
    width: 100%;
    text-align: center;
    font-family: ${themes.font.family.TITLE_MEDIUM};
    font-size: 22px;
    color: ${themes.colors.LIGHT_500};
`

export const WheelPikerOption = styled.Text`
    /* width: 200px; */
    /* background: red; */
    width: 70px;
    text-align: center;
    font-family: ${themes.font.family.TITLE_BOLD};
    font-size:20px;
    margin-right: 12px;
    color: ${themes.colors.LIGHT_500};

`