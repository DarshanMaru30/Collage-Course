import React from 'react'
import se1 from '../Images/se-1.png'
import se2 from '../Images/se-2.png'
import se3 from '../Images/se-4.png'
import se4 from '../Images/se-3.png'
import se5 from '../Images/se-5.png'
import se6 from '../Images/se-6.png'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function service() {
    return (
        <div>
            <section className='services bd-bottom  padding'>
                <Container>
                    <Row>
                        <Col className='col-lg-12'>
                            <div className='ser text-center m-auto service_heading'>
                                <h2>Greate Bundle With Every Plan</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries
                                </p>
                            </div>
                        </Col>
                    </Row>
                    {/* <div className='ser_item_main'> */}
                        <Row>
                            <Col className='col-lg-4 col-md-6 col-12'>
                                <div className='ser_item'>
                                    <div className='box align-center text-center'>
                                        <img src={se1}></img>
                                        <h3>Disk Space & Bandwidth</h3>
                                        <p>Lorem Ipsum is simply dummy business the smart printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col className='col-lg-4 col-md-6 col-12'>
                                <div className='ser_item'>
                                    <div className='box align-center text-center'>
                                        <img src={se2}></img>
                                        <h3>Disk Space & Bandwidth</h3>
                                        <p>Lorem Ipsum is simply dummy business the smart printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col className='col-lg-4 col-md-6 col-12'>
                                <div className='ser_item'>
                                    <div className='box align-center text-center'>
                                        <img src={se3}></img>
                                        <h3>Disk Space & Bandwidth</h3>
                                        <p>Lorem Ipsum is simply dummy business the smart printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </Col>
                        {/* </Row> */}
                        {/* <Row> */}
                            <Col className='col-lg-4 col-md-6 col-12'>
                                <div className='ser_item'>
                                    <div className='box align-center text-center'>
                                        <img src={se4}></img>
                                        <h3>Disk Space & Bandwidth</h3>
                                        <p>Lorem Ipsum is simply dummy business the smart printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col className='col-lg-4 col-md-6 col-12'>
                                <div className='ser_item'>
                                    <div className='box align-center text-center'>
                                        <img src={se5}></img>
                                        <h3>Disk Space & Bandwidth</h3>
                                        <p>Lorem Ipsum is simply dummy business the smart printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col className='col-lg-4 col-md-6 col-12'>
                                <div className='ser_item'>
                                    <div className='box align-center text-center'>
                                        <img src={se6}></img>
                                        <h3>Disk Space & Bandwidth</h3>
                                        <p>Lorem Ipsum is simply dummy business the smart printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </Col>
                    {/* </div> */}
                </Row>
            </Container>
        </section>
        </div >
    )
}
