import React from "react";
import Marquee from "react-fast-marquee";

const Slider = () => {
  const icons = [
    { name: "React", src: "/icons/react.svg" },
    { name: "TypeScript", src: "/icons/typescript.svg" },
    { name: "Express", src: "/icons/express.svg" },
    { name: "MongoDB", src: "/icons/mongodb.svg" },
    { name: "TailwindCSS", src: "/icons/tailwindcss.svg" },
    { name: "Firebase", src: "/icons/firebase.svg" },
    { name: "Node.js", src: "/icons/nodedotjs.svg" },
  ];

  return (
    <div className="w-full h-[15vw] mt-[1vh] flex justify-center items-center overflow-hidden">
      <div className=" h-[15vw] mt-40 overflow-hidden">
        <Marquee autoFill pauseOnClick className="overflow-hidden">
          {icons.map((icon, idx) => (
            <div key={idx} className="overflow-hidden">
              <div
                className="w-44 mx-3 flex flex-col items-center justify-center
                rounded-md p-4 
                bg-gradient-to-br from-[#2A2A32] to-[#1A1A1F]
                shadow-[0px_4px_15px_rgba(0,0,0,0.6)]
                transition-all duration-300 ease-in-out
                hover:scale-110
                hover:shadow-[0px_6px_20px_rgba(0,0,0,0.9)]
                hover:from-[#333344] hover:to-[#1F1F26]
                cursor-pointer"
              >
                <img
                  src={icon.src}
                  alt={icon.name}
                  className="h-[60px] w-auto invert brightness-0 saturate-100 grayscale 
                  group-hover:grayscale-0 transition"
                />
                <span className="mt-2 text-sm opacity-100 transition duration-300">
                  {icon.name}
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Slider;
