import React from "react";
import "./Projects.css";
import Navbar from "../../Component/Navbar/Navbar";
import Projectcard from "./Projectcard";

const Projects = () => {
    return (
        <div>
            
            <div className="projectdiv">
            <div className="project">
                <h1>Projects</h1>
                <h3>Things i've built so far</h3>
            </div>
            <div className="all-projects">
                <Projectcard />
                <Projectcard />
                <Projectcard />
                <Projectcard />
                <Projectcard />
                <Projectcard />
            </div>
            </div>
            
        </div>

    )
}

export default Projects;