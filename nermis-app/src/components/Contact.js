import React from "react";
// import { useState } from 'react';
import emailjs from "emailjs-com";
import "../App.css";

// const Contactus = () => {
//     const [sender_name, set_sender_name] = useState('');
//     const [sender_email, set_sender_email] = useState('');
//     const [message, set_message] = useState('');

// const handleName = (e) => {
//     set_sender_name(e.target.value)

// }

// const handleEmail = (e) => {
//     set_sender_email(e.target.value)
// }

// const handlemessage = (e) => {
//     set_message(e.target.value)
// }
const Contactus = () => {
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm(
        "service_ddju8xd",
        "template_2ybqrfi",
        e.target,
        "user_CMEFdYfib9B5KXwgkn7wC"
      ).then(res => {
        console.log(res);
      }).catch(err=> console.log(err));
  }

  return (
    <div
      className="container border"
      style={{ marginTop: "50px", width: "70%" }}
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
