import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../App.css'
import logo from '../images/logo.jpeg'
import {
    MDBFooter,
} from 'mdb-react-ui-kit';

const Footer = () => {
 return (
<MDBFooter color="dark" bgColor='light'
className='text-center text-lg-left'>
    <hr className='footer-seperator' />
    <h5 className='text-uppercase'>
        Cheers for dropping by!
    </h5>
    <p>
        For more enquiries about my products, 
        send me an email, and I'll get back to you as soon as possible.
        Thank you for supporting my business! 
    </p>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright: By Dana Alami 
      </div>
    </MDBFooter>
  );
}



export default Footer;