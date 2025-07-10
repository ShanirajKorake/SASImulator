import React, { useState,useEffect } from 'react';

const slides = [
  {
    image: '/2.jpg',
    title: 'SASImulator',
    subtitle: 'A driving simulator with motion actuators is an advanced system designed to provide a realistic driving experience by mimicking the physical sensations of driving a car. This simulator can be used for professional driver training, research, and entertainment.',
  },
  {
    image: '/Render05.jpg',
    title: 'SASImulator',
    subtitle: 'A driving simulator with motion actuators is an advanced system designed to provide a realistic driving experience by mimicking the physical sensations of driving a car. This simulator can be used for professional driver training, research, and entertainment.',
  },

];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 10000); // change slide every 4 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [length]);

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  if (!Array.isArray(slides) || length === 0) {
    return null;
  }

  return (
    <div className="lg:hidden relative w-full h-[70vh] flex sm:flex-1 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-900 ease-in-out
            ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay with semi-transparent black */}
          <div className="w-full h-full bg-black bg-opacity-20 flex flex-col justify-end items-center px-6 pb-2 text-center">
            <h2 className="text-gray-200 text-4xl sm:text-6xl font-bold mb-4 drop-shadow-lg bebas-neue1">
              <h1 className="font-bold bebas-neue1 tracking-wider sm:tracking-[0.3rem] text-[3rem] 2xl:text-[8rem] xl:text-[6rem] lg:text-[5rem] inline-flex items-baseline glow-text">
              <span>
                S<span className="neon-text">A</span>S<span className="neon-text">I</span>
              </span>
              <span className="pl-1 text-[2.3rem] 2xl:text-[6rem] xl:text-[4rem] lg:text-[3rem] tracking-wider">
                MULATOR
              </span>
              <img
                src="./leaf1.png"
                alt="leaf"
                className="h-[0.8em] ml-2 align-baseline animate-spin-slow"
              />
            </h1>
            </h2>
            <p className="text-gray-200 text-sm bg-black bg-opacity-35 rounded sm:text-2xl max-w-2xl drop-shadow-md josefin-sans">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      {/* <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        aria-label="Next Slide"
      > */}
        {/* &#10095;
      </button> */}
    </div>
  );
}