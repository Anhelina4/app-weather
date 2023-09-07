import { type ReactNode } from 'react'
import { Header } from 'components'
export interface Props {
  children: ReactNode
}

const AppLayout = (props: Props) => {
  const { children } = props
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default AppLayout
