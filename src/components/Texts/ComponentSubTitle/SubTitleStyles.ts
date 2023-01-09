import { themes } from '@themes/index'
import styled from 'styled-components'

export const SubTitleComponent = styled.Text`
    font-family: ${themes.font.family.TITLE_MEDIUM};
    font-size: ${themes.font.size.SM}px;
    color: ${themes.colors.DARK_200};
`