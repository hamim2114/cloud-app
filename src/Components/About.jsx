import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full mt-[14rem] sm:my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 data-aos='zoom-out' className="sm:text-5xl text-4xl mx-4 font-bold">
            Trusted by developers across the world
          </h2>
          <p data-aos='fade-up' className="sm:text-3xl mx-4 py-12 text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            asperiores earum placeat veritatis dignissimos itaque.
          </p>
        </div>

        <div data-aos='slide-up' className="grid mx-4 sm:grid-cols-3 gap-4 px-2 text-center ">
          <div className="border py-8 rounded-xl shadow-xl">
            <p data-aos='slide-up' data-aos-delay='100' className="sm:text-6xl text-4xl font-bold text-indigo-600">100%</p>
            <p className="text-gray-400 mt-2">Completion</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p data-aos='slide-up' data-aos-delay='300' className="sm:text-6xl text-4xl font-bold text-indigo-600">24/7</p>
            <p className="text-gray-400 mt-2">Delivery</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p data-aos='slide-up' data-aos-delay='600' className="sm:text-6xl text-4xl font-bold text-indigo-600">100K</p>
            <p className="text-gray-400 mt-2">Transection</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
