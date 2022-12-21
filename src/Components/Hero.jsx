import bgImg from "../assets/cyber-bg.png";
import {MdSecurityUpdateGood, MdCalendarViewDay, MdCloudUpload, MdAirplay } from 'react-icons/md'

const Hero = () => {
  return (
    <section id="home" className="bg-zinc-200 w-full h-[750px] sm:h-screen flex flex-col items-center">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div data-aos='fade-right' className="flex flex-col justify-center sm:items-start w-full px-2 py-8">
          <p className="text-xl">Unique Sequencing & Production</p>
          <h1 className="py-2 text-5xl sm:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-xl my-3">This is our Tech brand.</p>
          <button className="py-3 px-6 sm:w-[60%]">Get Started</button>
        </div>
        <div  className="my-6">
          <img data-aos='fade-left' src={bgImg} alt="" />
        </div>
      </div>

      <div data-aos='fade-up' className="py-8 mx-9 sm:mx-4 sm:w-[800px] bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl  ">
        <p>Data Service</p>
        <div className="flex sm:flex-nowrap flex-wrap justify-between">
            <p className="flex px-4 py-2 text-indigo-600 items-center"><MdSecurityUpdateGood size={30}className="mr-2"/>App Security</p>
            <p className="flex px-4 py-2 text-indigo-600 items-center"><MdCalendarViewDay size={30}className="mr-2"/>DashBoard Design</p>
            <p className="flex px-4 py-2 text-indigo-600 items-center"><MdCloudUpload size={30}className="mr-2"/>Cloud Data</p>
            <p className="flex px-4 py-2 text-indigo-600 items-center"><MdAirplay size={30}className="mr-2"/>API Services</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
