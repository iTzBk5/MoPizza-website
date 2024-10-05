import React, { useRef } from 'react';
import ModelViewer from '../Components/Model/Model.jsx';
import ZoomOnScroll from '@/Components/ZoomOnScroll/ZoomOnScroll.jsx';
import { Hero } from '@/Components/Hero/Hero.jsx';
import '../Pages/Css/Home.css';
export const Home = () => {
  const modelRef = useRef(null); // Reference for the ModelViewer

  return (
    <div className="relative min-h-screen flex flex-col ">

      {/* Hero Section */}
      <div>
        <Hero />
      </div>
      {/* 3D Model Viewer */}
      <div className="fixed z-30 " >
        <ModelViewer />
      </div>

      {/* ZoomOnScroll Component */}
      <div className='relative   '>
        <ZoomOnScroll />
      </div>
      
    </div>
  );
};
