import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Service from './components/Service'

function App() {


  return (
    <div className='body h-screen p-5'>
    <Navbar/>
    <Home/>
    <Service/>
    <Skills/>
    
    {/* <About/> */}
    
    </div>
  )
}

export default App
