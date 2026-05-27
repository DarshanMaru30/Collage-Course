import React from 'react'
import OwlCarousel from 'react-owl-carousel';

const Company = (props) => {
    return (
        <>

            <div className="space-y">
                <div className="container">
                    <div className="heading text-center">
                        <span className='sub_title'>STUDENT PLACEMENT</span>
                        <h2>OUR RECRUITMENT PARTNERS</h2>
                    </div>
                    <OwlCarousel className='owl-theme' loop items={6} margin={10} dots={false}>
                        {
                            props.img.map((ele) => {
                                return (
                                    <div className="box">
                                        <div className="img">
                                            <a href=""><img src={ele.img} alt="" /></a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </OwlCarousel>
                </div>
            </div>

        </>
    )
}

export default Company
