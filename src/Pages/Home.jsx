import React, {  useState, useEffect,useRef } from 'react';
import ModelViewer from '../Components/Model/Model.jsx';
import ZoomOnScroll from '@/Components/ZoomOnScroll/ZoomOnScroll.jsx';
import { Hero } from '@/Components/Hero/Hero.jsx';
import AnimatedPath from '@/Components/AnimatedPath/AnimatedPath.jsx'; // Import your path component
import imagePath from '../Components/Assets/image-removebg-preview.png';
import '../Pages/Css/Home.css';
import SlideSections from '../Components/Wavy/Wavy.jsx';
import Vdcart from '../Components/Vdcart/Vdcart.jsx'
import tree1 from '../Components/Assets/tree1.png';
import tree2 from '../Components/Assets/tree2.png';



export const Home = () => {
  const modelRef = useRef(null); // Reference for the ModelViewer
  const [zIndexSlide, setZIndexSlide] = useState(20); // Set initial z-index for SlideSections

  // Detect the scroll position and update the z-index for SlideSections
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // If scroll position is greater than 6000px, change the z-index of SlideSections
      if (scrollY > 6000) {
        setZIndexSlide(50); // Change the z-index to 50 after 6000px
      } else {
        setZIndexSlide(0); // Reset to 20 before 6000px
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Hero Section */}
      <img src={tree1} alt="Pizza" className="absolute w-[300px] h-auto" style={{ transform: 'rotate(220deg)' }}/>
      <img src={tree2} alt="Pizza" className="absolute w-[200px] h-auto ml-[182vh] mt-[60vh]" style={{ transform: 'scaleX(-1) rotate(160deg)' }}/>
      <div>
        <Hero />
      </div>

      {/* 3D Model Viewer */}
      <div className="fixed inset-0 z-30">
        <ModelViewer />
      </div>
      
      {/* ZoomOnScroll Component (Above AnimatedPath) */}
      <div className="relative z-20">
      <Vdcart />
        <ZoomOnScroll />
        
        <AnimatedPath />
        
        {/* Image and Text */}
        <div className="absolute top-[80vh] left-[20vw] z-10 flex flex-col items-center text-center">
          {/* Image */}
          <img src={imagePath} alt="Path Start" className="w-[1000px] h-[300px]" />

          
          <h2 className="font-coiny text-[50px] text-yellow-500 mt-[40vh]">MARGARITA 400 DA</h2>
          <p className="font-poppins text-[20px] text-black mt-2">Sauce Tomate, Mozzarella, Cheddar.</p>

          <h2 className="font-coiny text-[50px] text-yellow-500 mt-[10vh]">VEGETARIENA 600 DA</h2>
          <p className="font-poppins text-[20px] text-black mt-2">Sauce tomate, Mozzarella, Cheddar,
          Onions, Poivrons, Aubergine, champignons.</p>

          <h2 className="font-coiny text-[50px] text-yellow-500 mt-[10vh]">NAPOLITANA 600 DA</h2>
          <p className="font-poppins text-[20px] text-black mt-2">Sauce Tomate, Mozzarella, Anchois, Capres.</p>

          <h2 className="font-coiny text-[50px] text-yellow-500 mt-[10vh]">THON 700 DA</h2>
          <p className="font-poppins text-[20px] text-black mt-2">Sauce Tomate , Thon , Mozzarella , Cheddar</p>

          <h2 className="font-coiny text-[50px] text-yellow-500 mt-[10vh]">CHAMPIGNON PARIS 700 DA</h2>
          <p className="font-poppins text-[20px] text-black mt-2">Créme Fraiche , Mozzarella ,
          Champignon Frais , Cheddar. </p>

          <h2 className="font-coiny text-[50px] text-yellow-500 mt-[10vh]">ORANAISE 750 DA</h2>
          <p className="font-poppins text-[20px] text-black mt-2">Sauce Tomate, Mozzarella, Cheddar,
          Merguez, Champignons, Poivrons.</p>

          <h2 className="font-coiny text-[50px] text-yellow-500 mt-[10vh]">CHILI 800 DA</h2>
          <p className="font-poppins text-[20px] text-black mt-2">Sauce Mexicaine, Mozzarella, Cheddar,
          Poulet, Poivrons, onion.</p>

          <h2 className="font-coiny text-[50px] text-yellow-500 mt-[10vh]">POULET TANDORI 800 DA</h2>
          <p className="font-poppins text-[20px] text-black mt-2">Créme Fraiche, Poulet, Mozzarella,
          Epices Poulet, Tandoori, Cheddar</p>

          <h2 className="font-coiny text-[50px] text-yellow-500 mt-[10vh]">FORESTIERE 800 DA</h2>
          <p className="font-poppins text-[20px] text-black mt-2">Créme Fraiche, Poulet, Champignons,
Poivron, Mozzarella , Cheddar.</p>

          <h2 className="font-coiny text-[50px] text-yellow-500 mt-[10vh]">POULET FUME  800 DA</h2>
          <p className="font-poppins text-[20px] text-black mt-2">Créme Fraiche, Poulet Fumé a la Braise ,
          Mozzarella , Cheddar.</p>

          <h2 className="font-coiny text-[50px] text-yellow-500 mt-[10vh]">Viande Roquefort Creme 850 DA</h2>
          <p className="font-poppins text-[20px] text-black mt-2">Roquefort, Mozzarella, Cheddar,
          Viande Fraiche.</p>

          <h2 className="font-coiny text-[50px] text-yellow-500 mt-[10vh]">Fumato 900 DA</h2>
          <p className="font-poppins text-[20px] text-black mt-2">Sauce Tomate, Mozzarella,Viande
Fumée , Cheddar.</p>

          <h2 className="font-coiny text-[50px] text-yellow-500 mt-[10vh]">POULET ROQUEFORT  900 DA</h2>
          <p className="font-poppins text-[20px] text-black mt-2">Créme Roquefort, Poulet Mozzarella, Cheddar.</p>

          <h2 className="font-coiny text-[50px] text-yellow-500 mt-[10vh]">CHICKEN-MEAT 900 DA</h2>
          <p className="font-poppins text-[20px] text-black mt-2">Sauce Tomate, Poulet, Viande , Mozzarella,
          Poivron, Cheddar.</p>

          <h2 className="font-coiny text-[50px] text-yellow-500 mt-[10vh]">FUNGHI-MEAT 900 DA</h2>
          <p className="font-poppins text-[20px] text-black mt-2">Sauce Tomate, Viande, Champignons,
Mozzarella , Poivron , Cheddar.</p>

          {/* MO PIZZA VIP */}

          

        </div>


        

      </div>
      <div className="mt-[70vh] w-full  " style={{ zIndex: zIndexSlide }}>
            <SlideSections />
      </div>
      <img src={tree1} alt="Pizza" className="absolute w-[300px] h-auto mt-[912vh] ml-[170vh] z-50" style={{ transform: 'rotate(190deg) scaleX(-1)' }}/>

    </div>
  );
};
