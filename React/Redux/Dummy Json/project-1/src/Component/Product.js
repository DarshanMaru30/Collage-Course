import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Product() {

    let [data, setdata] = useState(null);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setdata(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    },[])

    return (
        data != null && <>
            {
                data.images.map((ele, index) => {
                    return(
                        <div key={index}>
                            <img src={ele} alt="" />
                        </div>
                    )
                })
            }
        </>
    )
}
