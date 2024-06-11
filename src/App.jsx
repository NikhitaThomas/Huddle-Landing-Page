import { useState } from "react";
import reactLogo from "./assets/react.svg";
import AllCards from "./components/AllCards";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ReadyToBuild from "./components/ReadyToBuild";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <Hero />
      <AllCards />
      <div className="relative">
        <div className="absolute -top-20 inset-0 mx-5 my-auto text-center md:mx-44">
          <ReadyToBuild />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
