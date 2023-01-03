import React from "react";
import linkedIn from '../../assets/images/linkedin.svg'
import twitter from '../../assets/images/twitter.svg'
import bb from '../../assets/images/bb.svg'
import "./contact.scss";

const ContactMe = () => {
  return (
    <div className="contact-section">
      <div className="info-container">
        <div className="title-header">
          <h3>Let's Connect!</h3>
        </div>
        <div>
          <p>
            If you ever want to talk about building of a product or just want a
            quick chat - you can find me on social media or you can send me a
            message here!
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
            <textarea placeholder="Message"></textarea><br/>

          </div>
          <button className="send-msg-btn">SEND MESSAGE</button>
        </form>
      </div>
      
    </div>
  );
};

export default ContactMe;
