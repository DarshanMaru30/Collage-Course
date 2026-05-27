import React from 'react'


import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// import i1 from './image/1.webp'
// import i2 from './image/2.webp'
// import i3 from './image/3.jpg'
// import i4 from './image/4.webp'
// import i5 from './image/5.webp'
// import i6 from './image/6.jpg'

const Box = (props) => {
    return (
        <>

            <div className='container'>
                <div className='course space mb-4'>
                    <h3>Creative Course</h3>
                    <h1>OFFERED COURSES</h1>

                    <div className='row1 flex d-flex'>
                        {
                            props.data.map((ele) => {
                                return (
                                    <div className='box'>
                                        <div className='img'>
                                            <img src={ele.url}></img>
                                            <div className='list'>
                                                <h2>{ele.title}</h2><hr></hr>
                                                <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /> <button>{
                                                    ele.button}</button></p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                    <div className='view'><button>View All Course</button></div>
                </div>
            </div>



        </>
    )
}

export default Box;
