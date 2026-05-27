import React from 'react'
import w1 from '../Images/w-1.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Why() {
    return (
        <div>
            <section className='why padding'>
                <Container>
                    <Row>
                        <Col className='col-md-6 col-12'>
                            <div>
                                <div className='why_con'>
                                    <h2>Why Choose CyberHost?</h2>
                                    <h3>We offer a full range of digital marketing services!</h3>
                                    <ul className='why_list'>
                                        <li><i><img src={w1}></img></i>How do I transfer my Web pages to your server?</li>
                                        <li><i><img src={w1}></img></i>What kind of Web Hosting do I need?</li>
                                        <li><i><img src={w1}></img></i>How does Web Hosting work?</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col className='col-md-6 col-12'>
                            <div>
                                <div className='why_con'>
                                    <h2>How Is Works?</h2>
                                    <h3>WE OFFER A FULL RANGE OF DIGITAL MARKETING SERVICES!</h3>
                                    <ul className='why_list'>
                                        <li><i><img src={w1}></img></i>How do I transfer my Web pages to your server?</li>
                                        <li><i><img src={w1}></img></i>What kind of Web Hosting do I need?</li>
                                        <li><i><img src={w1}></img></i>How does Web Hosting work?</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
