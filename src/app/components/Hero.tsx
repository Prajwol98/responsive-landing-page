import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="max-container padding-container border-red-300 flex flex-col gap-20 py-20 pb-30 md:gap-20 lg:py-20 xl:flex-row border-2">
      <div className="hero-map" />

      {/* LEFT */}

      <div className="relative z-20 flex flex-1 flex-col xl:1/2">
        <Image
          src="/camp.svg"
          height={50}
          width={50}
          alt="camp"
          className="absolute top-[-80px] lg:w-[50]"
        ></Image>
        <h1 className="bold-52">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-grey-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>
      </div>
    </section>
  );
};

export default Hero;
