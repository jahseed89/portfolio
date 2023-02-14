import React from "react";
import MobileProj from "../../assets/images/project1.png";
import Ibelive from "../../assets/images/project2.png";
import Fruiths from "../../assets/images/project3.jpg";
import Pysche from "../../assets/images/pysche.png";
import Transaction from "../../assets/images/project6.png";
import Afw from "../../assets/images/project5.png";
import Modal from "../../components/Modal";
import MediaBtn from "../../components/buttons/MediaBtn";
import LinksBtn from "../../components/buttons/LinksBtn";
import ApproachCard from "../aproach/ApproachCard";
import learning from "../../assets/images/learning.svg";
import radical from "../../assets/images/radical.svg";
import flex from "../../assets/images/flex.svg";
import "./projects.scss";

const Projects = () => {
  return (
    <>
      <div className="projects-section">
        <div className="project-header">
          <span className="title-desc">Featured Projects</span>
          <span>
            Here some of the works that speak about my efforts in bringing ideas
            to life.
          </span>
          <span>Hover on any project to learn more</span>
        </div>
        <div className="project-wraper">
          <div className="mobile-project">
            <div className="modal-display">
              <Modal>
                <h3>Pysche</h3>
                <p>
                  Virtual therapy app that allow users connect with mental
                  health experts.
                </p>
                <div className="proj-btn-holder">
                  <MediaBtn mediaBtnText="Figma" />
                  <MediaBtn mediaBtnText="Healt-tech" />
                  <MediaBtn mediaBtnText="Mobile App" />
                </div>
                <div className="view-links-btn">
                  <LinksBtn
                    linkBtnText="view prototype"
                    hRef={
                      "https://www.figma.com/proto/jIfCgeCdY9kkbhD2CK8zz2/Pysche?node-id=5%3A9&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=5%3A15&show-proto-sidebar=1"
                    }
                  />
                  <LinksBtn
                    linkBtnText="CASE STUDY"
                    hRef={
                      "https://www.behance.net/gallery/160393911/Psyche-Virtual-Therapy-App"
                    }
                  />
                </div>
              </Modal>
            </div>
            <img src={Pysche} alt="#" />
          </div>
          <div className="ibeliev-proj">
            <div className="modal-display">
              <Modal>
                <h3>iBELIEVE</h3>
                <p>
                  A platform for individuals to showcase their talents and
                  become the next global sensation.
                </p>
                <div className="proj-btn-holder">
                  <MediaBtn mediaBtnText="Adobe XD" />
                  <MediaBtn mediaBtnText="Talents" />
                  <MediaBtn mediaBtnText="Web App" />
                </div>
                <div className="view-links-btn">
                  <LinksBtn
                    linkBtnText="VIEW LIVE"
                    hRef={"https://ibelieve.netlify.app/home"}
                  />
                  <LinksBtn
                    linkBtnText="CASE STUDY"
                    hRef={
                      "https://www.figma.com/proto/QMwV06PkPpocjwBUY3SZxc/Kaybams-Portfolio-Website-Design?node-id=39%3A2421&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=3%3A4"
                    }
                  />
                </div>
              </Modal>
            </div>
            <img src={Ibelive} alt="#" />
          </div>
        </div>
        <div className="project-wraper">
          <div className="fruiths-proj">
            <div className="modal-display">
              <Modal>
                <h3>DOA Food Market</h3>
                <p>
                  An online market for all your fresh foods and graceries items.
                </p>
                <div className="proj-btn-holder">
                  <MediaBtn mediaBtnText="Figma" />
                  <MediaBtn mediaBtnText="Web App" />
                  <MediaBtn mediaBtnText="Marketplace" />
                  <MediaBtn mediaBtnText="Ecommerce" />
                </div>
                <div className="view-links-btn">
                  <LinksBtn
                    linkBtnText="view prototype"
                    hRef={
                      "https://www.figma.com/proto/9VAEABPUJavjJlbFhvioHD/DOA-FOODMARKET?scaling=min-zoom&page-id=0%3A1&starting-point-node-id=38%3A58430&node-id=38%3A58430"
                    }
                  />
                </div>
              </Modal>
            </div>
            <img src={Fruiths} alt="#" />
          </div>
          <div className="telephone-proj">
            <div className="modal-display">
              <Modal>
                <h3>Transfa</h3>
                <p>
                  Logistics app that seeks to help makes delivery of items
                  easier and timely.
                </p>
                <div className="proj-btn-holder">
                  <MediaBtn mediaBtnText="Figma" />
                  <MediaBtn mediaBtnText="Logistic" />
                  <MediaBtn mediaBtnText="MVP" />
                  <MediaBtn mediaBtnText="Mobile App" />
                </div>
                <div className="view-links-btn">
                  <LinksBtn
                    linkBtnText="get app"
                    hRef={
                      "https://drive.google.com/drive/folders/1n5OBSXHS_DHe8N0T5G_cCtlaRpYTBEVG?usp=sharing"
                    }
                  />
                  <LinksBtn
                    linkBtnText="CASE STUDY"
                    hRef={
                      "https://www.figma.com/proto/QMwV06PkPpocjwBUY3SZxc/Kaybams-Portfolio-Website-Design?node-id=323%3A1449&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=3%3A4"
                    }
                  />
                </div>
              </Modal>
            </div>
            <img src={Transaction} alt="#" />
          </div>
        </div>
        <div className="project-wraper">
          <div className="transaction-proj">
            <div className="modal-display">
              <Modal>
                <h3>Colab</h3>
                <p>
                  An online educational platform that seeks to simplify
                  knowledge transfer by leveraging on audio and text-ta-speech
                  functionalities
                </p>
                <div className="proj-btn-holder">
                  <MediaBtn mediaBtnText="Adobe Xd" />
                  <MediaBtn mediaBtnText="Education" />
                  <MediaBtn mediaBtnText="Mobile App" />
                </div>
                <div className="view-links-btn">
                  <LinksBtn
                    linkBtnText="view prototype"
                    hRef={
                      "https://xd.adobe.com/view/4020069e-4c34-47d7-a77e-0b76a226e4c6-1573/"
                    }
                  />
                  <LinksBtn
                    linkBtnText="CASE STUDY"
                    hRef={
                      "https://www.figma.com/proto/QMwV06PkPpocjwBUY3SZxc/Kaybams-Portfolio-Website-Design?node-id=35%3A773&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=3%3A4"
                    }
                  />
                </div>
              </Modal>
            </div>
            <img src={MobileProj} alt="#" />
          </div>
          <div className="afw-proj">
            <div className="modal-display">
              <Modal>
                <h3>Africa Fashion Warehouse</h3>
                <p>
                  An online market for people looking for good quality and
                  affordable wears.
                </p>
                <div className="proj-btn-holder">
                  <MediaBtn mediaBtnText="Adobe XD" />
                  <MediaBtn mediaBtnText="Web App" />
                  <MediaBtn mediaBtnText="Marketplace" />
                  <MediaBtn mediaBtnText="Ecommerce" />
                </div>
                <div className="view-links-btn">
                  <LinksBtn
                    linkBtnText="view prototype"
                    hRef={
                      "https://xd.adobe.com/view/dd54c783-8f51-45d5-9aa9-7268c3b606cd-8807/"
                    }
                  />
                </div>
              </Modal>
            </div>
            <img src={Afw} alt="#" />
          </div>
        </div>
      </div>
      <div className="howIapproach-container">
        <div className="header-sect">
          <h1>How I approach designs</h1>
          <p>Frame work that guides how to come up with design solutions</p>
        </div>
        <div className="cards-wrapper">
          <div className="card-items">
            <ApproachCard
              icon={learning}
              title="Learning"
              desc="I master the fundamental principles of whatever industry I want to design for. I then proceed to knowing my users - how they behave, think, their needs and pain-points. This helps me come up with design solutions that meet or exceed users expectations."
            />
          </div>
          <div className="card-items">
            <ApproachCard
              icon={radical}
              title="Radical Prioritization"
              desc="After having a clear understanding (or assumptions) of what I’m building and who I’m building for, I set out to prioritize features based on what users care about and value the most."
            />
          </div>
          <div className="card-items">
            <ApproachCard
              icon={flex}
              title="Flexibility"
              desc="I believe there is no one-size fits all design process. This is why I invest in LEARNING and this serve as a point of reference upon which I build solutions on."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
