import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'

import Home from './components/home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About  from './components/about'
import Resume from './components/resume'
import Project from './components/project'
import Contactsection from './components/contactsection'

function App() {
const router=createBrowserRouter([
  {
    path:'/',
    element:<> <Navbar /> <Home /> <Contactsection/> </>
  },
  {
    path:'/about',
    element:<> <Navbar /> <About/>  <Contactsection/> </> 
  },
  {
    path:'/resume',
    element:<> <Navbar /> <Resume/> <Contactsection/></> 
  },
  {
    path:'/project',
    element:<><Navbar /> <Project /> <Contactsection/> </>
  }
])

  return (
   
    
   <RouterProvider router={router} />
    
   
  )
}

export default App
