import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  UserNavType,
  UserType
} from 'components/layouts/AppLayout/AppLayout.types'

import { Disclosure } from '@headlessui/react'
import { LocationSearch } from 'domains/Map/components'
import { MeasureSwitch } from 'domains/Weather/components'
import { Profile } from 'components/layouts/AppLayout/components'

export interface HeaderProps {
  user: UserType
  userNavigation: Array<UserNavType>
}

const Header = (props: HeaderProps) => {
  const { user, userNavigation } = props

  return (
    <Disclosure as="nav" className="">
      {({ open }: { open: boolean }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center md:justify-end">
              {/* Desktop version */}
              <div className="hidden md:block">
                <div className="ml-4 flex items-center gap-4">
                  <LocationSearch />
                  <MeasureSwitch />
                  <Profile user={user} userNavigation={userNavigation} />
                </div>
              </div>
              {/* Mobile version */}
              <div className="flex w-full justify-between md:hidden">
                <LocationSearch />
                <div className="flex gap-4 ml-4">
                  <MeasureSwitch />
                  {/* Close btn */}
                  <Disclosure.Button
                    className="  items-center rounded-md
              justify-center bg-gray-700 p-2 text-gray-400 
              hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 
              focus:ring-white">
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile version */}
          <Disclosure.Panel className="md:hidden">
            <Profile user={user} userNavigation={userNavigation} isSmall />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header
