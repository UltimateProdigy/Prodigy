import React from "react";
import "./About.css"
import Navbar from "../../Component/Navbar/Navbar";
import Workexperience from "./WorkExperience";


const About = () => {
    return (
        <div className="abouut">
            <div className="aboutsection">
            <div className="about_intro">
                <h1>About Me</h1>
                <p>Hello! I'm Ayobami, a passionate Reast.js Frontend Developer with a love for creating
                    interactive and engaging user experiences. I've honed my skills in crafting efficient,
                    modular, and scalable UI components. My curiosity drives me and stay updated with the 
                    latest trends and best practices in the React ecosystem.
                    Whether it's building responsive layouts, integrating APIs, or optimizing perfomance, I 
                    thrive on turning ideas into polished, pixel-perfect applications. Let's collaborate and
                    bring your web projects to life!
                </p>
            </div>
            <div>
                <Workexperience />
            </div>
            <div className="education">
                <h1>Education</h1>
                <div className="degree">
                    <p>Bachelor in Management and Accounting</p>
                    <div className="time"><h3>Full Time</h3></div>
                </div>
                <h2 className="school">Obafemi Awolowo University, Ile-Ife, Osun State.</h2>
            </div>
        </div>
        </div>

    )
}

export default About;