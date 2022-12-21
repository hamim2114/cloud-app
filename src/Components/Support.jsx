import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import simg from "../assets/support.jpg";

const Support = () => {
  return (
    <section id="support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/70 absolute">
        <img
          className="w-full h-full object-cover absolute -z-10"
          src={simg}
          alt=""
        />
      </div>
      <div className="max-w-[1240px] relative mx-auto">
        <div className="text-white px-4">
          <h2 className="text-2xl pt-[7rem] text-slate-300 uppercase text-center ">
            Support
          </h2>
          <h3 data-aos='zoom-out' className="sm:text-5xl text-4xl font-bold py-6 text-center">
            Finding The Right Team
          </h3>
          <p data-aos='fade-up' className="py-8 sm:py-4 sm:text-2xl text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            repudiandae veritatis ratione error tenetur, voluptates architecto
            possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo
            et cum vel
          </p>
        </div>

        <div data-aos='fade-left' className="grid grid-cols-1 sm:grid-cols-3 relative gap-x-8 gap-y-16 px-5 pt-12 sm:pt-[8rem]">
          <div className="bg-white rounded-xl shadow-2xl">
            <div data-aos='fade-left' className="p-8">
              <PhoneIcon className="w-16 p-4 mt-[-4rem] bg-indigo-600 text-white rounded-lg " />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 sm:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4 rounded-b-lg">
                <p className="flex items-center text-indigo-600">Contact Us <ArrowSmRightIcon className="w-5 ml-2"/> </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div data-aos='fade-left' className="p-8">
              <SupportIcon className="w-16 p-4 mt-[-4rem] bg-indigo-600 text-white rounded-lg " />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 sm:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4 rounded-b-lg">
                <p className="flex items-center text-indigo-600">Contact Us <ArrowSmRightIcon className="w-5 ml-2"/> </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div data-aos='fade-left' className="p-8">
              <ChipIcon className="w-16 p-4 mt-[-4rem] bg-indigo-600 text-white rounded-lg " />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 sm:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4 rounded-b-lg">
                <p className="flex items-center text-indigo-600">Contact Us <ArrowSmRightIcon className="w-5 ml-2"/> </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Support;
