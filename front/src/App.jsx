import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css';

// Router
import Router from './utils/routes';
import SideBar from './components/SideBar';
import Navbar from './components/NavBar';

//Router dom
import { useLocation } from 'react-router-dom';


function App() {
  
  const location = useLocation();
  console.log(location.pathname)
  return (
    <>
    {
      location.pathname !== '/' && location.pathname !== '/login' && (
        <>
          <Navbar />
          <SideBar />
        </>
      )
    }
    <Router />
    </>
  )
}

export default App
