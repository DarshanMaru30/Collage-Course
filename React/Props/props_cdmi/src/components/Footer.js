import React from 'react'

import { FaUniversity, FaHandPointRight, FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";

import footer from './../image/footer.svg'

const Footer = (props) => {
    return (
        <>

            <div className="space">
                <div className="footer">
                    <div className="container">
                        <div className="row d-flex">
                            <div className="box" style={{ width: "380px" }}>
                                <div className="logo">
                                    <a href=""><img src={footer} alt="" /></a>
                                </div>
                                <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                                <h6>Follow Us On</h6>
                                <ul className='social'>
                                    <li><a href=""><FaFacebookF /></a></li>
                                    <li><a href=""><FaTwitter /></a></li>
                                    <li><a href=""><TiSocialGooglePlus /></a></li>
                                    <li><a href=""><FaLinkedin /></a></li>
                                    <li><a href=""><FaInstagram /></a></li>
                                    <li><a href=""><AiOutlineYoutube /></a></li>
                                    <li><a href=""><FaWhatsapp /></a></li>
                                </ul>
                            </div>
                            <div className="box" style={{ width: "255px" }}>
                                <h6 style={{ color: "White" }}>Feature links</h6>
                                <ul className='links'>
                                    {
                                        props.foot.map((ele) => {
                                            return (
                                                <li><a href=""><FaHandPointRight style={{ marginRight: "10px" }} />{ele}</a></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="box" style={{ width: "450px" }}>
                                <h6 style={{ color: "White" }}>Contact US</h6>
                                <div className="head">
                                    <h6><a href="">HEAD OFFICE - YOGICHOWK</a></h6>
                                    <span>401-404, 4<sup>th</sup> Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</span>
                                    <div className='d-flex'>
                                        <p>Mo: </p>
                                        <a href="">+91 90333 16003</a>
                                    </div>
                                    <h6><a href=''>Other Branches</a> </h6>
                                    <ul className='branch'>
                                        {
                                            props.house.map((ele) => {
                                                return (
                                                    <li><a href=""><FaUniversity style={{ marginRight: "10px" }} />{ele}</a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <div className="container">
                    <p>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
                </div>
            </div>

        </>
    )
}

export default Footer
