import React, { useRef } from "react";

// 🎥 Video component replacing 3D model
const VideoPlayer = ({ videoSrc }) => {
  return (
    <div className="w-full h-full bg-black flex items-center justify-center">
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="max-w-full max-h-full object-contain md:h-full"
      />
    </div>
  );
};


const Page3 = () => {
  const punch = useRef();
  const srotri = useRef();
  const textBlocks = useRef([]);

  return (
    <div
      ref={srotri}
      className="flex flex-col bg-gray-900 xl:min-h-screen text-gray-200 josefin-sans"
    >
      {/* Section 1 */}
      <div id="driving-simulator" className="flex flex-col lg:flex-row h-auto bg-gray-950 rounded-xl shadow-2xl overflow-hidden lg:w-9/12 lg:ml-10 mb-4 lg:mb-10 mx-4 items-center">
        <div
          ref={(el) => (textBlocks.current[0] = el)}
          className="w-full p-6 md:text-left flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-3xl xl:text-5xl font-extrabold text-orange-400 mb-4 drop-shadow-[0_2px_2px_rgba(255,165,0,0.4)]">
            Driving Simulator
          </h1>
          <p className="text-gray-300 text-base xl:text-lg leading-relaxed">
            Experience real-time simulation for enhanced driving proficiency with realistic vehicle dynamics and immersive feedback.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-full">
          <VideoPlayer videoSrc="/vids/vid1.mp4" />
        </div>
      </div>

      {/* Section 2 */}
      <div id="automotive-testing" className="flex flex-col lg:flex-row-reverse h-auto bg-gray-950 rounded-xl shadow-2xl overflow-hidden lg:w-9/12 lg:mx-10 mb-4 lg:mb-10 sm:self-end mx-4 items-center">
        <div
          ref={(el) => (textBlocks.current[1] = el)}
          className="w-full p-6 md:text-left flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-3xl xl:text-5xl font-extrabold text-orange-400 mb-4 drop-shadow-[0_2px_2px_rgba(255,165,0,0.4)]">
            Automotive Components Testing
          </h1>
          <p className="text-gray-300 text-base xl:text-lg leading-relaxed">
            Explore the cutting-edge testing technologies used in verifying performance, durability and efficiency of automotive parts.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-full">
          <VideoPlayer videoSrc="/vids/vid2.mp4" />
        </div>
      </div>

      {/* Section 3 */}
      <div id="driving-test" className="flex flex-col lg:flex-row h-auto bg-gray-950 rounded-xl shadow-2xl items-center overflow-hidden lg:w-9/12 lg:mx-10 mb-4 lg:mb-10 mx-4">
        <div
          ref={(el) => (textBlocks.current[2] = el)}
          className="w-full p-6 md:text-left flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-3xl xl:text-5xl font-extrabold text-orange-400 mb-4 drop-shadow-[0_2px_2px_rgba(255,165,0,0.4)]">
            Driving Licence Test with Simulator
          </h1>
          <p className="text-gray-300 text-base md:text-base xl:text-lg leading-relaxed">
            Integrate simulator training with license testing to offer learners safe, reliable, and controlled driving practice.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-full">
          <VideoPlayer videoSrc="/vids/vid3.mp4" />
        </div>
      </div>
    </div>
  );
};

export default Page3;
