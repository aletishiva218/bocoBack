import { useState } from "react";
import React from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import Section3MobileSlide from "./section3mobileslide";


const Section3= ({section}) => {
  const [startIndex, setStartIndex] = useState(0);
  const images = section.images;
  const visibleImages = 6;

  const handleNext = () => {
    if (startIndex + visibleImages < images.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
    return <div className="flex flex-col gap-5 my-20 px-5">
      <h2 className="text-blue-950 text-4xl font-bold text-center max-[770px]:text-3xl max-[770px]:text-start">{section.title}</h2>
      <p className="text-blue-950 text-xl max-w-4xl self-center max-[770px]:text-start">{section.description}</p>
      <div className="flex items-center gap-4 p-4 justify-center max-[671px]:hidden">
      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className="p-2 bg-gray-200 rounded-full disabled:opacity-50"
      >
        <ChevronLeft size={24} />
      </button>
      <div className="flex overflow-hidden w-[66rem]">
        {images.slice(startIndex, startIndex + visibleImages).map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} className="w-44 object-cover rounded-lg" />
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={startIndex + visibleImages >= images.length}
        className="p-2 bg-gray-200 rounded-full disabled:opacity-50"
      >
        <ChevronRight size={24} />
      </button>
    </div>
    <div className="hidden max-[671px]:flex justify-center">
    <Section3MobileSlide section={section} />
    </div>
    </div>
}

export default Section3;