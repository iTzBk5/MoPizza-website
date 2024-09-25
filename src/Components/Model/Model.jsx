import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer } from 'three';
import '../Model/Model.css';

const Model = ({ isMobile }) => {
  const gltf = useLoader(GLTFLoader, '/3dmodel.glb');
  const skeleton = useRef();
  const mixer = useRef();

  useEffect(() => {
    if (gltf.animations && gltf.animations.length) {
      mixer.current = new AnimationMixer(gltf.scene);
      gltf.animations.forEach((clip) => {
        mixer.current.clipAction(clip).play();
      });
    }

    if (gltf.scene) {
      gltf.scene.traverse((child) => {
        if (child.isBone && child.name === 'Bone3') {
          child.rotation.set(0, 0, 1);
        }
      });
    }
  }, [gltf]);

  useFrame((state, delta) => {
    if (mixer.current) mixer.current.update(delta);
    const time = state.clock.getElapsedTime();
    gltf.scene.rotation.z = Math.sin(time) * 0.1;  
    gltf.scene.rotation.x = Math.sin(time) * 0.1; 
    gltf.scene.rotation.y = Math.sin(time) * 0.1; 
  });

  const scale = isMobile ? 1 : 2;
  const position = isMobile ? [0.7, -1.8, 0] : [4, -0.5, 2];

  return (
    <primitive
      ref={skeleton}
      object={gltf.scene}
      scale={scale}
      position={position}
    />
  );
};

const ModelViewer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Canvas 
      style={{ width: '200vh', height: isMobile ? '100vh' : '100vh' }}
      camera={{ position: isMobile ? [-10, 10, 10] : [-10, 10, 10], fov: 20 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[11, 30, 30]} />
        <Model isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;