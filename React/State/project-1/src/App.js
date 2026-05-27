import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let [val,setval] = useState();
  let [val2,setval2] = useState();
  let [val3,setval3] = useState();

  const sum = () => {
    setval3(parseInt(val) + parseInt(val2));
  }
  const sub = () => {
    setval3(parseInt(val) - parseInt(val2));
  }
  const mul = () => {
    setval3(parseInt(val) * parseInt(val2));
  }
  const div = () => {
    setval3(parseInt(val) / parseInt(val2));
  }

  return (
    <>
    <br />
      Value 1 :- <input type="text" onChange={(e) => setval(e.target.value)} /><br /><br />
      Value 2 :- <input type="text" onChange={(e) => setval2(e.target.value)} /><br /><br />
      Answer :- <input type="text" value={val3} />
      <br /><br />
      <input type="button" value='Sum' className="mr" onClick={sum} />
      <input type="button" value='Sub' className="mr" onClick={sub}/>
      <input type="button" value='Mul' className="mr" onClick={mul} />
      <input type="button" value='Div' className="mr" onClick={div} />
    </>
  );
}

export default App;
