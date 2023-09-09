import { type ReactNode } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Profile } from './components'

export interface Props {
  children: ReactNode
}

const AppLayout = (props: Props) => {
  const { children } = props

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
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }: { open: boolean }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-end">
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                      <Profile user={user} userNavigation={userNavigation} />
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button
                      className="relative inline-flex items-center 
                    justify-center rounded-md bg-gray-800 p-2 text-gray-400 
                    hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 
                    focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <Profile user={user} userNavigation={userNavigation} isSmall />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  )
}

export default AppLayout
