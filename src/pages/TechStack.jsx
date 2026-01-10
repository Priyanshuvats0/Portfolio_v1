import React from 'react'
import Slider from '../components/Slider'
import { FaReact, FaNodeJs, FaDocker, FaPython } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiCplusplus, SiNextdotjs } from 'react-icons/si'

const techData = [
  { name: "React", icon: <FaReact />, category: "Frontend", status: "Advanced" },
  { name: "Next.js", icon: <SiNextdotjs />, category: "Frontend", status: "Intermediate" },
  { name: "Node.js", icon: <FaNodeJs />, category: "Backend", status: "Advanced" },
  { name: "Express", icon: <SiExpress />, category: "Backend", status: "Advanced" },
  { name: "MongoDB", icon: <SiMongodb />, category: "Database", status: "Advanced" },
  { name: "C++", icon: <SiCplusplus />, category: "Language", status: "Mastery" },
  { name: "TypeScript", icon: <SiTypescript />, category: "Language", status: "Intermediate" },
  { name: "Tailwind", icon: <SiTailwindcss />, category: "Design", status: "Advanced" },
  { name: "Docker", icon: <FaDocker />, category: "DevOps", status: "Learning" },
]

const TechStack = () => {
  return (
    <div className='relative z-[100] bg-zinc-900 min-h-screen w-full overflow-hidden flex flex-col justify-between'>
      
      {/* =========================================
          BACKGROUND GRID
         ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Vertical Grid Line (Left) */}
        <div className="absolute left-6 md:left-20 top-0 bottom-0 w-[1px] bg-zinc-800"></div>
        {/* Vertical Grid Line (Right) */}
        <div className="absolute right-6 md:right-20 top-0 bottom-0 w-[1px] bg-zinc-800"></div>
        {/* Horizontal Grid Line (Top) */}
        <div className="absolute top-40 left-0 right-0 h-[1px] bg-zinc-800"></div>
        
        {/* Intersection "Plus" Marker */}
        <div className="absolute left-6 md:left-20 top-40 -translate-x-1/2 -translate-y-1/2 text-zinc-500">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                 <path d="M12 5v14M5 12h14"/>
             </svg>
        </div>
      </div>

      {/* =========================================
          CONTENT LAYER
         ========================================= */}
      <div className='relative z-10 w-full pt-20 px-6 md:px-20'>
        
        {/* HEADER SECTION */}
        <div className='flex items-end justify-between mb-10'>
            <div className='flex flex-col gap-2'>
                <span className='font-mono text-zinc-500 text-sm tracking-widest pl-1'>
                    // 02_DATABASE
                </span>
                <span className='text-5xl md:text-7xl tracking-tighter font-semibold text-white leading-none'>
                    TECH STACK<span className='text-zinc-600'>.</span>
                </span>
            </div>

            <div className='hidden md:block w-64 text-xs font-mono text-zinc-500 text-right leading-relaxed'>
                OPTIMIZED FOR PERFORMANCE <br/>
                SCALABLE ARCHITECTURE <br/>
                MODERN TOOLING
            </div>
        </div>

        {/* GRID SECTION */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-10 pt-10'>
          {techData.map((tech, i) => (
            <div 
              key={i}
              className='group relative border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors duration-300 h-32 flex flex-col justify-between p-4 overflow-hidden'
            >
              <div className='absolute top-0 left-0 w-full h-[2px] bg-zinc-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>

              <div className='flex justify-between items-start'>
                 <span className='text-[10px] font-mono text-zinc-500 uppercase tracking-wider'>{tech.category}</span>
                 <div className='w-1 h-1 bg-zinc-600 rounded-full group-hover:bg-green-500 transition-colors'></div>
              </div>

              <div className='flex items-end justify-between'>
                  <span className='text-zinc-400 group-hover:text-white text-3xl transition-colors duration-300'>
                     {tech.icon}
                  </span>
                  <span className='text-xl font-semibold text-zinc-300 group-hover:text-white tracking-tighter'>
                    {tech.name}
                  </span>
              </div>

              <div className='absolute bottom-0 right-0 w-3 h-3 border-r border-b border-zinc-700 opacity-50 group-hover:border-white transition-colors'></div>
            </div>
          ))}
        </div>
      </div>

      {/* =======================================================
          BOTTOM DECORATION (FIXED)
          - Removed 'w-full'
          - Changed 'px-20' to 'mx-6 md:mx-20'
          - This forces the container (and its border) to start
            exactly at the vertical grid lines.
         ======================================================= */}
      <div className='relative z-10 mx-6 md:mx-20 h-20 border-t border-zinc-800 flex items-center justify-between text-zinc-600 font-mono text-xs'>
           <span>SYSTEM_READY</span>
           <div className='w-24 md:w-32 h-[1px] bg-zinc-800'></div>
           <span>SCROLL_DOWN</span>
      </div>

    </div>
  )
}

export default TechStack