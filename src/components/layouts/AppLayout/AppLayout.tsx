import { type ReactNode } from 'react'

export interface Props {
    children: ReactNode
}

const AppLayout = (props: Props) => {
    const { children } = props
    return <div>AppLayout{children}</div>
}

export default AppLayout
