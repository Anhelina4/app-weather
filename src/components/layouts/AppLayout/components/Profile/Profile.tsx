import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
  UserNavType,
  UserType
} from 'components/layouts/AppLayout/AppLayout.types'

import { Fragment } from 'react'
import { getClassNames } from 'helpers'

export interface ProfileProps {
  user: UserType
  userNavigation: Array<UserNavType>
  isSmall?: boolean
}

const Profile = (props: ProfileProps) => {
  const { user, userNavigation, isSmall } = props

  return (
    <>
      {/* Desktop version */}
      {!isSmall ? (
        <Menu as="div" className="relative">
          <div>
            <Menu.Button
              className="relative flex max-w-xs items-center rounded-full
         bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
          focus:ring-offset-gray-800">
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
        origin-top-right rounded-md bg-gray-800 py-1 shadow-lg  focus:outline-none">
              {userNavigation?.map((item: UserNavType) => (
                <Menu.Item key={item.name}>
                  {({ active }: { active: boolean }) => (
                    <a
                      href={item.href}
                      className={getClassNames(
                        active ? 'bg-gray-700' : '',
                        'block px-4 py-2 text-sm '
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
        // Mobile version
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
