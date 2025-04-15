import React from 'react'
import { Navbar } from './components/Navbar'
import { About } from './components/sections/About'
import { Home } from './components/sections/Home'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'

const App = () => {
  return (
    <>

      <Navbar/>
      <Home/>
      <About/>
      <Experience/> 
      <Projects/>
      <Contact/>
      <Footer/>
    </>
    
  )
}

export default App