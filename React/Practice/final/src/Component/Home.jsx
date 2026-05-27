import React, { useState } from 'react'

export default function Home() {

    const [box, setbox] = useState([]);

    const one = () => {
        setbox([...box, { add: [] } ]);
    }

    const deleteOne = (index) => {
        const temp = [...box];
        temp.splice(index, 1);
        setbox(temp);
    }

    const addOne = (index) => {
        const temp = [...box];
        temp[index].add.push({});
        setbox(temp);
    }

    const handleDelete = (index, val) => {
        const temp = [...box];
        temp[index].add.splice(val, 1);
        setbox(temp); 
    }

    return (
        <div>
            <button onClick={() => {one()}} style={{ cursor: 'pointer' }}>Add New Box</button><br />
            {
                box.map((item, index) => {
                    return (
                        <div className='color' key={index}>
                            <button onClick={() => deleteOne(index)}>Delete</button>
                            <button onClick={() => addOne(index)}>Add</button>
                            {
                                item.add.map((ele, val) => {
                                    return(
                                        <div className='another' key={val}>
                                            <button onClick={() => handleDelete(index, val)}>Delete</button>
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
