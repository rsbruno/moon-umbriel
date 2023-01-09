import { themes } from '@themes/index'
import styled from 'styled-components'

export const TitleComponent = styled.Text`
    font-family: ${themes.font.family.TITLE_MEDIUM};
    font-size: ${themes.font.size.LG}px;
    color: ${themes.colors.DARK_500};
`