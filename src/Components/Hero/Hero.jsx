// import { useGSAP } from '@gsap/react';
// import React, { useRef } from 'react';
// import gsap from 'gsap';
// import Carousel from './Slider';

// function Hero() {
//   const head1 = useRef();
//   const leaf1 = useRef();
//   const hero = useRef();

//   // useGSAP(() => {
//   //   const tl1 = gsap.timeline();
//   //   tl1.from(hero.current, {
//   //     y: 500,
//   //     opacity: 0,
//   //     duration: 1,
//   //     ease: 'power3.out',
//   //   });

//   //   // tl1.from(head1.current, {
//   //   //   scale: 0.9,
//   //   //   opacity: 0,
//   //   //   duration: 0.8,
//   //   //   ease: 'power3.out',
//   //   // });

//   //   // tl1.from("span", {
//   //   //   opacity: 0,
//   //   //   duration: 0.5,
//   //   //   stagger: 0.2,
//   //   //   ease: 'power2.out',
//   //   // });
//   //   tl1.from(leaf1.current, {
//   //     rotate: -45,
//   //     x: -50,
//   //     duration: 0.7,
//   //     opacity: 0,
//   //     ease: 'back.out(1.7)',
//   //   });
//   // }); 
    
// useGSAP(() => {
//   // Set initial background manually
//   hero.current.style.backgroundImage = "url('/Render_1.jpg')";

//   // Intro animation - runs once
//   const intro = gsap.timeline();

//   intro.from(hero.current, {
//     y: 500,
//     opacity: 0,
//     duration: 1,
//     ease: 'power3.out',
//   });

//   intro.from(leaf1.current, {
//     rotate: -45,
//     x: -50,
//     duration: 0.7,
//     opacity: 0,
//     ease: 'back.out(1.7)',
//   });

//   // Add a delay after intro animation ends
//   intro.addPause("+=2");

//   // Start the looping animation
//   intro.add(() => {
//     const content = head1.current.parentElement; // the text + description block

//     const loop = gsap.timeline({ repeat: -1, repeatDelay: 5 });

//     loop.to(content, {
//       x: 900,
//       duration: 1.5,
//       ease: 'power2.inOut',
//     });

//     loop.to({}, {
//       duration: 0.1,
//       onStart: () => {
//         hero.current.style.backgroundImage = "url('/Render04.jpg')";
//       }
//     }, "<");

//     loop.to({}, { duration: 5 }); // stay at right position

//     loop.to(content, {
//       x: 0,
//       duration: 1.5,
//       ease: 'power2.inOut',
//     });

//     loop.to({}, {
//       duration: 0.1,
//       onStart: () => {
//         hero.current.style.backgroundImage = "url('/Render_1.jpg')";
//       }
//     }, "<");
//   });

// }, []);

//   return (
//     <>
//     <div 
//       className="hidden sm:flex flex-1 bg-green-500 p-10 bg-cover bg-center relative items-center overflow-hidden "
//       ref={hero}
//       style={{ backgroundImage: `url('/Render_1.jpg')` }}
//     >
//       {/* Background Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>

//       {/* Content */}
//       <div className="relative z-10 inline-flex flex-col drop-shadow-xl shadow-black text-white items-start">
//         {/* Heading */}
//         <div
//           className=" relative font-bold bebas-neue1 pl-15 tracking-[0.6 rem] text-[9em] inline-flex items-baseline glow-text "
//           ref={head1}
//         >
//           <span>
//             S<span className="neon-text">A</span>S<span className="neon-text">I</span>
//           </span>
//           <span className="pl-1 text-[6rem] tracking-wider">MULATOR</span>
//           <img
//             ref={leaf1}
//             src="./leaf1.png"
//             alt="leaf"
//             className="h-[0.8em] ml-2 align-baseline animate-spin-slow"
//           />
//         </div>

//         {/* Info Section */}
//         <div className="mt-4 pl-15 text-xl w-1/2 josefin-sans font-light leading-relaxed">
//           <p>
//             A driving simulator with motion actuators is an advanced system designed to provide a
//             realistic driving experience by mimicking the physical sensations of driving a car. This
//             simulator can be used for professional driver training, research, and entertainment.
//           </p>
//         </div>
//       </div>
//     </div>
//     <Carousel/>
//     </>
//   );
// }

// export default Hero;


import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import gsap from 'gsap';
import Carousel from './Slider';

function Hero() {
  const head1 = useRef();
  const leaf1 = useRef();
  const hero = useRef();
  const head1Wrapper = useRef();
  const bgFadeRef = useRef(); // For fading background overlay

  useGSAP(() => {
    // Set initial background
    hero.current.style.backgroundImage = "url('/Render_1.jpg')";

    // Skip animations on mobile devices
    if (window.innerWidth < 640) return;

    // Helper for fading background
    const fadeBackground = (url) => {
      const fade = gsap.timeline();
      fade.to(bgFadeRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          hero.current.style.backgroundImage = `url('${url}')`;
        },
      });
      fade.to(bgFadeRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
      });
      return fade;
    };

    // Intro animation
    const intro = gsap.timeline();

    intro.from(hero.current, {
      y: 500,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    intro.from(leaf1.current, {
      rotate: -45,
      x: -50,
      duration: 0.7,
      opacity: 0,
      ease: 'back.out(1.7)',
    });

    // Delay before starting loop
    intro.addPause('+=2');

    // Looping animation
    intro.add(() => {
      const content = head1Wrapper.current;
      const moveX = window.innerWidth / 2;

      const loop = gsap.timeline({ repeat: -1, repeatDelay: 5 });

      loop.to(content, {
        x: moveX,
        duration: 1.5,
        ease: 'power2.inOut',
      });

      loop.add(fadeBackground('/Render04.jpg'), '<');

      loop.to({}, { duration: 5 }); // hold at right with new bg

      loop.to(content, {
        x: 0,
        duration: 1.5,
        ease: 'power2.inOut',
      });

      loop.add(fadeBackground('/Render_1.jpg'), '<');
    });
  }, []);

  return (
    <>
      <div
        ref={hero}
        className="hidden sm:flex flex-1 p-10 bg-cover bg-center relative items-center overflow-hidden w-full h-screen 2xl:px-10"
        style={{ backgroundImage: `url('/Render_1.jpg')` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 z-10"></div>

        {/* Background Fade Overlay */}
        <div
          ref={bgFadeRef}
          className="absolute inset-0 bg-black opacity-0 pointer-events-none z-20 transition-opacity duration-500"
        ></div>

        {/* Content */}
        <div
          ref={head1Wrapper}
          className="relative z-30 text-white drop-shadow-xl shadow-black flex flex-col items-start"
        >
          {/* Heading */}
          <div
            ref={head1}
            className="font-bold bebas-neue1 tracking-[0.3rem] 2xl:text-[8rem] xl:text-[6rem] l:text-[5rem] inline-flex items-baseline glow-text"
          >
            <span>
              S<span className="neon-text">A</span>S<span className="neon-text">I</span>
            </span>
            <span className="pl-1 2xl:text-[6rem] xl:text-[4rem] l:text-[3rem] tracking-wider">MULATOR</span>
            <img
              ref={leaf1}
              src="./leaf1.png"
              alt="leaf"
              className="h-[0.8em] ml-2 align-baseline animate-spin-slow"
            />
          </div>

          {/* Info Text */}
          <div className="text-xl w-full sm:w-[50vw] josefin-sans font-light leading-relaxed pr-10">
            <p>
              A driving simulator with motion actuators is an advanced system designed to provide a
              realistic driving experience by mimicking the physical sensations of driving a car. This
              simulator can be used for professional driver training, research, and entertainment.
            </p>
          </div>
        </div>
      </div>

      {/* Carousel section */}
      <Carousel />
    </>
  );
}

export default Hero;
