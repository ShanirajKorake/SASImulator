import React from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Page2 from './Components/Page2/Page2'
import Punch2 from './Components/Page3/Punch2/Punch2'
import Footer from './Components/Footer/Footer'
import Punch1 from './Components/Punch1/Punch1'
import Page4 from './Components/Page4/Page4'
import Punch4 from './Components/Page4/Punch3/Punch3'
import Page5 from './Components/Page5/Page5'
import Page3 from './Components/Page3/Page3'
import Page6 from './Components/Page6/Page6'


function App() {
  return (
    <div>
  <div className="w-full flex flex-col sm:h-screen border-white bg-black">
      <Header />
      <Hero />
    </div>
      <Page5/>
      <Punch1/>
    <div className="flex flex-col h-[600px] sm:h-screen">
      <Page2/>
    </div>

    <div>
    <Punch2/>
    <Page3/>
    </div>
    
    <Punch4/>
    <div className="flex flex-col h-[32vh] sm:h-[93vh]">
    <Page4/>
    </div>
    <Page6/>
    <Footer/>
      </div>
  )
}

export default App