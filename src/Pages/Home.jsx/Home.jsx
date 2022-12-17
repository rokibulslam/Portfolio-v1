import React from 'react'
import { AiFillGithub, } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs"
import { SiUpwork } from "react-icons/si";
import { RxResume } from "react-icons/rx";
import profile from "../../assets/profile.png"
import "./Home.scss"
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="home">
      <div className="rainbow">
        <img className="home-img" src={profile} alt="" />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-4xl my-2">Hi! I AM</h1>
          <h1 className="text-white text-4xl">MD ROKIBUL ISLAM</h1>
        </div>
        <div>
          <h4 className="my-2 text-2xl text-center">
            <Typewriter
              options={{
                strings: [
                  "Frontend Web Developer",
                  "React Developer",
                  "MERN Stack Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h4>
        </div>
        <div>
          <a
            href="https://drive.google.com/uc?export=download&id=1uQh1v9YSibwgf37IWyKMo43hSz8IDhmP"
            download
          >
            <button className="home-button ">Download Resume</button>
          </a>
        </div>
        <div className="flex my-5 text-3xl">
          <div className="mx-5 home-icon">
            <a target="" href=""></a>
            <AiFillGithub />
          </div>
          <div className="mx-5 home-icon">
            <a target="" href=""></a>
            <SiUpwork />
          </div>
          <div className="mx-5 home-icon">
            <a target="" href=""></a>
            <BsLinkedin />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Home