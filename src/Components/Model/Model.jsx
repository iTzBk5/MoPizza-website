import React, { Suspense, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer } from 'three';
import '../Model/Model.css'

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/3dmodel.glb');
  const skeleton = useRef();
  const mixer = useRef();

  // Initialize the animation mixer and set up the animation
  React.useEffect(() => {
    if (gltf.animations && gltf.animations.length) {
      mixer.current = new AnimationMixer(gltf.scene);
      gltf.animations.forEach((clip) => {
        mixer.current.clipAction(clip).play(); // Play each animation
      });
    }

    // Rotate specific bones once the model is loaded
    if (gltf.scene) {
      gltf.scene.traverse((child) => {
        if (child.isBone) {
          if (child.name === 'Bone3') {
            child.rotation.set(0, 0, 1); // Set rotation to specific values
          }
        }
      });
    }
  }, [gltf]);

  // Use frame to update the animation on each render frame
  useFrame((state, delta) => {
    if (mixer.current) mixer.current.update(delta); // Update animations
  });

  return (
    <primitive
      ref={skeleton}
      object={gltf.scene}
      scale={2}
    />
  );
};

const ModelViewer = () => {
  return (
    <Canvas
      style={{ width: '100vw', height: '100vh' }}
      camera={{ position: [0, 5, 15], fov: 40 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[11, 30, 30]} />
        <Model />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;
