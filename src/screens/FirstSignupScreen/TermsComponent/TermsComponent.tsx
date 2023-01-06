import React, { ReactNode } from "react";
import { RuleContainerMultiplesTerms, RuleContainerTermsIndex, RuleContainerTitle, RuleListTerms, RuleSingleTermContainer, RuleSingleTermContent, RuleSingleTermIndex, TextRule, TitleRule } from "./TermsStyles";

interface RuleContainerProps {
    children?: ReactNode;
    titleContainer: string;
    indexContainer: number;
}
const RuleContainer = ({ children, titleContainer, indexContainer }: RuleContainerProps) => {
    return <>
        <RuleContainerMultiplesTerms>
            <RuleContainerTermsIndex>{indexContainer}.</RuleContainerTermsIndex>
            <RuleListTerms>
                <RuleContainerTitle>{titleContainer}</RuleContainerTitle>
                <RuleSingleTermContainer>
                    <>{children}</>
                </RuleSingleTermContainer>
            </RuleListTerms>
        </RuleContainerMultiplesTerms>
    </>
}
interface RuleSingleTermProps {
    children?: ReactNode;
    indexTerm: number;
    indexContainer: number;
}

const RuleSingleTerm = ({ children, indexTerm, indexContainer }: RuleSingleTermProps) => {
    return <>
        <RuleSingleTermContent>
            <RuleSingleTermIndex>{indexContainer}.{indexTerm}</RuleSingleTermIndex>
            <TextRule>
                <>{children}</>
            </TextRule>
        </RuleSingleTermContent>
    </>
}

export function TermsComponent() {
    return <>
        <TitleRule>Regulamentações e {"\n"}Política de Privacidade</TitleRule>
        <TextRule>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries
        </TextRule>
        <RuleContainer titleContainer='Termos de uso' indexContainer={1} >
            <RuleSingleTerm indexContainer={1} indexTerm={1} >
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </RuleSingleTerm>
            <RuleSingleTerm indexContainer={1} indexTerm={2}>
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </RuleSingleTerm>
        </RuleContainer>
        <RuleContainer titleContainer='Privacidade e Segurança' indexContainer={2} >
            <RuleSingleTerm indexContainer={2} indexTerm={1}>
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </RuleSingleTerm>
            <RuleSingleTerm indexContainer={2} indexTerm={2}>
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </RuleSingleTerm>
        </RuleContainer>
    </>
}