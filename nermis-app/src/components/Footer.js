import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../App.css'
import logo from '../images/logo.jpeg'


const Footer = () => {
 return (
     <footer className="footer-distributed" id="footer">
         <div className="footer-left">
             
         </div>
         <div className="footer-center">
             <h2>Get to Know me</h2>
             <Link to="#home"> 
             <img style={{width: '120px'}} src={logo} alt="NR" />
             </Link>
             <div className="part">
                 <p> Thank you for visiting my page, and please don't hesistate to reach out, and get in touch!</p>
                 <Link to="#home"></Link>
                 </div>           
         </div>
         <div className="footer-bottom">
             <p> copyrights 2022 NR | Made by Dana.Alami with React</p>
         </div>
     </footer>
 );
}



export default Footer;