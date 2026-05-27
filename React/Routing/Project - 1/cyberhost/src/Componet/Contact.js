import React from 'react'
import Logo from '../Componet/Logo';
import Cta from '../Componet/Cta';
import { Col, Container, Row } from 'react-bootstrap'
import './Contact.css'

export default function Contact() {
    return (
        <div>
            <section className='about'>
                <Container>
                    <Row className='text-center'>
                        <Col>
                            <h2 className='text-uppercase fw-bold'>Contact With Us</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>
                                It has survived not only five centuries.</p>
                            <ol className='d-flex justify-content-center pad text-uppercase fw-bold'>
                                <li><a href='/'>Home</a></li><i>/</i>
                                <li><a href='' className='active'>Contact</a></li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='contact_sec padding bd-bottom'>
                <Container>
                    <Row>
                        <div className='col-sm-6'>
                            <div className='contact_info'>
                                <h2 className='text-uppercase fs-4 lh-base fw-bold'>Contact Information</h2>
                                <p className='lh-lg'>
                                    <span>Call : </span>
                                    ++88 023 524 0251
                                    <br></br>
                                    <span>Email : </span>
                                    Hangout@yourmail.com
                                    <br></br>
                                    <span>Address : </span>
                                    692 Eagle Lane Duluth, Australia.
                                </p>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='contact_form'>
                                <h2>Send Us Message</h2>
                                <p>Please don't hesitate to chat with me just drop a line.</p>
                                <form method='post'>
                                    <div className='form_group'>
                                        <div className="row">
                                            <div className='col-sm-6 col-xs-12'>
                                                <input type='text' className='form_con' placeholder='Name'></input>
                                            </div>
                                            <div className='col-sm-6 col-xs-12'>
                                                <input type='text' className='form_con' placeholder='Email' style={{ width: '100%' }}></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='form_group'>
                                        <div className='col-xs-12'>
                                            <textarea cols="30" rows="3" style={{ height: '100%', width: '100%' }} placeholder='Message' className='form_con' required></textarea>
                                        </div>
                                    </div>
                                    <div className='form_group col-xs-12'>
                                        <button className='host text-uppercase'>Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
            <Logo />
            <Cta />
        </div>
    )
}
