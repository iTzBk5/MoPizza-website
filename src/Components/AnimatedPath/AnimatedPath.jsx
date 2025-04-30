import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import pop1 from "../Assets/pop1.png";
import pop2 from "../Assets/pop2.png";
import pop3 from "../Assets/pop3.png";
import pop4 from "../Assets/pop4.png";
import pop5 from "../Assets/pop5.png";

gsap.registerPlugin(ScrollTrigger);

const AnimatedPath = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    const skipLength = pathLength * 0.4;

    gsap.fromTo(
      path,
      {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      },
      {
        strokeDashoffset: pathLength - skipLength,
        duration: 1.5,
        ease: 'power1.inOut',
      }
    );

    gsap.fromTo(
      path,
      {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength - skipLength,
      },
      {
        strokeDashoffset: 0,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: path,
          start: 'top top',
          end: 'bottom center',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="absolute w-full h-full flex items-center justify-center z-10" 
    style={{ top: '-40vh' }}>
    

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 1000 900 400"
        className="w-full h-auto"
        width="1000px" // Ensures proper rendering
        height="3230px"
      >
        <path
          ref={pathRef}
          d="M-100,600 C350,1000 200,1100 700,950 
            S0,650 40,850 400,1050 
            300,1250 300,1550 300,1550 600,1850 900,1950
            1000,2050 100,2450
            100,2650 100,3050"
          stroke="rgb(250, 205, 0)"
          fill="transparent"
          strokeWidth="270"
        />
      </svg>

      <div className='absolute'>
        <motion.img
          src={pop1}
          alt="Popup"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" , delay: 0.2}}
          viewport={{ once: false, amount: 0.3 }}
          className="w-[300px] h-auto mt-[100px] ml-[400px] "
        />
      </div>

      <div className='absolute'>
        <motion.img
          src={pop2}
          alt="Popup"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" , delay: 0.2}}
          viewport={{ once: false, amount: 0.3 }}
          className="w-[300px] h-auto mt-[500px] mr-[1500px] "
        />
      </div>


      <div className='absolute'>
        <motion.img
          src={pop3}
          alt="Popup"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 0.4 }}
          transition={{ duration: 1, ease: "easeOut" , delay: 0.2}}
          viewport={{ once: false, amount: 0.3 }}
          className="w-[300px] h-auto mt-[1000px] mr-[0px] "
        />
      </div>

      <div className='absolute'>
        <motion.img
          src={pop1}
          alt="Popup"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" , delay: 0.2}}
          viewport={{ once: false, amount: 0.3 }}
          className="w-[300px] h-auto mt-[1500px] ml-[1000px] "
        />
      </div>

      <div className='absolute'>
        <motion.img
          src={pop5}
          alt="Popup"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" , delay: 0.2}}
          viewport={{ once: false, amount: 0.3 }}
          className="w-[300px] h-auto mt-[2000px] mr-[1100px] "
        />
      </div>

      <div className='absolute'>
        <motion.img
          src={pop2}
          alt="Popup"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" , delay: 0.2}}
          viewport={{ once: false, amount: 0.3 }}
          className="w-[300px] h-auto mt-[2800px] mr-[2100px] "
        />
      </div>

      <div className='absolute'>
        <motion.img
          src={pop3}
          alt="Popup"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" , delay: 0.2}}
          viewport={{ once: false, amount: 0.3 }}
          className="w-[300px] h-auto mt-[3500px] mr-[500px] "
        />
      </div>

      <div className='absolute'>
        <motion.img
          src={pop1}
          alt="Popup"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" , delay: 0}}
          viewport={{ once: false, amount: 0.3 }}
          className="w-[300px] h-auto mt-[5500px] ml-[500px] "
        />
      </div>

    </div>
  );
};

export default AnimatedPath;
