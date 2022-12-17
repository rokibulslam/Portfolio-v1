import React from 'react'
import { AiFillGithub, } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs"
import { SiUpwork } from "react-icons/si";
import { RxResume } from "react-icons/rx";
import profile from "../../assets/profile.png"
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
      <div className='rainbow'>
        <img className="home-img" src={profile} alt="" />
      </div>
      <h1 className="text-3xl">Home</h1>
      <div></div>
    </div>
  );
}

export default Home