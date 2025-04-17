import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
      searchValue: "",
      isSearchOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  toggleSearch = () => {
    this.setState({ isSearchOpen: !this.state.isSearchOpen });
  };

  handleSearchChange = (event) => {
    console.log(event.target.value);
    this.setState({ searchValue: event.target.value });
  };

  submitSearch = () => {
    console.log(this.state.searchValue);
    // close the search button if it is open
    // empty the search input field
    this.setState({
      isSearchOpen: false,
      searchValue: "",
    });
  };

  render() {
    return (
      <div className="fixed top-0 w-full z-50">
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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
            <div className="flex md:order-2 gap-2 md:gap-4 items-center">
              <div className="flex items-center gap-1 max-w-xs w-full">
                {!this.state.isSearchOpen && (
                  <button
                    onClick={this.toggleSearch}
                    className="flex items-center bg-slate-500 text-white px-3 py-2 text-sm rounded-md hover:bg-slate-700 md:inline-block"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                      />
                    </svg>
                  </button>
                )}
                {this.state.isSearchOpen && (
                  <>
                    <input
                      type="text"
                      value={this.state.searchValue}
                      onChange={this.handleSearchChange}
                      className="w-36 md:w-40 bg-gray-200 border border-gray-400 rounded-md px-2 py-1 text-medium text-black"
                      placeholder="Search..."
                    />
                    <button
                      type="button"
                      onClick={this.submitSearch}
                      className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              <button
                onClick={this.toggleMenu}
                type="button"
                className="inline-flex items-center px-3 py-1 w-10 h-9 justify-center bg-slate-500 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-search"
                aria-expanded={this.state.isMenuOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-4 h-4"
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
            <div
              className={`items-center justify-between w-full md:flex md:w-auto md:order-1 md:block max-h-[80vh] overflow-y-auto overflow-x-hidden ${
                this.state.isMenuOpen ? "block" : "hidden"
              }`}
              id="navbar-search"
            >
              <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
              <ul className="flex flex-col p-3 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:text-medium md:space-x-3 lg:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink
                    to="/"
                    onClick={this.closeMenu}
                    className={({ isActive }) =>
                      `block py-2 px-3 rounded-sm md:p-0 ${
                        isActive
                          ? "text-blue-700 md:text-blue-700 dark:text-blue-400"
                          : "text-gray-900 dark:text-white"
                      } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`
                    }
                  >
                    General
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/business"
                    onClick={this.closeMenu}
                    className={({ isActive }) =>
                      `block py-2 px-3 rounded-sm md:p-0 ${
                        isActive
                          ? "text-blue-700 md:text-blue-700 dark:text-blue-400"
                          : "text-gray-900 dark:text-white"
                      } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`
                    }
                  >
                    Business
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/entertainment"
                    onClick={this.closeMenu}
                    className={({ isActive }) =>
                      `block py-2 px-3 rounded-sm md:p-0 ${
                        isActive
                          ? "text-blue-700 md:text-blue-700 dark:text-blue-400"
                          : "text-gray-900 dark:text-white"
                      } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`
                    }
                  >
                    Entertainment
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/health"
                    onClick={this.closeMenu}
                    className={({ isActive }) =>
                      `block py-2 px-3 rounded-sm md:p-0 ${
                        isActive
                          ? "text-blue-700 md:text-blue-700 dark:text-blue-400"
                          : "text-gray-900 dark:text-white"
                      } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`
                    }
                  >
                    Health
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/science"
                    onClick={this.closeMenu}
                    className={({ isActive }) =>
                      `block py-2 px-3 rounded-sm md:p-0 ${
                        isActive
                          ? "text-blue-700 md:text-blue-700 dark:text-blue-400"
                          : "text-gray-900 dark:text-white"
                      } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`
                    }
                  >
                    Science
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/sports"
                    onClick={this.closeMenu}
                    className={({ isActive }) =>
                      `block py-2 px-3 rounded-sm md:p-0 ${
                        isActive
                          ? "text-blue-700 md:text-blue-700 dark:text-blue-400"
                          : "text-gray-900 dark:text-white"
                      } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`
                    }
                  >
                    Sports
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/technology"
                    onClick={this.closeMenu}
                    className={({ isActive }) =>
                      `block py-2 px-3 rounded-sm md:p-0 ${
                        isActive
                          ? "text-blue-700 md:text-blue-700 dark:text-blue-400"
                          : "text-gray-900 dark:text-white"
                      } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`
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
  }
}

export default NavBar;
