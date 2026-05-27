import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import f1 from "../Image/flipkart.png";
import './Head.css';
import { IoMdCart } from "react-icons/io";

export default function Head() {
    return (
        <div>
            <Navbar expand="lg" className="color">
                <Container>
                    <Navbar.Brand href="#"><img src={f1} width={"200px"} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="out">Login</Button>
                        </Form>
                        <span><i><IoMdCart></IoMdCart></i>Cart</span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
