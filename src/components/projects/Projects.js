import React from "react";
import MobileProj from "../../assets/images/project1.png";
import Ibelive from "../../assets/images/project2.png";
import Fruiths from "../../assets/images/project3.jpg";
import Telephone from "../../assets/images/project4.jpeg";
import Transaction from "../../assets/images/project6.png";
import Afw from "../../assets/images/project5.png";
import Modal from "../../components/Modal";
import MediaBtn from "../../components/buttons/MediaBtn";
import LinksBtn from "../../components/buttons/LinksBtn";
import "./projects.scss";

const Projects = () => {
  return (
    <div className="projects-section">
      <h3 className="title-desc">Hover on any project to learn more</h3>
      <div className="project-wraper">
        <div className="mobile-project">
          <div className="modal-display">
            <Modal>
              <h3>Colab</h3>
              <p>
                An online educational platform that seeks to simplify knowledge
                transfer by leveraging on audio and text-ta-speech
                functionalities
              </p>
              <div className="proj-btn-holder">
                <MediaBtn mediaBtnText="Adobe XD" />
                <MediaBtn mediaBtnText="Education" />
                <MediaBtn mediaBtnText="Mobile App" />
              </div>
              <div className="view-links-btn">
                <LinksBtn linkBtnText="VIEW LIVE" />
                <LinksBtn linkBtnText="CASE STUDY" />
              </div>
            </Modal>
          </div>
          <img src={MobileProj} alt="#" />
        </div>
        <div className="ibeliev-proj">
          <div className="modal-display">
            <Modal>
              <h3>iBELIEVE</h3>
              <p>
                A platform for individuals to showcase their talents and become
                the next global sensation.
              </p>
              <div className="proj-btn-holder">
                <MediaBtn mediaBtnText="Adobe XD" />
                <MediaBtn mediaBtnText="Talents" />
                <MediaBtn mediaBtnText="Web App" />
              </div>
              <div className="view-links-btn">
                <LinksBtn linkBtnText="VIEW LIVE" />
                <LinksBtn linkBtnText="CASE STUDY" />
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
                <LinksBtn linkBtnText="VIEW LIVE" />
                <LinksBtn linkBtnText="CASE STUDY" />
              </div>
            </Modal>
          </div>
          <img src={Fruiths} alt="#" />
        </div>
        <div className="telephone-proj">
          <div className="modal-display">
            <Modal>
              <h3>InsureCapital</h3>
              <p>
                Democratizing access to insurance products for professionals and
                SMEs.
              </p>
              <div className="proj-btn-holder">
                <MediaBtn mediaBtnText="Figma" />
                <MediaBtn mediaBtnText="Insuretech" />
                <MediaBtn mediaBtnText="Mobile App" />
              </div>
              <div className="view-links-btn">
                <LinksBtn linkBtnText="VIEW LIVE" />
                <LinksBtn linkBtnText="CASE STUDY" />
              </div>
            </Modal>
          </div>
          <img src={Telephone} alt="#" />
        </div>
      </div>
      <div className="project-wraper">
        <div className="transaction-proj">
          <div className="modal-display">
            <Modal>
              <h3>Transfa</h3>
              <p>
                Logistics app that seeks to help make delivery of items easier
                and timely.
              </p>
              <div className="proj-btn-holder">
                <MediaBtn mediaBtnText="Figma" />
                <MediaBtn mediaBtnText="Logistics" />
                <MediaBtn mediaBtnText="MVP" />
                <MediaBtn mediaBtnText="Mobile App" />
              </div>
              <div className="view-links-btn">
                <LinksBtn linkBtnText="VIEW LIVE" />
                <LinksBtn linkBtnText="CASE STUDY" />
              </div>
            </Modal>
          </div>
          <img src={Transaction} alt="#" />
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
                <LinksBtn linkBtnText="VIEW LIVE" />
                <LinksBtn linkBtnText="CASE STUDY" />
              </div>
            </Modal>
          </div>
          <img src={Afw} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
