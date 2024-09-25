import React from 'react';
import ModelViewer from '../Components/Model/Model.jsx';
import backgroundImage from '../Components/Assets/MoPizza-background.png'; // Adjust the path
import './Css/Home.css';
import { Hero } from '@/Components/Hero/Hero.jsx';
import Navbar from '@/Components/Navbar/Navbar.jsx';

export const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* 3D Model Viewer */}
      <div className="absolute">
        <ModelViewer />
      </div>

      {/* Background image container */}
      <div
        className=" home-container "
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
    </div>
  );
};
