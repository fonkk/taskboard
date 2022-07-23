import React, { ReactNode } from 'react'
import * as ST from './styled'

interface BackgroundLayoutProps {
    children: ReactNode
    theme: string
}
const BackgroundLayout = ({ children, theme }: BackgroundLayoutProps) => {
    return <ST.Background>{children}</ST.Background>
}

export default BackgroundLayout
