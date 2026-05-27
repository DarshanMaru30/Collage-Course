import React from 'react'
import { Container } from 'react-bootstrap'

export default function Box(props) {
  return (
    <div>
      <Container>
        <div className='text-center mt-5 mb-5'>
            <h3>Creative Course</h3>
            <h1 className='fw-bold'>OFFERED COURSES</h1>

            <div className='d-flex justify-content-around mt-5'>
                {
                    props.data.map((ele) => {
                        return(
                            <>
                              <div className='mainBox  border border-info rounded'>
                                <div className="img">
                                  <img src={ele.url} alt="" />
                                  <div className="list mt-4 p-3">
                                    <h2>{ele.title}</h2>
                                    <p>{ele.button}</p>
                                  </div>
                                </div>
                              </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
      </Container>
    </div>
  )
}
