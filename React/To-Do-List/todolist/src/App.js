import { useState } from 'react';
import './App.css';

function App() {

  const [input,getinput] = useState('');
  const [add,getadd] = useState([]);
  const [task,settask] = useState("");
  const [a,seta] = useState(false);
  

  function activity(){
    // getadd([...add,input])
    // console.log(add);

    // getadd((add) => {
    //   const update = [...add,input];
    //   console.log(update);
    //   getinput('');
    //   return update; 
    // })

    if(a){
      let v = [...add];
      v[task]=input;
      getadd(v)
      getinput('')
    }
    else {
      getadd([...add,input])
      getinput('');
    }
  }

  let edithandle = (i) => {
    getinput(add[i]);
    settask(i)
    // alert(input)
    seta(true)
  }

  function del(i){
    const updatelist = add.filter((ele, id) => {
      return i != id;
    })
    getadd(updatelist)
  }

  return (
    <>
      <h1>To-Do-List</h1>
      <input type="text" value={input} onChange={(e) => getinput(e.target.value)} /><br /><br />
      <input type="button" value='Add' onClick={activity} /><br /><br />

      <table border={1} align='center'>
        <tr>
          <td>Checkbox</td>
          <td>List</td>
          <td>Delete</td>
          <td>Edit</td>
        </tr>
      {
        add != [] && add.map((data,i) => {
          return(
            <>
              <tr key={i}>
                <td><input type="checkbox" /></td>
                <td className='list'>{data}</td>
                <td><button onClick={() => del(i)}>Delete</button></td>
                <td><button onClick={() => edithandle(i)}>Edit</button></td>
              </tr>
            </>
          )
        })
      }
      </table>
    </>
  );
}

export default App;
