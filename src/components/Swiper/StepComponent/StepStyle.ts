import { Dimensions } from 'react-native'
import styled from 'styled-components'

export const SwipeStep = styled.View`
    padding: ${props => `0 ${props.horizontalPadding != undefined ? props.horizontalPadding : 25}px`}
`
