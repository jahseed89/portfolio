import React from "react";
import Avatar from "../../assets/images/grop3.png";
import { SlArrowDown } from "react-icons/sl";
import Typewriter from "typewriter-effect";
import "./home.scss";

const Home = () => {
  return (
    <div className="home-section">
      <div className="section-wraper">
        <div className="description-text">
          <div className="header-title">
            <div className="words">
              <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "Hallo! 👋",
                  "Bonjour! 👋",
                  "Ciao! 👋",
                  "Buenos dias! 👋"
                ],
              }}
              />
            </div>
          </div>
          <p>Hello there! Kay here.</p>
          <p>
            I’m a multidisciplinary{" "}
            <span className="special-color">designer</span> who works at the
            intersection of customer needs and business objectives to produce
            digital products that customers will we be willing to pay for and
            benefit from.✨
          </p>{" "}
          <p>
            My unique skills offer a blend between design, business and
            technology as I possess the experience of working cross functionally
            with Business Analysts, Project Managers, Engineers and
            Stakeholders.
          </p>
          <p>
            Currently working as a Digital Product Designer at
            <a href="https://imperotechne.com/" target="blank" className="special-color"> Impero Techne Limited</a>.👨‍💻
          </p>
        </div>
        <div className="section-avatar">
          <div className="avatar-wrapper">
            <img src={Avatar} alt="#" />
          </div>
        </div>
      </div>
      <div className="scroll-down-arr__container">
        <SlArrowDown className="pointer" />
      </div>
    </div>
  );
};

export default Home;
