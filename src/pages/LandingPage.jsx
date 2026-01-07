import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const LandingPage = () => {
 
  return (
    <div  className="w-full h-screen bg-zinc-900 pt-1 ">
      <div className="mt-44 px-20">
        <div className="flex  justify-between ">
        <div className="">
            
               <h1 className="uppercase text-[6vw]  leading-[6vw] font-semibold tracking-tighter text-zinc-100">
                 Priyanshu vats</h1>
                 {/* <div className="w-fit flex">
                < motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1],duration:"1"}} className="w-[9vw] h-[4.2vw] border-2 border-[#ffff] relative top-[1.2vw] rounded-md flex justify-center items-center p-1 bg-[]">
                  <div className="w-full h-full  rounded-md"></div>
                </motion.div>
                <h1 className="uppercase text-[6vw] leading-[6vw] font-semibold tracking-tighter">
                modern</h1></div> */}
                <p className=" text-[1.3vw] font-semibold max-w-[47vw]  text-zinc-400 mt-8  ">
               I am a <span className="text-zinc-100">Full Stack Developer</span> from India. I engineer full-stack solutions using <span className="text-zinc-100">React, Node.js, and MongoDB.</span> My focus is on building scalable architectures, implementing secure authentication protocols, and optimizing API performance for production environments.</p>
    
              <div className="flex items-center gap-6 mt-6">
      
      {/* LinkedIn */}
      <a 
        href="https://linkedin.com/in/your-profile" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-[#0077b5] transition-colors duration-300 text-3xl"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>

      {/* GitHub */}
      <a 
        href="https://github.com/Priyanshuvats0" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-white transition-colors duration-300 text-3xl"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>

      {/* Email (mailto link) */}
      <a 
        href="mailto:priyanshuvatsbal@gmail.com"
        className="text-gray-500 hover:text-red-500 transition-colors duration-300 text-3xl"
        aria-label="Email"
      >
        <FaEnvelope />
      </a>

    </div>
               


              
        </div>
        {/* <div className="h-72 w-80 -mt-10  rounded-md">
          <img src="/myimg/gibli_black-new.png" alt="/" className="scale-110 rounded-full bg-[#18181B] shadow-[0_0_40px_#22D3EE] relative z-10" />
      
          </div> */}
          <div className="h-72 w-80  border-2 border-x-2  rounded-full relative flex justify-center items-center overflow-hidden">
  {/* Glow background */}
 <motion.div 
  initial={{ opacity: 0.2, scale: 0.9 }}
  animate={{ opacity: [0.2, 0.4, 0.2], scale: [0.9, 1.05, 0.9] }}
  transition={{ duration: 4, repeat: Infinity }}
  className="absolute w-72 h-72 rounded-full bg-slate-300 blur-3xl mt-10"
/>

 
  <img 
    src="/myimg/gibli_black-new.png" 
    alt="/" 
    className="scale-110 rounded-full  relative z-10 mt-10"
  />
</div>
          
          </div>
      </div>
      <div></div>
      <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20 ">
          {["Engineering Interfaces for the Next Decade","Let's collaborate to bring your vision to life"].map((item,index)=>
            (<p className="text-md font-light tracking-tighter leading-none text-cente">
                  {item}
            </p>))}
           
           <div> <div className="px-4 py-2 border-[2px] border-zinc-500 rounded-full font-lighter text-sm capitalize  cursor-pointer">Start the Project</div></div>       
      </div>
    </div>
  );
};

export default LandingPage;
