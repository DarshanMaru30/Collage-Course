import './About.css'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ab from '../Images/ab.png'
import sign from '../Images/sign.png'
import Header from '../Componet/Header';
import Pople from '../Componet/Pople';
import Logo from '../Componet/Logo';
import Foter from '../Componet/Foter';

export default function About() {
    return (
        <div>
            <section className='about'>
                <Container>
                    <Row className='text-center'>
                        <Col>
                            <h2 className='text-uppercase fw-bold'>About CyberHost</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>
                                It has survived not only five centuries.</p>
                            <ol className='d-flex justify-content-center pad text-uppercase fw-bold'>
                                <li><a href='/'>Home</a></li><i>/</i>
                                <li><a href='' className='active'>About Us</a></li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='about_content padding'>
                <Container>
                    <Row>
                        <Col>
                            <div className='con'>
                                <img src={ab} className='m-auto'></img>
                            </div>
                            <h2 className='text-center text-uppercase fw-bold mb-3'>We Are CyberHost</h2>
                            <div className='wi text-center m-auto'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.</p>
                            </div>
                            <div className='wi text-center m-auto'>
                                <p>Essentially unchanged.Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type scrambled it to make a type specimen book.</p>
                            </div>
                            <div className='sign'>
                                <img src={sign} className=''></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Pople/>
            <Logo/>
        </div>
    )
}
