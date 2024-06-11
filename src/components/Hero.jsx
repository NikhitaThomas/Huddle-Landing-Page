import React from "react";
import Header from "./Header";

export default function Hero() {
  return (
    <div className="sm:mx-1 py-0 sm:bg-[url('../../public/images/bg-hero-mobile.svg')] md:px-10 py-6 bg-cyan-50 bg-[url('../../public/images/bg-hero-desktop.svg')] pb-10 ">
      <Header />
      <div className="flex flex-col text-center md:text-left md:flex-row gap-12 ">
        <div className="basis-2/4 py-8 min-h-20">
          <h2 className="font-bold text-4xl px-4 py-8 poppins-semibold">
            Build The Community Your Fans Will Love
          </h2>
          <p className="px-4 py-5 open-sans-font">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <div className="p-4">
            <button className="rounded-full border-[2px] px-12 py-3 bg-pink-500 text-white hover:bg-pink-300">
              Get Started For free
            </button>
          </div>
        </div>
        <div className="px-10 md:px-0 md:basis-2/4 py-5">
          <img src="../../images/illustration-mockups.svg" />
        </div>
      </div>
    </div>
  );
}
