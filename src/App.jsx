import React from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Punch1 from './Components/Punch1/Punch1'
import Page2 from './Components/Page2/Page2'
import TestComponent from './Components/TestComp/TestComponent'
import Page3 from './Components/Page3/Page3'

function App() {
  return (
    <div>
  <div className="flex flex-col h-screen border-white bg-gray-900 shine-effect">
      <Header />
      <Hero />
    </div>

      <Punch1/>
    <div className="flex flex-col h-screen">
      <Page2/>
    </div>
    <Page3/>
    {/* <div className='h-screen'>sas</div> */}
 
      </div>
  )
}

export default App