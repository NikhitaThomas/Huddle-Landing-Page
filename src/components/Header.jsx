import React from "react";

export default function Header() {
  return (
    <div className="sm:py-0 flex justify-between relative md:py-4 md:pb-12">
      <div className="p-5 col-start-1 w-5/12">
        <img src="../../images/logo.svg" alt="logo" />
      </div>
      <div className="pb-6 pt-2 right-2 col-end-5 absolute">
        <button className="rounded-full px-12 py-3 bg-white hover:bg-gray-100">
          Try it Free
        </button>
      </div>
    </div>
  );
}
