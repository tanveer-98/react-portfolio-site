import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "../dist/output.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import Man from "./assets/man.png";
import Project1 from "./assets/apex.png";
import FrontOfCard from "./components/flipCard/Front";
import BackOfCard from "./components/flipCard/Back";

const App = () => {
  return (
    <div className="h-screen w-screen px-10">
      <section className=" h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="font-bold text-xl font-Roboto_Mono">OUTSIDER</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-xl" />
            </li>
            <li>
              <a
                href=""
                className=" bg-gradient-to-br from-blue-300 to-blue-600 text-white px-4 py-2 rounded-md ml-10"
              >
                {" "}
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-5">
          <h2 className="text-5xl font-medium text-blue-500 my-2 md:text-6xl">
            Tanveer Ahmed
          </h2>
          <h3 className="text-4xl mb-5">Software Developer</h3>
          <p>
            {" "}
            A Software Developer who is also a{" "}
            <span className="text-sm font-light p-[2px] rounded-md bg-teal-100">
              Jack of All Trades
            </span>{" "}
          </p>
          <p> Worked with Python , Javascript , C++ , Solidity , JAVA , SQL</p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillFacebook className="text-xl" />
          <AiFillLinkedin className="text-xl" />
          <AiFillInstagram className="text-xl" />
        </div>
        <div
          className="relative mx-auto bg-gradient-to-b
       from-blue-500 to-blue-200 rounded-full mt-10
      w-60 h-60 p-5 
       "
        >
          <img src={Man} />
        </div>
        
      </section>

      <section className="py-10 max-w-[1280px] mx-auto">
        <div>
          <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Since the beginning of my journey as a freelance designer and
            developer, I've done remote work for
            <span className="text-teal-500"> agencies </span>
            consulted for <span className="text-teal-500">startups </span>
            and collaborated with talanted people to create digital products for
            both business and consumer use.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I offer from a wide range of services, including brand design,
            programming and teaching.
          </p>
        </div>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-10 lg:flex-row lg:flex-wrap">
        <div className="flex justify-center" >
            <div className="relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card">
              <FrontOfCard><img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              src={Project1}
            /> </FrontOfCard>
              <BackOfCard />
            </div>
          </div>
          <div className="flex justify-center" >
            <div className="relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card">
              <FrontOfCard><img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              src={Project1}
            /> </FrontOfCard>
              <BackOfCard />
            </div>
          </div>
          <div className="flex justify-center" >
            <div className="relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card">
              <FrontOfCard><img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              src={Project1}
            /> </FrontOfCard>
              <BackOfCard />
            </div>
          </div>
          <div className="flex justify-center" >
            <div className="relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card">
              <FrontOfCard><img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              src={Project1}
            /> </FrontOfCard>
              <BackOfCard />
            </div>
          </div>
        
        </div>
      </section>
    </div>
  );
};

export default App;