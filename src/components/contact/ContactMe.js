import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import linkedIn from "../../assets/images/linkedin.svg";
import twitter from "../../assets/images/twitter.svg";
import bb from "../../assets/images/bb.svg";
import "./contact.scss";
import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

const ContactMe = () => {
  const form = useRef();

  // const navigate = useNavigate()

  // const navigateToHome = () => {
  //   navigate('http://localhost:3000/#home')
  // }

  const successMsg = () => {
    toast.success('MESSAGE SENT SUCCESSFULLY')
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h5t3b8q",
        "template_0saeefb",
        form.current,
        "KSAY6cKYxRRIT2IB6"
      )
      .then(
        (result) => {
          console.log(result.text);
          successMsg()

        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label>Name</label>
            <br />
            <input type="text" name="user_name" placeholder="Enter your name" />
          </div>
          <div>
            <label>Email</label>
            <br />
            <input type="email" name="user_email" placeholder="Enter your email" />
          </div>
          <div>
            <label>Message</label>
            <br />
            <textarea name="message" placeholder="Write Message" />
          </div>
          <input type="submit" value="SEND MESSAGE" className="send-msg" />
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
