import React from "react";
import "./Home.css"
import dp from "../../img/MY DP-modified.png"
import Navbar from "../../Component/Navbar/Navbar";


const Home = () => {
    return (
        <div>
        <section className="home">
            <div className="introDiv">
                <h1 className="intro">Hi 👋,
                <br />
                My name is
                <br />
                <span>Ayobami</span>
                <br /> 
                I am a Developer</h1>
            </div>
            <div>
                <img className="profileDp" src={dp} alt="display picture" width={300} />
            </div>
        </section>
        </div>

    )
};

export default Home;