import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// Custom hook for Draco-loaded models
function useDracoModel(modelPath) {
  const { scene } = useGLTF(modelPath, true, (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/");
    loader.setDRACOLoader(dracoLoader);
  });

  return scene;
}

// Model Component
const RotatingModel = () => {
  const model = useDracoModel("/models/model2_draco.glb");

  return model ? <primitive object={model} scale={0.5} /> : null;
};

// 3D Canvas Component
const ModelViewer = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={<LoadingScreen />}>
        <RotatingModel />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

// Placeholder while loading
const LoadingScreen = () => (
  <div style={{ textAlign: "center", padding: "20px" }}>
    <h3>Loading 3D Model...</h3>
  </div>
);

export default ModelViewer;
