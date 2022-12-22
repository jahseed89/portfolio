import { CgClose } from "react-icons/cg";
import { TfiMenu } from "react-icons/tfi";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import ContactMe from "./components/contact/ContactMe";
import { GiEternalLove } from "react-icons/gi";
import { useState } from "react";
import "./app.scss";

const App = () => {
  const [menuIcon, setMenuIcon] = useState(true);
  const [cancelMenu, setCancelMenu] = useState(false);

  const showCancleMenu = () => {
    setCancelMenu((prev) => !prev);
    setMenuIcon(false);
  };

  const showMenuIcon = () => {
    setMenuIcon(true);
    setCancelMenu(false);
  };

  return (
    <div className="app">
      <div className="app-header">
        <div className="menu-wrapper">
          {cancelMenu && (
            <span onClick={showMenuIcon}>
              <CgClose />
            </span>
          )}
          {menuIcon && (
            <span onClick={showCancleMenu}>
              <TfiMenu />
            </span>
          )}
        </div>
        <div className={menuIcon ? "display-links" : ""}>
          <div className="links-container">
            <a href="#project"  onClick={showMenuIcon}>Projects</a>
            <a href="#about"  onClick={showMenuIcon}>About</a>
            <a href="#contact"  onClick={showMenuIcon}>Contact</a>
          </div>
        </div>
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
            <h5>
              Designed with love
              <span>
                <GiEternalLove className="love" />
              </span>
              by keybams and develooped by Sammy
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
