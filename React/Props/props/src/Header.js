import React from 'react'
// import ss from './image/logo.svg'
// import ss2 from './image/logo2.svg'
import ll1 from './image/creative-logo-blue.svg' 
const Header = (props) => {
    return (
        <>

            <div className=' menu-bar' >
                <div className=' container ' >
                    <div className='d-flex ' >
                        <div className='logo align-center'>
                            <img src={ll1}></img>
                        </div>
                        <div className='menu d-flex'>
                            <h6>{props.data[0]}</h6>
                            <h6>{props.data[1]}</h6>
                            <h6>{props.data[2]}</h6>
                            <h6>{props.data[3]}</h6>
                            <h6>{props.data[4]}</h6>
                            <h6>{props.data[5]}</h6>
                            <h6>{props.data[6]}</h6>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Header
