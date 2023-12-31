//dependencies
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";


//img
import logo from '../assets/msn-logo.png';


export default function SignUp() {

    
  return (
    <>
      <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css" />

      <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-3xl">
          <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">MSN Servicios Aereos</div>
          <img src={logo} alt="logo" width={'20%'} className="mx-auto my-5"/>
          <div class="relative mt-10 h-px bg-gray-300">
            <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
              <span class="bg-white px-4 text-xs text-gray-500 uppercase">Registro</span>
            </div>
          </div>
          <div class="mt-10">
            <form action="#">
              <div class="flex flex-col mb-6">
                <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Nombre:</label>
                <div class="relative">
                  <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">

                  </div>
                  <input id="email" type="text" name="email" class="text-sm sm:text-base placeholder-gray-500 pl-5 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Nombre" />
                </div>
              </div>
              <div class="flex flex-col mb-6">
                <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Apellido:</label>
                <div class="relative">
                  <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
                    </span>
                  </div>

                  <input id="password" type="password" name="password" class="text-sm sm:text-base placeholder-gray-500 pl-5 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Apellido" />
                </div>
              </div>
              <div class="flex flex-col mb-6">
                <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Correo electrónico:</label>
                <div class="relative">
                  <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
                    </span>
                  </div>

                  <input id="password" type="password" name="password" class="text-sm sm:text-base placeholder-gray-500 pl-5 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="example@gnmail.com" />
                </div>
              </div>
              <div class="flex flex-col mb-6">
                <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Teléfono:</label>
                <div class="relative">
                  <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
                    </span>
                  </div>

                  <input id="password" type="password" name="password" class="text-sm sm:text-base placeholder-gray-500 pl-5 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="5566772211" />
                </div>
              </div>
              <div class="flex flex-col mb-6">
                <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
                <div class="relative">
                  <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
                    </span>
                  </div>

                  <input id="password" type="password" name="password" class="text-sm sm:text-base placeholder-gray-500 pl-5 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="********" />
                </div>
              </div>
              <div class="flex flex-col mb-6">
                <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Código de validación:</label>
                <div class="relative">
                  <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
                    </span>
                  </div>

                  <input id="password" type="password" name="password" class="text-sm sm:text-base placeholder-gray-500 pl-5 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="AXJDHDJ" />
                </div>
              </div>
              <div class="flex items-center mb-6 -mt-4">
                <div class="flex ml-auto">
                <span className='class="inline-flex text-xs sm:text-sm'>No tienes un código de acceso, escríbenos a <a href="#" class="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700">info@msnserviciosaereos.com.mx</a>
</span>
                </div>
              </div>
              <div class="flex w-full">
                <button type="submit" class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                  <span class="mr-2 uppercase">Regístrate</span>
                  <span>
                    <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div class="flex justify-center items-center mt-6">
            <a href="#" target="_blank" class="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
              <span>
                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </span>
              <span class="ml-2">
              <Link to='/login'>Entra si ya tienes cuenta</Link>
                </span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
