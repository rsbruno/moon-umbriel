import { themes } from '@themes/index'
import { MotiView } from 'moti';
import { Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components'
import themez from 'styled-theming';

export const SignUpContainer = styled.View`
    flex: 1;
    background-color: ${themes.colors.BACKGROUND_900};
`

export const ContainerAvatarAndNickName = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const ContainerAvatar = styled.View`
    background-color: ${themes.colors.DARK_100};
    width: 80px;
    height: 80px;
    border-radius: 40px;
    justify-content: center;
    align-items: center;
`

export const ContainerUserNameInput = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
`

export const ContainerInputsName = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const FooterContainer = styled.View`
    width: 100%;
    padding: 10px 25px;
    flex-direction: row;
    justify-content: space-between;
`

export const HeaderStepsScreen = styled.View`
    width: 100%;
    height: 35px;
    flex-direction: row;
    padding: 0 25px;
    margin-bottom: 15px;
    justify-content: space-between;
`

export const StepContainer = styled(TouchableOpacity).attrs({
    activeOpacity: .6,
})`
    width: 49.8%;
    height: 100%;
`

const NameInFocus = {
    color: themes.colors.DARK_500
};

const NameUnFocus = {
    color: themes.colors.DARK_200
};

const StepNameStyle = themez('mode', {
    focus: NameInFocus,
    unfocus: NameUnFocus
});

export const StepName = styled.Text`
    ${StepNameStyle}
    flex: 1;
    font-family: ${themes.font.family.TITLE_MEDIUM};
    font-size: ${themes.font.size.NORMAL}px;
`

const IndicatorInFocus = {
    background: themes.colors.DARK_500,
};

const IndicatorUnBlur = {
    background: themes.colors.DARK_200,
};

const StepIndicatorStyle = themez('mode', {
    focus: IndicatorInFocus,
    unfocus: IndicatorUnBlur
});

export const StepIndicator = styled.View`
    ${StepIndicatorStyle}
    width: 100%;
    height: 4px;
    border-radius: 2px;
`


