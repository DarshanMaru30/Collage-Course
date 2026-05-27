import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validate = Yup.object({
  fname: Yup.string().min(3,"First Name is Too Short..!").max(10).required('First Name is required...!'),  
  lname: Yup.string().min(3,"Last Name is Too Short..!").max(10).required('Last Name is required...!'),  
  fathername: Yup.string().min(3,"First Name is Too Short..!").max(10).required('First Name is required...!'),  
  lastname: Yup.string().min(3,"Last Name is Too Short..!").max(10).required('Last Name is required...!'), 
  email: Yup.string().email().required('Email is required...!'), 
  password: Yup.string().min(3,"Password is Too Short..!").max(10).required('Password is required...!'), 
  cpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords do not match...!').required('Confirm Password is required...!'),
  phone: Yup.number().typeError("That doesn't look like a phone number...!").min(10,'Phone number must be at list 10 number...!').required('Phone is required...!'),
  birthdate: Yup.date().required('Birthdate is required...!'),
  gender: Yup.string().required('Gender is required...!'),
  hobby: Yup.array().min(1).required('Hobby is required...!'),
  course: Yup.string().required('Course is required...!'),
  state: Yup.string().min(1).required('State is required...!'),
  city: Yup.string().min(1).required('City is required...!'),
  zipcode: Yup.number().typeError("That doesn't like Zipcode...!").required('Zipcode is required...!'),
})

function App() {

  const init = {
    fname: '',
    lname: '',
    fathername: '',
    lastname: '',
    email: '',
    password: '',
    cpassword: '',
    phone: '',
    birthdate: '',
    gender: '',
    hobby: [],
    course: '',
    state: '',
    city: '',
    zipcode: '',
  }

  const {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
    initialValues: init,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validate
  })

  // console.log(values);

  return (
    <div className="App">
      <Container className='cool'>
        <h1 className='text-center pb-3 text-uppercase'>Student Registration Form</h1>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Name</label>
            <input type="name" className="form-control design" name='fname' value={values.fname} onBlur={handleBlur} onChange={handleChange} placeholder='First Name' id="inputEmail4" />
            {errors.fname && touched.fname ? <span className="text-danger">{errors.fname}</span> : <></>}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label"></label>
            <input type="name" className="form-control design mt-2" name='lname' value={values.lname} onBlur={handleBlur} onChange={handleChange} placeholder='Last Name' id="inputEmail4" />
            {errors.lname && touched.lname ? <span className="text-danger">{errors.lname}</span> : <></>}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Father's Name</label>
            <input type="name" className="form-control design" name='fathername' value={values.fathername} onBlur={handleBlur} onChange={handleChange} placeholder='First Name' id="inputEmail4" />
            {errors.fathername && touched.fathername ? <span className="text-danger">{errors.fathername}</span> : <></>}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label"></label>
            <input type="name" className="form-control design mt-2" name='lastname' value={values.lastname} onBlur={handleBlur} onChange={handleChange} placeholder='Last Name' id="inputEmail4" />
            {errors.lastname && touched.lastname ? <span className="text-danger">{errors.lastname}</span> : <></>}
          </div>
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control design" name='email' value={values.email} onBlur={handleBlur} onChange={handleChange} placeholder='Enter Email' id="inputEmail4" />
            {errors.email && touched.email ? <span className="text-danger">{errors.email}</span> : <></>}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Password</label>
            <input type="password" className="form-control design" name='password' value={values.password} onBlur={handleBlur} onChange={handleChange} placeholder='Enter Password' id="inputEmail4" />
            {errors.password && touched.password? <span className="text-danger">{errors.password}</span> : <></>}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Confirm Password</label>
            <input type="password" className="form-control design" name='cpassword' value={values.cpassword} onBlur={handleBlur} onChange={handleChange} placeholder='Enter Confirm Password' id="inputEmail4" />
            {errors.cpassword && touched.cpassword ? <span className="text-danger">{errors.cpassword}</span> : null}
          </div>
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">Phone</label>
            <input type="text" className="form-control design" name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} placeholder='Enter Phone Number' id="inputEmail4" />
            {errors.phone && touched.phone ? <span className="text-danger">{errors.phone}</span> : null}
          </div>
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">Date Of Birth</label>
            <input type="date" className="form-control design" name='birthdate' value={values.birthdate} onBlur={handleBlur} onChange={handleChange} id="inputEmail4" />
            {errors.birthdate && touched.birthdate ? <span className="text-danger">{errors.birthdate}</span> : null}
          </div>
          <div className="col-md-12">
            <div>
              <label htmlFor="inputState" className="form-label">Gender</label><br />
              <input className="form-check-input design me-1" name="gender" value={'Male'} onChange={handleChange} onBlur={handleBlur} type="radio" id="flexRadioDefault1" />
              <label className="form-check-label me-4" htmlFor="flexRadioDefault1">
                Male
              </label>
              <input className="form-check-input design me-1" name="gender" value={'Female'} onChange={handleChange} onBlur={handleBlur} type="radio" id="flexRadioDefault2" />
              <label className="form-check-label me-4" htmlFor="flexRadioDefault2">
                Female
              </label>
              <input className="form-check-input design me-1" name="gender" value={'Other'} onChange={handleChange} onBlur={handleBlur} type="radio" id="flexRadioDefault2" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Other
              </label>
            </div>
            {errors.gender && touched.gender ? <span className='text-danger'>{errors.gender}</span> : <></>}
          </div>
          <div className="col-md-12">
            <label htmlFor="inputState" className="form-label">Hobby</label><br />
            <input className="form-check-input design me-1" name='hobby' value={'Cricket'} onChange={handleChange} onBlur={handleBlur} type="checkbox" id="gridCheck" />
            <label className="form-check-label me-4" htmlFor="gridCheck">
              Cricket
            </label>
            <input className="form-check-input design me-1" name='hobby' value={'Kabadi'} onChange={handleChange} onBlur={handleBlur} type="checkbox" id="gridCheck" />
            <label className="form-check-label me-4" htmlFor="gridCheck">
              Kabadi
            </label>
            <input className="form-check-input design me-1" name='hobby' value={'KhoKho'} onChange={handleChange} onBlur={handleBlur} type="checkbox" id="gridCheck" />
            <label className="form-check-label me-4" htmlFor="gridCheck">
              KhoKho
            </label>
            <input className="form-check-input design me-1" name='hobby' value={'Chess'} onChange={handleChange} onBlur={handleBlur} type="checkbox" id="gridCheck" />
            <label className="form-check-label me-4" htmlFor="gridCheck">
              Chess
            </label><br />
            {errors.hobby && touched.hobby ? <span className='text-danger'>{errors.hobby}</span> : <></>}
          </div>
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">Course</label>
            <input type="text" className="form-control design" name='course' value={values.course} onBlur={handleBlur} onChange={handleChange} placeholder='Enter Course' id="inputEmail4" />
            {errors.course && touched.course ? <span className='text-danger'>{errors.course}</span> : null}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">State</label>
            <select id="inputState" name='state' onChange={handleChange} onBlur={handleBlur} className="form-select design">
              <option selected disabled value={''} >--Select State--</option>
              <option value={'Gujrat'}>Gujrat</option>
              <option value={'Delhi'}>Delhi</option>
              <option value={'Panjab'}>Panjab</option>
              <option value={'Keral'}>Keral</option>
              <option value={'U.P.'}>U.P.</option>
            </select>
            {errors.state && touched.state ? <span className='text-danger'>{errors.state}</span> : <></>}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">City</label>
            <select id="inputState" name='city' onChange={handleChange} onBlur={handleBlur} className="form-select design">
              <option selected disabled value={''} >--Select City--</option>
              <option value={'Surat'}>Surat</option>
              <option value={'Vadodra'}>Vadodra</option>
              <option value={'Rajkot'}>Rajkot</option>
              <option value={'Baroda'}>Baroda</option>
            </select>
            {errors.city && touched.city ? <span className='text-danger'>{errors.city}</span> : <></>}
          </div>
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">Pincode</label>
            <input type="pincode" className="form-control design" name='zipcode' value={values.zipcode} onChange={handleChange} onBlur={handleBlur} placeholder='Enter Pincode' id="inputEmail4" />
            {errors.zipcode && touched.zipcode ? <span className='text-danger'>{errors.zipcode}</span> : <></>}
          </div>
          <div className="col-12 text-center mt-5">
            <button type="submit" className="btn">Submit</button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default App;
