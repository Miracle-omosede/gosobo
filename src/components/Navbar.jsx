import { useState } from 'react';
import { ChevronDown, Menu as MenuIcon, X as CloseIcon } from 'lucide-react'; // Icons
import Logo from '../assets/images/logo.svg';
import { Menus } from '../utils';
import DesktopMenu from './DesktopMenu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null); // Track which submenu is open

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenSubMenuIndex(null); // Reset submenu when toggling main menu
  };

  const toggleSubMenu = (index) => {
    setOpenSubMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <header className="h-24 text-[15px] fixed inset-0 flex-center bg-white z-[999] shadow">
        <nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex-center gap-x-3 z-[999] relative">
            <img src={Logo} alt="logo" className="size-[3.5rem]" />
          </div>

          {/* Desktop Menu */}
          <ul className="lg:flex-center hidden gap-x-1">
            {Menus.map((menu) => (
              <DesktopMenu key={menu.menu} menu={menu} />
            ))}
          </ul>

          {/* Register CTA for Desktop */}
          <div className="hidden lg:block">
            <button className="bg-transparent border-gray-600 hover:border-custom-yellow border-[1px] text-black px-5 py-2 rounded-md hover:bg-custom-yellow hover:text-white transition duration-300 font-semibold font-dm-sans">
              Register
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="w-6 h-6 text-gray-800" />
            ) : (
              <MenuIcon className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-24 left-0 w-full bg-white shadow-lg z-50">
            <ul className="flex flex-col gap-4 p-4">
              {Menus.map((menu, index) => (
                <li key={menu.menu} className="relative">
                  {/* Main Menu Item */}
                  <div
                    className="flex justify-between items-center text-gray-800 px-4 py-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
                    onClick={() => toggleSubMenu(index)}
                  >
                    <span>{menu.name}</span>
                    {menu.subMenu && (
                      <ChevronDown
                        className={`w-4 h-4 text-gray-600 transition-transform ${
                          openSubMenuIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </div>

                  {/* Submenu */}
                  {menu.subMenu && openSubMenuIndex === index && (
                    <ul className="mt-2 pl-6">
                      {menu.subMenu.map((sub, i) => (
                        <li key={i} className="py-1 text-gray-600 hover:text-gray-800">
                          {sub.heading || sub.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
