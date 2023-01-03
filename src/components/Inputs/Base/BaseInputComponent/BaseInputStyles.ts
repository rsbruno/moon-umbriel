import { themes } from '@themes/index'
import styled from 'styled-components'

export const InputComponent = styled.TextInput`
    width: 100%;
    height: 100%;
    font-family: ${themes.font.family.TITLE_NORMAL};
    font-size: ${themes.font.size.NORMAL}px;
    color: ${themes.colors.DARK_500};
`