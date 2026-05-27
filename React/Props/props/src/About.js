import React from 'react'

export default function About(props) {
    return (
        <div>
            <div className=''>
                <div className='about d-flex'>
                    <div className='a-one'>
                        <h1>{props.ab.ab_title}</h1>
                        <h2>{props.ab.ab_con}</h2>
                        <h3>{props.ab.ab_content}</h3>
                        <h4><button>{props.ab.ab_btn}</button></h4>
                    </div>

                    <div className='a-two'>
                        <img src={props.ab.ab_img}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
