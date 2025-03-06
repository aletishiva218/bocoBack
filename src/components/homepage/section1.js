import React from "react";

const Section1 = ({section}) => {
    return <div className="grid grid-cols-2 min-h-screen max-[770px]:grid-cols-1 overflow-hidden">
    <img  src={section.image} className="min-[770px]:hidden" alt="" />
        <div className="pl-10 flex flex-col gap-6 w-full self-center max-[770px]:px-5">
            <h2 className="text-blue-950 text-5xl font-bold text-start max-[770px]:text-4xl">{section.title}</h2>
            <p className="text-xl text-start max-[770px]:text-lg">{section.description}</p>
            <div className="flex flex-col gap-3">
            <p className="flex gap-5 font-bold text-xl text-start max-[770px]:text-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="lightgray" viewBox="0 0 448 512" className="w-7 h-7"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Unmatched Speed & Stability</p>
            <p className="flex gap-5 font-bold text-xl text-start max-[770px]:text-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="lightgray" viewBox="0 0 448 512" className="w-7 h-7"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Build for Conversions</p>
            <p className="flex gap-5 font-bold text-xl text-start max-[770px]:text-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="lightgray" viewBox="0 0 448 512" className="w-7 h-7"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Reduced App Stack & Developer Dependencies</p>
            </div>
            <div className="flex gap-5 max-[770px]:flex-col">
                <a href={`${section.link1.link}`} className="text-blue-950 font-bold border border-blue-950 rounded-full px-6 py-2 flex items-center gap-5">{`${section.link1.title}`}</a>
                <a href={`${section.link2.link}`} className="text-white bg-blue-950 rounded-full pl-6 pr-2 py-2 flex items-center gap-5 max-[770px]:w-fit">{`${section.link2.title}`}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="bg-white w-10 h-10 px-2 rounded-full -rotate-45"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a>

            </div>
        </div>
        <div className="relative max-[770px]:hidden">
            <img  src={`${section.image}`} className="absolute -right-1/2" alt="imag" />
        </div>
    </div>
}

export default Section1;