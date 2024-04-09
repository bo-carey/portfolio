import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { ResumeButton } from './ResumeButton';

const Navbar = () => {
  // State to manage the mobile navbar's visibility
  const [isMobileNavVisible, setIsMobileNaveVisible] = useState(false);

  // Array containing navigation items
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
  ];

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      {/* Logo */}
      <h1 className="w-full text-3xl z-10">Bo Carey</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center">
        {navItems.map(({ label, path }, index) => (
          <NavLink
            key={index}
            to={path}
            onClick={() => setIsMobileNaveVisible(false)}
            className="text-xl p-4 hover:text-gray-500 hover:underline rounded-xl m-2 cursor-pointer duration-150 underline-offset-4"
          >
            {label}
          </NavLink>
        ))}
        <ResumeButton />
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={() => setIsMobileNaveVisible(!isMobileNavVisible)} className="block md:hidden">
        {isMobileNavVisible ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`flex flex-col items-start p-4 pt-24 gap-4 bg-gradient-to-r from-[#c6cad0] to-white ease-in-out duration-500
          ${
            isMobileNavVisible
              ? 'fixed md:hidden left-0 top-0 w-[60%] h-full '
              : 'w-[60%] fixed top-0 bottom-0 left-[-100%]'
          }`}
      >
        {/* Mobile Navigation Items */}
        {navItems.map(({ label, path }, index) => (
          <NavLink
            key={index}
            to={path}
            onClick={() => setIsMobileNaveVisible(false)}
            className="text-xl p-4  duration-300 hover:text-gray-500 hover:underline underline-offset-4"
          >
            {label}
          </NavLink>
        ))}
        <ResumeButton customClasses="ml-3" />
      </ul>
    </div>
  );
};

export const Header = () => {
  return (
    <header>
      <Navbar />
    </header>
  );
};
