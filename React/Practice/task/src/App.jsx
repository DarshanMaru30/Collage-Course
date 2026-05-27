import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const arr = [5, 14, 12, 11, 10, 9, 8, 7, 98, 86]

  const data = arr.filter((value) =>
    value > 10
  )

  return (
    <>
      {
        data.map((item, index) => {
          return(
            <h1 key={index}>{item}</h1>
          )
        })
      }
    </>
  )
}

export default App

// import React from 'react'

// export default function App() {
//   const divs = [1, 2, 3, 4, 5, 6];

//   return (
//     <div>
//       {divs.map((num, index) => (
//         <div
//           key={index}
//           style={{
//             height: '20px',
//             width: '20px',
//             border: '1px solid black',
//             backgroundColor: index % 2 !== 0 ? 'white' : 'red'
//           }}
//         ></div>
//       ))}
//     </div>
//   );
// }
