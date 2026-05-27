import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import log1 from '../Images/logo-light.png';

export default function Foter() {
    return (
        <div>
            <section className='footer bg-dark padding bd-bottom'>
                <Container>
                    <Row>
                        <Col className='col-6'>
                            <img src={log1}></img>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing <br></br>and typesetting industry. Lorem Ipsum has been the industry <br></br> standard dummy text ever since the 1500s.
                            </p>
                        </Col>
                        <Col className='col-sm-3 col-md-2 col-12'>
                            <div className='footer1'>
                                <h3>Company</h3>
                                <ul className='p-0'>
                                    <li>About Us</li>
                                    <li>Pakage</li>
                                    <li>Services</li>
                                </ul>
                            </div>
                        </Col>
                        <Col className='col-sm-3 col-md-2 col-12'>
                            <div className='footer1'>
                                <h3>Useful Links</h3>
                                <ul className='p-0'>
                                    <li>Control Panel</li>
                                    <li>My Plans</li>
                                    <li>Quick Order</li>
                                </ul>
                            </div>
                        </Col>
                        <Col className='col-sm-3 col-md-2 col-12'>
                            <div className='footer1'>
                                <h3>Follow Us</h3>
                                <ul className='p-0'>
                                    <li>Facebook</li>
                                    <li>Twitter</li>
                                    <li>Instagram</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Footer End */}

            <section className='end'>
                <Container>
                    <Row>
                        <Col className='col-6'>
                            <p>© 2018 CYBERHOST POWERED BY ICONICTHEMES.</p>
                        </Col>
                        <Col col-2>
                            <p>TERMS OF SERVICE</p>
                        </Col>
                        <Col col-2>
                            <p>PRIVACY POLICY</p>
                        </Col>
                        <Col col-2>
                            <p>SITE MAP</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
