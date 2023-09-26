import React from "react";
import "./Projects.css";
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
          <Projectcard name="INSURNCE" description="Developed an insurance landing page with interactive elements." stack="HTML, CSS, JAVASCRIPT" preview="https://insurnce.vercel.app/" code="https://github.com/UltimateProdigy/INSURNCE"/>
          <Projectcard name="WORKOUT" description="Developed a high-intensity workout exercise plan web app to burn calories." stack="REACT, HTML, CSS, JAVASCRIPT" preview="https://workout-wine.vercel.app/" code="https://github.com/UltimateProdigy/WorkOut" />
          <Projectcard name="WATCH" description="Created a movie app with a side menu." stack="REACT, HTML, CSS, JAVASCRIPT" preview="https://watch-zeta.vercel.app/" code="https://github.com/UltimateProdigy/Watch" />
          <Projectcard name="GETLINKED" description="My Submission for a pre-Hackaton Competition" stack="REACT, HTML, CSS, JAVASCRIPT" preview="https://getlinked-weld.vercel.app/" code="https://github.com/UltimateProdigy/getlinked" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
