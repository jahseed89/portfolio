import React, { useState } from "react";
import linkedIn from "../../assets/images/linkedin.svg";
import twitter from "../../assets/images/twitter.svg";
import bb from "../../assets/images/bb.svg";
import Modal from "../Modal";
import LinksBtn from "../buttons/LinksBtn";
import "./contact.scss";

const ContactMe = () => {
  const [showModal, setShowModal] = useState(false);

  const openMsgModal = ()=> {
    setShowModal(prev => !prev)

  }

  return (
    <div className="contact-section">
      {showModal && (
        <Modal>
          <div>
            <h3>Thanks for the message!</h3>
            <p>I will get back to you as soon as possible</p>
            <LinksBtn linkBtnText="Back to Portfolio" />
          </div>
        </Modal>
      )}
      <div className="info-container">
        <div className="title-header">
          <h3>Let's Connect!</h3>
        </div>
        <div className="contacts-contents">
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
            <textarea placeholder="Message"></textarea>
            <br />
          </div>
          <button className="send-msg-btn" onClick={openMsgModal}>SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
