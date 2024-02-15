import React, { useState } from "react";
import { MdLanguage } from "react-icons/md";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const toggleMenuHandler = () => {
    setShowSideMenu(!showSideMenu);
  };

  const navItems = [
    {
      link: "Overview",
      path: "home",
    },
    {
      link: "Feature",
      path: "feature",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Pricing",
      path: "pricing",
    },
  ];

  return (<>
    <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary border-b fixed top-0 right-0 left-0">
      <div className="text-xl container mx-auto flex justify-between items-center font-medium">
        <div className="flex space-x-14 items-center">
          <a href="#" className="text-2xl font-semibold">
            LOGO
          </a>

          <ul className="md:flex space-x-12 hidden">
            {navItems.map((nav) => (
              <a
                key={nav.link}
                className="block hover:text-gray-300 cursor-pointer"
              >
                {nav.link}
              </a>
            ))}
          </ul>
        </div>

        <div className="space-x-12 hidden md:flex items-center">
          <a
            href="#"
            className="hidden lg:flex items-center hover:text-secondary"
          >
            <MdLanguage className="mr-2" />
            <span>Language</span>
          </a>
          <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
            Sign Up
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenuHandler}
            className="text-white focus:outline-none focus:text-gray-300"
          >
            {showSideMenu ? <FaXmark className="w-6 h-6 text-primary" /> : <FaBars className="w-6 h-6 text-primary" />}
          </button>
        </div>
      </div>
    </nav>

    <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${showSideMenu ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
    {navItems.map((nav) => (
              <a
                key={nav.link}
                href={`#${nav.path}`}
                className="block hover:text-gray-300 cursor-pointer"
              >
                {nav.link}
              </a>
            ))} 
    </div>
    </>
  );
};

export default Navbar;
