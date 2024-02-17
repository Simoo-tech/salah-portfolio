import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="w-full h-[200px] flex justify-center items-center z-20 col-span-full">
      <MagnifyingGlass
        color="#9a4e3d"
        height="100"
        width="100"
        ariaLabel="magnifying-glass-loading"
      />
    </div>
  );
}
