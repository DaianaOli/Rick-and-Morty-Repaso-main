import React from "react";
import "../../styles/landing.css" 
import { Link } from "react-router-dom";


export default function LandingPage(){

    return (
        <div className="container-lp">
            <div className="landingPage__container">
                <div className="landingPage__container__page">
                    <h1 class="">Rick and Morty</h1>
                    <div >
                        <img src="https://media4.giphy.com/media/dz6NpfESnqqcnJH1MY/200w.webp" alt="Rick and Morty" />
                    </div>
                    <Link to="/characters">
                    <button className="sub">Find your favorite character</button>
                    </Link>
                    <div className="landingPage__container__footer">
                        <p>Created by: <a href="https://linkedin.com/in/luz-daiana-olivares-/" target="_blank">Luz Daiana Olivares</a></p>
                        </div>
                </div>
            </div>
        </div>

)
}