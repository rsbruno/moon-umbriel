import React from "react";
import { ContentLabel, ContentLogo, FullButton, LabelButton, LogoIcon } from "./WithLabelAndIconStyles";

import Logo from '../../../assets/google.png'

export default function WithLabelAndIconComponent() {
    return <FullButton>
        <ContentLabel>
            <LabelButton>ENTRAR COM GOOGLE</LabelButton>
        </ContentLabel>
        <ContentLogo>
            <LogoIcon source={Logo}/>
        </ContentLogo>
    </FullButton>
}