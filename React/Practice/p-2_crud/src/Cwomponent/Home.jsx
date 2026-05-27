import React, { useState } from 'react'

export default function Home() {

    const [input, setinput] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [tabledata, settabledata] = useState([])
    const [click, setclick] = useState(false)
    const [index, setindex] = useState("")

    const handleChange = (e) => {
        setinput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(input);
        if (click != false) {
            const temptable = tabledata;
            Object.assign(temptable[index], input)
            settabledata([...temptable])
            setclick(false)
            setinput({
                name: '',
                email: "",
                password: ""
            })
        }
        else {
            settabledata([...tabledata, input]);
            setinput({
                name: '',
                email: "",
                password: ""
            })
        }
    }
    console.log(tabledata);

    const handleddelete = (index) => {
        const filterdata = tabledata.filter((ele, val) => {
            return (
                val != index
            )
        })
        settabledata(filterdata);
    }

    const handleedit = (index) => {
        const tempdata = tabledata[index]
        setinput({
            name: tempdata.name,
            email: tempdata.email,
            password: tempdata.password
        })
        setclick(true)
        setindex(index)
    }

    return (
        <>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="">Name:-</label>
                        <input type="text" name='name' value={input.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="">Email:-</label>
                        <input type="text" name='email' value={input.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" name='password' value={input.password} onChange={handleChange} />
                    </div>
                    <div>
                        <button type='submit' style={{ cursor: "pointer" }}>{click ? "Update" : "Add"}</button>
                    </div>
                </form>
            </div>
            <table border={1} align='center'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tabledata.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td>
                                        <button onClick={() => handleddelete(i)} >Delete</button>
                                        <button onClick={() => handleedit(i)} >Update</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
