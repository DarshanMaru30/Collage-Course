import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>   
      <h1>Hello This is Home Page</h1>
      <Link to="about">Click to view our about page</Link><br /><br />
      <Link to="service">Click to view our contact page</Link>
    </div>
  )
}
