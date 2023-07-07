import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

//Other components
import Table from '../components/Table'
import SideBar from '../components/SideBar'
import { data } from 'autoprefixer'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Usuarios', href: '#', flag: 1, current: true },
  { name: 'Clientes', href: '#', flag: 2, current: false },
  { name: 'Mecanicos', href: '#', flag: 3, current: false },
  { name: 'Aeropuertos', href: '#', flag: 4, current: false }
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Incidencia() {


    const [flag, setFlag] = useState(0)
    const [payload, setPayload] = useState({
        headers: [],
        items: []
    })

    const fetchData = async() => {

        const url = 'http://localhost:3004/usuario/';

        try {
            const response = await fetch(url);
            const result = await response.json();

            console.log(result.data)

            setPayload({
                ...payload, items: result.data
            })

        } catch (error) {
            console.log(error)
        }
        
        
    }

    useEffect(() => {
        if(flag) {
            fetchData()
        }
    }, [flag])

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Datos</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {
                <Table 
                    flag={flag}
                    payload={payload}
                />

            }
          </div>
        </main>
      </div>
    </>
  )
}
