import { ButtonComponentStyles } from '@themes/theming/ButtonComponentStyles'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const ContainerButton = styled(TouchableOpacity).attrs({
    activeOpacity: .8,
})`
    ${ButtonComponentStyles}
    width: ${props => props.size ? `${props.size}%` : '100%'};
    height: 50px;
    border-radius: 30px;
    overflow: hidden;
    margin: 8px 0;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    position: relative;
`