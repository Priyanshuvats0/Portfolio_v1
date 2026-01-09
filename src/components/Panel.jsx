import React from "react";

const Panel = ({ leftBg, rightBg, leftImage, rightImage, textContent }) => {
  const TextBlock = ({ title, description }) => (
    <div className="flex flex-col justify-center px-16 py-8 h-full bg-white text-black">
      <h2 className="text-[4vw] font-bold mb-4">{title}</h2>
      <p className="text-[1.5vw] font-medium text-gray-700 max-w-[90%] tracking-tight leading-tight">
        {description}
      </p>
    </div>
  );

  return (
   
    <section className="panel h-full w-full flex items-center justify-center bg-zinc-900">
      <div className="h-full w-[92%] flex">
        <div className={`w-1/2 h-full overflow-hidden flex ${leftImage ? leftBg || "" : "bg-black"}`}>
          {leftImage ? (
            <img src={leftImage} alt="left" className="w-full h-full object-cover" />
          ) : (
            <TextBlock title={textContent?.title} description={textContent?.description} />
          )}
        </div>
        <div className={`w-1/2 h-full overflow-hidden flex ${rightImage ? rightBg || "" : "bg-black"}`}>
          {rightImage ? (
            <img src={rightImage} alt="right" className="w-full h-full object-cover" />
          ) : (
            <TextBlock title={textContent?.title} description={textContent?.description} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Panel;