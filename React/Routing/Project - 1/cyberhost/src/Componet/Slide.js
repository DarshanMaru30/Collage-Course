import React from 'react'
import slider1 from '../Images/slider-img-1.png'
import slider2 from '../Images/slider-img-2.png'
import slider3 from '../Images/slider-img-3.png'
import { FaRegClock } from "react-icons/fa";
import OwlCarousel from 'react-owl-carousel';
import Container from 'react-bootstrap/Container';


export default function Slide() {
    return (
        <div>
            <OwlCarousel className='owl-theme color' items={1} nav loop={true}>
                <Container>
                    <div class='item'>
                        <div className='slider1 d-flex'>
                            <div className='item1_text'>
                                <h2>Best for share hosting</h2>
                                <ul className='d-flex p-0'>
                                    <li><i><FaRegClock></FaRegClock></i>Simple</li>
                                    <li className='margin'><i><FaRegClock></FaRegClock></i>Easy to use</li>
                                    <li className='margin'><i><FaRegClock></FaRegClock></i>10x Faster</li>
                                </ul>
                                <p>Creating outstanding websites effortless & intuitive.Linax is the first Design <br></br> Driven html template with bullet-proof code.</p>
                                <a href=''>Get Started Now</a>
                            </div>
                            <div className='slider-img'>
                                <img src={slider1} className='w-100 d-none d-md-block'></img>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div class='item'>
                        <div className='slider1 d-flex'>
                            <div className='item1_text'>
                                <h2>Best for share hosting</h2>
                                <ul className='d-flex p-0'>
                                    <li><i><FaRegClock></FaRegClock></i>Simple</li>
                                    <li className='margin'><i><FaRegClock></FaRegClock></i>Easy to use</li>
                                    <li className='margin'><i><FaRegClock></FaRegClock></i>10x Faster</li>
                                </ul>
                                <p>Creating outstanding websites effortless & intuitive.Linax is the first Design <br></br> Driven html template with bullet-proof code.</p>
                                <a href=''>Get Started Now</a>
                            </div>
                            <div className='slider-img'>
                                <img src={slider2} className='w-100 d-none d-md-block'></img>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div class='item'>
                        <div className='slider1 d-flex'>
                            <div className='item1_text'>
                                <h2>Best for share hosting</h2>
                                <ul className='d-flex p-0'>
                                    <li><i><FaRegClock></FaRegClock></i>Simple</li>
                                    <li className='margin'><i><FaRegClock></FaRegClock></i>Easy to use</li>
                                    <li className='margin'><i><FaRegClock></FaRegClock></i>10x Faster</li>
                                </ul>
                                <p>Creating outstanding websites effortless & intuitive.Linax is the first Design <br></br> Driven html template with bullet-proof code.</p>
                                <a href=''>Get Started Now</a>
                            </div>
                            <div className='slider-img'>
                                <img src={slider3} className='w-100 d-none d-md-block'></img>
                            </div>
                        </div>
                    </div>
                </Container>
            </OwlCarousel>
        </div>
    )
}
