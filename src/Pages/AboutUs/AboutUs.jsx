/* eslint-disable no-unused-vars */
import React from "react";
import "./AboutUs.css";
import AboutUsImage from "../../assets/aboutUs.jpg";
import Irene from "../../assets/Irene-Pinheiro.png";
import Nelson from "../../assets/Nelson-Pinheiro.png";
import Catia from "../../assets/Catia-Silva.png";
import Rita from "../../assets/Rita-Oliveira.png";
import Rui from "../../assets/Rui-Miguel-Silva.png";
import Carlos from "../../assets/Carlos-Costa.png";
import André from "../../assets/Andre-Macedo.jpeg";

const AboutUs = () => {
  return (
    <div>
      <div className="aboutUs">
        <h4>About Us</h4>
        <h2>Welcome</h2>
        <hr />
        <p>
          Our organization provides tailored solutions to help your company
          reach next level of transformation. Our team delivers cutting-edge
          services to empower your success.
        </p>
        <img src={AboutUsImage} alt="aboutUs" />
      </div>
      <div className="ourTeam">
        <h3>Our Team</h3>
        <hr />
        <p>
          We are an experienced Business & Logistics Organization, with a team
          of dedicated professionals committed to providing the best service and
          advice. Our experts bring knowledge from various fields, allowing us
          to build bespoke solutions tailored specifically for our clients&apos;
          needs. Together, we strive to make solutions that bring higher
          productivity and technology advantage for organizations that work with
          us.
        </p>
        <div className="team">
          <div className="teamMember">
            <img src={Irene} alt="Irene Pinheiro" />
            <div className="teamName">Irene Pinheiro</div>
            <div className="role">CEO</div>
          </div>
          <div className="teamMember">
            <img src={Nelson} alt="Nelson Pinheiro" />
            <div className="teamName">Nelson Pinheiro</div>
            <div className="role">COO</div>
          </div>
          <div className="teamMember">
            <img src={Catia} alt="Catia Silva" />
            <div className="teamName">Catia Silva</div>
            <div className="role">CTO</div>
          </div>
          <div className="teamMember">
            <img src={Rita} alt="Rita Oliveira" />
            <div className="teamName">Rita Oliveira</div>
            <div className="role">Operations Manager</div>
          </div>
          <div className="teamMember">
            <img src={Rui} alt="Rui Miguel Silva" />
            <div className="teamName">Rui Miguel Silva</div>
            <div className="role">PPTO</div>
          </div>
          <div className="teamMember">
            <img src={Carlos} alt="Carlos Costa" />
            <div className="teamName">Carlos Costa</div>
            <div className="role">Sales Expert</div>
          </div>
          <div className="teamMember">
            <img src={André} alt="André Macedo" />
            <div className="teamName">André Macedo</div>
            <div className="role">Developer</div>
          </div>
        </div>
      </div>
      <div className="CustomSolutions">
        <h4>Get Custom Solutions from our Experienced Team</h4>
        <h2>Why Talk to us?</h2>
        <p>
          At Fielmetodo, we are equipped to provide you with custom solutions
          for your process optimizations needs, specially related with
          Logistics. Our team of experts have the knowledge and expertise to
          develop tailored plans that meet any budget for small or large
          companies. We understand how important it is for businesses to stay on
          top of their tech infrastructure in order to remain competitive -
          that&apos;s why our mission is to deliver long-term strategies and
          support services that guarantee results every time.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
