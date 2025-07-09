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
      className="flex bg-gray-900 text-gray-200 text-[2rem] sm:text-[4rem] border-none px-8 sm:px-16 bebas-neue1 tracking-[0.1] sm:tracking-[0.9rem] overflow-hidden"
    >
      <div className="italic overflow-hidden h-10 sm:h-16 w-full" ref={punch}>
        OUR PRODUCTS
      </div>
    </div>
  );
}

export default Punch1;
