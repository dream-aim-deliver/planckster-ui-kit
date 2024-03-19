import React from "react";

interface NavbarProps {
  activePage: string; // Prop to indicate the active page
}

const Navbar: React.FC<NavbarProps> = ({ activePage }) => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Navbar content */}
        <a
          href="https://www.mpi-sws.org/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://www.mpi-sws.org/wp-content/themes/mpi-sws/assets/images/mpi-sws-logo.svg?ver=1.8.2"
            className="h-8"
            alt="MPI-SWS Logo"
          />
        </a>
        <div className="flex md:order-2">
          {/* Search bar and icon */}
          <div className="relative hidden md:block">
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
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          {/* Your search input and menu */}
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              {/* Conditional styling based on active page */}
              <a
                href="#"
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 text-gray-900 dark:text-white ${activePage === "Research Context" ? "text-blue-700 md:text-blue-500 dark:hover:text-blue-500" : "text-gray-900 dark:text-white hover:text-blue-700"} `}
                aria-current={
                  activePage === "Research Context" ? "page" : undefined
                }
              >
                Research Context
              </a>
            </li>
            <li>
              {/* Conditional styling based on active page */}
              <a
                href="#"
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 text-gray-900 dark:text-white ${activePage === "Conversations" ? "text-blue-700 md:text-blue-500 dark:hover:text-blue-500" : "text-gray-900 dark:text-white hover:text-blue-700"} `}
                aria-current={
                  activePage === "Conversations" ? "page" : undefined
                }
              >
                Conversations
              </a>
            </li>
            <li>
              {/* Conditional styling based on active page */}
              <a
                href="#"
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 text-gray-900 dark:text-white ${activePage === "About Us" ? "text-blue-700 md:text-blue-500 dark:hover:text-blue-500" : "text-gray-900 dark:text-white hover:text-blue-700"} `}
                aria-current={activePage === "About Us" ? "page" : undefined}
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
