import React from 'react';
import ModelViewer from '../Components/Model/Model.jsx';
import backgroundImage from '../Components/Assets/MoPizza-background.png'; // Adjust the path
import './Css/Home.css'

export const Home = () => {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the imported image
      }}
    >
      <ModelViewer />
    </div>
  );
};
