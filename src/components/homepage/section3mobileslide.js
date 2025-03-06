import { useState } from "react";
import React from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";


const Section3MobileSlide= ({section}) => {
  const images =section.images;
  const [startIndex, setStartIndex] = useState(0);
    const visibleImages = 2;
  
    const handleNext = () => {
      if (startIndex < images.length - 1) {
        setStartIndex(startIndex + 1);
      } else {
        setStartIndex(0); // Append from the beginning and move
      }
    };
  
    const handlePrev = () => {
      if (startIndex > 0) {
        setStartIndex(startIndex - 1);
      } else {
        setStartIndex(images.length - 1); // Append from the end and move
      }
    };
  
    return <div className="flex flex-col items-center gap-4 p-4">
    
    <div className="flex overflow-hidden w-[300px]">
      {images.slice(startIndex, startIndex + visibleImages).map((src, index) => (
        <img key={index} src={src} alt={`Slide ${index}`} className="w-[150px] object-cover rounded-lg" />
      ))}
    </div>
   
    <div className="w-full flex justify-end gap-5">
    <button
      onClick={handlePrev}
      className="p-2 bg-gray-200 rounded-full"
    >
      <ChevronLeft size={24} />
    </button>
    <button
      onClick={handleNext}
      className="p-2 bg-gray-200 rounded-full"
    >
      <ChevronRight size={24} />
    </button>
    </div>
  </div>
}

export default Section3MobileSlide;