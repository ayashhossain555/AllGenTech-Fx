import React from "react";
import { laptop2 } from "../../assets";

const Hero = () => (
  <section
    id="laptop2"
    className="relative flex items-center justify-center h-[70vh]  bg-cover bg-center pt-20"
    style={{ backgroundImage: `url(${laptop2})` }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>

    <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
      <p className="text-2xl sm:text-3xl font-bold mb-4 text-blue-400 ">
        Our Services
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Digital Product Development
      </h1>
      <p className="text-xl sm:text-2xl font-medium mb-6">
        Reshaping Groundbreaking Concepts into Forefront Digital Solutions
      </p>
    </div>
  </section>
);

export default Hero;
