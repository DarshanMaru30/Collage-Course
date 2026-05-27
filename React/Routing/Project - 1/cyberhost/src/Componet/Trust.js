import React from 'react'
import Container from 'react-bootstrap/Container';
import cta from '../Images/cta.png'
import { Row } from 'react-bootstrap';

export default function Trust() {
    return (
        <div>
            <section className='trust padding'>
                <Container>
                    <Row>
                        <div className='trust_contant col-md-6'>
                            <div className='trust_con'>
                                <h2>
                                    95,000 People trust CyberHost!<br></br> Be one of them today.
                                </h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>CyberHost is simply dummy text of the printing and industry. survived not only five more centuries
                                </p>
                                <a href='' className='mt-2'>Explore Now</a>
                            </div>
                        </div>
                        <div className='trust_img col-md-6'>
                            <img src={cta}></img>
                        </div>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
