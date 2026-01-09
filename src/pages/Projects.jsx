import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Panel from "../components/Panel";
import panelsData from "../data/panelsData";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel-wrapper");

      panels.forEach((panel, i) => {
        if (i === panels.length - 1) return;

        ScrollTrigger.create({
          trigger: panel,
          start: () => "top " + headerRef.current.offsetHeight, 
          pin: true, 
          pinSpacing: false,
          invalidateOnRefresh: true,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-[#1F1F23]">
      {/* Header */}
      <div 
        ref={headerRef}
        className="sticky top-0 z-50 h-20 md:h-28 bg-[#1F1F23] text-[#F4F4F5] flex items-center pl-6 md:pl-16 text-4xl md:text-6xl font-semibold tracking-tighter border-b border-zinc-700"
      >
        PROJECT
      </div>

      <div className="flex flex-col">
        {panelsData.map((props, i) => (
          <div 
            key={i} 
            className="panel-wrapper w-full h-[calc(100vh-5rem)] md:h-[calc(100vh-7rem)]"
            style={{ zIndex: i + 1 }}
          >
             <Panel {...props} />
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Projects;