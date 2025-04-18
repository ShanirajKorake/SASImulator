import React from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Page2 from './Components/Page2/Page2'
import TestComponent from './Components/TestComp/TestComponent'
import Page3 from './Components/Page3/Page3'
import Punch2 from './Components/Page3/Punch2/Punch2'
import Footer from './Components/Footer/Footer'
import Punch1 from './Components/Punch1/Punch1'
import Page4 from './Components/Page4/Page4'
import Punch4 from './Components/Page4/Punch3/Punch3'
import Page5 from './Components/Page5/Page5'


function App() {
  return (
    <div>
  <div className="flex flex-col h-screen border-white bg-gray-900 shine-effect">
      <Header />
      <Hero />
    </div>
      <Page5/>
      <Punch1/>
    <div className="flex flex-col h-screen">
      <Page2/>
    </div>
    <Punch2/>
    <Page3/>
    
    <Punch4/>
    <div className="flex flex-col h-[93vh]">
    <Page4/>
    </div>
    <Footer/>
      </div>
  )
}

export default App