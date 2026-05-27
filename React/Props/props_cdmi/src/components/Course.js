import React from 'react'

import {FaStar, FaStarHalfAlt } from "react-icons/fa";

const Course = (props) => {
    return (
        <>

            <div className="space-y">
                <div className="container">
                    <div className="heading text-center">
                        <span className='sub_title'>CREATIVE COURSE</span>
                        <h2>OFFERED COURSES</h2>
                    </div>
                    <div className="row d-flex">
                        {
                            props.course.map((ele, ind) => {
                                return (

                                    <div className="box1" key={ind}>
                                        <div className="img">
                                            <img src={ele.url} />
                                        </div>
                                        <div className="content">
                                            <h4 className='title'><a href="">{ele.title}</a></h4>
                                        </div>
                                        <div className="bottom">
                                            <div>
                                                <FaStar className='star' />
                                                <FaStar className='star' />
                                                <FaStar className='star' />
                                                <FaStar className='star' />
                                                <FaStarHalfAlt className='star' />
                                            </div>
                                            <div className="btn">
                                                <a href="">{ele.button}</a>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                    <div className="row1">
                        <div className="button">View All Courses</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Course
