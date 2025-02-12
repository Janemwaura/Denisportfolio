import React from 'react';
import './Intro.css';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import profile from '/home/janewmwaura/personalprojectportfolio/Denisportfolio/portfolio-starter/src/img/Dennis1.png';
const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hello I Am</span>
                <span>Dennis Muchiri</span>
                <span>Betty was a creature of habit and she thought she liked it that way. 
                    That was until Dave showed up in her life. 
                    She now had a choice to make and it would determine whether 
                    her lie remained the same or if it would change forever.</span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-icons">
                <AiFillGithub></AiFillGithub>
                <FaLinkedinIn></FaLinkedinIn> 
                <FaInstagram></FaInstagram>
            
            </div>
        </div>
        <div className="i-right">
            <img src={profile}alt="" />
            
        </div>
        <div className="blur" style={{background:"rgb(141, 219, 212)"}}></div>
    </div>
  )
}

export default Intro;