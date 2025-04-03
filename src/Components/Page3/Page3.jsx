import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

const RotatingModel = ({ modelPath, scale, position }) => {
  const pivotRef = useRef();

  // Rotate the model on every frame
  useFrame(() => {
    if (pivotRef.current) {
      pivotRef.current.rotation.y += 0.005;
    }
  });

  const model = useLoader(GLTFLoader, modelPath);

  return (
    <group ref={pivotRef}>
      <primitive object={model.scene} scale={scale} position={position} />
    </group>
  );
};

const Page3 = () => {
  return (
    <div className="flex flex-col text-gray-200 bg-gray-900 min-h-screen p-10 space-y-16 text-5xl">
      {/* First Section (Driving Simulator) */}
      <div className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-md space-y-6 md:space-y-0 md:space-x-6 h-screen">
        <div className="md:w-1/2 text-center  content-center md:text-left h-[600px]">
          <h1 className="text-6xl font-bold text-purple-400 mb-4">Actual Driving Simulator</h1>
          <p className="text-gray-400">Experience real-time simulation for enhanced driving proficiency.</p>
        </div>
        <div className="md:w-1/2 h-full">
          <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
            <OrbitControls />
            <ambientLight intensity={1} />
            <directionalLight position={[-5, 3, 20]} intensity={1.5} />
            <RotatingModel modelPath="/models/model1.glb" scale={7} position={[0, 0, 0]} />
          </Canvas>
        </div>
      </div>

      {/* Second Section (Automotive Components Testing) */}
      <div className="flex flex-col md:flex-row items-center h-screen bg-gray-800 p-6 rounded-lg shadow-md space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:w-1/2 order-last md:order-first h-[600px]">
          <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
            <OrbitControls />
            <ambientLight intensity={1} />
            <directionalLight position={[-5, 3, 20]} intensity={1.5} />
            <RotatingModel modelPath="/models/model2.glb" scale={8} position={[0, 0.5, 0]} />
          </Canvas>
        </div>
        <div className="md:w-1/2 text-center md:text-right">
          <h1 className="text-6xl font-bold text-blue-400 mb-4">Automotive Components Testing</h1>
          <p className="text-gray-400">Explore the cutting-edge testing technologies for automotive components.</p>
        </div>
      </div>

      {/* Third Section (Driving Licence Test with Simulator) */}
      <div className="flex flex-col md:flex-row items-center h-screen bg-gray-800 p-6 rounded-lg shadow-md space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:w-1/2 text-center md:text-left h-[600px] content-center">
          <h1 className="text-6xl font-bold text-green-400 mb-4">Driving Licence Test with Simulator</h1>
          <p className="text-gray-400">
            Combine simulator training with the driving licence test for a comprehensive learning experience.
          </p>
        </div>
        <div className="md:w-1/2 h-[600px]">
          <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
            <OrbitControls />
            <ambientLight intensity={1} />
            <directionalLight position={[-5, 3, 20]} intensity={1.5} />
            <RotatingModel modelPath="/models/model4.glb" scale={5} position={[0, 0, 0]} />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Page3;