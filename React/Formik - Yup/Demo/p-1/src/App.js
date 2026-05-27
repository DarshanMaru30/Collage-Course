import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validate = Yup.object({
  name: Yup.string().min(3,'Name is too Short...!').max(10).required('Name must be required...!'),
  email: Yup.string().email('Email is not valid...!').required('Email must be required...!'),
  password: Yup.string().min(6,'Password is too Short...!').max(10).required('Password must be required...!'),
  cpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Confirm Password must be match...!').required('Confirm Password must be required...!'),
  city: Yup.string().min(1).required('Select Your City...!'),
  gender: Yup.string().required('Select Your Gender...!'),
  hobby: Yup.array().min(1).required('Select Your Hobby...!'),
})

function App() {

  const {values, handleBlur, handleChange, handleSubmit, errors, touched} =  useFormik({
      initialValues: {
        name: '',
        email: '',
        password: '',
        cpassword: '',
        city: '',
        gender: '',
        hobby: [],
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: validate,
})

  return (
    <div className="App">
      <h1 className="text-center">Demo Form</h1>
      <Container>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">Name</label>
            <input type="name" className="form-control" name='name' value={values.name} onBlur={handleBlur} onChange={handleChange}  placeholder='Enter Name' id="inputEmail4" />
            {errors.name && touched.name ? <span className="text-danger">{errors.name}</span> : <></>}
          </div>
          <div className="col-md-12">
            <label htmlFor="inputPassword4" className="form-label">Email</label>
            <input type="email" className="form-control" name='email' value={values.email} onBlur={handleBlur} onChange={handleChange} id="inputPassword4" placeholder='Enter Email' />
            {errors.email && touched.email ? <span className="text-danger">{errors.email}</span> : <></>}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputAddress" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={values.password} onBlur={handleBlur} onChange={handleChange} id="inputAddress" placeholder="Enter Password" />
            {errors.password && touched.password ? <span className="text-danger">{errors.password}</span> : null}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputAddress2" className="form-label">Comfirm Password</label>
            <input type="text" className="form-control" name='cpassword' value={values.cpassword} onBlur={handleBlur} onChange={handleChange} id="inputAddress2" placeholder="Enter Comfirm Password" />
            {errors.cpassword && touched.cpassword ? <span className="text-danger">{errors.cpassword}</span> : null}
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">State</label>
            <select id="inputState" name='city' onBlur={handleBlur} onChange={handleChange} className="form-select">
              <option selected disabled value={''} >--Select City--</option>
              <option value={'Surat'}>Surat</option>
              <option value={'Vadodra'}>Vadodra</option>
              <option value={'Rajkot'}>Rajkot</option>
              <option value={'Baroda'}>Baroda</option>
            </select>
            {errors.city && touched.city ? <span className='text-danger'>{errors.city}</span> : <></>}
          </div>
          <div className="col-md-4">
            <div>
                <label htmlFor="inputState" className="form-label">Gender</label>
              <div className="form-check">
                <input className="form-check-input" name='gender' value={'Male'} onBlur={handleBlur} onChange={handleChange} type="radio" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" value={'Female'} onChange={handleChange} onBlur={handleBlur} id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Female
                </label>
              </div>
              {errors.gender && touched.gender ? <span className='text-danger'>{errors.gender}</span> : null}
            </div>
          </div>
          <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">Hobby</label>
            <div className="form-check">
              <input className="form-check-input" name='hobby' value={'Cricket'} onBlur={handleBlur} onChange={handleChange} type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                Cricket
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" name='hobby' value={'Kabadi'} onBlur={handleBlur} onChange={handleChange} type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                Kabadi
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" name='hobby' value={'KhoKho'} onBlur={handleBlur} onChange={handleChange} type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                KhoKho
              </label>
            </div>
            {errors.hobby && touched.hobby ? <span className='text-danger'>{errors.hobby}</span> : <></>}
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default App;
