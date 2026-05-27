// import React, { useState } from 'react'

// export default function Home() {

//     const [box, setbox] = useState([]);

//     const open = () => {
//         setbox([...box, { add: [] }]);
//     }

//     const deletec = (e) => {
//         const tmp = box.filter((ele, val) => {
//             return val != e;
//         })
//         // tmp.splice(e,1);
//         setbox(tmp);
//     }

//     const add = (e) => {
//         const tmp = [...box];
//         tmp[e].add.push({});
//         setbox(tmp);
//     }

//     const one = (i,e) => {
//         const tmp = [...box];
//         tmp[i].add.splice(e,1);
//         setbox(tmp);
//     }

//     console.log(box);

//     return (
//         <div>
//             <button onClick={open} style={{ cursor: 'pointer' }}>Add</button>
//             {
//                 box.map((item, index) => {
//                     return (
//                         <div className='paddi' key={index}>
//                             <h2><button onClick={() => { deletec(index) }} style={{ cursor: 'pointer' }}>Delete</button></h2>
//                             <h2><button onClick={() => { add(index) }} style={{ cursor: 'pointer' }}>Add</button></h2>

//                             {
//                                 item.add.map((a, i) => {
//                                     return (
//                                         <div>
//                                             <div className='inner'>
//                                                 <button onClick={() => { one(index , i) }} style={{cursor:'pointer'}}>delete</button>
//                                             </div>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                     )
//                 })
//             }
//         </div >
//     )
// }

import React from 'react'
import { useState } from 'react'

export default function Home() {

    const [box,setbox] = useState([]);

    const open = () => {
        setbox([...box,{ new:[] }]);
    }

    const deletebox = (i) => {
        const filterdata = box.filter((ele,key) => {
            return(
                key != i
            )
        })
        setbox(filterdata);
    }

    const addbox = (i) => {
        const add = [...box];
        add[i].new.push({});
        setbox(add);
    }

    const del = (i,key) => {
        const add = [...box];
        add[i].new.splice(key, 1);
        setbox(add);
    }

  return (
    <div>
        <button style={{ cursor:'pointer' }} onClick={open}>Add</button>
        {
            box.map((item,index) => {
                return(
                    <div className='paddi'>
                        <button style={{ cursor:'pointer' }} onClick={() => deletebox(index)} >Delete</button>
                        <button style={{ cursor:'pointer' }} onClick={() => addbox(index)} >Add</button>
                        {
                            item.new.map((ele,key) => {
                                return(
                                    <div className="inner">
                                        <button onClick={() => { del(index,key) }} >Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })
        }
    </div>
  )
}
