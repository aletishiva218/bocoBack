import React,{ useState } from "react";
import { Link } from "react-router-dom";
const Navbar = ({company}) => {
  const [menuOpen,setMenuOpen] = useState(false)
    return (
        <>
        <nav className="navbar flex justify-evenly py-2 items-center max-[901px]:hidden">
          <Link to="/" className="font-bold text-3xl">{company.title}</Link>
          <div className="flex gap-8 border p-3 px-10 rounded-full border-gray-400 text-blue-950 font-bold">
            <a href={`${company.pages[0].link}`} >{company.pages[0].title}</a>
            <a href={`${company.pages[1].link}`} >{company.pages[1].title}</a>
            <Link to="/case-studies" >{company.pages[2].title}</Link>
          </div>
          <a href={`${company.talklink}`} className="text-white bg-blue-950 rounded-full px-3 py-2 flex items-center gap-5 pl-5">Talk to Us<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="bg-white w-10 h-10 px-2 rounded-full -rotate-45"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a>
        </nav>
        <nav className="navbar hidden justify-between px-5 py-2 items-center max-[901px]:flex">
        <button className="w-10 flex flex-col gap-2 px-1" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="bg-blue-950 inline-block w-full h-[0.2rem] rounded-full"></span>
            <span className="bg-blue-950 inline-block w-full h-[0.2rem] rounded-full"></span>
            <span className="bg-blue-950 inline-block w-full h-[0.2rem] rounded-full"></span>
        </button>
        <Link to="/" className="font-bold text-4xl">{company.title}</Link>
          <a href={`${company.talklink}`} className="text-white bg-blue-950 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white" className="bg-blue-950 w-10 h-10 px-2 rounded-full -rotate-45"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a>
        </nav>
        {(menuOpen)?<div className="text-gray-500 flex flex-col gap-5 items-start px-5 py-5 bg-white">
          <a href={`${company.pages[0].link}`} >{company.pages[0].title}</a>
            <a href={`${company.pages[1].link}`} >{company.pages[1].title}</a>
            <Link to="/case-studies" >{company.pages[2].title}</Link>
        </div>:null}
        </>
       
      );
};

export default Navbar;
