import React from "react";
import xd from "../../assets/images/xd.svg";
import figma from "../../assets/images/figma.svg";
import ai from "../../assets/images/ai.svg";
import notion from "../../assets/images/notion.svg";
import mirrow from "../../assets/images/mirror.svg";
import slack from "../../assets/images/slack.svg";
import teams from "../../assets/images/teams.svg";
import myPic from "../../assets/images/mypic.jpg";
import light from "../../assets/images/light.png";
import "./about.scss";

const About = () => {
  return (
    <div className="about-me-page">
      <div className="abt-me">
        <div className="abt-desc">
          <h1>About Me</h1>
          <div className="myPic-container">
            <img src={myPic} alt="ma-pic" />
          </div>
          <p>
            <span>
              I am a CIS male who’s a son, a brother and a friend. And as I grow
              older, a mentor to some.
            </span>
            <span>
              I was born in Nigeria and I grew up in Abeokuta (a historic city
              in the South-western Part of Nigeria). I speak English and Yoruba
              fluently. I am the eldest of three.
            </span>
            <span>
              {" "}
              I enjoy playing with technology and combining it with different
              disciplines of design.
            </span>{" "}
            <span>
              {" "}
              Observing humans in their natural habitat helps me in recreating
              and evoking similar emotions in controlled environments “digital
              products”.
            </span>
          </p>
        </div>
        <div className="summary">
          <h3>In summary</h3>
          <div className="contents">
            <p>Nickname</p>
            <p>Kaybams</p>
          </div>
          <div className="contents">
            <p>Pronouns</p>
            <p>He/Him/His</p>
          </div>
          <div className="contents">
            <p>Myers-briggs</p>
            <p>ISFJ</p>
          </div>
          <div className="contents">
            <p>Current Location</p>
            <p>Lagos, Nigeria</p>
          </div>
          <div className="contents">
            <p>Education</p>
            <p>BEng. in Agricultural & Bio-resources Engineering</p>
          </div>
          <div className="contents">
            <p>Interests</p>
            <p>Football, Anime, Music</p>
          </div>
        </div>
      </div>

      <div className="what-next">
        <div className="got-project">
          <p>so what's next</p>
          <h2>Got a project?</h2>
          <button>LET'S TALK</button>
        </div>

        <div className="lightImg-holder">
          <img src={light} alt="lightning" />
        </div>
      </div>
      <div className="toolkit-section">
        <div className="toolkit-header">
          <h1>My Toolkit</h1>
        </div>
        <div className="toolkit-tools">
          <div className="first-row">
            <span>
              <img src={xd} alt="#" />
            </span>
            <span>
              <img src={figma} alt="#" />
            </span>
            <span>
              <img src={ai} alt="#" />
            </span>
            <span>
              <img src={notion} alt="#" />
            </span>
          </div>

          <div className="second-row">
            <span>
              <img src={mirrow} alt="#" />
            </span>
            <span>
              <img src={slack} alt="#" />
            </span>
            <span>
              <img src={teams} alt="#" />
            </span>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default About;
