import { themes } from '@themes/index'
import styled from 'styled-components'

export const TabBarContainer = styled.View`
    width: 100%;
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 25px;
`

export const TabIconButtonButton = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
`
export const TabIconText = styled.Text`
    font-family: ${themes.font.family.TITLE_MEDIUM};
    font-size: ${themes.font.size.SM}px;
    color: ${props => props.color}
`;
