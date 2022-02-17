import React from 'react';
import { useState } from 'react';
import emailjs, { send } from 'emailjs-com';
import '../App.css'



    const Contactus = () => {
        const [sender_name, set_sender_name] = useState('');
        const [sender_email, set_sender_email] = useState('');
        const [message, set_message] = useState('');
        const handleName = (e) => {
            set_sender_name(e.target.value)

        }

        const handleEmail = (e) => {
            set_sender_email(e.target.value)
        }

        const handlemessage = (e) => {
            set_message(e.target.value)
        }

        const sendEmail = (e) => {
            e.preventDefault(); 
            send(
                'service_ddju8xd',
                'template_2ybqrfi',
                {sender_name, sender_email, message},
                'user_CMEFdYfib9B5KXwgkn7wC'
            )
            .then((response) => {
                console.log('Message sent successfully', response.status, response.text)
            })
            .catch((err) => {
                console.log('Failed', err)
            })
            set_sender_name('');
            set_sender_email('');
            set_message('');
            

        }





return (
<>
<h1>Contact Me</h1>

    <form className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="sender_name" value={sender_name} onChange={handleName} required placeholder="your name" />
        <label>Full Name</label>
        <input type="email" name="sender_email" value={sender_email} onChange={handleEmail} required placeholder="your email" />
        <label> Email</label>
        <textarea name="message" value={message} onChange={handlemessage} required placeholder="your message" />
        <label>Message</label>
        <button type="submit" value="Send"> Send mail</button>
        
    </form>
    </>
);
}

export default Contactus;
