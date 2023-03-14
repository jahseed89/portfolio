import React from "react";
import { SlArrowDown } from "react-icons/sl";
// import Mypic from "../../assets/images/kay.png";
import Mypic from "../../assets/images/kays-pic.png";
import { OfferCard } from "../offer/OfferCard";
// import Typewriter from "typewriter-effect";
import "./home.scss";

const Home = () => {
  return (
    <>
      <div className="home-section">
        <div className="section-container">
          <div className="desc-section">
            <h1>Hi there! Kay here 👋</h1>
            <p>
              I currently work as a Product (UI/UX) Designer at Lights on
              Heights, where I collaborate with engineers and product managers
              to create, and develop solutions that solve business problems and
              attract customers through a well thought out design process.
            </p>
            <p>
              I previously worked as a Product Designer at Impero Techne Limited
              and Visual Design Intern at Devcent. These experiences have helped
              shaped the way I approach design solutions and given me the
              capacity to blend both customer needs and business objectives
              together to create better digital solutions.{" "}
            </p>
            <p>
              I help brands convey succinct visuals and experiences to their
              target customers through user-centred design approach while
              ensuring business goals align with user needs.
            </p>
          </div>
          <div className="img-bg-wrapper">
            <div className="img-container">
              <div className="img-holder">
                <img src={Mypic} alt="person" />
              </div>
            </div>
            <span className="green-bg"></span>
            <span className="yello-bg"></span>
          </div>
        </div>
        <span className="arrow-downHolder">
          <SlArrowDown />
        </span>
      </div>
      <div className="what-iDo">
        <div className="offer-title">
          <h1>What Do I offer?</h1>
        </div>
        <div className="offerCard-wrapper">
          <div className="c-wrapper-row1">
            <OfferCard
              num="1"
              title="User-centric Designs"
              desc="I believe that coming up with meningful design solutions for people
          starts with asking the right set of questions."
            />
          </div>
          <div className="c-wrapper-row1">
            <OfferCard
              num="2"
              title="Rapid Prototyping"
              desc="With proficiency in tools such as Adobe XD and Figma, I ensure my high fidelity designs are interactive - this allows for easier presentation during reviews or to easily get feedback from potential users."
            />
          </div>
        </div>
        <div className="offerCard-wrapper second-row">
          <div className="c-wrapper-row2">
            <OfferCard
              num="3"
              title="Clean Interfaces"
              desc="Armed with the requisite graphical user interface principles, I come up with designs that are visually appealing and usable."
            />
          </div>
          <div className="c-wrapper-row2">
            <OfferCard
              num="4"
              title="Usability Testing"
              desc="Using third-party applications such as Maze to conduct user-testing to gather feedback from users, get insights into tasks they find difficult to execute while interacting with high fidelity mockups."
            />
          </div>
        </div>
      </div>
      <div className="in-short">
        <h3>In short, I create digital products that are</h3>
        <h1>Thought-Driven</h1>
      </div>
    </>
  );
};

export default Home;
