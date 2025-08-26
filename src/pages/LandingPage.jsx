import { motion } from "framer-motion";
import React from "react";

const LandingPage = () => {
 
  return (
    <div  className="w-full h-screen bg-zinc-900 pt-1 ">
      <div className="mt-44 px-20">
        <div className="flex  justify-between ">
        <div className="">
            
               <h1 className="uppercase text-[6vw]  leading-[6vw] font-semibold tracking-tighter">
                 Vats creates</h1><div className="w-fit flex">
                < motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1],duration:"1"}} className="w-[9vw] h-[4.2vw] border-2 relative top-[1.2vw] rounded-md flex justify-center items-center p-1">
                  <div className="w-full h-full  rounded-md"></div>
                </motion.div>
                <h1 className="uppercase text-[6vw] leading-[6vw] font-semibold tracking-tighter">
                modern</h1></div>
                <h1 className="uppercase text-[6vw] leading-[6vw] font-semibold tracking-tighter">
               web application</h1>
              
        </div>
        <div className="h-72 w-80 border-2"></div></div>
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
