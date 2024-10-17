import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import backgroundImage from '../Assets/New_Project-ai-brush-removebg-z1gd0twg.png';
import moPizzaBackground from '../Assets/MENU-mopizza-newx-1.png';
import moPizzaBackground2 from '../Assets/MENU-mopizza-newx-2.png';
import Background1 from '../Assets/vecteezy_pattern-of-hand-drawn-pizza-isolated-on-dark-and-bright_12803916.jpg';
import cherry from '../Assets/cherry.png';
import chilli1 from '../Assets/chilli-1.png';
import chilli2 from '../Assets/chilli-2.png';
import freshtomatoes from '../Assets/fresh-tomatoes.png';
import garlic1 from '../Assets/garlic-1.png';
import garlic2 from '../Assets/garlic-2.png';
import garlic3 from '../Assets/garlic-3.png';
import leaves from '../Assets/leaves.png';
import mozzarella from '../Assets/mozzarella.png';
import olives from '../Assets/olives.png';
import mushrooms from '../Assets/mushrooms.png';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ZoomOnScroll = () => {
  const bgRef = useRef(null);
  const cherryRef = useRef(null);
  const chilliRef = useRef(null);
  const chilli2Ref = useRef(null);
  const tomatoRef = useRef(null);
  const garlicRef = useRef(null);
  const garlic2Ref = useRef(null);
  const garlic3Ref = useRef(null);
  const leavesRef = useRef(null);
  const mozzarellaRef = useRef(null);
  const olivesRef = useRef(null);
  const mushroomsRef = useRef(null);

  useEffect(() => {
    // Apply GSAP zoom effect with ScrollTrigger
    gsap.to(bgRef.current, {
      scale: 50,
      x: '80%',
      y: '210%',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: bgRef.current,
        start: '400px center',
        end: 'bottom center',
        scrub: 1,
        markers: false,
        pin: false,
        pinSpacing: false,
      },
    });

    // Parallax effect on mouse move
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const xPos = (clientX / windowWidth) * 2 - 1;
      const yPos = (clientY / windowHeight) * 2 - 1;

      // Apply parallax effect to each image
      const elements = [
        cherryRef,
        chilliRef,
        chilli2Ref,
        tomatoRef,
        garlicRef,
        garlic2Ref,
        garlic3Ref,
        leavesRef,
        mozzarellaRef,
        olivesRef,
        mushroomsRef,
      ];

      elements.forEach((ref) => {
        gsap.to(ref.current, {
          x: xPos * 30,
          y: yPos * 30,
          ease: 'power2.out',
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-[400vh] w-full overflow-hidden">
      <div
        className="absolute inset-0   z-10"
        style={{
          backgroundImage: `url(${moPizzaBackground})`,
          backgroundSize: '60% 50%',
          backgroundPosition: '0% 0%',
          backgroundRepeat:'no-repeat'
        }}
      />
      <div
      className="absolute inset-0 z-10"
      style={{
        backgroundImage: `url(${moPizzaBackground2})`,
        backgroundSize: '60% 50%',
        backgroundPosition: '100% 100%',
        backgroundRepeat: 'no-repeat',
      }}
    />
      <div
        className="absolute inset-0   z-9"
        style={{
          backgroundColor: '#ea8a4e',
          backgroundImage: `url(${Background1})`,
          backgroundBlendMode: 'multiply',
          backgroundSize: '40% 30%',
          backgroundPosition: '100% 0%',
        }}
      />
      <div
        ref={bgRef}
        className="absolute inset-0 bg-center mb-[300vh] z-20"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Parallax child elements */}
        <div
          ref={cherryRef}
          className="absolute sm:w-[22vh] sm:h-[22vh] w-[16vh] h-[16vh] z-40 "
          style={{ top: '90%', left: '5%', transform: 'translate(-50%, -50%)' }}
        >
          <img src={cherry} alt="Parallax" className="w-full h-full object-cover" />
        </div>

        <div
          ref={chilliRef}
          className="absolute sm:w-[40vh] sm:h-[22vh] w-[40vh] h-[22vh] "
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', scale: '50% 50%' }}
        >
          <img src={chilli1} alt="Parallax" className="w-full h-full object-cover" />
        </div>

        <div
          ref={chilli2Ref}
          className="absolute w-[40vh] h-[46vh]"
          style={{ top: '0%', left: '0%', transform: 'translate(-50%, -50%)', scale: '50% 50%' }}
        >
          <img src={chilli2} alt="Parallax" className="w-full h-full object-cover" />
        </div>

        <div
          ref={tomatoRef}
          className="absolute w-[30vh] h-[30vh] z-25"
          style={{ top: '10%', left: '80%', transform: 'translate(-50%, -50%)', scale: '80% 80%'  }}
        >
          <img src={freshtomatoes} alt="Parallax" className="w-full h-full object-cover" />
        </div>

        <div
          ref={garlicRef}
          className="absolute w-[20vh] h-[20vh] "
          style={{ top: '-5%', left: '50%', transform: 'translate(-50%, -50%)', scale: '50% 50%' }}
        >
          <img src={garlic1} alt="Parallax" className="w-full h-full object-cover" />
        </div>

        <div
          ref={garlic2Ref}
          className="absolute w-[20vh] h-[20vh] z-40"
          style={{ top: '70%', left: '30%', transform: 'translate(-50%, -50%)', scale: '50% 50%' }}
        >
          <img src={garlic2} alt="Parallax" className="w-full h-full object-cover" />
        </div>

        <div
          ref={garlic3Ref}
          className="absolute w-[20vh] h-[20vh]"
          style={{ top: '40%', left: '70%', transform: 'translate(-50%, -50%)', scale: '50% 50%' }}
        >
          <img src={garlic3} alt="Parallax" className="w-full h-full object-cover" />
        </div>

        <div
          ref={leavesRef}
          className="absolute w-[25vh] h-[25vh]"
          style={{ top: '10%', left: '30%', transform: 'translate(-50%, -50%)', scale: '60% 60%' }}
        >
          <img src={leaves} alt="Parallax" className="w-full h-full object-cover" />
        </div>

        <div
          ref={mozzarellaRef}
          className="absolute w-[25vh] h-[25vh]"
          style={{ top: '30%', left: '20%', transform: 'translate(-50%, -50%)', scale: '80% 80%' }}
        >
          <img src={mozzarella} alt="Parallax" className="w-full h-full object-cover" />
        </div>

        <div
          ref={olivesRef}
          className="absolute w-[20vh] h-[20vh]"
          style={{ top: '65%', left: '90%', transform: 'translate(-50%, -50%)' }}
        >
          <img src={olives} alt="Parallax" className="w-full h-full object-cover" />
        </div>

        <div
          ref={mushroomsRef}
          className="absolute w-[20vh] h-[20vh]"
          style={{ top: '80%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <img src={mushrooms} alt="Parallax" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="relative z-10 h-screen flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold"></h1>
      </div>
    </div>
  );
};

export default ZoomOnScroll;
