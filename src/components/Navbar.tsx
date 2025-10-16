import React from "react";
import { navLinks } from "../constants";
const Navbar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" />
        <ul className="">
          {navLinks.map(({ label }) => (
            <li key={label} className="">
              {
                <a href={label} className="">
                  {label}
                </a>
              }
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="Search" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
