/* eslint-disable no-unused-vars */
import React from "react";
import "./Testimonials.css";
import firstPersona from "../../assets/firstPersona.jpg";
import secondPersona from "../../assets/secondPersona.jpeg";
import thirdPersona from "../../assets/thirdPersona.jpg";
import fourthPersona from "../../assets/fourthPersona.jpg";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonialsTittle">Testimonials</div>
      <div className="testimonialsMainTittle">What our clients say</div>
      <hr />
      <div className="ourClients">
        Our satisfied clients have spoken: Hear their stories of how we helped
        them in very different ways
      </div>
      <div className="comments">
        <div className="testimonial">
          <img src={firstPersona} alt="David Samuel" />
          <div className="persona">
            <div className="name">David Samuel</div>
            <div className="profession">Warehouse Manager</div>
            <div className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          </div>
          <div className="commentary">
            We were amazed with the improvement of our logistics processes with
            a quite simple creative solution. We now ship double the orders in
            half the time!
          </div>
        </div>
        <div className="testimonial">
          <img src={secondPersona} alt="Dina Amaro" />
          <div className="persona">
            <div className="name">Dina Amaro</div>
            <div className="profession">HR Manager</div>
            <div className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          </div>
          <div className="commentary">
            While Hosting our Company Event, our contracted provider failed us
            and Fielmetodo with its We-Drive team we&apos;re able to find us one
            last minute~solution in a Flash and without Flaws! I was so
            Relieved!
          </div>
        </div>
        <div className="testimonial">
          <img src={thirdPersona} alt="Jonas Bento" />
          <div className="persona">
            <div className="name">Jonas Bento</div>
            <div className="profession">Online Seller</div>
            <div className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          </div>
          <div className="commentary">
            We the growth of our Marketplace Business our previous supplier was
            being unable to handle all the shippings properly. We-Express
            provided us a cross border service to deliver our goods and increase
            our ratings!
          </div>
        </div>
        <div className="testimonial">
          <img src={fourthPersona} alt="Emma Stone" />
          <div className="persona">
            <div className="name">Emma Stone</div>
            <div className="profession">Online Seller</div>
            <div className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          </div>
          <div className="commentary">
            We wanted to expand our business for a new Business and with
            Fielmetodo&apos;s team we got a clear and straight forward plan with
            all steps needed to start. Thank you!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
