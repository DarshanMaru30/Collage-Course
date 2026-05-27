import React from 'react'

import { MdMailOutline } from "react-icons/md";
import { FaCertificate, FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";

import logo from './../image/logo.svg'
import './../styles/home.css';



const Header = (props) => {
    return (
        <>

            <div className='top_info'>
                <div className='container'>
                    <div className='top_nav'>
                        <ul className='left d-flex'>
                            <li><a href=""><MdMailOutline style={{ marginRight: "5px", fontSize: "20px" }} />info@cdmi.in </a></li>
                            <li><a href=""><FaCertificate style={{ marginRight: "5px", fontSize: "20px" }} /> Verify Certificate</a></li>
                        </ul>
                        <ul className='mid'>
                            <li><a href=''>HAVE ANY QUESTION ? +91 90333 16003</a></li>
                        </ul>
                        <ul className='icon d-flex'>
                            <li><a href=""><FaFacebookF /></a></li>
                            <li><a href=""><FaTwitter /></a></li>
                            <li><a href=""><TiSocialGooglePlus /></a></li>
                            <li><a href=""><FaLinkedin /></a></li>
                            <li><a href=""><FaInstagram /></a></li>
                            <li><a href=""><AiOutlineYoutube /></a></li>
                            <li><a href=""><FaWhatsapp /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* NavMenu Section Start */}

            <div className='container'>
                <div className='nav'>
                    <div className='logo'>
                        <a href=""><img src={logo} /></a>
                    </div>
                    <nav >

                        <ul className='main_menu d-flex'>
                            {
                                props.header.map((ele) => {
                                    return (
                                        <li><a href="" className=''>{ele}</a></li>
                                    )
                                })
                            }
                        </ul>

                    </nav>
                </div>
            </div>



        </>
    )
}

export default Header
