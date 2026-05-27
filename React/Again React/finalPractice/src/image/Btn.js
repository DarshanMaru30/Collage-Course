import React from 'react'

export default function (props) {
  return (
    <div>
      <div className='container demand padding'>
        <h2>Our Demanded Course - </h2>
        <div className=''>
        <button>{props.btn[0]}</button>
        <button>{props.btn[1]}</button>
        <button>{props.btn[2]}</button>
        <button>{props.btn[3]}</button>
        <button>{props.btn[4]}</button>
        <button>{props.btn[5]}</button>
        <button>{props.btn[6]}</button>
        <button>{props.btn[7]}</button>
        <button>{props.btn[8]}</button>
        <button>{props.btn[9]}</button>
        <button>{props.btn[10]}</button>
        </div>
        <h1>Show more...</h1>
      </div>
    </div>
  )
}
