import { type ReactNode } from 'react'
import { Header } from './components'
export interface Props {
  children: ReactNode
}

const AppLayout = (props: Props) => {
  const { children } = props

  // TODO: change to real data
  const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }

  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' }
  ]

  return (
    <div className="container mx-auto h-full py-6 sm:px-6 lg:px-8">
      <Header user={user} userNavigation={userNavigation} />

      <main className="h-fit">
        <div>{children}</div>
      </main>
    </div>
  )
}

export default AppLayout
