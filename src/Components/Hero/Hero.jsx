import React from 'react';
import mainLogo from '../Assets/main-logo.png'; 

export const Hero = () => {
    return (
        <div className="relative h-screen overflow-y-auto">
          {/* Background gradient (fixed) */}
             <div className="fixed bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          
          {/* New background elements (fixed) */}
             <div className="fixed top-0 -z-10 h-full w-full bg-white">
                <div className="fixed top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_100%_70%_at_60%_-50%,rgba(248,134,75,255),rgba(255,255,255,0))]"></div>
                <div className="fixed bottom-auto left-auto right-0 top-0 h-[200px] w-[200px] -translate-x-[60%] translate-y-[70%] rounded-full bg-[rgba(248,134,75,255)] opacity-40 blur-[80px]
             sm:h-[500px] sm:w-[500px] sm:-translate-x-[246%] sm:translate-y-[45%]
             "></div>
             </div>
             
             {/* Content that can scroll */}
             <div className="relative z-10 flex flex-col items-center p-4 sm:items-start sm:p-8">
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
        </div>
    );
};
