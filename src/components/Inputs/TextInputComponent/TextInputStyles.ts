import { themes } from '@themes/index'
import styled from 'styled-components'

export const Container = styled.View`
    width: 100%;
    height: 60px;
    border-radius: 30px;
    overflow: hidden;
    border: ${props => `solid 2px ${themes.colors.DARK_200}`};
    padding: 0 25px;
    margin: 8px 0;
`

export const InputComponent = styled.TextInput`
    flex: 1;
    font-family: ${themes.font.family.TITLE_NORMAL};
    font-size: ${themes.font.size.NORMAL}px;
    color: ${themes.colors.DARK_500};
`