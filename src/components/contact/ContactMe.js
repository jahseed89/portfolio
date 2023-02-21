import React from "react";
import linkedIn from "../../assets/images/linkedin.svg";
import twitter from "../../assets/images/twitter.svg";
import bb from "../../assets/images/bb.svg";
import "./contact.scss";

const ContactMe = () => {

  return (
    <div className="contact-section">
     
      <div className="info-container">
        <div className="title-header">
          <h1>Let's Connect!</h1>
        </div>
        <div className="contacts-contents">
          <p>
            Have an amazing idea you which to bring to life? I’m sure you do! so
            let’s connect and discuss about it together.
          </p>
          <div className="social-media">
            <a href="https://ng.linkedin.com/in/kayodebamidele" target="blank">
              <img src={linkedIn} alt="#" />
            </a>
            <a href="https://mobile.twitter.com/kaybam_s" target="blank">
              <img src={twitter} alt="#" />
            </a>
            <a href="https://www.behance.net/kayodebamidele" target="blank">
              <img src={bb} alt="#" />
            </a>
          </div>
        </div>
      </div>
      <div className="form-container">
        <form>
          <div className="input-fild">
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <textarea placeholder="Message"></textarea>
            <br />
          </div>
          <button className="send-msg-btn">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
