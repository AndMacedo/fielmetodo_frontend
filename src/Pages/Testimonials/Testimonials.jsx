/* eslint-disable no-unused-vars */
import React,{useState} from "react";
import "./Testimonials.css";
import firstPersona from "../../assets/firstPersona.jpg";
import secondPersona from "../../assets/secondPersona.jpeg";
import thirdPersona from "../../assets/thirdPersona.jpg";
import fourthPersona from "../../assets/fourthPersona.jpg";

const Testimonials = () => {
    const [isFirstTestimonialOpen, setIsFirstTestimonialOpen] = useState(false)
    const [isSecondTestimonialOpen, setIsSecondTestimonialOpen] = useState(false)
    const [isThirdTestimonialOpen, setIsThirdTestimonialOpen] = useState(false)
    const [isForthTestimonialOpen, setIsForthTestimonialOpen] = useState(false)

  let firstCommentary = "We were amazed with the improvement of our logistics processes with  a quite simple creative solution. We now ship double the orders in half the time!"
  let secondCommentary= "While Hosting our Company Event, our contracted provider failed us  and Fielmetodo with its We-Drive team we&apos;re able to find us one  last minute~solution in a Flash and without Flaws! I was so  Relieved!"
  let thirdCommentary= "We the growth of our Marketplace Business our previous supplier was  being unable to handle all the shippings properly. We-Express  provided us a cross border service to deliver our goods and increase  our ratings!"
  let forthCommentary= "We wanted to expand our business for a new Business and with  Fielmetodo&apos;s team we got a clear and straight forward plan with  all steps needed to start. Thank you!"
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
          {window.innerWidth>=600?(
          <div className="commentary">
            {firstCommentary}
          </div>
          ):<div className="seeMore" onClick={()=>setIsThirdTestimonialOpen(false) & setIsForthTestimonialOpen(false) & setIsSecondTestimonialOpen(false) & setIsFirstTestimonialOpen(!isFirstTestimonialOpen)}>See commentary</div>}
        </div>
        {isFirstTestimonialOpen ===true ?( <>
          <div className="commentary">
            {firstCommentary}
          </div>
          <hr />
          </>
        ):null}
        <div className="testimonial">
          <img src={secondPersona} alt="Dina Amaro" />
          <div className="persona">
            <div className="name">Dina Amaro</div>
            <div className="profession">HR Manager</div>
            <div className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          </div>
          {window.innerWidth>=600?(
          <div className="commentary">
            {secondCommentary}
          </div>
          ):<div className="seeMore" onClick={()=>setIsThirdTestimonialOpen(false) & setIsForthTestimonialOpen(false) & setIsSecondTestimonialOpen(!isSecondTestimonialOpen) & setIsFirstTestimonialOpen(false)}>See commentary</div>}
          </div>
          {isSecondTestimonialOpen ===true ?( <>
            <div className="commentary">
            {secondCommentary}
            </div>
            <hr />
            </>
          ):null}
        <div className="testimonial">
          <img src={thirdPersona} alt="Jonas Bento" />
          <div className="persona">
            <div className="name">Jonas Bento</div>
            <div className="profession">Online Seller</div>
            <div className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          </div>
          {window.innerWidth>=600?(
          <div className="commentary">
            {thirdCommentary}
          </div>
          ):<div className="seeMore" onClick={()=>setIsThirdTestimonialOpen(!isThirdTestimonialOpen) & setIsForthTestimonialOpen(false) & setIsSecondTestimonialOpen(false) & setIsFirstTestimonialOpen(false)}>See commentary</div>}
          </div>
          {isThirdTestimonialOpen ===true ?( <>
            <div className="commentary">
            {thirdCommentary}
            </div>
            <hr />
            </>
          ):null}
        <div className="testimonial">
          <img src={fourthPersona} alt="Emma Stone" />
          <div className="persona">
            <div className="name">Emma Stone</div>
            <div className="profession">Online Seller</div>
            <div className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          </div>
          {window.innerWidth>=600?(
          <div className="commentary">
            {forthCommentary}
          </div>
          ):<div className="seeMore" onClick={()=>setIsThirdTestimonialOpen(false) & setIsForthTestimonialOpen(!isForthTestimonialOpen) & setIsSecondTestimonialOpen(false) & setIsFirstTestimonialOpen(false)}>See commentary</div>}
          </div>
          {isForthTestimonialOpen ===true ?( <>
            <div className="commentary">
            {forthCommentary}
            </div>
            </>
          ):null}
      </div>
    </div>
  );
};

export default Testimonials;
