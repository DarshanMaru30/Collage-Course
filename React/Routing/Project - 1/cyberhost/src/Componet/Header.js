import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { BsEnvelope } from "react-icons/bs";
import { MdPhoneAndroid } from "react-icons/md";
import { FiFacebook, FiTwitter, FiDribbble, FiRss } from "react-icons/fi";
import { TfiGoogle } from "react-icons/tfi";
import log from '../Images/log.png'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <div className='top_info'>
                <Container className='back'>
                    <Row >
                        <Col sm={10} className=''>
                            <div className=''>
                                <i><BsEnvelope></BsEnvelope></i><a href="">info@yourdomain.com</a>
                                <i><MdPhoneAndroid></MdPhoneAndroid></i><a href="">+123 456 789</a>
                            </div>
                        </Col>
                        <Col sm={2} className='asx'>
                            <div className=''>
                                <ul className='d-flex mb-2 ps-0'>
                                    <li className='mer'><a href=""><FiFacebook></FiFacebook></a></li>
                                    <li className='mer'><a href=""><FiTwitter></FiTwitter></a></li>
                                    <li className='mer'><a href=""><TfiGoogle></TfiGoogle></a></li>
                                    <li className='mer'><a href=""><FiDribbble></FiDribbble></a></li>
                                    <li className='mer'><a href=""><FiRss></FiRss></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* Top_info End */}

            {/* Header Start */}
            <Navbar expand="lg" className="bg-body-tertiary p-3 md bmu">
                <Container className='cont w-md-100'>
                    <Navbar.Brand href="#home">
                        <img src={log} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <li class="nav-item">
                                <Link class="nav-link clr"to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link"to="/About">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link"to="/Serve">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link"to="/Domain">Domain</Link>
                            </li>
                            <NavDropdown title="Pages" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Pricing</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">
                                    Register
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">FAQ Pages</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Login
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    404 Not Found
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Blogs" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Blog Grid</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">
                                    Blog sidebar
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Blog Details</NavDropdown.Item>
                            </NavDropdown>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Contact">Contact</Link>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
