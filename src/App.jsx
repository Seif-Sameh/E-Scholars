import { useState } from 'react'
import Landing from './Components/Landing'
import Features from './Components/Features'
import Overview from './Components/Overview'
import Pricing from './Components/Pricing'
import Demos from './Components/Demos'
import Team from './Components/Team'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


function App() {

  return (
    <div className='flex flex-col gap-10 dark:bg-gray-900'>
    <Landing/>
    <Overview/>
    <Features/>
    <Demos/>
    <Pricing/>
    <Team/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
