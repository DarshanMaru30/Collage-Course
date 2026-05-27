import React from 'react'
import pop1 from '../Images/pop-1.png'
import pop2 from '../Images/pop-2.png'
import pop3 from '../Images/pop-3.png'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Pople() {
    return (
        <div>
            <section className='people padding bd-bottom'>
                <Container>
                    <Row>
                        <div className='pople_head text-center'>
                            <h2>What People Says</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </Row>
                    <Row className='g-4'>
                        <Col className='col-12 col-md-6 col-lg-4'>
                            <div className='pople_box text-center'>
                                <img src={pop1}></img>
                                <p>Lorem ipsum dolor sit amet consetur adipisicing elit. Ullam vel iusto reicndis nesciunt laborum labsam nisi!</p>
                                <h4>Jonathan Smith</h4>
                                <ul className='d-flex rating'>
                                    <li className='minus'><FaStar></FaStar></li>
                                    <li><FaStar></FaStar></li>
                                    <li><FaStar></FaStar></li>
                                    <li><FaStar></FaStar></li>
                                    <li><FaStar></FaStar></li>
                                </ul>
                            </div>
                        </Col>
                        <Col className='col-12 col-md-6 col-lg-4'>
                            <div className='pople_box text-center'>
                                <img src={pop2}></img>
                                <p>Lorem ipsum dolor sit amet consetur adipisicing elit. Ullam vel iusto reicndis nesciunt laborum labsam nisi!</p>
                                <h4>ANGELINA ROSE</h4>
                                <ul className='d-flex rating'>
                                    <li className='minus'><FaStar></FaStar></li>
                                    <li><FaStar></FaStar></li>
                                    <li><FaStar></FaStar></li>
                                    <li><FaStar></FaStar></li>
                                    <li><FaStarHalfAlt></FaStarHalfAlt></li>
                                </ul>
                            </div>
                        </Col>
                        <Col className='col-12 col-md-6 col-lg-4'>
                            <div className='pople_box text-center'>
                                <img src={pop3}></img>
                                <p>Lorem ipsum dolor sit amet consetur adipisicing elit. Ullam vel iusto reicndis nesciunt laborum labsam nisi!</p>
                                <h4>MICHEL BROWN</h4>
                                <ul className='d-flex rating'>
                                    <li className='minus'><FaStar></FaStar></li>
                                    <li><FaStar></FaStar></li>
                                    <li><FaStar></FaStar></li>
                                    <li><FaStar></FaStar></li>
                                    <li><FaStar></FaStar></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
