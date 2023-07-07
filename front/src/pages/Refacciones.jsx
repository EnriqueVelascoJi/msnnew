import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

//Other components
import Table from '../components/TableRefacciones'
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

export default function Aeropuertos() {


    const [flag, setFlag] = useState(1)
    const [payload, setPayload] = useState({
        headers: [],
        items: []
    })

    const fetchData = async() => {

        const url = 'http://localhost:3004/refacciones/';

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
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Refacciones</h1>
            <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-6 ">Nueva refacción</button>
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
          <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div class="relative w-full max-w-md max-h-full">
                  <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          <span class="sr-only">Close modal</span>
                      </button>
                      <div class="px-6 py-6 lg:px-8">
                          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Nuevo registro</h3>
                          <form class="space-y-6" action="#">
                              <div>
                                  <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Costo</label>
                                  <input type="number" name="nombre" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="costo" required />
                              </div>
                              <div>
                                  <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha costo</label>
                                  <input type="date" name="nombre" id="password" placeholder="Fecha costo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                              </div>
                              <div>
                                  <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Venta</label>
                                  <input type="text" name="nombre" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="venta" required />
                              </div>
                              <div>
                                  <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha venta</label>
                                  <input type="date" name="nombre" id="password" placeholder="Fecha venta" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                              </div>
                              <div>
                                  <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Proveedor</label>
                                  <input type="text" name="nombre" id="password" placeholder="Proveedor" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                              </div>
                              <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Envíar información</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div> 
        </main>
      </div>
    </>
  )
}
