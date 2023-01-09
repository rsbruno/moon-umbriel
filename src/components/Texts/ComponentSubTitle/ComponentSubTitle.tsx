import React, { ReactNode } from 'react'
import { SubTitleComponent } from './SubTitleStyles'

interface ComponentH1Props {
    children: ReactNode
}

export default function ComponentH1({ children }: ComponentH1Props) {
    return <SubTitleComponent>{children}</SubTitleComponent>
}