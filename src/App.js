// import { CgClose } from "react-icons/cg";
// import { TfiMenu } from "react-icons/tfi";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import ContactMe from "./components/contact/ContactMe";
// import { useState } from "react";
import "./app.scss";

const App = () => {
  // const [menuIcon, setMenuIcon] = useState(true);
  // const [cancelMenu, setCancelMenu] = useState(false);
  // const [pages, setPages] = useState(true);

  // const showCancleMenu = () => {
  //   setCancelMenu((prev) => !prev);
  //   setMenuIcon(false);
  //   setPages(false);
  // };

  // const showMenuIcon = () => {
  //   setMenuIcon(true);
  //   setCancelMenu(false);
  //   setPages(true);
  // };

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
          </ul>
        </nav>
        {/* <div className="menu-wrapper">
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
        </div> */}
        {/* <div className={menuIcon ? "display-links" : ""}>
          <div className="links-container">
            <a href="#project" onClick={showMenuIcon}>
              Projects
            </a>
            <a href="#about" onClick={showMenuIcon}>
              About
            </a>
            <a href="#contact" onClick={showMenuIcon}>
              Contact
            </a>
          </div>
        </div> */}
        {/* {pages && ( */}
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
              <p>Designed with love by kaybams and developed by Sammy</p>
            </div>
          </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default App;
