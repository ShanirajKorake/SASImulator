import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ModelLoaderWorker from "../../workers/modelLoader.worker?worker";

const RotatingModel = ({ modelPath, scale, position }) => {
  const pivotRef = useRef();
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useFrame(() => {
    if (pivotRef.current) {
      pivotRef.current.rotation.y += 0.005;
    }
  });

  useEffect(() => {
    const worker = new ModelLoaderWorker();

    worker.onmessage = (e) => {
      if (e.data.type === "success") {
        const loader = new GLTFLoader();
        loader.load(
          modelPath,
          (gltf) => {
            gltf.scene.traverse((child) => {
              if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                child.material.roughness = 0.3;
                child.material.metalness = 0.7;
                child.material.envMapIntensity = 1.2;
              }
            });
            setModel(gltf.scene);
            setLoading(false);
          },
          undefined,
          (err) => setError(err.message)
        );
      } else {
        setError(e.data.error || "Unknown error");
      }
    };

    worker.postMessage({ modelPath });

    return () => worker.terminate();
  }, [modelPath]);

  if (error || loading || !model) {
    return (
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color={error ? "red" : "gray"} wireframe />
      </mesh>
    );
  }

  return (
    <group ref={pivotRef}>
      <primitive object={model} scale={scale} position={position} />
    </group>
  );
};

const ThreeCanvas = ({ modelPath, scale, position }) => (
  <Canvas
    shadows
    camera={{ position: [0, 2, 6], fov: 90 }}
    className="rounded-xl"
  >
    <ambientLight intensity={0.5} />
    <directionalLight
      castShadow
      position={[5, 10, 5]}
      intensity={1.5}
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
    />
    <spotLight
      position={[0, 5, 10]}
      angle={0.3}
      intensity={1.5}
      penumbra={0.5}
      castShadow
    />
    <Environment preset="city" />
    <RotatingModel modelPath={modelPath} scale={scale} position={position} />
  </Canvas>
);

const sections = [
  {
    title: "Actual Driving Simulator",
    desc: "Experience real-time simulation for enhanced driving proficiency with realistic vehicle dynamics and immersive feedback.",
    model: "/models/model6.glb",
    scale: 7,
    reverse: false,
  },
  {
    title: "Automotive Components Testing",
    desc: "Explore the cutting-edge testing technologies used in verifying performance, durability and efficiency of automotive parts.",
    model: "/models/model2.glb",
    scale: 8,
    reverse: true,
  },
  {
    title: "Driving Licence Test with Simulator",
    desc: "Integrate simulator training with license testing to offer learners safe, reliable, and controlled driving practice.",
    model: "/models/model5.glb",
    scale: 5,
    reverse: false,
  },
];

const Page3 = () => {
  return (
    <div className="flex flex-col gap-12 bg-gray-900 min-h-screen py-10 text-gray-200 josefin-sans">
      <h2 className="bebas-neue1 text-3xl tracking-wide text-center mb-4">
        Our Products
      </h2>

      {sections.map((sec, i) => (
        <div
          key={i}
          className={`flex flex-col ${
            sec.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } h-[60vh] bg-gradient-to-t from-gray-500 to-black rounded-xl shadow-2xl overflow-hidden w-11/12 md:w-4/5 mx-auto `}
        >
          <div className="w-full p-6 md:text-left flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-4 drop-shadow-[0_2px_2px_rgba(255,165,0,0.4)]">
              {sec.title}
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              {sec.desc}
            </p>
          </div>
          <div className="w-full md:w-1/2 h-full">
            <ThreeCanvas
              modelPath={sec.model}
              scale={sec.scale}
              position={[0, 0, 0]}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page3;
