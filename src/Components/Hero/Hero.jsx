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

  // // Intro animation - runs once
  // const intro = gsap.timeline();

  // intro.from(hero.current, {
  //   y: 500,
  //   opacity: 0,
  //   duration: 1,
  //   ease: 'power3.out',
  // });

  // intro.from(leaf1.current, {
  //   rotate: -45,
  //   x: -50,
  //   duration: 0.7,
  //   opacity: 0,
  //   ease: 'back.out(1.7)',
  // });

  // // Add a delay after intro animation ends
  // intro.addPause("+=2");

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






import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import gsap from 'gsap';
import Carousel from './Slider';

function Hero() {
  const section1 = useRef();
  const section2 = useRef();
  const hero = useRef();
  const texxt1 = useRef();
  const texxt2 = useRef();
  const leaf1 = useRef();

  useGSAP(() => {
    if (window.innerWidth < 640) return;

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

    intro.addPause('+=2');

    // Initial state
    gsap.set(section1.current, { opacity: 1 });
    gsap.set(section2.current, { opacity: 0 });
    // Looping transition
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 9 });
    tl.delay(5);



    tl.to(section1.current, {
      opacity: 0,
      duration: 0.8,
      
    }, 'fade');

    tl.to(section2.current, {
      delay: 0.7,
      opacity: 1,
      duration: 0.8,
      
    }, 'fade');


    tl.to({}, { duration: 5 });


    tl.to(section2.current, {
      opacity: 0,
      duration: 0.8,
      
    }, 'fadeBack');

    tl.to(section1.current, {
      delay: 0.7,
      opacity: 1,
      duration: 0.8,
      
    }, 'fadeBack');
  });

  return (
    <>
      <div ref={hero} className="hidden lg:block relative w-full h-screen overflow-hidden">
        {/* Section 1 */}
        <div
          ref={section1}
          className="absolute inset-0 bg-cover  lg:bg-center flex items-center justify-start transition-opacity   2xl:px-40 xl:px-5"
          style={{ backgroundImage: "url('/Render_1.jpg')" }}
        >
          <div ref={texxt1} className="pl-20 z-10 text-white max-w-[50vw]">
            <h1 className="font-bold bebas-neue1 tracking-[0.3rem] 2xl:text-[8rem] xl:text-[6rem] lg:text-[5rem] inline-flex items-baseline glow-text">
              <span>
                S<span className="neon-text">A</span>S<span className="neon-text">I</span>
              </span>
              <span className="pl-1 2xl:text-[6rem] xl:text-[4rem] lg:text-[3rem] tracking-wider">
                MULATOR
              </span>
              <img
                ref={leaf1}
                src="./leaf1.png"
                alt="leaf"
                className="h-[0.8em] ml-2 align-baseline animate-spin-slow"
              />
            </h1>
            <p className="text-xl 2xl:text-2xl xl:text-xl lg:text-lg josefin-sans font-light leading-relaxed pr-10 2xl:pr-40">
              A driving simulator with motion actuators is an advanced system designed to provide a
              realistic driving experience by mimicking the physical sensations of driving a car.
              This simulator can be used for professional driver training, research, and entertainment.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div
          ref={section2}
          className="absolute inset-0 bg-cover bg-center flex items-center justify-end transition-opacity  opacity-0"
          style={{ backgroundImage: "url('/Render04.jpg')" }}
        >
          <div ref={texxt2} className="pl-20 text-white max-w-[50vw]">
            <h1 className="font-bold bebas-neue1 tracking-[0.3rem] 2xl:text-[8rem] xl:text-[6rem] lg:text-[5rem] inline-flex items-baseline glow-text">
              <span>
                S<span className="neon-text">A</span>S<span className="neon-text">I</span>
              </span>
              <span className="pl-1 2xl:text-[6rem] xl:text-[4rem] lg:text-[3rem] tracking-wider">
                MULATOR
              </span>
              <img
                src="./leaf1.png"
                alt="leaf"
                className="h-[0.8em] ml-2 align-baseline animate-spin-slow"
              />
            </h1>
            <p className="text-xl 2xl:text-2xl xl:text-xl lg:text-lg josefin-sans font-light leading-relaxed pr-10 2xl:pr-40">
              A driving simulator with motion actuators is an advanced system designed to provide a
              realistic driving experience by mimicking the physical sensations of driving a car.
              This simulator can be used for professional driver training, research, and entertainment.
            </p>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 z-0"></div>
      </div>

      {/* Carousel */}
      <div className="relative z-10">
        <Carousel />
      </div>
    </>
  );
}

export default Hero;
