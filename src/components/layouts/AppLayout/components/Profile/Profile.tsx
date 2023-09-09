import { Disclosure, Menu, Transition } from '@headlessui/react'

import { Fragment } from 'react'
import { getClassNames } from 'helpers'

export type User = {
  imageUrl: string
  email: string
  name: string
}
export type UserNav = {
  name: string
  href: string
}
export interface Props {
  user: User
  userNavigation: Array<UserNav>
  isSmall?: boolean
}
const Profile = (props: Props) => {
  const { user, userNavigation, isSmall } = props

  return (
    <>
      {!isSmall ? (
        <Menu as="div" className="relative ml-3">
          <div>
            <Menu.Button
              className="relative flex max-w-xs items-center rounded-full
         bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
          focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src={user.imageUrl}
                alt=""
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <Menu.Items
              className="absolute right-0 z-10 mt-2 w-48 
        origin-top-right rounded-md bg-white py-1 shadow-lg ring-1
         ring-black ring-opacity-5 focus:outline-none">
              {userNavigation?.map((item: UserNav) => (
                <Menu.Item key={item.name}>
                  {({ active }: { active: boolean }) => (
                    <a
                      href={item.href}
                      className={getClassNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}>
                      {item.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        <div className="border-t border-gray-700 pb-3 pt-4">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src={user.imageUrl}
                alt=""
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">
                {user.name}
              </div>
              <div className="text-sm font-medium leading-none text-gray-400">
                {user.email}
              </div>
            </div>
          </div>
          <div className="mt-3 space-y-1 px-2">
            {userNavigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400
                         hover:bg-gray-700 hover:text-white">
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Profile
