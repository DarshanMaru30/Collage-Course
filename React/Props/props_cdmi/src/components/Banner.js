import React from 'react'
import OwlCarousel from 'react-owl-carousel';

const Banner = (props) => {
    return (
        <>

            <OwlCarousel className='owl-theme' loop items={1} nav dots={false}>
                {
                    props.url.map((ele) => {
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

        </>
    )
}

export default Banner
