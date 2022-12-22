import React from "react";
import linkedIn from '../../assets/images/linkedin.svg'
import twitter from '../../assets/images/twitter.svg'
import bb from '../../assets/images/bb.svg'
import mail from '../../assets/images/mailbox.svg'
import "./contact.scss";

const ContactMe = () => {
  return (
    <div className="contact-section">
      <div className="info-container">
        <div className="title-header">
          <h3>Let's Connect!</h3>
          <span>
            <img src={mail} alt="#" />
          </span>
        </div>
        <div>
          <p>
            If you ever want to talk about building of a product or just want a
            quick chat - you can find me on social media or you can send me a
            message here!
          </p>
          <div className="social-media">
            <span>
                <img src={linkedIn} alt="#" />
            </span>
            <span>
                <img src={twitter} alt="#" />
            </span>
            <span>
                <img src={bb} alt="#" />
            </span>
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
          <button>SEND MESSAGE</button>
        </form>
      </div>
      
    </div>
  );
};

export default ContactMe;
