import { useState, useEffect, useRef } from "react";

export default function Section5({section}) {
  const cases = section.cases;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handleDragStart = (e) => {
    if (!isMobile) return;
    isDragging = true;
    startX = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
  };

  const handleDragEnd = (e) => {
    if (!isDragging || !isMobile) return;
    isDragging = false;
    const endX = e.type.includes("mouse") ? e.pageX : e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (diff > 50 && currentIndex < cases.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (diff < -50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex flex-col gap-14 px-5 my-32 items-center">
    <h2 className="text-blue-950 text-4xl font-bold text-center max-[770px]:text-3xl max-[770px]:text-start max-w-4xl">{section.title}</h2>
    <div className="relative flex items-center justify-center p-4">
      <div
        ref={carouselRef}
        className="flex gap-8 overflow-hidden w-full justify-center cursor-pointer"
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        {isMobile ? (
          <img src={cases[currentIndex]} alt="Carousel" className="w-full rounded-lg" />
        ) : (
          cases.map((casee, index) => (
            <a href={`${casee.link}`} key={index}><img src={casee.image} alt={`Image ${index + 1}`} className="w-full max-w-lg max-[770px]:w-98 rounded-lg" /></a>
          ))
        )}
      </div>
    </div>
    <a href={`${section.viewmore.link}`} className="text-blue-950 font-bold border border-blue-950 rounded-full px-6 py-2 flex items-center gap-5">{section.viewmore.title}</a>
    </div>
  );
}
