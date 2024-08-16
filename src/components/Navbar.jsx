
import { navLinks } from "../constants";
import { logo } from "../assets";


import { useState } from "react";
import {
  MoonIcon,
  SunIcon,
  Bars3Icon
} from "@heroicons/react/24/outline";


function Navbar() {
     const [active, setActive] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app">
      <nav>
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-12">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                >
                  <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[30px] font-extrabold no-underline flex'>
            BookAI
          </p>
                </a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-5 px-10 ">
              <ul className='list-none hidden sm:flex flex-row gap-8'>
          {navLinks.map((nav) => (
          <li
              key={nav.id}
               className={`${
                active === nav.title ? "text-white" : "text-secondary "
              }  text-[15px] font-medium cursor-pointer transition-transform transform hover:scale-110 hover:text-purple-400   `}
               onClick={() => setActive(nav.title)}
             >
               <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-2">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-5">
                  <MoonIcon className="h-6 w-6 hover:text-purple-400" />
                  <SunIcon className="h-6 w-6 hover:text-purple-500" />
                  
                </div>
                <div>
                  <button className="rounded-full border-solid border-2 bg-purple-500 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Login/SignUp
                  </button>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                  
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
            <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                 active === nav.title ? "text-white" : "text-secondary"
               } text-[18px] font-medium cursor-pointer transition-transform transform hover:scale-110 hover:text-white`}
              onClick={() => setActive(nav.title)}
             >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
           ))}
         </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;