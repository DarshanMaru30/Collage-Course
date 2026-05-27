import React, { useState } from 'react'

export default function Home() {

    const [box, setbox] = useState([]);

    const open = () => {
        setbox([...box, { add: [] }])
    }

    const dell = (index) => {
        const ds = [...box];
        ds.splice(index, 1);
        setbox(ds);
    }

    const now = (index) => {
        const hj = [...box];
        hj[index].add.push({});
        setbox(hj);
    }

    const delone = (index,i) => {
        const jh = [...box];
        jh[index].add.splice(i,1);
        setbox(jh)
    }

    return (
        <div>
            <button onClick={() => open()}>Add</button>
            {
                box.map((ele, index) => [
                    <div className='heloo' key={index}>
                        <div className='del'>
                            <button onClick={() => { dell(index) }}>Delete</button>
                            <button onClick={() => { now(index) }}>Add</button>
                        </div>
                        {   
                            ele.add.map((item, i) => {
                                return (
                                    <div className='now'>
                                        <button onClick={()=>{ delone(index,i) }}>del</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                ])
            }
        </div>
    )
}
