import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navs from "./components/Nav";
import { Suspense, lazy } from "react";
import Switcher from "./components/Switcher";
import { wait } from "@testing-library/user-event/dist/utils";

// lazy import
const Home = lazy(() => wait(800).then(() => import("./views/Home")));
const About = lazy(() => wait(800).then(() => import("./views/About")));
const BLOG = lazy(() => wait(800).then(() => import("./views/Blog")));
const Contact = lazy(() => wait(800).then(() => import("./views/Contact")));
const Protofilo = lazy(() =>
  wait(800).then(() => import("./views/ProtofiloSec"))
);

function App() {
  return (
    <Router>
      <div className="App relative bg-primary h-screen overflow-hidden">
        <Navs />
        <Switcher />
        <Suspense fallback={<Switcher />}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<BLOG />} />
            <Route path="contact" element={<Contact />} />
            <Route path="portfolio" element={<Protofilo />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
