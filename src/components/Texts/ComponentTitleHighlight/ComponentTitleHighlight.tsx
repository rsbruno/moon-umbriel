import React, { ReactNode } from 'react'
import { TitleComponent } from './TitleHighlightStyles'

interface ComponentH1Props {
    children: ReactNode
}

export default function ComponentH1({ children }: ComponentH1Props) {
    return <TitleComponent>{children}</TitleComponent>
}