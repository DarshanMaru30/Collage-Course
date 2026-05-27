import React from 'react'


const Choose = (props) => {
    return (
        <>

            <div className="read space-y">
                <div className="container">
                    <div className="heading text-center">
                        <span className="sub_title">READ OUR DIFFERNCE</span>
                        <h2>WHY CHOOSE CREATIVE</h2>    
                    </div>
                    <div className="row d-flex">
                        {
                            props.choose.map((ele) => {
                                return (
                                    <div className="box2">
                                        <div className="img">
                                            <img src={ele.img} style={{ backgroundColor: "#F6475F" }} alt="" />
                                        </div>
                                        <div className="desc">
                                            <h5>{ele.title}</h5>
                                            <p>{ele.desc}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>

        </>
    )
}

export default Choose
