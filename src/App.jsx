import React from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Punch1 from './Components/Punch1/Punch1'
import Page2 from './Components/Page2/Page2'
import TestComponent from './Components/TestComp/TestComponent'
import Page3 from './Components/Page3/Page3'

function App() {
  return (
    <>
  <div className="flex flex-col h-screen border-white">
      <Header />
      <Hero />
    </div>

    <div className="flex flex-col h-screen">
      <Punch1 />
      <Page2/>
    {/* <TestComponent/> */}
    </div>
    {/* <div className='h-screen'>sas</div> */}
    <Page3/>
      </>
  )
}

export default App