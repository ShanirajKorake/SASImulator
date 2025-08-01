import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1280 }, items: 1 },
  desktop: { breakpoint: { max: 1280, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 1 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const slides = [
  {
    title: "Driving Simulator Training",
    desc: "Train drivers in a virtual environment using real-time physics and road conditions."
  },
  {
    title: "Automotive Parts Testing",
    desc: "Test performance, durability, and safety of automotive components with precision."
  },
  {
    title: "Driving License Exam Simulation",
    desc: "Enable authorities to conduct license tests in a safe, controlled virtual space."
  },
  {
    title: "Public Safety Training",
    desc: "Train emergency responders and transport operators for critical scenarios virtually."
  },
  {
    title: "Vehicle Dynamics Research",
    desc: "Conduct research on vehicle behavior under varied terrains, speeds, and weather conditions."
  },
  {
    title: "ADAS & Autonomous Systems Testing",
    desc: "Test and validate Advanced Driver-Assistance Systems (ADAS) and autonomous driving logic."
  },
  {
    title: "Urban Planning & Traffic Simulation",
    desc: "Simulate traffic flows and test infrastructure designs for smart city development."
  },
  {
    title: "Fleet Driver Assessment",
    desc: "Evaluate driving performance of commercial fleet drivers to ensure safety and efficiency."
  },
  {
    title: "Rehabilitation & Special Needs Training",
    desc: "Assist physically or neurologically challenged individuals in learning or relearning to drive."
  },
  {
    title: "Consumer Experience Demonstration",
    desc: "Showcase vehicle performance and features to customers in a simulated environment."
  }
];


const ProductApplicationsCarousel = () => {
  return (
    <div 
    className="w-full bg-gray-900 py-10 text-gray-100"
    id="slider11"
    >
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={5000}
        showDots
        arrows={true}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="h-[50vh] flex items-center justify-center px-6 md:px-16 bg-gray-800 rounded-xl mx-4 text-center"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(/path/to/your-bg-${index + 1}.jpg)` // Add your images later
            }}
          >
            <div className="bg-opacity-50 p-6 rounded-xl max-w-2xl">
              <h2 className="text-4xl tracking-wide md:text-5xl font-bold text-orange-400 mb-4 bebas-neue1">
                {slide.title}
              </h2>
              <p className="text-lg text-gray-300 josefin-sans">{slide.desc}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductApplicationsCarousel;
