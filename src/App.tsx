import { useEffect, useState } from "react";
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
  const [darkMode,setDarkMode] = useState(false);
  
  useEffect(()=>{
    if(localStorage.getItem('mode')!='') setDarkMode(JSON.parse(localStorage.getItem('mode')!))
    else localStorage.setItem('mode','false');
  },[])
  
  const toggleDarkMode = () => {
    localStorage.setItem('mode',JSON.stringify(!darkMode));
    setDarkMode(!darkMode)
  }

  return (

    <div className={darkMode?"dark":""}>
    <div className=" m-0 p-0 h-full w-full px-10 overflow-hidden dark:bg-gray-800">
      <section className=" h-full">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="font-bold text-xl font-Roboto_Mono dark:text-white">OUTSIDER</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill onClick = {()=>toggleDarkMode()} className="dark:text-white cursor-pointer text-xl" />
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
          <h3 className="dark:text-white text-5xl font-medium text-blue-500 my-2 md:text-6xl">
            Tanveer Ahmed
          </h3>
          <h3 className=" dark:text-blue-500 ">Software Development Engineer</h3>
          <p className="dark:text-white section-content">
            {" "}
            A Software Developer who is also a{" "}
            <span className="text-sm text-black font-light p-[4px] rounded-md bg-teal-100">
              Jack of All Trades
            </span>{" "}
          </p>
          <p className="dark:text-white my-3 section-content px-10"> Worked with React.js , Node.js , Express.js ,Nest.js , MongoDB, TypeORM , Sqlite , mysql, Python , Javascript , C++ , Solidity , JAVA , SQL</p>
        </div>
        <div className="section-container text-5xl flex flex-1 justify-center gap-16 py-3 text-gray-600">
          <AiFillFacebook href ="www.google.com" className=" section-icons " />
          <AiFillLinkedin className=" section-icons " />
          <AiFillInstagram className=" section-icons  " />
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

      <section id="aboutme" className="py-10 max-w-5xl mx-auto">
        <div>
          <h3 className="text-3xl py-1 text-center dark:text-white ">About Me </h3>
          <p className=" section-content dark:text-gray-200">
            I am a graduate from National 
            <span className="text-teal-500"> National Institute of Technolog, Silchar </span> specializing in Computer Science and Engineering.

            </p>
          <p className=" section-content text-justify dark:text-gray-200">I am currently working as a Senior Software Development Engineer at  <span className="text-teal-500">Brillio Technologies </span>  specializing on Full Stack App Developemnt
            consulted for
            and collaborated with talanted people to create digital products for
            both business and consumer use.
          </p>
          <p className=" section-content text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I aspire to become a well versed Backend Software Engineer as i have a keep interest in backend technology 
          </p>
        </div>
        </section>
        {/* PROJECTS */}

        <section id="skills">
        <h3 className="text-3xl py-1 text-center dark:text-white ">My Skills</h3>
        <div
          className="flex flex-wrap flex-col items-center max-w-4xl mx-auto justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12"
        >
          {/* <!-- Item 1 --> */}
          <div className="flex flex-col items-center space-y-5">
            <img src="./src/assets/skills/react.png" alt="" className="mb-6" />
            <h5 >React</h5>
            
          </div>

          {/* <!-- Item 2 --> */}
          <div className="flex flex-col items-center space-y-5">
            <img src="./src/assets/skills/react.png" alt="" className="mb-6 " />
            <h5 >Node</h5>
            
          </div>

          {/* <!-- Item 3 --> */}
          <div className="flex flex-col items-center space-y-5">
            <img src="./src/assets/skills/react.png" alt="" className="mb-6" />
            <h5 >Express</h5>
            
          </div>
          <div className="flex flex-col items-center space-y-5">
            <img src="./src/assets/skills/react.png" alt="" className="mb-6" />
            <h5 >Express</h5>
            
          </div>
          <div className="flex flex-col items-center space-y-5">
            <img src="./src/assets/skills/react.png" alt="" className="mb-6" />
            <h5 >Express</h5>
            
          </div>
          <div className="flex flex-col items-center space-y-5">
            <img src="./src/assets/skills/react.png" alt="" className="mb-6" />
            <h5 >Express</h5>
            
          </div>
          <div className="flex flex-col items-center space-y-5">
            <img src="./src/assets/skills/react.png" alt="" className="mb-6" />
            <h5 >Express</h5>
            
          </div>
          <div className="flex flex-col items-center space-y-5">
            <img src="./src/assets/skills/react.png" alt="" className="mb-6" />
            <h5 >Express</h5>
            
          </div>
          <div className="flex flex-col items-center space-y-5">
            <img src="./src/assets/skills/react.png" alt="" className="mb-6" />
            <h5 >Express</h5>
            
          </div>
          <div className="flex flex-col items-center space-y-5">
            <img src="./src/assets/skills/react.png" alt="" className="mb-6" />
            <h5 >Express</h5>
            
          </div>
          <div className="flex flex-col items-center space-y-5">
            <img src="./src/assets/skills/react.png" alt="" className="mb-6" />
            <h5 >Express</h5>
            
          </div>
        </div>
    </section>
        <section id="projects" className="py-10 max-w-5xl mx-auto">

        <h3 className="text-3xl py-1 text-center dark:text-white "> My Projects</h3>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-10 lg:flex-row lg:flex-wrap">
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
    </div>
  );
};

export default App;
