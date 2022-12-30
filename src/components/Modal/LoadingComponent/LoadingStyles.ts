import { themes } from '@themes/index'
import { MotiView } from 'moti'
import styled from 'styled-components/native'

export const ModalContainer = styled(MotiView)`
    width: 100%;
    background: rgba(255,255,255,.8);
    position: absolute;
    top:0;
    left:0;
    z-index: 999;
    filter: blur(10px);
`

export const ContentLoading = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
`

export const ContentLoadingText = styled.Text`
    font-family: ${themes.font.family.TITLE_NORMAL};
    font-size: ${themes.font.size.NORMAL}px;
    color: ${themes.colors.DARK_500};
`