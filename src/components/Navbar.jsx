import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          setShow(false);
        } else {
        
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
      className={`fixed top-0 left-0 z-[999] w-full px-20 py-8 flex justify-between items-center text-white backdrop-blur-md transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className='logo'>
        <span className='text-3xl font-bold'>VATS</span>
      </div>
      <div className='links flex gap-10'>
        {["Services", "Contact", "About Us", "Insights"].map((item, index) => (
          <a key={index} href="#" className='text-md capitalize font-semibold'>
            {item}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Navbar
