import React from "react";
import myPic from "../../assets/images/pic.png";
import flower from "../../assets/images/flower.svg";
import xd from "../../assets/images/xd.svg";
import figma from "../../assets/images/figma.svg";
import ai from "../../assets/images/ai.svg";
import notion from "../../assets/images/notion.svg";
import mirrow from "../../assets/images/mirro.svg";
import slack from "../../assets/images/slack.svg";
import teams from "../../assets/images/teams.svg";
import "./about.scss";

const About = () => {
  return (
    <div className="about-section">
      <div className="description-container">
        <div className="description">
          <div className="title-holder">
            <h3>About Me</h3>
            <span>
              <img src={flower} alt="#" />
            </span>
          </div>
          <p>
            Hello again! Thanks for scrolling this far! graduated from the
            Federal University of Agriculture with a Bachelors of Engineering in
            Agricultural Enginnering. I ventured into Product Design projects
            with (2) of my designs presently in development stage.
          </p>
          <p>
            Other than design, I spend most of my free time learning about
            blockchain, watching pyshlogical thrillers or comedy series and
            football - an ardent Arsenal FC supporter here.😎 I've also been
            trying to read more so feel free to reach out to me with any book
            recommendations!
          </p>
        </div>
        <div className="img-container">
          <img src={myPic} alt="#" />
        </div>
      </div>
      <div className="toolkit-header">
        <h3>My Toolkit</h3>
        <span>💻</span>
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
  );
};

export default About;
