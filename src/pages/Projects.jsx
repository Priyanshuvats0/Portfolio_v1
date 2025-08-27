import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Panel from "../components/Panel";
import panelsData from "../data/panelsData";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const panels = gsap.utils.toArray(".panel");
    panels.forEach((panel, index) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top-=100 top",
        pin: true,
        pinSpacing: false,
        end: index === panels.length - 1 ? "top top" : "+=100%",
        markers: false,
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div ref={containerRef} className="relative w-full border-zinc-700 border-t-2">
      <div className="sticky top-0 z-50    h-28 bg-[#1F1F23] text-[#F4F4F5] flex items-center pl-16 text-6xl  font-semibold tracking-tighter">
       
        PROJECTS
      </div>

      {panelsData.map((props, i) => (
        <Panel key={i} {...props} />
      ))}
    </div>
  );
};

export default Projects;
