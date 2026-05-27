import React from 'react'
import Header from '../Componet/Header';
import Service from '../Componet/Service';
import Logo from '../Componet/Logo';
import Cta from '../Componet/Cta';
import Foter from '../Componet/Foter';
import { Col, Container, Row } from 'react-bootstrap'

export default function Serve() {
    return (
        <div>
            <section className='about'>
                <Container>
                    <Row className='text-center'>
                        <Col>
                            <h2 className='text-uppercase fw-bold'>CyberHost Service</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>
                                It has survived not only five centuries.</p>
                            <ol className='d-flex justify-content-center pad text-uppercase fw-bold'>
                                <li><a href='/'>Home</a></li><i>/</i>
                                <li><a href='' className='active'>Services</a></li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Service />
            <Logo />
            <Cta />
        </div>
    )
}
