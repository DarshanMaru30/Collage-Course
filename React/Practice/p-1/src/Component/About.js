import React from 'react'
import './About.css';
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import s1 from '../Image/1.webp'

export default function About(props) {
    return (
        <div>
            <Link to="/">Home</Link>
            <Container>
                <Row className='text-center'>
                    <Col>
                        <h5>CREATIVE COURSE</h5>
                        <h3>OFFER COURSES</h3>
                    </Col>
                </Row>
                <Row className='g-4'>
                    {
                        props.data.map((ele) => {
                            return (
                                <Col className='col-12 col-sm-6 col-md-4'>
                                    <div class="card">
                                        <img src={ele.img} class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h4>{ele.title}</h4>
                                            <p class="card-text">{ele.des}</p>
                                            <div className='d-flex justify-content-between'>
                                                <div>
                                                    <i><FaStarHalfStroke></FaStarHalfStroke></i>                                        
                                                    <i><FaStarHalfStroke></FaStarHalfStroke></i>
                                                    <i><FaStarHalfStroke></FaStarHalfStroke></i>                                        
                                                    <i><FaStarHalfStroke></FaStarHalfStroke></i>                                        
                                                    <i><FaStarHalfStroke></FaStarHalfStroke></i>
                                                </div>
                                                <button>Know More..!</button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                    {/* <Col className='col-12 col-sm-6 col-md-4'>
                        <div class="card">
                            <img src={s1} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h4>Development Courses</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <i><FaStarHalfStroke></FaStarHalfStroke></i>                                        <i><FaStarHalfStroke></FaStarHalfStroke></i>                                        <i><FaStarHalfStroke></FaStarHalfStroke></i>                                        <i><FaStarHalfStroke></FaStarHalfStroke></i>                                        <i><FaStarHalfStroke></FaStarHalfStroke></i>
                                    </div>
                                    <button>Know More..!</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='col-12 col-sm-6 col-md-4'>
                        <div class="card">
                            <img src={s1} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h4>Development Courses</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <i><FaStarHalfStroke></FaStarHalfStroke></i>                                        <i><FaStarHalfStroke></FaStarHalfStroke></i>                                        <i><FaStarHalfStroke></FaStarHalfStroke></i>                                        <i><FaStarHalfStroke></FaStarHalfStroke></i>                                        <i><FaStarHalfStroke></FaStarHalfStroke></i>
                                    </div>
                                    <button>Know More..!</button>
                                </div>
                            </div>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}
