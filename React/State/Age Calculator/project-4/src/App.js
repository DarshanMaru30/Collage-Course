import './App.css';
import {useState} from 'react';

function App() {

  let [date,setdate] = useState('');
  let [date1,setdate1] = useState('');
  let [todate,settodate] = useState('');
  let [mili,setmili] = useState('')
  let [sec,setsec] = useState('')
  let [min,setmin] = useState('')
  let [hour,sethour] = useState('')
  let [days,setdays] = useState('')
  let [week,setweek] = useState('')
  let [year,setyear] = useState('')
  let [month,setmonth] = useState('')
  let [month1,setmonth1] = useState('')
  let [day,setday] = useState('')
  let [day1,setday1] = useState('')

  const cal = () => {
    setdate1(new Date(date));
    console.log(date1);
    settodate(new Date());
    console.log(todate);
    setmili(todate - date1);
    console.log(mili);
    setyear(Math.floor(mili/(365*24*60*60*1000)));
    setmonth1(Math.floor(mili%(365*24*60*60*1000)));
    setmonth(Math.floor(month1/(30*24*60*60*1000)));
    setday1(Math.floor(month1%(30*24*60*60*1000)));
    setday(Math.floor(day1/(24*60*60*1000)));

    setsec(Math.floor(mili/1000));
    setmin(Math.floor(sec/60));
    sethour(Math.floor(min/60));
    setdays(Math.floor(hour/24));
    setweek(Math.floor(days/7));
  }

  return (
    <>
    {/* <p>{val1}</p> */}
    {/* <p>{val2}</p> */}
      <div className="cover">
        <h2>AGE CALCULATOR</h2>
        <div className="calculator">
          <div className="box"><p>DOB </p><input type="date" onChange={(e) => setdate(e.target.value)} id="date1" min="2000-01-01" max="2005-12-31" /></div>
          <button onClick={cal}>CLICK TO GET AGE</button>
        </div>
      </div>
      <h3>MiliSecond :- <input readOnly type="text" placeholder='Miliseconds' value={mili}/></h3>
      <h3>Second :- <input readOnly type="text" placeholder='Seconds' value={sec} /></h3>
      <h3>Minutes :- <input readOnly type="text" placeholder='Minutes' value={min} /></h3>
      <h3>Hours :- <input readOnly type="text" placeholder='Minutes' value={hour} /></h3>
      <h3>Days :- <input readOnly type="text" placeholder='Minutes' value={days} /></h3>
      <h3>Weeks :- <input readOnly type="text" placeholder='Minutes' value={week} /></h3>
      <h3>Years :- <input readOnly type="text" placeholder='Minutes' value={year} /></h3>
      <h3>Months :- <input readOnly type="text" placeholder='Minutes' value={month} /></h3>
      <h3>Day :- <input readOnly type="text" placeholder='Minutes' value={day} /></h3>
    </>
  );
}

export default App;
