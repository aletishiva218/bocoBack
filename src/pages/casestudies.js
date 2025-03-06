import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Casestudies() {
  const [data, setData] = useState(null);
  let [section,setSection] = useState({services:[]});
  useEffect(() => {
      axios.get("https://bocoback.onrender.com/api/homes")
        .then((res) => {
          setData(res.data.data[0])
          setSection(res.data.data[0].section5)
        })
        .catch((err) => console.error(err));
    }, []);

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

    if(!data)
    return <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-purple-500 border-t-transparent"></div>
    </div>
 
  return (
   <>
    <Navbar company={data.company} />
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
          <img src={cases[currentIndex].image} alt="Carousel" className="w-full rounded-lg" />
        ) : (
          cases.map((casee, index) => (
            <a href={`${casee.link}`} key={index}><img src={casee.image} alt={`Image ${index + 1}`} className="w-full max-w-lg max-[770px]:w-98 rounded-lg" /></a>
          ))
        )}
      </div>
    </div>
    <h2 className=" text-blue-950 text-4xl font-bold mx-5 text-center max-[770px]:text-3xl max-[770px]:text-start max-[770px]:w-full">{data.section6.subtitle}</h2>

    </div>
    <Footer company={data.company} />
   </>
  );
}
