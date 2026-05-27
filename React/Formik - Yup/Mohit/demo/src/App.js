import logo from './logo.svg';
import './App.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validate = Yup.object({
  name: Yup.string().min(2, 'too short..').max(20).required('name must be valid..'),
  email: Yup.string().email().required('email must be valid..'),
  password: Yup.string().min(6).required('password must be entered'),
  cpassword: Yup.string().oneOf([Yup.ref('password'), null]).required('confirm password..'),
  city: Yup.string().required('select city...'),
  gender: Yup.string().required('select gender..'),
  hobby: Yup.array().min(1).required('least one require..'),
  birthDate: Yup.date().required('birth date is re.....'),
})

function App() {
  const init = {
    name: '',
    email: '',
    password: '',
    cpassword: '',
    city: '',
    gender: '',
    hobby: [],
    birthDate: ''
  }
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: init,
    validationSchema: validate,
    // onSubmit: (values) => {
    //   console.log(values);
    // }
  })
  // console.log(formik);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>

        name :-<input type='text' name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}></input>
        {errors.name && touched.name ? <span>{errors.name}</span> : <></>}<br></br>

        email :- :-<input type='text' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur}></input><br></br>
        {errors.email && touched.email ? <span>{errors.email}</span> : <></>}<br></br>

        password :-<input type='text' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur}></input><br></br>
        {errors.password && touched.password ? <span>{errors.password}</span> : <></>}<br></br>

        correct password :-<input type='text' name='cpassword' value={values.cpassword} onChange={handleChange} onBlur={handleBlur}></input><br></br>
        {errors.cpassword && touched.cpassword ? <span>{errors.cpassword}</span> : <></>}<br></br>

        <select value={values.city} name='city' onChange={handleChange} onBlur={handleBlur}>
          <option selected value=''>city..</option>
          <option value='surat'>surat</option>
          <option value='vadodra'>vadodra</option>
        </select><br></br>
        {errors.city && touched.city ? <span>{errors.city}</span> : <></>}<br></br>


        Gender:-<input type='radio' name='gender' value='male' onChange={handleChange} onBlur={handleBlur}></input>male
        <input type='radio' name='gender' value='female' onChange={handleChange} onBlur={handleBlur}></input>female<br></br>
        {errors.gender && touched.gender ? <span>{errors.gender}</span> : <></>}<br></br>

        Hobby:-<input type='checkbox' name='hobby' value='a' onChange={handleChange} onBlur={handleBlur}></input>a
        <input type='checkbox' name='hobby' value='b' onChange={handleChange} onBlur={handleBlur}></input>b
        <input type='checkbox' name='hobby' value='c' onChange={handleChange} onBlur={handleBlur}></input>c
        <input type='checkbox' name='hobby' value='d' onChange={handleChange} onBlur={handleBlur}></input>d<br></br>

        {errors.hobby && touched.hobby ? <span>{errors.hobby}</span> : <></>}<br></br>
        enter birthdate :- <input type='date'  name='birthDate' onChange={handleChange} onBlur={handleBlur} value={values.birthDate} ></input>


        {errors.birthDate && touched.birthDate ? <span>{errors.birthDate}</span> : <></>}<br></br>

        <input type='submit'></input>
      </form>

    </div>
  );
}

export default App;
