import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="relative w-full bg-zinc-900 pt-20 overflow-hidden">
      
      {/* =========================================
          BACKGROUND GRID LINES (Matches Global Theme)
         ========================================= */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute left-6 md:left-20 top-0 bottom-0 w-[1px] bg-zinc-800"></div>
         <div className="absolute right-6 md:right-20 top-0 bottom-0 w-[1px] bg-zinc-800"></div>
      </div>

      {/* =========================================
          MAIN CONTENT
         ========================================= */}
      <div className="relative z-10 mx-6 md:mx-20 flex flex-col justify-between min-h-[60vh]">
        
        {/* TOP SECTION: CTA */}
        <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-mono text-zinc-500 text-xs tracking-widest uppercase">
                    // 04_CONTACT
                </span>
            </div>
            
            <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-white uppercase mb-10">
                Let's <br/> <span className="text-zinc-700">Talk.</span>
            </h1>
        </div>

        {/* MIDDLE SECTION: LINKS & INFO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 border-t border-zinc-800 py-12">
            
            {/* Column 1: Email */}
            <div className="flex flex-col gap-4">
                <span className="font-mono text-zinc-600 text-xs tracking-widest">CONTACT_INFO</span>
                <a href="mailto:priyanshuvatsbal@gmail.com" className="text-xl md:text-2xl font-medium text-zinc-300 hover:text-white transition-colors">
                    priyanshuvatsbal<br/>@gmail.com
                </a>
            </div>

            {/* Column 2: Socials */}
            <div className="flex flex-col gap-4">
                <span className="font-mono text-zinc-600 text-xs tracking-widest">SOCIAL_NETWORKS</span>
                <div className="flex flex-col gap-2">
                    {[
                        { name: "LinkedIn", icon: <FaLinkedin />, link: "#" },
                        { name: "GitHub", icon: <FaGithub />, link: "https://github.com/Priyanshuvats0" },
                        { name: "Twitter", icon: <FaTwitter />, link: "#" },
                        { name: "Instagram", icon: <FaInstagram />, link: "#" },
                    ].map((item, i) => (
                        <a key={i} href={item.link} className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors cursor-pointer w-fit">
                            <span className="text-lg">{item.icon}</span>
                            <span className="uppercase text-sm tracking-wider font-medium relative">
                                {item.name}
                                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
                            </span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Column 3: Location / Tech Details */}
            <div className="flex flex-col gap-4 md:items-end">
                <span className="font-mono text-zinc-600 text-xs tracking-widest">COORDINATES</span>
                <div className="text-zinc-400 text-sm font-mono md:text-right">
                    <p>LAT: 25.5941° N</p>
                    <p>LNG: 85.1376° E</p>
                    <p className="mt-4 text-zinc-500">INDIA, IN</p>
                </div>
            </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="h-20 border-t border-zinc-800 flex items-center justify-between text-zinc-600 font-mono text-xs">
             <span>© 2024 PRIYANSHU VATS</span>
             
             {/* Back to Top Button */}
             <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-white transition-colors cursor-pointer uppercase"
             >
                [ Back_To_Top ]
             </button>
        </div>

      </div>
    </div>
  );
};

export default Footer;