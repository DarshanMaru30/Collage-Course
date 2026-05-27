import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import sss1 from './image/ss-1.png'
import { Container } from 'react-bootstrap';

export default function Image_slider(props) {
    return (
        <div>
            <Container>
                <div className='place padding'>
                    <h1>STUDENT PLACEMENT</h1>
                    <h2> OUR RECRUITMENT PARTNERS</h2>
                </div>  
                <OwlCarousel className="owl-theme" loop margin={10} items={7} dots={false}>
                    {
                        props.part.map((ele) => {
                            return (
                                <div className='item'>
                                    <img src={ele.p_url}></img>
                                    {/* <img src={sss1}></img> */}
                                </div>
                            )
                        })
                    }
                </OwlCarousel>
            </Container>
        </div>
    )
}
