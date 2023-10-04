/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./homePage.css";
import BackgroundImage from "../../assets/background-image.jpg";
import firstImage from "../../assets/firstImage.png";
import secondImage from "../../assets/secondImage.png";
import thirdImage from "../../assets/thirdImage.png";
import fourthImage from "../../assets/fourthImage.png";
import ContactUs from "../../Components/ContactUs/ContactUs";

const homepage = () => {
  return (
    <div>
      <div
        className="homepage"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="imageText">
          <h1 className="title">Combining technology & logistics</h1>
          <h4 className="homepageBody">
            Our focus is on delivering Logistics solutions for Smal and Medium
            Companies. With a large expertise in the field, we provide
            comprehensive and easy solutions to help your business reach the
            next level. Our experienced professionals use the most efficient
            processes to develop innovative solutions that deliver results. Let
            us help you take advantage of the latest advances in information
            technology in your logistics and build a better future for your
            company.
          </h4>
          <div className="imageButtons">
            <Link
              to="/aboutus"
              className="aboutusbutton"
              onClick={() => {
                window.scrollTo({ top: 0 });
              }}
            >
              ABOUT US
            </Link>
            <a href="#contactUs" className="contactusbutton">
              CONTACT US
            </a>
          </div>
        </div>
      </div>
      <div className="ourservices">
        <h4 className="firstTitle">What we can do</h4>
        <h2 className="mainTitle">Our services</h2>
        <h4 className="secondTitle">
          Get to Know all our services that we have available for you!
        </h4>
        <div className="allservices">
          <div className="service">
            <img
              src={firstImage}
              alt="New Business Consultants"
              className="inBubble"
            />
            <h3 className="serviceTittle">New Business Consultants</h3>
            <p className="serviceText">
              We provide our expertise to small and medium companies providing
              the necessary know how to expand theirs business to new markets.
            </p>
          </div>
          <div className="service">
            <img src={secondImage} alt="Driver Services" className="inBubble" />
            <h3 className="serviceTittle">Driver Services</h3>
            <p className="serviceText">
              Either If you need a Private Driver for your customers or
              employees, we provide you a custom solution for you meetings in
              Portugal run as smooth has they can be.
            </p>
          </div>
          <div className="service">
            <img src={thirdImage} alt="Parcels Delivery" className="inBubble" />
            <h3 className="serviceTittle">Parcels Delivery</h3>
            <p className="serviceText">
              Either if it is orders from your costumers or that important
              contract that needs to reach its destination fast and safely, we
              have the solutions for parcel deliveries in the EU.
            </p>
          </div>
          <div className="service">
            <img
              src={fourthImage}
              alt="Logistics Process Optimization"
              className="inBubble"
            />
            <h3 className="serviceTittle">Logistics Process Optimization</h3>
            <p className="serviceText">
              If there is Logistics, we can improve it. Allying our IT and
              Logistics expertise, we deliver solutions for companies escalate
              their productivity.
            </p>
          </div>
        </div>
      </div>
      <div className="outsource">
        <div>
          Get Professional & Affordable Solutions from our Experienced Team
        </div>
        <h2>Why Outsource your project?</h2>
        <p>
          At Fielmetodo, we are equipped to provide you with professional and
          affordable solutions for your Company needs. Our team of experts have
          the combined knowledge with Logistics, IT and New Markets Launches,
          providing them with the expertise to develop tailored plans for small
          or medium companies. We understand how important it is for businesses
          to stay on top of their tech and logistics infrastructure in order to
          remain competitive - that’s why our mission is to deliver long-term
          strategies and support services that guarantee results every time.
        </p>
      </div>
      <ContactUs />
    </div>
  );
};

export default homepage;
