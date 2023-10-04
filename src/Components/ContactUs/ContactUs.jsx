/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./ContactUs.css";
import axios from "axios"

const ContactUs = () => {
  const [FirstName, setFirstName] =useState("")
  const [LastName, setLastName] =useState("")
  const [Email, setEmail] =useState("")
  const [Phone, setPhone] =useState("")
  const [Notes, setNotes] =useState("")

  const [emailSent, setEmailSent] =useState(false)
  const [emailNotSent, setEmailNotSent] =useState(false)

  const [FirstNameId, setFirstNameId] =useState("")
  const [LastNameId, setLastNameId] =useState("")
  const [EmailId, setEmailId] =useState("")
  const [NotesId, setNotesId] =useState("")

  const info ={
    "FirstName":`${FirstName}`,
    "LastName":`${LastName}`,
    "Email":`${Email}`,
    "Phone":`${Phone}`,
    "Notes":`${Notes}`
  }
  const handleSubmit =() =>{
    console.log(info)
    if(FirstName!=="" & LastName!=="" & Email!=="" & Notes!==""){
      axios
      .post("http://localhost:5000/sendemail", JSON.parse(info))
      .catch((error) => {
        console.error(
          error
        );
      })
      setFirstNameId("")
      setLastNameId("")
      setEmailId("")
      setNotesId("")
      setEmailSent(true)
      setEmailNotSent(false) 
      
    }else{
      if(FirstName==""){
        setFirstNameId("notFilled")
      }else{setFirstNameId("")}
      if(LastName==""){
        setLastNameId("notFilled")
      }else{setLastNameId("")}
      if(Email==""){
        setEmailId("notFilled")
      }else{setEmailId("")}
      if(Notes==""){
        setNotesId("notFilled")
      }else{setNotesId("")} 

      setEmailNotSent(true) 
      setEmailSent(false)     
    }
  }
  return (
    <div className="contactMap" id="contactUs">
      <div className="contactUs">
        <div>
          <div className="contacts">Contacts</div>
          <div className="question">Have a question?</div>
          <div className="contactText">
            Contact us whenever you have any questions.
            <br /> We are always here for you!
          </div>
        </div>
        <div>
          <div className="infoTittle">Email</div>
          <div className="infoText">hello@fielmetodo.pt</div>
          <div className="info">
            <div className="infoTittle">Phone</div>
            <div className="infoText">+351 916335638</div>
          </div>
          <div className="info">
            <div className="infoTittle">Address</div>
            <div className="infoText">
              R. Vasco da Gama 71, Montijo, Portugal
            </div>
          </div>
        </div>
        <form className="contactUsForm">
          <input type="text" id={FirstNameId} placeholder="First Name*" className="input" value={FirstName} onChange={event=>setFirstName(event.target.value)}></input>
          <hr className="breakline" />
          <input type="text" id={LastNameId} placeholder="Last Name*" className="input" value={LastName} onChange={event=>setLastName(event.target.value)}></input>
          <hr className="breakline" />
          <input type="text" id={EmailId} placeholder="Email Address*" className="input" value={Email} onChange={event=>setEmail(event.target.value)}></input>
          <hr className="breakline" />
          <input type="text" placeholder="Phone" className="input" value={Phone} onChange={event=>setPhone(event.target.value)}></input>
          <hr className="breakline" />
          <input type="text"id={NotesId}  placeholder="Notes*" className="input" value={Notes} onChange={event=>setNotes(event.target.value)}></input>
          <hr className="breakline"/>
          <input type="button" value="SUBMIT" className="submitButton" onClick={handleSubmit} />
          {emailNotSent===true?<div className="emailNotSend">*Fill in the mandatory inputs in order to Submit</div>:null}
          {emailSent===true?<div className="emailSend">Contact send! <br/>We will get back to you as soon as possible</div>:null}
        </form>
      </div>
      <div className="mapDiv">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1102.4093650207228!2d-8.953150225589832!3d38.695630444758876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xd193987b2c7c34d%3A0x60e7d5959c6137f6!2sFielm%C3%A9todo%20Lda%2C%20R.%20Vasco%20da%20Gama%2071A%2C%202870-823%20Montijo!3m2!1d38.6954949!2d-8.952687599999999!5e0!3m2!1sen!2spt!4v1696260563424!5m2!1sen!2spt"
          className="map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
