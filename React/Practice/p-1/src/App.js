import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Service';
import Demo from './Component/Demo';

function App() {

  const box = [
    {
      img : require('./Image/1.webp'),
      title : 'Development Courses',
      des : "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      img : require('./Image/1.webp'),
      title : 'Development Courses',
      des : "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      img : require('./Image/1.webp'),
      title : 'Development Courses',
      des : "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      img : require('./Image/1.webp'),
      title : 'Development Courses',
      des : "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      img : require('./Image/1.webp'),
      title : 'Development Courses',
      des : "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      img : require('./Image/1.webp'),
      title : 'Development Courses',
      des : "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
  ]

  return (
    <>
      {/* <Home/> 
      <Link/>
      <About/>
      <Service/>  */}
      <Demo/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About data={box} /> } />
        <Route path="/Service" element={ <Service/> } />
      </Routes>
    </>
  );
}

export default App;
