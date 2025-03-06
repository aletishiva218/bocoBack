import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Section4({section}) {
  const items = section.services;
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const carouselRef = useRef(null);
  let startX = 0;
  let isDragging = false;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleItems = isMobile ? 1 : 3;

  const handleNext = () => {
    if (isMobile) {
      setStartIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
    } else if (startIndex < items.length - visibleItems) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (isMobile) {
      setStartIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
    } else if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleDragStart = (e) => {
    isDragging = true;
    startX = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    isDragging = false;
    const endX = e.type.includes("mouse") ? e.pageX : e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
  };

  return (
    <div className="flex flex-col items-center gap-10 px-5">
      <h2 className="text-blue-950 text-4xl font-bold text-center max-[770px]:text-3xl max-[770px]:text-start max-w-4xl">{section.title}</h2>
      <div className="relative flex flex-col items-center w-full">
   
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-hidden w-full justify-center cursor-grab"
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        {items.slice(startIndex, startIndex + visibleItems).map((item, index) => (
          <div key={index} className="bg-violet-100 border-violet-500  border  p-6 rounded-lg text-center flex flex-col gap-3 max-w-96">
            <img src={item.image} className="w-36" />
            <h2 className="text-blue-950 text-3xl font-bold text-start max-[770px]:text-2xl">{item.title}</h2>
            <div className="flex flex-col gap-3">
              {item.points && (item.points.map(point=><p className="flex gap-5 text-xl text-start max-[770px]:text-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="#7a5ff2" viewBox="0 0 448 512" className="w-7 h-7"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> {point}</p>))}           
            </div>
          </div>
        ))}
      </div>
      {isMobile && (<div className="w-full flex justify-end gap-5 mt-8">
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
          </div>)}
          </div>
    </div>
  );
}
