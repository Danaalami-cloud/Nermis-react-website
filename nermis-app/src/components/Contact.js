import React from "react";
// import { useState } from 'react';
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';

const API_USER_ID = process.env.REACT_APP_USER_ID;
const API_SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const API_TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID; 
// const {REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } = process.env;
const Contactus = () => {
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm(
      'service_ddju8xd', 'template_2ybqrfi', e.target, 'user_CMEFdYfib9B5KXwgkn7wC')
        .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
      e.target.reset()
  };

  return (
    <div
      className="container border"
      style={{
         marginTop: "60px", 
         width: "85%",
         height: "190%",
       backgroundImage: `url('https://www.heet.org.uk/wp-content/uploads/2016/06/gradient-background-26046-26731-hd-wallpapers.jpg.png')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      }}
    >
      <h1 style={{ marginTop: "25px" }}>Contact Me</h1>
      <form
        className="row"
        style={{ margin: "25px 85px 75px 100px" }}
        onSubmit={sendEmail}
      >
        <label>Name</label>
        <input type="text" name="name" className="form-control" />
        
        <label>Email</label>
        <input type="email" name="user_email" className="form-control" />
        
        <label>Message</label>
        <textarea name="message" rows="4" className="form-control" />
        <input
          type="submit"
          value="Send"
          className="form-control btn btn-primary"
          style={{ marginTop: "30px" }}
        />
      </form>
    </div>
  );
};

export default Contactus;
