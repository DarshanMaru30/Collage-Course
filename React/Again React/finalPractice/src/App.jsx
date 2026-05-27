import { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Box from './component/Box';

import img1 from './image/1.webp';
import img2 from './image/2.webp';
import img3 from './image/4.webp';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/contact';
import CrudPage from './component/CrudPage';

function App() {
  const [count, setCount] = useState(0);

  const [box1, setbox] = useState([]);

  const one = () => {
    setbox([...box1, { add: [] }]);
  }

  const delOne = (index) => {
    const temp = [...box1];
    temp.splice(index, 1);
    setbox(temp);
  }

  const addOne = (index) => {
    const temp = [...box1];
    temp[index].add.push({});
    setbox(temp);
  }

  const handleDelete = (index, val) => {
    const temp = [...box1];
    temp[index].add.splice(val, 1);
    setbox(temp);
  }

  const box = [
    {
      title: "Devellopment Course",
      button: "Know More...!",
      url: img1
    },
    {
      title: "Devellopment Course",
      button: "Know More...!",
      url: img2
    },
    {
      title: "Devellopment Course",
      button: "Know More...!",
      url: img3
    },
  ]

  const divs = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>

      <Container>
        <div>
          <nav className='d-flex justify-content-around fs-5 mt-3'>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/crud">Crud</Link>
          </nav>
        </div>
      </Container>

      {/* <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/crud' element={<CrudPage/>}></Route>
      </Routes> */}
      
      <Container>
        <Stack direction="horizontal" gap={2} className='mt-5'>
          <Button as="a" variant="primary">
            Button as link
          </Button>
          <Button as="a" variant="success">
            Button as link
          </Button>
        </Stack>
      </Container>

      <Container className='mt-5'>
        <div>
          <div className='square'></div>
        </div>
      </Container>

      <Container>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

      <Box data={box}></Box>

      <button onClick={(() => {one()})} className='m-5'>Add New</button>
        {
          box1.map((item, index) => {
              return(
                <>
                  <div className='w-75 bg-primary m-5 mb-5 d-flex'  style={{height:'500px'}}>
                    <button onClick={(() => {delOne(index)})}>Delete</button>
                    <button onClick={(() => {addOne(index)})}>Add</button>
                    {
                        item.add.map((ele, val) => {
                            return(
                              <div className='w-75 bg-success m-5 mb-5'  style={{height:'100px'}}>
                                  <button onClick={(() => handleDelete(index, val))}>Delete</button>
                              </div>
                            )
                        })
                    }
                  </div>
                </>
              )
          })
        }

      {
        divs.map((ele, i) => {
          return (
            <div
              style={{
                height: '20px',
                width: '20px',
                background: i % 2 != 0 ? 'red' : "green"
              }}
            ></div>
          )
        })
      }

    </>
  )
}

export default App
