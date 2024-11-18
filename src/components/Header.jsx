import React, { useState } from "react";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import { ReactComponent as SchoolLogo} from '../assets/fptlogo.svg'
// import { ReactComponent as TeamLogo} from '../assets/teamlogo.svg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Jobs", path: "#" },
    { name: "Profile & CV", path: "#" },
    { name: "Companies", path: "#" },
    { name: "Blog", path: "#" },
    { name: "Career Guide", path: "#" },
  ];

  return (
    <header className="bg-gradient-to-r from-white to-purple-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              {/* <TeamLogo/> */}
            </div>
            <div className="h-8 w-px bg-gray-300" />
            <SchoolLogo/>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                aria-label={link.name}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* User Interface Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
              aria-label="Notifications"
            >
              <FaBell className="h-6 w-6" />
            </button>
            <button
              className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
              aria-label="User profile"
            >
              <FaUserCircle className="h-8 w-8" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Bar - Moved to second row */}
        <div className="hidden md:block py-4">
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-purple-200 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-300 sm:text-sm transition-all duration-200"
              placeholder="Search for jobs, companies, or career advice"
              aria-label="Search"
            />
            <button
              className="absolute inset-y-0 right-0 px-4 py-2 bg-purple-600 text-white rounded-r-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200"
              aria-label="Find"
            >
              Find
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="px-4 py-3 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <button
              className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
              aria-label="Notifications"
            >
              <FaBell className="h-6 w-6" />
            </button>
            <button
              className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
              aria-label="User profile"
            >
              <FaUserCircle className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;