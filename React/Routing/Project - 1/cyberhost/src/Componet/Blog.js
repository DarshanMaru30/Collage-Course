import React from 'react'
import b1 from '../Images/blog-1.jpg'
import b2 from '../Images/blog-2.jpg'
import b3 from '../Images/blog-3.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Blog() {
    return (
        <div>
            <section className='blog padding bd-bottom'>
                <Container>
                    <Row>
                        <div className='blog_head text-center'>
                            <h2>LATEST BLOG POSTS</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </Row>
                    <Row className='g-3'>
                        <Col className='col-12 col-md-6 col-lg-4'>
                        <div className='blog_box p-0 me-3'>
                            <img src={b1} className='w-100'></img>
                            <div className='blog_con w-100'>
                                <h3><a href=''>New Web Design Trends</a></h3>
                                <span>Jhon Doe 10 December</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing nulla illum aliquid assumenda.</p>
                                <a href=''>LEARN MORE</a>
                            </div>
                        </div>
                        </Col>
                        <Col className='col-12 col-md-6 col-lg-4'>
                        <div className='blog_box p-0 me-3'>
                            <img src={b2} className='w-100'></img>
                            <div className='blog_con w-100'>
                                <h3><a href=''>New Web Design Trends</a></h3>
                                <span>Jhon Doe 10 December</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing nulla illum aliquid assumenda.</p>
                                <a href=''>LEARN MORE</a>
                            </div>
                        </div>
                        </Col>
                        <Col className='col-12 col-md-6 col-lg-4'>
                        <div className='blog_box p-0 me-3'>
                            <img src={b3} className='w-100'></img>
                            <div className='blog_con w-100'>
                                <h3><a href=''>New Web Design Trends</a></h3>
                                <span>Jhon Doe 10 December</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing nulla illum aliquid assumenda.</p>
                                <a href=''>LEARN MORE</a>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
