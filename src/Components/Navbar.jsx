import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HiMenu, HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navStyle = "border-b-2 border-zinc-300 w-full hover:border-indigo-600 ";
  return (
    <nav className="w-screen fixed z-30 h-[60px] bg-zinc-200 drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Cloud.</h1>
          <ul className="hidden sm:flex">
            <AnchorLink href="#home">
              <li>Home</li>
            </AnchorLink>
            <AnchorLink href="#about">
              <li>About</li>
            </AnchorLink>
            <AnchorLink href="#support">
              <li>Support</li>
            </AnchorLink>
            <AnchorLink href="#platforms">
              <li>Platforms</li>
            </AnchorLink>
            <AnchorLink href="#pricing">
              <li>Pricing</li>
            </AnchorLink>
          </ul>
        </div>
        <div className="hidden sm:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        {/* nav menu */}
        <div className="sm:hidden mr-4 z-10" onClick={() => setNav(!nav)}>
          {nav ? <HiMenuAlt3 size={30} /> : <HiMenu size={30} />}
        </div>
      </div>
      <ul
        className={
          !nav
            ? "mt-[-140%] duration-500"
            : "flex flex-col absolute bg-zinc-200 w-full px-8 duration-500 "
        }
      >
        <AnchorLink href="#home">
          <li onClick={() => setNav((prev) => !prev)} className={navStyle}>
            Home
          </li>
        </AnchorLink>
        <AnchorLink href="#about">
          <li onClick={() => setNav((prev) => !prev)} className={navStyle}>About</li>
        </AnchorLink>
        <AnchorLink href="#support">
          <li onClick={() => setNav((prev) => !prev)} className={navStyle}>Support</li>
        </AnchorLink>
        <AnchorLink href="#platforms">
          <li onClick={() => setNav((prev) => !prev)} className={navStyle}>Platforms</li>
        </AnchorLink>
        <AnchorLink href="#pricing">
          <li onClick={() => setNav((prev) => !prev)} className={navStyle}>Pricing</li>
        </AnchorLink>
        <div className="flex flex-col my-4">
          <button className="bg-transparent hover:bg-zinc-300 duration-500 text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3 duration-500">Sign Up</button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
