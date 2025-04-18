import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ModelLoaderWorker from "../../workers/modelLoader.worker?worker";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// 🔄 Rotating model component
const RotatingModel = ({ modelPath, scale, position }) => {
  const pivotRef = useRef();  
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useFrame(() => {
    if (pivotRef.current) {
      pivotRef.current.rotation.y += 0.005; // added subtle breathing
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

// 🎨 Canvas wrapper
const ThreeCanvas = ({ modelPath, scale, position }) => (
  <Canvas
    shadows
    camera={{ position: [0, 2, 6], fov: 60 }}
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

const Page3 = () => {
  const punch = useRef();
  const srotri = useRef();
  const textBlocks = useRef([]);

  // useGSAP(() => {
  //   gsap.to(punch.current.children, {
  //     y: 0,
  //     opacity:1,
  //     duration: .5,
  //     scrollTrigger: {
  //       trigger: punch.current,
  //       start: 'top 80%',
  //       end: 'top 30%',
  //       scrub: false,
  //       toggleActions: 'play none none reverse',
  //     },
  //   });

  //   textBlocks.current.forEach((block) => {
  //     gsap.fromTo(
  //       block,
  //       { opacity: 0, y: 30 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.7,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: block,
  //           start: "top 85%",
  //         },
  //       }
  //     );
  //   });
  // }, []);

  return (
    <div
      ref={srotri}
      className="flex flex-col bg-gray-900 min-h-screen text-gray-200 josefin-sans"
    >
      {/* <div className="h-11">
        <div
          ref={punch}
          className="italic bebas-neue1 text-6xl tracking-[0.9rem] mx-16 overflow-hidden opacity"
        >
          Our Products  
        </div>
      </div> */}

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row h-[60vh] bg-gray-950 rounded-xl shadow-2xl overflow-hidden w-9/12 ml-10 mb-10">
        <div
          ref={(el) => (textBlocks.current[0] = el)}
          className="w-full p-6 md:text-left flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-4 drop-shadow-[0_2px_2px_rgba(255,165,0,0.4)]">
            Actual Driving Simulator
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Experience real-time simulation for enhanced driving proficiency with realistic vehicle dynamics and immersive feedback.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-full">
          <ThreeCanvas modelPath="/models/model6.glb" scale={7} position={[0, 0, 0]} />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row-reverse h-[60vh] bg-gray-950 rounded-xl shadow-2xl overflow-hidden w-9/12 mx-10 mb-10 self-end">
        <div
          ref={(el) => (textBlocks.current[1] = el)}
          className="w-full p-6 md:text-left flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-4 drop-shadow-[0_2px_2px_rgba(255,165,0,0.4)]">
            Automotive Components Testing
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Explore the cutting-edge testing technologies used in verifying performance, durability and efficiency of automotive parts.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-full">
          <ThreeCanvas modelPath="/models/model2.glb" scale={8} position={[0, 0, 0]} />
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row h-[60vh] bg-gray-950 rounded-xl shadow-2xl overflow-hidden w-9/12 mx-10 mb-10">
        <div
          ref={(el) => (textBlocks.current[2] = el)}
          className="w-full p-6 md:text-left flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-4 drop-shadow-[0_2px_2px_rgba(255,165,0,0.4)]">
            Driving Licence Test with Simulator
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Integrate simulator training with license testing to offer learners safe, reliable, and controlled driving practice.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-full">
          <ThreeCanvas modelPath="/models/model5.glb" scale={5} position={[0, 0, 0]} />
        </div>
      </div>
    </div>
  );
};

export default Page3;