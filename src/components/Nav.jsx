import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { IoCloseSharp } from "react-icons/io5";

import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul
          className={`${
            isMenuOpen
              ? 'flex-col bg-pale-blue w-full text-center space-y-6 absolute p-8 top-[70px] left-0 transition-all duration-300 ease-in-out z-20'
              : 'flex-1 flex justify-center items-center gap-11 max-lg:hidden'
          }`}
        >
          {navLinks.map((item) => (
            <li 
              key={item.label}
              className="max-lg:bg-white p-3 rounded-md z-20"
              onClick={() => setIsMenuOpen(false)}
            >
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:font-semibold hover:text-coral-red"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block cursor-pointer">
          {!isMenuOpen ? (
            <img src={hamburger} alt="menu icon" width={25} height={25} onClick={toggleMenu} />
          ) : (
            <IoCloseSharp size={25} color="red" onClick={toggleMenu} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
