import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mopizza from '../Assets/Path626.png';
import bgcomic from '../Assets/bgbgcomic.jpg';
import dialog from '../Assets/dialog.png';
import pizzaImage from '../assets/Path 599.png'; 
import "./Wavy.css"

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SlideSections = () => {
  const containerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const waveRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const section1 = section1Ref.current;
    const section2 = section2Ref.current;
    const wave = waveRef.current;
    
    // Make sure all elements are available
    if (!container || !section1 || !section2 || !wave) return;
    
    // Set up initial styling for container
    gsap.set(container, { 
      height: '200vh', // Total height to allow scrolling
      position: 'relative',
      overflow: 'hidden'
    });
    
    // Set initial positions of sections
    gsap.set(section1, { 
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh'
    });
    
    gsap.set(section2, { 
      position: 'absolute',
      top: 0,
      left: '100%',
      width: '100%',
      height: '100vh'
    });
    
    // Position the wave SVG at the boundary between sections
    gsap.set(wave, {
      position: 'absolute',
      top: 0,
      left: '100%',
      width: '100%',
      height: '100vh',
      zIndex: 5
    });
    
    // Create the horizontal scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top', // Start when the top of the container hits the top of the viewport
        end: 'bottom top', // End when the bottom of the container hits the top of the viewport
        scrub: 1, // Smooth scrubbing effect with 1 second lag
        pin: true, // Pin the container during the animation
        pinSpacing: true, // Ensure there's space for scrolling
        markers: false, // Set to true for debugging
      }
    });
    
    // Animate sections and wave moving horizontally as you scroll down
    tl.to([section1, section2, wave], {
      x: '-100%', // Move both sections and the wave to the left
      ease: 'none',
    });
    
    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="slide-sections-container">
      <div
        ref={section1Ref}
        className="slide-section section-1"
      >
        <div className="bg-white h-full flex items-center justify-center">
          <h2 className="font-coiny text-[90px] text-red-700 mt-[-60vh] mr-[11vh]">MO PIZZA VIP</h2>

          <img
            src={pizzaImage}
            alt="Spinning Pizza"
            className="absolute right-[190vh] top-[40vh] w-[200px] h-[200px] animate-spin-slow"style={{
              animation: "spin 8s linear infinite"
            }}
          />


          <div className="absolute top-[30vh] z-10 flex flex-col items-center text-center mr-[11vh]">
            <h2 className="font-coiny text-[50px] text-yellow-500">QUATTRO FROMAGI 1200 DA</h2>
            <p className="font-poppins text-[20px] text-black mt-3">Créme roquefort, Mozzarella, Cheddar, Gruyére, Parmesan.</p>
          
            <h2 className="font-coiny text-[50px] text-yellow-500 mt-[5vh]">SAUMON FUME 1400 DA</h2>
            <p className="font-poppins text-[20px] text-black mt-2">Créme Fraiche, Saumon Fumé, Mozzarella, Cheddar.</p>
            
            <h2 className="font-coiny text-[50px] text-yellow-500 mt-[5vh]">FRUITS DI MARE 1500 DA</h2>
            <p className="font-poppins text-[20px] text-black mt-2">Sauce Tomate, Mozzarella, Crevettes, Fruits Saisonnieres, Cheddar.</p>
            
            <h2 className="font-coiny text-[50px] text-yellow-500 mt-[5vh]">MO PIZZA 1600 DA</h2>
            <p className="font-poppins text-[20px] text-black mt-2">Sauce Tomate, Créme Roquefort, Viande, Poulet Fumé, Crevettes, Thon, Mozzarella, Cheddar.</p>
          </div>
        </div>
      </div>
      
      {/* Wave SVG between sections */}
      <div ref={waveRef} className="wave-divider" style={{ pointerEvents: 'none' }}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="340 79 1440 1920"
          preserveAspectRatio="none"
          style={{ 
            position: 'absolute', 
            bottom: 0,
            top: -500,
            width: '66%',
            height: 'auto',
            transform: 'rotate(270deg)', // Rotate the wave
          }}
        >
          <path 
            fill="rgb(250, 205, 0)" 
            fillOpacity="1" 
            d="M0,288L21.8,288C43.6,288,87,288,131,282.7C174.5,277,218,267,262,245.3C305.5,224,349,192,393,192C436.4,192,480,224,524,245.3C567.3,267,611,277,655,250.7C698.2,224,742,160,785,128C829.1,96,873,96,916,128C960,160,1004,224,1047,256C1090.9,288,1135,288,1178,272C1221.8,256,1265,224,1309,224C1352.7,224,1396,256,1418,272L1440,288L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z,"
          ></path>
        </svg>

        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 9 1440 1920"
          preserveAspectRatio="none"
          style={{ 
            position: 'absolute', 
            bottom: 0,
            top: -500,
            right: -1180,
            width: '66%',
            height: 'auto',
            transform: 'rotate(270deg)', 
          }}
        >
          <path 
            fill="rgb(300, 200, 50)" 
            fillOpacity="1" 
            d="M0,320L26.7,277.3C53.3,235,107,149,160,101.3C213.3,53,267,43,320,42.7C373.3,43,427,53,480,74.7C533.3,96,587,128,640,154.7C693.3,181,747,203,800,208C853.3,213,907,203,960,170.7C1013.3,139,1067,85,1120,69.3C1173.3,53,1227,75,1280,80C1333.3,85,1387,75,1413,69.3L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"            
            ></path>
        </svg>

      </div>

      <div
        ref={section2Ref}
        className="slide-section section-2"
      >
        <div className="bg-[rgb(250,205,0)] h-full flex items-center justify-center mr-[-10vh]">
         
          <h2 className="font-coiny text-[90px] text-red-700 mt-[-70vh] mr-[-62vh]">Mo Family</h2>

          <div className="absolute top-[22vh] z-10 flex flex-col items-center text-center mr-[11vh]">
            <h2 className="font-coiny text-[50px] text-yellow-500">PIZZA 1 METRE  3800 DA</h2>
            <p className="font-poppins text-[20px] text-black mt-3">Sauce Tomate, Créme Roquefort, Poulet Fumé,
            Crevettes, Viande, Thon, Mozzarella, Cheddar. </p>
          </div>

          <h2 className="font-coiny text-[90px] text-red-700 mt-[-12vh] mr-[8vh]">Mo BOISSONS</h2>

         <div className="absolute top-[30vh] z-10 flex flex-col items-center text-center mr-[21vh]">
           <h2 className="font-coiny text-[50px] text-yellow-500 mt-[20vh]">Canette 24 cl  100 DA</h2>
           <h2 className="font-coiny text-[50px] text-yellow-500 mt-[5vh]">CANETTE 33 CL  150 DA</h2>
           <h2 className="font-coiny text-[50px] text-yellow-500 mt-[5vh]">Canette Scweppes  150 DA</h2>
           <h2 className="font-coiny text-[50px] text-yellow-500 mt-[5vh]">Eau Pm   50 DA</h2>

         </div>
        </div>

        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="340 80 1440 1920"
          preserveAspectRatio="none"
          style={{ 
            position: 'absolute', 
            bottom: 0,
            top: 350,
            width: '66%',
            height: 'auto',
            transform: 'rotate(270deg)', // Rotate the wave
          }}
        >
          <path 
            fill="rgb(250, 205, 0)" 
            fillOpacity="1" 
            d="M0,288L21.8,288C43.6,288,87,288,131,282.7C174.5,277,218,267,262,245.3C305.5,224,349,192,393,192C436.4,192,480,224,524,245.3C567.3,267,611,277,655,250.7C698.2,224,742,160,785,128C829.1,96,873,96,916,128C960,160,1004,224,1047,256C1090.9,288,1135,288,1178,272C1221.8,256,1265,224,1309,224C1352.7,224,1396,256,1418,272L1440,288L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z,"
          ></path>
        </svg>





        <div className="bg-[rgb(250,205,0)] h-full flex items-center justify-center mr-[-10vh] relative ">
          
        <img
          src={bgcomic}
          alt="bgcomic"
          className="absolute inset-0 w-full h-full object-cover opacity-5 z-0 pointer-events-none"
        />


        <dev className="mr-[-800px] z-20">
          <iframe
            title="Mo Pizza Bir El Djir"
            className="w-[900px] h-[600px] z-50 ml-[200px] mb-[150px] pointer-events-auto border-4 border-black"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.025288471395!2d-0.5835487!3d35.7143911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e631587352295%3A0xcdb8d73c328de5d0!2sMo%20Pizza!5e0!3m2!1sen!2sdz!4v1712835844745!5m2!1sen!2sdz"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </dev>


          <img src={dialog} alt="dialog" className="absolute bottom-[450px] right-0 mr-[166vh] w-[400px] z-10" />

          <img src={mopizza} alt="Mo Pizza" className="absolute bottom-[-30px] right-0 mr-[156vh] w-[500px] z-10" />


          <dev className="mt-[600px] mr-[400px] z-30">
            <ul class="wrapper">
              <li class="icon facebook">
                <span class="tooltip">Facebook</span>
                <svg
                  viewBox="0 0 320 512"
                  height="1.2em"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </li>
              <li class="icon twitter">
                <span class="tooltip">Twitter</span>
                <svg
                  height="1.8em"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  class="twitter"
                >
                  <path
                    d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                  ></path>
                </svg>
              </li>
              <li class="icon instagram">
                <span class="tooltip">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2em"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                  ></path>
                </svg>
              </li>
            </ul>
          </dev>


        </div>

       
         
         
       

      </div>


      
    </div>

  );
};

export default SlideSections;