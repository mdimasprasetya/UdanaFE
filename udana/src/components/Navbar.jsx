const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 h-32">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#cards">Donate</a>
              </li>
              <li>
                <a href="#partner">Partner</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </div>
          <img
            className="btn btn-ghost text-xl w-40 h-auto ml-16"
            src="udana1.png"
            alt=""
          />
        </div>
        <div className="navbar-end gap-10 font-bold">
          <div className="flex lg:flex hidden">
            <ul className="menu menu-horizontal px-1 gap-10 flex-nowrap overflow-x-auto">
              <li>
                <a
                  className="transform transition-transform duration-300 hover:scale-110 hover:bg-yellow-200 hover:rounded-box"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="transform transition-transform duration-300 hover:scale-110 hover:bg-yellow-200 hover:rounded-box"
                  href="#cards"
                >
                  Donate
                </a>
              </li>
              <li>
                <a
                  className="transform transition-transform duration-300 hover:scale-110 hover:bg-yellow-200 hover:rounded-box"
                  href="#partner"
                >
                  Partner
                </a>
              </li>
              <li>
                <a
                  className="transform transition-transform duration-300 hover:scale-110 hover:bg-yellow-200 "
                  href="#about"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a className="btn bg-yellow-300 lg:w-36 rounded-full lg:mr-10  transform transition-transform duration-300 hover:scale-110 hover:bg-yellow-400">
              Login
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) 
          .navbar {
            position: fixed; 
            top: 0;
            left: 0;
            right: 0;
            z-index: 50; /* Menempatkan navbar agar di atas */
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
