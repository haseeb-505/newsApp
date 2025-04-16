import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export class NavBar extends Component {
    constructor(){
        super();
        this.state={
            isMenuOpen: false
        };
    };

    toggleMenu = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    };

    closeMenu = () => {
        this.setState({ isMenuOpen: false });
    };

  render() {
    return (
      <div className='fixed top-0 w-full z-50'>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center md:text-lg lg:text-2xl font-semibold whitespace-nowrap dark:text-white">NewsApp</span>
        </Link>
        <div className="flex md:order-2">
            <button type="button" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center md:ps-30 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" className="block w-full md:p-1 md:text-xs lg:p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
            </div>
            <button onClick={this.toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded={this.state.isMenuOpen ? 'true' : 'false'}>
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
            <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 md:block max-h-[80vh] overflow-y-auto overflow-x-hidden ${this.state.isMenuOpen ? 'block' : 'hidden'}`} id="navbar-search">
            <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                </div>
                <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
            </div>
            <ul className="flex flex-col p-3 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:text-sm md:space-x-2 lg:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
    )
  }
}

export default NavBar
