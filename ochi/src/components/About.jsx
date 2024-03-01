import React from "react";

function About() {
  return (
    <div data-scroll data-scroll-speed="-.010" className="w-full py-20 bg-[#CDEA68] rounded-t-3xl p-20">
      <h1 className="text-black font-[Neue_Montreal] text-[4.5vw] leading-[4vw]  tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, exxplain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] border-[#6f7731] mt-20 pt-10">
        <div className="w-1/2">
            <h1 className="text-7xl text-black">Our Approach</h1>
            <button className="px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 flex gap-10 items-center">Read more..
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div></button>
        </div>
        <div className="w-1/2 h-[70vh] bg-red-500 rounded-md"></div>
      </div>
    </div>
  );
}

export default About;
