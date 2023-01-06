import { themes } from '@themes/index'
import styled from 'styled-components'

export const TitleRule = styled.Text`
    font-family: ${themes.font.family.TITLE_MEDIUM};
    font-size: 24px;
`

export const TextRule = styled.Text`
    font-family: ${themes.font.family.TITLE_NORMAL};
    font-size: 14px;
    color: ${themes.colors.DARK_200};
    text-align: justify;
    flex:1;
`

export const RuleContainerMultiplesTerms = styled.View`
    width: 100%;
    flex-direction: row;
    margin-top: 15px;
`

export const RuleContainerTermsIndex = styled.Text`
    font-family: ${themes.font.family.TITLE_MEDIUM};
    font-size: 16px;
    text-align: left;
    width: 20px;
`

export const RuleListTerms = styled.View`
    flex:1;
`

export const RuleSingleTermContainer = styled.View`
    width: 100%;
`

export const RuleSingleTermContent = styled.View`
    width: 100%;
    flex-direction: row;
    padding-top:15px;
`

export const RuleContentTermsIndex = styled.View`
    width: 15px;
    height: 100%;
`

export const RuleSingleTermIndex = styled.Text`
    font-family: ${themes.font.family.TITLE_MEDIUM};
    font-size: 16px;
   
    width: 30px;
    color: ${themes.colors.DARK_200};
`

export const RuleContainerTitle = styled.Text`
    font-family: ${themes.font.family.TITLE_MEDIUM};
    font-size: 16px;
`