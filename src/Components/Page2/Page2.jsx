import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

function Page2() {
  const tagsRef = useRef([])

  useGSAP(() => {
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
    <div className='flex-1 h-full p-5 pt-0 px-10 border-none bg-gray-900'>
      <div
        className="flex h-full px-16 bg-center bg-green-500 bg-cover relative justify-end items-center overflow-x-hidden rounded-md"
        style={{ backgroundImage: `url('/2.jpg')` }}
      >
        {/* Bottom-left stacked animated tags */}
        <div className="absolute bottom-24 text-7xl left-16 space-y-2 josefin-sans font-light">
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

        <div className="flex-box pb-[28vw] text-2xl w-1/3 josefin-sans font-light text-justify text-white">
          <p>
            A driving simulator with motion actuators is an advanced system designed to provide a realistic driving experience by mimicking the physical sensations of driving a car. This simulator can be used for professional driver training, research, and entertainment.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page2
