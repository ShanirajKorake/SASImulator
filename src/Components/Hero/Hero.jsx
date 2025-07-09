import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import gsap from 'gsap';
import Carousel from './Slider';

function Hero() {
  const head1 = useRef();
  const leaf1 = useRef();
  const hero = useRef();

  useGSAP(() => {
    const tl1 = gsap.timeline();
    tl1.from(hero.current, {
      y: 500,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    // tl1.from(head1.current, {
    //   scale: 0.9,
    //   opacity: 0,
    //   duration: 0.8,
    //   ease: 'power3.out',
    // });

    // tl1.from("span", {
    //   opacity: 0,
    //   duration: 0.5,
    //   stagger: 0.2,
    //   ease: 'power2.out',
    // });
    tl1.from(leaf1.current, {
      rotate: -45,
      x: -50,
      duration: 0.7,
      opacity: 0,
      ease: 'back.out(1.7)',
    });
  }); 
    

  return (
    <>
    <div 
      className="hidden sm:flex flex-1 bg-green-500 p-10 bg-cover bg-center relative items-center "
      ref={hero}
      style={{ backgroundImage: `url('/Render_1.jpg')` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 inline-flex flex-col drop-shadow-xl shadow-black text-white items-start">
        {/* Heading */}
        <div
          className=" relative font-bold bebas-neue1 pl-15 tracking-[0.6 rem] text-[9em] inline-flex items-baseline glow-text "
          ref={head1}
        >
          <span>
            S<span className="neon-text">A</span>S<span className="neon-text">I</span>
          </span>
          <span className="pl-1 text-[6rem] tracking-wider">MULATOR</span>
          <img
            ref={leaf1}
            src="./leaf1.png"
            alt="leaf"
            className="h-[0.8em] ml-2 align-baseline animate-spin-slow"
          />
        </div>

        {/* Info Section */}
        <div className="mt-4 pl-15 text-xl w-1/2 josefin-sans font-light leading-relaxed">
          <p>
            A driving simulator with motion actuators is an advanced system designed to provide a
            realistic driving experience by mimicking the physical sensations of driving a car. This
            simulator can be used for professional driver training, research, and entertainment.
          </p>
        </div>
      </div>
    </div>
    <Carousel/>
    </>
  );
}

export default Hero;
