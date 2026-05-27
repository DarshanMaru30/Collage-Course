import React from 'react'
import { Row, Col } from 'react-bootstrap';

export default function Why(props) {
    return (
        <div>
            <div className='hello  '>
                <div className='container'>
                    <div className=' choice  space '>
                        <h1>READ OUR DIFFERENCE</h1>
                        <h2>WHY CHOOSE CREATIVE</h2>
                    </div>
                    <Row className='g-3'>
                        {
                            props.wh.map((ele) => {
                                return (
                                    <Col className='bo1 col-lg-4 col-12'>
                                        {/* <div> */}
                                        <img src={ele.wh_img}></img>
                                        <h1>{ele.wh_title}</h1>
                                        <h2>{ele.wh_con}</h2>
                                        {/* </div> */}
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </div>
        </div>
    )
}
