import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

self.onmessage = async (e) => {
  const { modelPath } = e.data;

  try {
    const loader = new GLTFLoader();

    // Load the model
    loader.load(
      modelPath,
      (gltf) => {
        // You can't send 3D objects directly via postMessage,
        // so instead, we tell the main thread to use useLoader again
        self.postMessage({ type: 'success' });
      },
      undefined,
      (error) => {
        self.postMessage({ type: 'error', error: error.message });
      }
    );
  } catch (error) {
    self.postMessage({ type: 'error', error: error.message });
  }
};
