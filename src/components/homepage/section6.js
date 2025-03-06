import React from "react";

export default function Section6({section}) {
  return (
    <div>
        <div className="bg-violet-100  mx-5 py-20 flex flex-col gap-10 items-center px-5 border-b border-violet-950">
        <h2 className="text-blue-950 text-4xl font-bold text-center max-[770px]:text-3xl max-[770px]:text-start max-w-4xl max-[770px]:w-full">{section.title}</h2>
        <div className="flex justify-center gap-5 max-[770px]:flex-col max-[770px]:w-full">
         <a href={`${section.link1.link}`} className="text-white bg-blue-950 rounded-full pl-6 pr-2 py-2 flex items-center gap-5 max-[770px]:w-full justify-between">{section.link1.title}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="bg-white w-10 h-10 px-2 rounded-full -rotate-45"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a>
         <a href={`${section.link2.link}`} className="text-blue-950 font-bold border border-blue-950 rounded-full px-6 py-2 flex items-center gap-5">{section.link2.title}</a>
    </div>
    </div>
    <h2 className=" py-20 text-blue-950 text-4xl font-bold mx-5 text-center max-[770px]:text-3xl max-[770px]:text-start max-[770px]:w-full">{section.subtitle}</h2>
    </div>
  );
}
