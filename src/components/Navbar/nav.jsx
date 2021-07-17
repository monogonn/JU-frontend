import axios from "axios";
import React, { useEffect, useState } from "react";
import { TailwindNavbar } from "tailwind-navbar-react";
import endpoints from "../../endpoints";
import "./navbar.css";
import { BrowserRouter as Link } from "react-router-dom";
// import "./tailwind.output.css";
function NavbarNew({ users }) {
  console.log(users, "users");
  return (
    <div>
      <TailwindNavbar
        brand={
          <img
            src="https://docs.google.com/uc?id=1gxcIaadqa5iBlsrhoBpi4Wmopt3Bohvl"
            width="40"
            height="40"
            alt="Brand logo"
          />
        }
        className="py-1"
      >
        <nav>
          <ul className="items-center justify-between pt-4 text-base lg:flex lg:pt-0">
            <li>
              <a
                className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400"
                href="/blog"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400"
                href="/explore"
              >
                Explore
              </a>
            </li>
            <li>
              <a
                className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400"
                href="/about"
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      </TailwindNavbar>
      {console.log(users)}
      {users ? (
        <li>
          <div id="userName" className="dropwown">
            <button className="dropbtn">Hey {users}</button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </li>
      ) : (
        <li>
          <a
            id="login"
            className="px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400"
            href="/login"
          >
            Login/Signup
          </a>
        </li>
      )}
    </div>
  );
}

export default NavbarNew;
