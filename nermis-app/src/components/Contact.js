import React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import '../App.css'


export default function Contact () {
    const Contactus = () => {
        const [sender_name, set_sender_name] = useState('');
        const [sender_email, set_sender_email] = useState('');
        const [message, set_message] = useState('');
        const handleName
        

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
<>
<h1>Contact Me</h1>

    <form className="contact-form" onSubmit={sendEmail}>
        <input type="name" name="name" value={sender_name} onChange={handleName} required placeholder="your name" />
        <label>Full Name</label>
        <input type="email" name="email" value={sender_email} onChange={handleEmail} required placeholder="your email" />
        <label> Email</label>
        <textarea name="message" value={message} onChange={handleMessage} required placeholder="your message" />
        <label>Message</label>
        <button type="submit" value="Send"> Send mail</button>
        
    </form>
    </>
);
}}
