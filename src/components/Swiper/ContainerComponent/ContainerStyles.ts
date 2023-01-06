import { MotiView } from 'moti'
import { Dimensions } from 'react-native'
import styled from 'styled-components'

export const SwipeContainer = styled(MotiView)`
    flex: 1;
    width: ${props => `${(Dimensions.get('screen').width) * props.childNumber}px`};
    flex-direction: row;
`