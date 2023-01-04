import styled from 'styled-components/native'

import { ButtonTextStyles } from '@themes/theming/ButtonTextsStyles'
import { themes } from '@themes/index'

export const FullButtonText = styled.Text`
  ${ButtonTextStyles}
  font-family: ${themes.font.family.TITLE_MEDIUM};
  font-size: ${themes.font.size.NORMAL}px;
`