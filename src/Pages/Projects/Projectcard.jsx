import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Projectcard = ({ name, description, stack, preview, code }) => {
  return (
    <div className="projectcard">
      <h1>{name}</h1>
      <h3>{description}</h3>
      <h3>Tech Stack: {stack}</h3>
      <div className="preview">
        <Link to={{ pathname: `${preview}` }} target="_blank">
          <h3>Live Preview</h3>
        </Link>
        <Link to={{ pathname: `${code}` }} target="_blank">
          <h3>View Code</h3>
        </Link>
      </div>
    </div>
  );
};

export default Projectcard;
