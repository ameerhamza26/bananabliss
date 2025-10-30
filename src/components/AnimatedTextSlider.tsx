
import React from "react";

interface AnimatedTextSliderProps {
  text: string;
}

const AnimatedTextSlider = ({ text }: AnimatedTextSliderProps) => {
  return (
    <div className="w-full overflow-hidden bg-white/80 rounded-md py-3 my-0">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-red-600 font-bold text-lg mx-4">{text}</span>
        <span className="text-red-600 font-bold text-lg mx-4">{text}</span>
        <span className="text-red-600 font-bold text-lg mx-4">{text}</span>
        <span className="text-red-600 font-bold text-lg mx-4">{text}</span>
      </div>
    </div>
  );
};

export default AnimatedTextSlider;
