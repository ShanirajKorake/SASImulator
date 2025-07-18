import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { g } from 'framer-motion/client'

gsap.registerPlugin(ScrollTrigger)

function Page2() {
  const tagsRef = useRef([])
  const blockRef = useRef([])
  const blockRef1 = useRef([])

  useGSAP(() => {
    gsap.from(blockRef.current, {
      y: -50,
      opacity: 0,
      scrollTrigger: {
        trigger: blockRef.current,
        start: 'top 50%',
        toggleActions: 'play none none reverse',
      },
      markers: true,
    })
    gsap.from(blockRef1.current, {
      y: -50,
      opacity: 0,
      scrollTrigger: {
        trigger: blockRef1.current,
        start: 'top 50%',
        toggleActions: 'play none none reverse', 
      },
      markers: true,
    })

    gsap.from(tagsRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: tagsRef.current[0],
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })
  }, [])

  return (
    <div className=' h-full flex flex-col  pt-0 px-4 lg:px-10 border-none bg-gray-900 pb-4 -z-0'>
      <div 
      className='xl:hidden flex-none bg-black rounded-t-xl w-full text-center border-none josefin-sans pt-2 '
      >
          <p className='text-[1.4rem] sm:text-[1.8rem] md:text-[2rem] text-white font-bold pt-5' ref={blockRef1}>
            Motion. Realism. Experience.
          </p>
        <p className='text-lg text-white font-light pt-5 px-10 ' ref={blockRef}>
          Our motion-enabled driving simulator delivers a lifelike experience by replicating real driving sensations. Perfect for training, research, and immersive entertainment.
          </p>
      </div>
      <div
        style={{ backgroundImage: `url('/Render_2.jpg')` }}
        className=" xl:hidden border-none flex-1 px-16 bg-right bg-cover relative justify-end items-center overflow-x-hidden rounded-b-xl"
      ></div>

      {/* screen */}
      <div
        className="hidden xl:block border-none flex-1 px-16 bg-center bg-cover relative justify-end items-center overflow-x-hidden rounded-b-xl"
        style={{ backgroundImage: `url('/2.jpg')` }}
      >

        {/* Bottom-left stacked animated tags */}
        <div className="hidden xl:block absolute text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl left-10 bottom-5 sm:left-16 sm:bottom-24 space-y-2 josefin-sans font-light">
          {['Motion.', 'Realism.', 'Experience.'].map((text, index) => (
            <div
              key={index}
              ref={(el) => (tagsRef.current[index] = el)}
              className="text-white"
            >
              {text}
            </div>
          ))}
        </div>

        {/* <div className="hidden sm:block text-2xl w-1/3 josefin-sans font-light text-justify justify-self-end py-10 text-white"> */}
        <div className="hidden xl:flex xl:text-xl 2xl:text-3xl w-[100%] josefin-sans font-light justify-end py-10 text-white  ">
          <p className='w-1/3'>
            A driving simulator with motion actuators is an advanced system designed to provide a realistic driving experience by mimicking the physical sensations of driving a car. This simulator can be used for professional driver training, research, and entertainment.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page2
