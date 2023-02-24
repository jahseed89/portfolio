import React from "react";
import ContactMe from "../components/contact/ContactMe";
import About from "../components/about/About";
import Home from "../components/home/Home";
import Projects from "../components/projects/Projects";
import "./pages.scss";

const Pages = () => {
  return (
    <div className="app">
      <div className="app-header">
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>

        <div>
          <div id="home">
            <Home />
          </div>
          <div id="project">
            <Projects />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="contact">
            <ContactMe />
          </div>
          <div className="designed-by">
            <p>Designed with love by Kaybams</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
