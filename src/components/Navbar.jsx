import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Hide on scroll down (but only after scrolling 100px)
          setShow(false);
        } else {
          // Show on scroll up
          setShow(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 z-[999] w-full px-6 md:px-20 py-4 md:py-6 flex justify-between items-center 
      backdrop-blur-md bg-zinc-900/80 border-b border-zinc-800 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* LOGO */}
      <div className='logo flex items-center gap-2 group cursor-pointer'>
        {/* Animated Dot */}
        <div className="w-2 h-2 bg-zinc-500 rounded-full group-hover:bg-zinc-100 transition-colors"></div>
        <span className='text-xl md:text-2xl font-bold font-mono tracking-tighter uppercase text-zinc-100 group-hover:text-zinc-400 transition-colors'>
            Vats<span className="text-zinc-500">.DEV</span>
        </span>
      </div>

      {/* LINKS (Hidden on mobile, Flex on Desktop) */}
      <div className='hidden md:flex gap-12'>
        {["Projects", "Tech Stack", "About", "Contact"].map((item, index) => (
          <a 
            key={index} 
            href={`#${item.toLowerCase().replace(' ', '-')}`} 
            className='relative text-xs font-mono font-medium text-zinc-400 uppercase tracking-widest hover:text-white transition-colors group'
          >
            {/* The Link Text */}
            <span className='relative z-10'>// {item}</span>
            
            {/* Hover Glitch Line */}
            <span className='absolute left-0 -bottom-1 w-0 h-[1px] bg-zinc-100 group-hover:w-full transition-all duration-300'></span>
          </a>
        ))}
      </div>

      {/* MOBILE MENU BUTTON (Visible only on mobile) */}
      <div className="md:hidden text-zinc-300 text-sm font-mono cursor-pointer">
          [MENU]
      </div>
    </div>
  )
}

export default Navbar