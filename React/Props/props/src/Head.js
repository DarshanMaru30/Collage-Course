import React from 'react'
import { FaCertificate , FaFacebookF,FaTwitter,FaLinkedin,FaYoutube,FaWhatsapp } from "react-icons/fa";
import { TfiEmail,TfiGoogle } from "react-icons/tfi";
import { TiSocialInstagram} from "react-icons/ti";

export default function Head(props) {
    return (
        <div>
            <div className=' top-nav' >
                <div className=' container ' >
                    <div className='d-flex ' >
                        <div className='left d-flex '>
                            <div><i><TfiEmail></TfiEmail></i>{props.nvbar[0]}</div>
                            <div><i><FaCertificate /></i>{props.nvbar[1]}</div>
                        </div>
                        <div className='center '>
                            <div>HAVE ANY QUESTION ? +91 90333 16003</div>
                        </div>
                        <div className='right '>
                            <div className='d-flex'>
                                <i><FaFacebookF /></i><i><FaTwitter /></i><i><TfiGoogle /></i><i><FaLinkedin /></i><i><TiSocialInstagram /></i><i><FaYoutube /></i><i><FaWhatsapp /></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
