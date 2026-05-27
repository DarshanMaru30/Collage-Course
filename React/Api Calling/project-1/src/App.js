import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import About from './Component/About';
import Home from './Component/Home';
import Service from './Component/Service';
import { Routes, Route } from "react-router-dom"

function App() {

  return(
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="service" element={ <Service/> } />
      </Routes>
    </>
  )
  // let[data, setdata] = useState([]);

  // useEffect(() => {
  //   axios.get('https://rickandmortyapi.com/api/character')
  //     .then(function (response) {
  //       console.log(response.data.results);
  //       setdata(response.data.results);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // }, [])

  // return (
  //   <>
  //     {
  //       data.map((item, index) => {
  //         return(
  //           <div>
  //             <h2>{item.name}</h2>
  //             <h2>{item.status}</h2>
  //           </div>
  //         )
  //       })
  //     }
  //   </>
  // );
}

export default App;
