import { useState } from 'react';
import './App.css';

function App() {

  const [add,setadd] = useState();
  const [val,setval] = useState([]);
  const [num,setnum] = useState(0);
  const [temp,settemp] = useState('ok');

  const change = (z) => {
    if(z === 'ok'){
      let tmp1 = {
        id : num,
        value : add
      }
      let set = [...val,tmp1];
      setval(set);
      setnum(num + 1);
      setadd('');
    }
    else{
      let r = [...val];
      for(let i = 0; i < val.length; i++){
        if(r[i].id === z){
          r[i].value = add;
          setval(r);
          settemp('ok');
        }
      }
      if(temp !== 'ok'){
        settemp('ok');
      }
    }
  }
  const re = (z) => {
    let temarr = val.filter((te) => {
      return te.id != z;
    })
    setval(temarr);
  }
  const ch = (x) => {
    for(let i = 0; i < val.length; i++){
      if(val[i].id === x){
        setadd(val[i].value);
        settemp(val[i].id);
      }
    }
  }
  const sli = (z) => {
    let chek = document.getElementById('chek' + z);
    if(chek.checked === true){
      document.getElementById('text' + z).style.textDecoration = 'line-through';
    }
    else{
      document.getElementById('text' + z).style.textDecoration = 'none';
    }
  }

  return (
    <>
      <h1>To-Do-List</h1>
      <input type="text" value={add} onChange={(e) => {setadd(e.target.value)}} /> <br /><br />
      <input type="button" onClick={(e) => {change(temp)}} value='Click Here..' /> <br /><br />
      <table>
        <tbody>
          <tr>
            <td className='c1'>Check</td>
            <td className='c2'>List</td>
            <td className='c3'>Delete</td>
            <td className='c4'>Edit</td>
          </tr>
          {
            val.map((e, ind) => {
              return(
                <tr key={ind}>
                  <td><input type="checkbox" name='' id={'chek' + e.id} onChange={(r) =>{ sli(e.id) }} /></td>
                  <td><div id={'text' + e.id}>{e.value}</div></td>
                  <td><input type="button" value='Delete' id={'de' + e.id} onClick={(z) =>{ re(e.id) }} /></td>
                  <td><input type="button" value='Edit' id={'ed' + e.id} onClick={(y) =>{ ch(e.id) }} /></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
