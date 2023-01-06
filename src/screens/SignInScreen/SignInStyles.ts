import { themes } from '@themes/index'
import styled from 'styled-components'

export const TouchableContainer = styled.TouchableWithoutFeedback``

export const ContainerSignIn = styled.View`
    flex: 1;
    background: ${themes.colors.BACKGROUND_900};
`
export const FormContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    padding:0 25px;
`

export const FooterContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`