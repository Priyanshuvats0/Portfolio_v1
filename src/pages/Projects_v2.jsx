import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Panel Component with updated theme
const Panel = ({ leftBg, rightBg, leftImage, rightImage, textContent, projectTitle }) => {
  const TextBlock = ({ title, description }) => (
    <div className="flex flex-col justify-center px-8 md:px-16 py-8 h-full bg-zinc-900 text-zinc-100 border-l border-zinc-800">
      <h2 className="text-[5vw] md:text-[3.5vw] font-semibold mb-4 tracking-tighter leading-tight">{title}</h2>
      <p className="text-[3vw] md:text-[1.3vw] font-normal text-zinc-400 max-w-[90%] tracking-tight leading-relaxed">
        {description}
      </p>
      {textContent?.tags && (
        <div className="flex flex-wrap gap-2 mt-6">
          {textContent.tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1 text-xs border border-zinc-700 rounded-full text-zinc-400">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section className="panel h-full w-full flex items-center justify-center bg-zinc-900 relative">
      {/* Vertical lines for this panel */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-6 md:left-20 top-0 bottom-0 w-[1px] bg-zinc-800"></div>
        <div className="absolute right-6 md:right-20 top-0 bottom-0 w-[1px] bg-zinc-800"></div>
      </div>

      <div className="h-full w-full px-6 md:px-20 flex items-center relative z-10">
        <div className="h-[85%] w-full flex flex-col md:flex-row gap-4 md:gap-0">
          {/* Left Side */}
          <div className={`w-full md:w-1/2 h-full overflow-hidden flex ${leftImage ? leftBg || "" : ""}`}>
            {leftImage ? (
              <img src={leftImage} alt="left" className="w-full h-full object-cover rounded-lg" />
            ) : (
              <TextBlock title={textContent?.title} description={textContent?.description} />
            )}
          </div>
          
          {/* Right Side */}
          <div className={`w-full md:w-1/2 h-full overflow-hidden flex ${rightImage ? rightBg || "" : ""}`}>
            {rightImage ? (
              <img src={rightImage} alt="right" className="w-full h-full object-cover rounded-lg" />
            ) : (
              <TextBlock title={textContent?.title} description={textContent?.description} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Sample data for demonstration
const panelsData = [
  {
    leftImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    textContent: {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include real-time inventory management, secure payment integration, and responsive design optimized for mobile commerce.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"]
    }
  },
  {
    rightImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    textContent: {
      title: "Analytics Dashboard",
      description: "Real-time analytics platform with interactive data visualizations. Implements WebSocket connections for live updates, complex state management, and optimized rendering for large datasets.",
      tags: ["React", "D3.js", "WebSocket", "Express"]
    }
  },
  {
    leftImage: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80",
    textContent: {
      title: "Task Management System",
      description: "Collaborative project management tool with drag-and-drop functionality, real-time updates, and role-based access control. Designed for teams scaling from 5 to 500 users.",
      tags: ["React", "Firebase", "Tailwind", "Redux"]
    }
  },
  {
    rightImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    textContent: {
      title: "Social Media API",
      description: "RESTful API serving 10k+ daily requests with JWT authentication, rate limiting, and comprehensive error handling. Built with scalability and security as core principles.",
      tags: ["Node.js", "Express", "PostgreSQL", "Redis"]
    }
  }
];

const Projects_v2 = () => {
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
    <div ref={containerRef} className="relative w-full bg-zinc-900">
      {/* Sticky Header with theme matching */}
      <div 
        ref={headerRef}
        className="sticky top-0 z-50 h-20 md:h-28 bg-zinc-900 text-zinc-100 flex items-center px-6 md:px-20 border-b border-zinc-800"
      >
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter uppercase">
          Projects
        </h1>
      </div>

      {/* Vertical lines that span the entire page */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-6 md:left-20 top-0 bottom-0 w-[1px] bg-zinc-800"></div>
        <div className="absolute right-6 md:right-20 top-0 bottom-0 w-[1px] bg-zinc-800"></div>
      </div>

      <div className="flex flex-col relative z-10">
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

      {/* Bottom section matching landing page */}
      <div className="mx-6 md:mx-20 border-t border-zinc-700 py-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-20 bg-zinc-900">
        <p className="text-md font-light tracking-tighter text-zinc-400">
          Want to see more work?
        </p>
        <a 
          href="https://github.com/Priyanshuvats0" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-zinc-500 rounded-full font-light text-sm capitalize cursor-pointer hover:bg-zinc-800 transition-all text-zinc-300"
        >
          View GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects_v2;