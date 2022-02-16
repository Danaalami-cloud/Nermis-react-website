import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../App.css'
import logo from '../images/logo.jpeg'


const Footer = () => {
 return (
     <footer className="footer-distributed" id="footer">
         <div className="footer-left">
             <Link to="home">
                 {/* <img src={logo} alt="NR" /> */}
             </Link>
         </div>
         <div className="footer-center">
             <h2>Get to Know me</h2>
         </div>
         <div className="footer-bottom">
             <p> copyrights 2022 NR | Made by Dana.Alami with React</p>
         </div>
     </footer>
 );
}



export default Footer;