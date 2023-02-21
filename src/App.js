import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import ContactMe from "./components/contact/ContactMe";
import "./app.scss";

const App = () => {
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

export default App;
