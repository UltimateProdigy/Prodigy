import React from "react";
import "./TechStack.css"
import VsCode from "../../img/VSCODE.png"
import Css from "../../img/CSS.png"
import Js from "../../img/JS.png"
import Reactjs from "../../img/REACT.png"
import Sass from "../../img/SASS.png"
import Tailwind from "../../img/TAILWIND.png"
import VSCode from "../../img/VSCODE1.png"
import Git from "../../img/GIT.png"
import Github from "../../img/GITHUBB.png"
import Bootstrap from "../../img/BOOTSTRAP.png"


const Techstack = () => {
    return (
        <div>
            <div className="techstack">
            <div>
                <h1>My Tech Stack</h1>
                <h3>Technology I've been working with recently</h3>
            </div>
            <div className="stackimages">
                <img src={VsCode} alt="" />
                <img src={Css} alt="" />
                <img src={Js} alt="" />
                <img src={Reactjs} alt="" />
                <img src={Sass} alt="" />
                <img src={Tailwind} alt="" />
                <img src={VSCode} alt="" />
                <img src={Git} alt="" />
                <img src={Github} alt="" />
                <img src={Bootstrap} alt="" />
            </div>
            </div>
        </div>

    )
}

export default Techstack;