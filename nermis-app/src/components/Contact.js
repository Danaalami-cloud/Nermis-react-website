import React from 'react';
import emailjs from 'emailjs-com';
import '../App.css'


export default function Contact () {
function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_2ybqrfi', e.target, 'user_CMEFdYfib9B5KXwgkn7wC')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}
return (
    <form className="contact-form" onSubmit={sendEmail}>
        <input type="name" name="name" />
        <label>Full Name</label>
        <input type="email" name="email" />
        <label> Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
    </form>
);
}
