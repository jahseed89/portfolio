import React from "react";
import Avatar from "../../assets/images/avatar.png";
import { SlArrowDown } from "react-icons/sl";
import "./home.scss";

const Home = () => {
  return (
    <div className="home-section">
      <div className="section-wraper">
        <div className="description-text">
          <div className="header-title">
            <div className="words">
              <span>Hallo! <i>👋</i></span>
              <span>Bonjour! <i>👋</i></span>
              <span>Ciao! <i>👋</i></span>
              <span>Buenos dias! <i>👋</i></span>

            </div>
            
          </div>
          <p>Hello there! Kay here.</p>
          <p>
            I'm a multidiscplinary{" "}
            <span className="special-color">designer</span> with a passion for
            creating engaging digital products with enjoyable user experiences✨
          </p>
          <p>
            I specialize in helping individuals and businesses attain
            profitability with user-centred design solutions.
          </p>
          <p>
            I am that guys that maries business goals with user needs and come
            up with a functional and applealing digital product.
          </p>
          <p>
            Currently working as a Digital Product Designer at{" "}
            <span className="special-color">Impero Techne Limited</span>.👨‍💻
          </p>
        </div>
        <div className="section-avatar">
          <div className="avatar-wraper">
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
