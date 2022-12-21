import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTwitch,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer data-aos='fade-up' className="w-full sm:mt-24 bg-slate-900 text-gray-300 px-2 py-8">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h3 className="font-bold uppercase pt-2">Solution</h3>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold uppercase pt-2">Support</h3>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API Status</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold uppercase pt-2">Company</h3>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold uppercase pt-2">Legal</h3>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 sm:pt-2">
          <p>Subscribe to our newsletter</p>
          <p>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row mt-5" action="">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              name=""
              id=""
              placeholder="Enter Your Email"
            />
            <button className="p-2 mb-4 hover:text-white bg-slate-700">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between text-center text-gray-400 ">
        <p className="py-4">2022 HAMIM, All Right Reserved</p>
        <div className="flex justify-between mx-auto sm:mx-0 w-[200px] sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
