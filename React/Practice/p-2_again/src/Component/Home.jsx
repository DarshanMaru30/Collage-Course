import React from 'react'
import { useState } from 'react'

export default function Home() {

  const [input, setinput] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [data, setdata] = useState([]);
  const [click, setclick] = useState(false);
  const [tmp, settmp] = useState("");

  const handleChange = (e) => {
    setinput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (click) {
      const x = data;
      Object.assign(x[tmp], input);
      setdata([...x]);
      setclick(false);
      setinput({
        name: '',
        email: '',
        password: ''
      }) 
      console.log(data);
    }
    else {
      setdata([...data, input]);
      setinput({
        name: '',
        email: '',
        password: ''
      })
      console.log(data);
    }
  }

  const handleDelete = (i) => {
    const filterdata = data.filter((ele, key) => {
      return (
        key != i
      )
    })
    setdata(filterdata);
  }

  const handleUpdate = (i) => {
    const temp = data[i];
    setinput({
      name: temp.name,
      email: temp.email,
      password: temp.password
    })
    setclick(true);
    settmp(i);
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <table align='center' border={1}>
          <tr>
            <td>Name:</td>
            <td><input type="name" name='name' value={input.name} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td>Email:</td>
            <td><input type="email" name='email' value={input.email} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td>Password:</td>
            <td><input type="password" name='password' value={input.password} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td></td>
            <td><button>{click ? "Update" : "Add"}</button></td>
          </tr>
        </table>
      </form>
      <br />
      <table border={1} align='center'>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Email</td>
          <td>Password</td>
          <td>Delete</td>
          <td>Update</td>
        </tr>
        {
          data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td><button onClick={() => handleDelete(index)} >Delete</button></td>
                <td><button onClick={() => handleUpdate(index)}>Update</button></td>
              </tr>
            )
          })
        }
      </table>

    </>
  )
}
