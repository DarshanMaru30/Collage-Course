import React from 'react'

const Demanded = (props) => {
  return (
    <>

<div className="space-y">
                <div className="container">
                    <div className="widget">
                        <h5>Our Demanded Course -</h5>
                    </div>
                    <div className="tag ">
                        {
                            props.list.map((ele) => {
                                return(
                                    <a href="">{ele}</a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
      
    </>
  )
}

export default Demanded
