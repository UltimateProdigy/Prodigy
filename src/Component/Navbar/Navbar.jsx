import React from "react";
import "./Navbar.css";
import logoimg from "../../img/code.png";
import github from "../../img/github.png";
import twitter from "../../img/twitter.png";
import linkedin from "../../img/linkedin.png";
import { Link } from "react-router-dom/cjs/react-router-dom";


const Navbar = () => {
    return (
        <section className="navbar">
            <div>
                <img src={logoimg} alt="prodigy_logo" width={40} />
            </div>
            <div className="second" >
                <div>
                <ul className="links">
                    <Link style={{ textDecoration: "none"}} to="/"><li>Home</li></Link>
                    <Link style={{ textDecoration: "none"}} to="/about"><li>About</li></Link> 
                    <Link style={{ textDecoration: "none"}} to="/techstack"><li>Tech Stack</li></Link>  
                    <Link style={{ textDecoration: "none"}} to="/projects"><li>Projects</li></Link>
                    <Link style={{ textDecoration: "none"}} to="/contact"><li>Contacts</li></Link>
                </ul>
                </div>
                <div>
                <img className="imglinks" src={github} alt="githubimg" />
                <img className="imglinks" src={twitter} alt="twitterimg" />
                <img className="imglinks" src={linkedin} alt="linkedinimg" />
                </div>
            </div>
            </section>


    )
}

export default Navbar;