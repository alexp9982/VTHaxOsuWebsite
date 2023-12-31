import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'





function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header(props) {
  const [Login, SetLogin] = useState("Login")

  const navigation = [
    { name: 'Tournament Listings', href: '/tournamentListings' },
    // { name: 'user', href: '/userPage' },
    { name: Login, href: (Login == "Login") ? 'http://localhost:8080/oauth2/authorization/osu-login' : "http://localhost:8080/logout"}
  //   { name: 'Definition', href: '/definition'},
  ]

  useEffect(() => {
    const getSelf = async () => {
      let selfData = await fetch('/api/getSelf')
      if (selfData.status == 200) {
        selfData = await selfData.json()
        SetLogin(selfData.username)
      }
    }

    getSelf()

  }, [])


  return (
    <>
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}

                        // need to deconstruct isActive
                        className={ ({isActive}) => {
                            return ('no-underline block rounded-md px-3 py-2 text-base font-medium  ' +
                            (isActive ? 'text-white bg-gray-900 ':
                            'text-white hover:bg-gray-700 hover:text-white')
                            );
                        }}

                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.href}

                    // need to deconstruct isActive
                    className={ ({isActive}) => {
                        return ('no-underline block rounded-md px-3 py-2 text-base font-medium' +
                        (!isActive ? 'bg-gray-900 text-white':
                        'text-gray-300 hover:bg-gray-700 hover:text-white')
                        );
                    }}>
                  {item.name}
                  </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
     {/*this renders all chuldren inside of the Header*/}
    <div className='bg-gray-300'>
        <div className='min-h-screen max-w-7xl mx-auto px-2 py-2'>
            {props.children}
        </div>

    </div>


     </>
  );
}