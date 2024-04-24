import React, { useEffect, useState } from "react";

export default function Switcher() {
  const [animation, setAnimtaion] = useState(false);

  useEffect(() => {
    setAnimtaion(true);
  }, []);

  setInterval(() => {
    setAnimtaion(false);
  }, 800);

  return (
    <div
      id="switcher"
      className={`absolute w-full overflow-hidden z-[100] block left-0 duration-400 bg-black top-0 ${
        animation && "h-screen"
      } `}
    >
      <div
        className={`bg-color4 w-full h-full absolute duration-500 left-0 
        ${animation ? "top-full " : "-top-full"}`}
      />
    </div>
  );
}
