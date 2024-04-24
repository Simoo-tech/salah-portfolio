import React, { Suspense, lazy } from "react";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet";

// lazy import
const NoProjects = lazy(() => import("../components/NoProjects"));

export default function Blog() {
  return (
    <section id="blog" className="py-10 h-full overflow-y-scroll">
      <Helmet>
        <title>Salah Eldin | Blog</title>
      </Helmet>
      {/* page title */}
      <div
        id="page-title"
        className="text-white text-center relative font-extrabold uppercase z-0 
    xs:mb-5
    md:mb-16"
      >
        <h1
          className="opacity-5 w-full
    xs:text-7xl
    md:text-8xl
    lg:text-9xl"
        >
          posts
        </h1>
        <h2
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-100 w-full
      xs:text-4xl
      md:text-6xl
      lg:text-7xl "
        >
          my <span className="text-color3">blog</span>
        </h2>
      </div>
      <div className="container ">
        <Suspense fallback={<Loading />}>
          <NoProjects name="posts" />
        </Suspense>
      </div>
    </section>
  );
}
