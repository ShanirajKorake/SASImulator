import React from 'react'

function Page2() {
  return (
    <div 
  className="flex-1 flex p-40 bg-center bg-green-500 bg-cover relative justify-between items-center overflow-x-hidden" 
  style={{ backgroundImage: `url('/2.jpg')` }}
>
<div id='left' className=" text-2xl w-1/4 josefin-sans font-light text-justify pb-[20vw]">
  <p>
    A driving simulator with motion actuators is an advanced system designed to provide a realistic driving experience by mimicking the physical sensations of driving a car. This simulator can be used for professional driver training, research, and entertainment.
  </p>
</div>

    <div id="right" className="pt-[25vw] drop-shadow-2xl">
        <div className='josefin-sans flex items-center justify-end text-3xl'>Experience The</div>
        <div className='flex items-center justify-end text-9xl bebas-neue1 tracking-wider'>Re
            <span className='neon-text'>A</span>
            l
            <span className='neon-text'>i</span>
            ty</div>
    </div>
</div>
  )
}

export default Page2