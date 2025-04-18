import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext.jsx";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { setSearchTerm } = useContext(SearchContext)
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsSearchOpen(false);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchValue("");
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    console.log("Search Value now is:", e.target.value)
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("Search for:", searchValue);
      setIsSearchOpen(false);
    }
  };

  const handleSearchSubmit = () => {
    const trimmedSearch = searchValue.trim();
    console.log("Search for:", trimmedSearch);
    if (trimmedSearch.length < 3) {
      alert("Please enter at least 3 characters to search.");
    } else {
      setSearchTerm(trimmedSearch);
      // navigate to search results page
      navigate('/search');
      setIsSearchOpen(false);
      setSearchValue("");
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="fixed top-0 w-full z-50">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center md:text-lg lg:text-2xl font-semibold whitespace-nowrap dark:text-white">
              NewsApp
            </span>
          </Link>

          {/* Desktop Navigation and Search */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
            {/* Navigation Links - Desktop */}
            <ul className="flex items-center space-x-1 lg:space-x-3 rtl:space-x-reverse">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `py-2 px-3 rounded-sm ${
                      isActive
                        ? "text-blue-700 dark:text-blue-400"
                        : "text-gray-900 dark:text-white"
                    } hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white`
                  }
                >
                  General
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/business"
                  className={({ isActive }) =>
                    `py-2 px-3 rounded-sm ${
                      isActive
                        ? "text-blue-700 dark:text-blue-400"
                        : "text-gray-900 dark:text-white"
                    } hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white`
                  }
                >
                  Business
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/entertainment"
                  className={({ isActive }) =>
                    `py-2 px-3 rounded-sm ${
                      isActive
                        ? "text-blue-700 dark:text-blue-400"
                        : "text-gray-900 dark:text-white"
                    } hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white`
                  }
                >
                  Entertainment
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/health"
                  className={({ isActive }) =>
                    `py-2 px-3 rounded-sm ${
                      isActive
                        ? "text-blue-700 dark:text-blue-400"
                        : "text-gray-900 dark:text-white"
                    } hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white`
                  }
                >
                  Health
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/science"
                  className={({ isActive }) =>
                    `py-2 px-3 rounded-sm ${
                      isActive
                        ? "text-blue-700 dark:text-blue-400"
                        : "text-gray-900 dark:text-white"
                    } hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white`
                  }
                >
                  Science
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sports"
                  className={({ isActive }) =>
                    `py-2 px-3 rounded-sm ${
                      isActive
                        ? "text-blue-700 dark:text-blue-400"
                        : "text-gray-900 dark:text-white"
                    } hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white`
                  }
                >
                  Sports
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/technology"
                  className={({ isActive }) =>
                    `py-2 px-3 rounded-sm ${
                      isActive
                        ? "text-blue-700 dark:text-blue-400"
                        : "text-gray-900 dark:text-white"
                    } hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white`
                  }
                >
                  Technology
                </NavLink>
              </li>
            </ul>

            {/* Search Input - Desktop */}
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  value={searchValue}
                  onChange={handleSearchChange}
                  onKeyDown={handleKeyPress}
                  className="lg:w-40 md:w-32 px-1 py-1.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </div>
              <button 
                onClick={handleSearchSubmit}
                className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden gap-2">
            {/* Search Button - Mobile */}
            <button
              onClick={toggleSearch}
              className="flex items-center justify-center w-10 h-10 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>

            {/* Menu Toggle Button - Mobile */}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Search Input */}
          {isSearchOpen && (
            <div className="w-full md:hidden mt-2">
              <div className="flex items-center">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    value={searchValue}
                    onChange={handleSearchChange}
                    onKeyDown={handleKeyPress}
                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                    autoFocus
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                </div>
                <button 
                  onClick={handleSearchSubmit}
                  className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </div>
          )}

          {/* Mobile Menu */}
          <div
            className={`w-full md:hidden ${isMenuOpen ? "block" : "hidden"}`}
          >
            <ul className="flex flex-col p-3 mt-2 font-medium border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm ${
                      isActive
                        ? "text-blue-700 dark:text-blue-400"
                        : "text-gray-900 dark:text-white"
                    } hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white`
                  }
                >
                  General
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/business"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm ${
                      isActive
                        ? "text-blue-700 dark:text-blue-400"
                        : "text-gray-900 dark:text-white"
                    } hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white`
                  }
                >
                  Business
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/entertainment"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm ${
                      isActive
                        ? "text-blue-700 dark:text-blue-400"
                        : "text-gray-900 dark:text-white"
                    } hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white`
                  }
                >
                  Entertainment
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/health"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm ${
                      isActive
                        ? "text-blue-700 dark:text-blue-400"
                        : "text-gray-900 dark:text-white"
                    } hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white`
                  }
                >
                  Health
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/science"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm ${
                      isActive
                        ? "text-blue-700 dark:text-blue-400"
                        : "text-gray-900 dark:text-white"
                    } hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white`
                  }
                >
                  Science
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sports"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm ${
                      isActive
                        ? "text-blue-700 dark:text-blue-400"
                        : "text-gray-900 dark:text-white"
                    } hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white`
                  }
                >
                  Sports
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/technology"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm ${
                      isActive
                        ? "text-blue-700 dark:text-blue-400"
                        : "text-gray-900 dark:text-white"
                    } hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white`
                  }
                >
                  Technology
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;