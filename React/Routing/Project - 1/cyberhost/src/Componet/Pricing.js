import React from 'react'
import ss from '../Images/ss.png'
import ss1 from '../Images/ss1.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Pricing() {
    return (
        <div>
            <section className='pricing padding'>
                <Container>
                    <Row>
                        <Col>
                            <div className='pricing_head text-center'>
                                <h2>Plans & Pricing</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </Col>
                    </Row>
                    {/* className='justify-content-center' */}
                    <Row className='g-4 text-center'>
                        {/* <div className=''> */}
                        <Col className='col-lg-3 col-md-6 col-12 ' >
                            <div className='pri_box text-start'>
                                <div className='pricing_top '>
                                    <h5 className='text-left'>Basic</h5>
                                    <h3>$49
                                        <span> / Month</span>
                                    </h3>
                                    <p className='mb-10'>CyberHost Pricing Table Design.</p>
                                </div>
                                <ul className='pricing_list'>
                                    <li><i><img src={ss}></img></i>1 User</li>
                                    <li><i><img src={ss}></img></i>1 Dashboard</li>
                                    <li><i><img src={ss}></img></i>5 Projects</li>
                                    <li><i><img src={ss1}></img></i>Custome Domain</li>
                                </ul>
                                <div className='pricing_footer'>
                                    <a href=''>Start Now</a>
                                </div>
                            </div>
                        </Col>
                        <Col className='col-lg-3 col-md-6 col-12' >
                            <div className='pri_box text-start'>
                                <div className='pricing_top'>
                                    <h5>Business</h5>
                                    <h3>$99
                                        <span> / Month</span>
                                    </h3>
                                    <p className='mb-10'>CyberHost Pricing Table Design.</p>
                                </div>
                                <ul className='pricing_list'>
                                    <li><i><img src={ss}></img></i>1 User</li>
                                    <li><i><img src={ss}></img></i>1 Dashboard</li>
                                    <li><i><img src={ss}></img></i>5 Projects</li>
                                    <li><i><img src={ss}></img></i>Custome Domain</li>
                                </ul>
                                <div className='pricing_footer'>
                                    <a href=''>Start Now</a>
                                </div>
                            </div>
                        </Col>
                        <Col className='col-lg-3 col-md-6 col-12'>
                            <div className='pri_box text-start'>
                                <div className='pricing_top'>
                                    <h5>Premium</h5>
                                    <h3>$149
                                        <span> / Month</span>
                                    </h3>
                                    <p className='mb-10'>CyberHost Pricing Table Design.</p>
                                </div>
                                <ul className='pricing_list'>
                                    <li><i><img src={ss}></img></i>1 User</li>
                                    <li><i><img src={ss}></img></i>1 Dashboard</li>
                                    <li><i><img src={ss}></img></i>5 Projects</li>
                                    <li><i><img src={ss}></img></i>Custome Domain</li>
                                </ul>
                                <div className='pricing_footer'>
                                    <a href=''>Start Now</a>
                                </div>
                            </div>
                        </Col>
                        <Col className='col-lg-3 col-md-6 col-12' >
                            <div className='pri_box text-start'>
                                <div className='pricing_top'>
                                    <h5>Ultimate</h5>
                                    <h3>$199
                                        <span> / Month</span>
                                    </h3>
                                    <p className='mb-10'>CyberHost Pricing Table Design.</p>
                                </div>
                                <ul className='pricing_list'>
                                    <li><i><img src={ss}></img></i>1 User</li>
                                    <li><i><img src={ss}></img></i>1 Dashboard</li>
                                    <li><i><img src={ss}></img></i>5 Projects</li>
                                    <li><i><img src={ss}></img></i>Custome Domain</li>
                                </ul>
                                <div className='pricing_footer'>
                                    <a href=''>Start Now</a>
                                </div>
                            </div>
                        </Col>
                        {/* </div> */}
                    </Row>
                </Container>
            </section>
        </div>
    )
}
