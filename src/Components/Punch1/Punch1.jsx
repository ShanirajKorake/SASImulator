import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

function Punch1() {
  const punch = useRef();
  const srotri = useRef();

  useGSAP(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
  
    // Scroll-based animation for `punch`
    gsap.from(punch.current, {
      letterSpacing: '6rem',
      duration: 1.5,
      opacity: 0,
      scrollTrigger: {
        trigger: srotri.current,
        start: "top 80%",
        end: "top 5%",
        scrub: 1,
        onEnter: () => {
          gsap.to(srotri.current, {
            opacity: 1,
            height: 80,
          });
          gsap.to("#left, #right", {
            opacity: 0,
            visibility: "hidden", // Hide initially
          });
        },
        onLeave: () => {
          gsap.to(srotri.current, {
            opacity: 0,
            height: 0,
          });
          gsap.to("#left, #right", {
            opacity: 1,
            visibility: "visible", // Make visible when punch leaves
            duration: 1,
          });
          gsap.from("#right div", {
            x: 1000,
            duration: 1,
            ease: "power3.out",
          });
          gsap.from("#left p", {
            x: -1000,
            duration: 1,
            ease: "power3.out",
          });
        },
        onEnterBack: () => {
          gsap.to(srotri.current, {
            opacity: 1,
            height: 80,
          });
          gsap.to("#left, #right", {
            opacity: 0,
            visibility: "hidden", // Hide when scrolling back
          });
        },
        onLeaveBack: () => {
          gsap.to(srotri.current, {
            opacity: 0,
            height: 0,
          });
          gsap.to("#left, #right", {
            opacity: 1,
            visibility: "visible", // Make visible when scrolling back out
            duration: 1,
          });
        },
      },
    });
  });
  
  
  

  return (
    <div
      ref={srotri}
      id="body2"
      className="h-20 flex drop-shadow-xl pt-2 shadow-black bg-gray-400 text-black text-[6rem] items-center p-0 m-0 justify-center bebas-neue1 tracking-[0.9rem] overflow-hidden"
    >
      <div className="italic" ref={punch}>
        WE SIMULATE REALITY
      </div>
    </div>
  );
}

export default Punch1;
