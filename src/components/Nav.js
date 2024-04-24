import React from "react";
import { NavLink } from "react-router-dom";

import { pages } from "../Data";

export default function Navs() {
  const Pages = pages.map((page, i) => {
    return (
      <NavLink
        key={i}
        to={page.path}
        aria-label={page.name}
        id="home-page"
        style={({ isActive }) =>
          isActive
            ? { backgroundColor: "#9a4e3d" }
            : { backgroundColor: "#2f2d31" }
        }
        className={`flex items-center rounded-full group w-fit duration-200 ease-linear relative `}
      >
        {page.icon}
        <p
          className="uppercase font-medium absolute items-center opacity-0 w-0 invisible duration-200 ease-linear bg-inherit px-2
      group-hover:opacity-100 group-hover:visible group-hover:w-fit
      xs:hidden
      lg:right-5 lg:rounded-full lg:rounded-e-none lg:h-full lg:w-fit lg:pr-6 lg:top-0 lg:translate-x-0 lg:flex"
        >
          {page.name}
        </p>
      </NavLink>
    );
  });

  return (
    <main
      id="navbar"
      className="flex bg-transparent fixed z-50 gap-5 items-end text-white w-fit h-fit
      xs:bottom-0 xs:right-[50%] xs:translate-x-[50%] xs:flex-row xs:justify-center xs:bg-black xs:w-11/12 px-10 xs:py-2 
      xs:max-w-[450px] xs:rounded-t-2xl
      lg:right-10 lg:top-[50%] lg:translate-y-[-50%] lg:flex-col lg:bg-transparent lg:w-fit lg:p-0"
    >
      {Pages}
    </main>
  );
}
