import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

function Page2() {
  const tagsRef = useRef([])
  const block = useRef()
  useGSAP(() => {
    gsap.from(tagsRef.current, {
      y: 10,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: tagsRef.current[0],
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
    })
  }, [])

  return (
    <div ref={block} className='flex-1 h-full p-5 pt-0 px-10 border-none bg-gray-900 overflow-hidden'>
      <div
        className="flex h-full bg-center bg-green-500 bg-cover relative justify-end items-center overflow-x-hidden rounded-md overflow-hidden"
        style={{ backgroundImage: `url('/Wall_TV.png')` }}
      >
        <div className='h-full w-full bg-black bg-opacity-20 flex items-end pb-10'>
          <p
            ref={(el) => (tagsRef.current[0] = el)}
            className="text-white text-2xl mt-4 mx-auto text-center px-4 pb-10 md:px-8 max-w-4xl josefin-sans"
          >
            <span className='font-bold'>Custom-designed Virtual Environments</span>, Crafted specifically for our motion simulators, delivering ultra-realistic terrain interaction and immersive driving experiences across diverse landscapes.
          </p>
        </div>


      </div>
    </div>
  )
}

export default Page2
