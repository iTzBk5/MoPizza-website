import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer } from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Model/Model.css';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Model = ({ isMobile }) => {
  const gltf = useLoader(GLTFLoader, '3dmodel.glb');
  const mixer = useRef();
  const bone3 = useRef(); // Reference for Bone3

  useEffect(() => {
    if (gltf.animations && gltf.animations.length) {
      mixer.current = new AnimationMixer(gltf.scene);
      gltf.animations.forEach((clip) => {
        mixer.current.clipAction(clip).play();
      });
    }

    // Find and reference Bone3
    if (gltf.scene) {
      gltf.scene.traverse((child) => {
        if (child.isBone && child.name === 'Bone3') {
          bone3.current = child; // Save the reference to Bone3
        }
      });
    }

    // ScrollTrigger setup for different scroll ranges
    const scrollAnimations = gsap.timeline({
      scrollTrigger: {
        trigger: ".model-container", // Target the model container for scroll
        start: "top top",  // Start from the top of the viewport
        end: "bottom+=3500 top",  // End the animation at 3000px scroll
        scrub: 1,  // Smooth transition as the user scrolls
        pin: true, // Pin the canvas in place during the scroll
      },
    });

    // 0 to 1000px scroll
    scrollAnimations.to(gltf.scene.position, {
      x: isMobile ? 1 : 15,
      y: isMobile ? 4 : 0.5,
      z: isMobile ? 0 : 2,
      duration: 1,
    }).to(gltf.scene.scale, {
      x:isMobile ?1 :2,
      y: isMobile ?1 :2,
      z: isMobile ?1 :2,
      duration: 1,
    }).to(gltf.scene.rotation, {
      x: 0,
      y: 0,
      z: 0,
      duration: 1,
    });

    // 1000 to 2000px scroll - Open Bone3 here
    scrollAnimations.to(gltf.scene.position, {
      x: isMobile ? -3 : 1,
      y: isMobile ? 2 : 2,
      z: isMobile ? 1 : 3,
      duration: 1,
    }, "0.6").to(gltf.scene.scale, {
      x: isMobile ? 0.8 : 1.5,
      y: isMobile ? 0.8 : 1.5,
      z: isMobile ? 0.8 : 1.5,
      duration: 1,
    }, "0.6").to(gltf.scene.rotation, {
      x: Math.PI / 60,  // Rotate slightly
      y: Math.PI / 10,
      z: Math.PI / 60,
      duration: 1,
    }, "0.6").to(bone3.current.rotation, {
      x: 0,  // Open Bone3 (adjust based on desired effect)
      y: 0,
      z: Math.PI / 4,
      duration: 1,
    }, "0.7"); // This is where Bone3 will open

    // > 2000px scroll
    scrollAnimations.to(gltf.scene.position, {
      x: isMobile ? -5 : -6,
      y: isMobile ? 3 : 4,
      z: isMobile ? 2 : 0,
      duration: 1,
    }, "1.8").to(gltf.scene.scale, {
      x: isMobile ? 0.6 : 1.2,
      y: isMobile ? 0.6 : 1.2,
      z: isMobile ? 0.6 : 1.2,
      duration: 1,
    }, "1.8").to(gltf.scene.rotation, {
      x: Math.PI / 100,  // Rotate slightly
      y: Math.PI / 2,
      z: Math.PI / 100,
      duration: 1,
    }, ">");

  }, [gltf, isMobile]);

  // Adding dynamic rotation to the model based on elapsed time
  useFrame((state, delta) => {
    if (mixer.current) mixer.current.update(delta);
  });

  return (
    <primitive
      object={gltf.scene}
      scale={isMobile ? 1 : 2}
      position={isMobile ? [-4.2, 0.8, 1] : [2, 1, 2]}
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
    <div className="model-container" style={{ width: '100%', height: '100vh' }}>
      <Canvas 
        style={{ width: '200%', height: '100vh' }}
        camera={{ position: isMobile ? [-10, 10, 10] : [-10, 10, 10], fov: 25 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[11, 30, 30]} />
          <Model isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
