import React, { Suspense, lazy, useState } from "react";
import { portfolioData } from "../Data";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet";

// lazy import
const Projects = lazy(() => import("../components/Projects"));
const NoProjects = lazy(() => import("../components/NoProjects"));

export default function ProtofiloSec() {
  const [toggle, setToggle] = useState(1);
  const [animtaion, setAnimation] = useState(false);
  const [filterItems, setFilterItems] = useState([...portfolioData]);

  // filter onClick
  const Click = (name, i) => {
    setAnimation(true);
    setTimeout(() => setAnimation(false), 100);
    setToggle(i + 1);
    if (name === "all") {
      setFilterItems([...portfolioData]);
    } else {
      setFilterItems(portfolioData.filter((items) => items.type === name));
    }
  };

  // filter items
  const filterBtns = ["all", "website", "mobile app"];
  const filterBtn = filterBtns.map((item, i) => {
    return (
      <button
        key={i}
        id="filter-item"
        className={`px-3 py-2 uppercase hover:bg-color3 cursor-pointer active:bg-color4 ${
          toggle === i + 1 && "bg-color3"
        } 
        xs:text-xs 
        md:text-base`}
        onClick={() => Click(item, i)}
      >
        {item}
      </button>
    );
  });

  return (
    <section
      id="portfolio"
      className="py-10 xs:pb-20 lg:m-0 h-full overflow-y-scroll"
    >
      <Helmet>
        <title>Salah Eldin | Portfolio</title>
      </Helmet>
      {/* page title */}
      <div
        id="page-title"
        className="text-white text-center relative font-extrabold uppercase z-0 
        xs:mb-5
        md:mb-16"
      >
        <h1
          className=" opacity-5 w-full
        xs:text-7xl
        md:text-8xl
        lg:text-9xl"
        >
          WORKS
        </h1>
        <h2
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-100 w-full
        xs:text-4xl
        md:text-6xl
        lg:text-7xl "
        >
          my <span className="text-color3">portfolio</span>
        </h2>
      </div>
      {/* container */}
      <div className="container grid lg:grid-cols-1 w-full">
        {/* filter */}
        <ul
          id="filter"
          className="flex self-center text-white gap-2 grid-flow-col mb-14 justify-center relative top-0"
        >
          {filterBtn}
        </ul>
        {/* projects */}
        <div
          id="projects"
          className="grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 grid-flow-row relative"
        >
          <Suspense fallback={<Loading />}>
            {filterItems.length >= 1 ? (
              <Projects animtaion={animtaion} filterItems={filterItems} />
            ) : (
              <NoProjects name="projects" />
            )}
          </Suspense>
        </div>
      </div>
    </section>
  );
}
