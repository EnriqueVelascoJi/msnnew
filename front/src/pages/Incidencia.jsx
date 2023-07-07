import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

//Other components
import Table from '../components/TableIncidencia'
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


    const [flag, setFlag] = useState(1)
    const [payload, setPayload] = useState({
        headers: [],
        items: []
    })

    const fetchData = async() => {

        const url = 'http://localhost:3004/incidencia/';

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
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Incidencias</h1>
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-6 ">Nueva incidencia</button>
          </div>
        </header>
        <section>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

        <div class="grid grid-cols-3 gap-3">
          <div>
          <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cliente</label>
            <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Elige un cliente</option>
            <option value="US">Cliente 1</option>
            <option value="CA">Cliente 2</option>
            <option value="FR">Cliente 3</option>
            <option value="DE">Cliente 4</option>
            </select>
          </div>
          <div>
          <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Aeropuerto</label>
            <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Elige un aeropuerto</option>
            <option value="US">Aeropuerto 1</option>
            <option value="CA">Aeropuerto 2</option>
            <option value="FR">Aeropuerto 3</option>
            <option value="DE">Aeropuerto 4</option>
            </select>
            
          </div>
          <div>
          <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Equipo</label>
            <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Elige un equipo</option>
            <option value="US">Equipo 1</option>
            <option value="CA">Equipo 2</option>
            <option value="FR">Equipo 3</option>
            <option value="DE">Equipo 4</option>
            </select>
            
          </div>
        </div>

            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-6 ">Generar reporte</button>
            </div>
        
        </section> 
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
