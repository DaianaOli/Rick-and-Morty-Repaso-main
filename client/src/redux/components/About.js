import React from "react";
import { Link } from "react-router-dom";
import {FaReact}  from "react-icons/fa";
import {SiRedux, SiSequelize, SiJavascript, SiHtml5, SiPostgresql, SiExpress, SiVisualstudiocode,SiPostman, SiSlack,SiGooglemeet} from "react-icons/si";
import {TbBrandCss3} from "react-icons/tb";
import {FaNodeJs} from "react-icons/fa";
import {BiVideoRecording} from "react-icons/bi";
import {GiSkills} from "react-icons/gi";
import("../../styles/about.css");

export default function About() {
  return (
    <div className="container-about">
      <div className="contenedor-info">
        <div className="contenedor2">
          <h2>Luz Daiana Olivares</h2>
          <h3>Full Stack Developer</h3>
          <img
            src="https://res.cloudinary.com/dcpcja2qg/image/upload/v1670862633/IMG_9000_zqjf1s_jxe9gr.jpg"
            alt="Luz Daiana Olivares"
            border="0"
            className="img"
          />
        </div>
        <div className="about__container--text">
          <h1>About </h1>
          <p>
            This is a project made by{" "}
            <a href="https://www.linkedin.com/in/luz-daiana-olivares-/">
              Luz Daiana Olivares
            </a>{" "}
            for the Henry Bootcamp.
          </p>
          <p>
            The purpose of this project is to learn how to use Redux and
            React-Redux.
          </p>
          <p>
            The API used for this project is{" "}
            <a href="https://rickandmortyapi.com/">Rick and Morty API</a>.
          </p>
          <p>
            The project is deployed on{" "}
            <a href="https://www.heroku.com/">(in process)</a>.
          </p>
          <p>
            The code is available on{" "}
            <a
              href="https://github.com/DaianaOli/Rick-and-Morty-Repaso-main"
              target="_blank" rel="noreferrer">
              GitHub
            </a>
            .
          </p>
          <a href="https://www.linkedin.com/in/luz-daiana-olivares-/">
            <button className="link">
              <p>Follow me</p>
              <svg
                viewBox="0 0 16 16"
                class="bi bi-whatsapp"
                fill="currentColor"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
      <div className="skills">
        <div className="flip">
          <div className="content">
            <div className="front">
              <h2>Front</h2>
              <p>HTML <SiHtml5/></p>
              <p>CSS <TbBrandCss3/></p>
              <p>JavaScript <SiJavascript/></p>
              <p>React <FaReact/></p>
              <p>Redux <SiRedux/></p>
            </div>
            <div className="back">
              <h2>Back</h2>
              <p>Node.js <FaNodeJs/></p>
              <p>Express <SiExpress/></p>
              <p>Sequelize <SiSequelize/></p>
              <p>PostgreSQL <SiPostgresql/></p>
            </div>
          </div>
        </div>
        <div class="flip">
          <div class="content">
            <div class="front">
              <h2>Tools</h2>
              <p>Visual Studio Code <SiVisualstudiocode/></p>
              <p>Postman <SiPostman/></p>
              <p>Slack <SiSlack/></p>
              <p>Zoom <BiVideoRecording/></p>
              <p>Google <SiGooglemeet/> </p>
            </div>
            <div class="back">
              <h2>Soft Skills <GiSkills/></h2>
              <p>Problem Solving</p>
              <p>Communication</p>
              <p>Adaptability</p>
              <p>Resilience</p>
              <p>Empathy</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/characters">
        <button className="button">Back</button>
      </Link>
    </div>
  );
}
