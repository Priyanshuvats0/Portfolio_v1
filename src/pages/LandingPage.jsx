import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-900 pt-1 overflow-hidden">
      
      {/* =====================================================
          1. THE AESTHETIC LAYER (Background Only)
          - This sits BEHIND your content.
          - It adds the vertical lines at 'left-20' and 'right-20'
            to match your Tech Stack page exactly.
         ===================================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute left-6 md:left-20 top-0 bottom-0 w-[1px] bg-zinc-800"></div>
         <div className="absolute right-6 md:right-20 top-0 bottom-0 w-[1px] bg-zinc-800"></div>
      </div>

      {/* =====================================================
          2. YOUR ORIGINAL CONTENT (Unchanged Layout)
         ===================================================== */}
      <div className="relative z-10"> {/* Added relative z-10 to sit on top of lines */}
        
        <div className="mt-44 px-6 md:px-20"> {/* Added md:px-20 to match lines */}
          <div className="flex flex-col md:flex-row justify-between">
            
            {/* LEFT SIDE TEXT */}
            <div className="">
              <h1 className="uppercase text-[12vw] md:text-[6vw] leading-[10vw] md:leading-[6vw] font-semibold tracking-tighter text-zinc-100">
                Priyanshu vats
              </h1>
              
              <p className="text-[4vw] md:text-[1.3vw] font-semibold max-w-full md:max-w-[47vw] text-zinc-400 mt-8 leading-relaxed">
                I am a <span className="text-zinc-100">Full Stack Developer</span> from India. I engineer full-stack solutions using <span className="text-zinc-100">React, Node.js, and MongoDB.</span> My focus is on building scalable architectures, implementing secure authentication protocols, and optimizing API performance for production environments.
              </p>
      
              <div className="flex items-center gap-6 mt-6">
                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/in/your-profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#0077b5] transition-colors duration-300 text-3xl"
                >
                  <FaLinkedin />
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/Priyanshuvats0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors duration-300 text-3xl"
                >
                  <FaGithub />
                </a>

                {/* Email */}
                <a 
                  href="mailto:priyanshuvatsbal@gmail.com"
                  className="text-gray-500 hover:text-red-500 transition-colors duration-300 text-3xl"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE (Your Glow Effect) */}
            <div className="mt-10 md:mt-0 h-72 w-80 md:mr-10 relative flex justify-center items-center">
                {/* Glow background */}
                <motion.div 
                  initial={{ opacity: 0.2, scale: 0.9 }}
                  animate={{ opacity: [0.2, 0.4, 0.2], scale: [0.9, 1.05, 0.9] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute w-72 h-72 rounded-full bg-slate-300 blur-3xl"
                />
                
                <img 
                  src="/myimg/gibli_black-new.png" 
                  alt="/" 
                  className="scale-110 rounded-full relative z-10 object-cover"
                />
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        {/* I changed this slightly to match the aesthetic: 
            Instead of 'px-20', I used 'mx-20'. 
            This makes the border start EXACTLY on the vertical lines. */}
        <div className="mx-6 md:mx-20 border-t-[1px] border-zinc-700 mt-20 md:mt-32 flex flex-col md:flex-row justify-between items-center py-5 gap-4 md:gap-0">
            {["Engineering Interfaces for the Next Decade", "Let's collaborate to bring your vision to life"].map((item, index) => (
              <p key={index} className="text-md font-light tracking-tighter leading-none text-center text-zinc-400">
                  {item}
              </p>
            ))}
            
            <div> 
              <div className="px-4 py-2 border-[1px] border-zinc-500 rounded-full font-light text-sm capitalize cursor-pointer hover:bg-zinc-800 transition-all text-zinc-300">
                Start the Project
              </div>
            </div>       
        </div>

      </div>
    </div>
  );
};

export default LandingPage;