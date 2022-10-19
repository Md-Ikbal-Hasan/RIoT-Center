import React from 'react';
import { FaMapMarkerAlt,FaAt,FaPhoneVolume,FaFax, FaPhoneAlt,FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitterSquare, FaGithub, FaResearchgate, FaGooglePlus, FaCopyright } from "react-icons/fa";
const Footer = () => {
    return (
        <div className=' footer p-5'>
            <div className="row">
                <div className="col-md-4 col-12 myfooter">
                    <p>Independent University, Bangladesh</p>
                    <p> <FaMapMarkerAlt/> Plot 16 Block B, Aftabuddin Ahmed Road

                        Bashundhara R/A, Dhaka, Bangladesh</p>
                    <p><FaPhoneAlt/>Phone:+88-02-8431645-53, 8432065-76 </p>
                    
                    <p><FaPhoneVolume/>  Hotline:+880 9612-939393</p>

                    <p><FaFax/> Fax: +88-02-8431991</p>

                    <p><FaAt/>E-mail: info@iub.edu.bd</p>
                </div>

                <div className="col-md-4 col-12">
                    <a href="http://www.iub.edu.bd/">
                        <img className='img-fluid' src=" https://seeklogo.com/images/I/iub-independent-university-bangladesh-logo-D6CC652762-seeklogo.com.png" alt="" />
                    </a>
                </div>

                <div className="col-md-4 col-12 social-media-icon">

                    <FaFacebookF />
                    <FaInstagram />
                    <FaLinkedinIn />
                    <FaTwitterSquare />
                    <FaGithub />
                    <FaResearchgate />
                    <FaGooglePlus />
                </div>
            </div>

            <hr />
            <p className='text-center'>
                <FaCopyright /> Developed by RIoT Center , IUB
            </p>


        </div>
    );
};

export default Footer;