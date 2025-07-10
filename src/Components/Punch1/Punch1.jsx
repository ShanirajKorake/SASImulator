import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Punch1() {
  const punch = useRef();
  const srotri = useRef();

  useGSAP(() => {
    const words = punch.current.innerText.split(' ');
    punch.current.innerHTML = words.map(word => `<span style="display: inline-block; opacity: 0; transform: translateY(50px);">${word}</span>`).join(' ');
    
    gsap.to(punch.current.children, {
      y: 0,
      opacity:1,
      duration: .5,
      scrollTrigger: {
        trigger: srotri.current,
        start: 'top 80%',
        end: 'top 30%',
        scrub: false,
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <div
      ref={srotri}
      id="body2"
      className="hidden lg:flex bg-gray-900 text-gray-200 text-[1.8rem] md:text-[2.5rem]   lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[3.5rem] border-none px-8 sm:px-16 bebas-neue1 tracking-[0.1rem] md:tracking-[0.4rem] lg:tracking-[0.5rem] xl:tracking-[0.6rem] 2xl:tracking-[0.6rem] z-10 leading-[.4]"
    >
      <div className="italic block w-full h-fit " ref={punch}>
        WE SIMULATE REALITY
      </div>
    </div>
  );
}

export default Punch1;
