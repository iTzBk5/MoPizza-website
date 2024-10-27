import React from 'react';
import { useNavigate } from 'react-router-dom';
import mainLogo from '../Assets/main-logo.png';

export const Hero = () => {
    const navigate = useNavigate();

    return (
        <div className="relative h-screen overflow-y-auto">
          {/* Background gradient (fixed) */}
             <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          
          {/* New background elements (fixed) */}
             <div className="fixed top-0 -z-10 h-full w-full bg-white">
                <div className="fixed top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_100%_70%_at_60%_-50%,rgba(248,134,75,255),rgba(255,255,255,0))]"></div>
                
             </div>
             
             {/* Content that can scroll */}
             <div className="bbt relative z-10 flex flex-col items-center p-4 sm:items-start sm:p-8">
                    {/* Logo */}
                    <img 
                    src={mainLogo}
                    alt="Mo Pizza Logo" 
                    className="mt-20 h-50 w-40  sm:ml-60 sm:mt-52 sm:h-90 sm:w-80"
                    />

                    {/* Text below logo */}
                    <div className="mt-4 text-center sm:ml-48 sm:mt-10 sm:text-center">
                        <h1 className="text-3xl font-bold mb-2 sm:text-4xl">Welcome to Mo Pizza</h1>
                        <p className="text-lg sm:text-xl">Delicious pizzas made with love!</p>
                    </div>
                    
                </div>
                <div className="buttons flex justify-start ml-[65px] sm:ml-[260px] mt-4 z-50">
                    <button className="z-50 bg-[#fbca1f] font-bold text-lg sm:text-xl font-inherit px-6 py-3 border-2 border-black rounded-md shadow-md transition-transform duration-100 ease-in-out hover:translate-x-[-0.1rem] hover:translate-y-[-0.1rem] hover:shadow-lg active:translate-x-[0.1rem] active:translate-y-[0.1rem] active:shadow-sm ml-5"
                    onClick={() => navigate('/franchise')}
                    >
                        Franchise
                    </button>
                    <button className="z-50 bg-[#ffffff] font-bold text-lg sm:text-xl font-inherit px-6 py-3 border-1 border-black rounded-md shadow-md transition-transform duration-100 ease-in-out hover:translate-x-[-0.1rem] hover:translate-y-[-0.1rem] hover:shadow-lg active:translate-x-[0.1rem] active:translate-y-[0.1rem] active:shadow-sm ml-5"
                    onClick={() => navigate('/game')}
                    >
                        Game
                    </button>
                </div>
   
                
        </div>
    );
};
