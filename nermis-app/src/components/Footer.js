import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../App.css'
import logo from '../images/logo.jpeg'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';

const Footer = () => {
 return (
     <MDBFooter bgColor='Dark' className='text-center text-lg-center'>
         <div className='text-white bg-info'>
         <MDBContainer className='p-4'>
             <MDBRow>
                 <MDBCol lg='6' md='12' className='mb-4 mb-md-0 text-center'>
                     
                     <h5 className='text-uppercase'>Cheers for dropping by!</h5>
                     <p>
                         Thank you for supporting my business and don't hesistate to get in touch!
                     </p>
                   
                 </MDBCol>
             </MDBRow>
         </MDBContainer>
         <div className='text-center p-3'>
             &copy; {new Date().getFullYear()} Copyright:by Dana Alami{''}
             <a className='text-white bg-dark' >
    
             </a>
         </div>
         </div>
     </MDBFooter>
 );
}



export default Footer;