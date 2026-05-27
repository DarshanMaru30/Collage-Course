import { useFormik } from 'formik';
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import * as Yup from 'yup';

const validate = Yup.object({
    name: Yup.string().min(3, "Name is too short..!").max(10).required("Name must be required...!"),
    email: Yup.string().email("Email is not validate...!").required("Email must be required...!"),
    city: Yup.string().min(1).required('Select Your City...!'),
    gender: Yup.string().required('Select Your Gender...!'),
})

export default function Home() {

    const handleClick = () => {
        alert("This is Demo Button For Click");
    }

    const {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
        initialValues: {
            name: '',
            email: '',
            city: '',
            gender: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: validate
    })

  return (
    <div>
      {/* <h1>Hello this is demo to learn the react js again.</h1>
      <Button onClick={handleClick}>Click Me...</Button> */}

      <h1 className='text-center'>Demo Form With Formik-Yup</h1>
      <Container>
        <form className='row g-3' onSubmit={handleSubmit}>
        <div className='col-md-12'>
            <label htmlFor="inputEmail4" className="form-label">Name</label>
            <input type="name" className="form-control" name='name' value={values.name} onBlur={handleBlur} onChange={handleChange} placeholder='Enter Name' id="inputEmail4" />
            {errors.name && touched.name ? <span className='text-danger'>{errors.name}</span> : <></>}
        </div>
        <div className='col-md-12'>
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="name" className="form-control" name='email' value={values.email} onBlur={handleBlur} onChange={handleChange} placeholder='Enter Email' id="inputEmail4" />
            {errors.email && touched.email ? <span className='text-danger'>{errors.email}</span> : <></>}-
        </div>
        <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">State</label>
            <select id="inputState" name='city' onBlur={handleBlur} onChange={handleChange} className="form-select" value={values.city}>
              <option selected disabled value={''} >--Select City--</option>
              <option value={'Surat'}>Surat</option>
              <option value={'Vadodra'}>Vadodra</option>
              <option value={'Rajkot'}>Rajkot</option>
              <option value={'Baroda'}>Baroda</option>
            </select>
            {errors.city && touched.city ? <span className='text-danger'>{errors.city}</span> : <></>}-
          </div>
          <div className="col-md-4">
            <div>
                <label htmlFor="inputState" className="form-label">Gender</label>
              <div className="form-check">
                <input className="form-check-input" name='gender' value={'Male'} onBlur={handleBlur} onChange={handleChange} type="radio" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">Male</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" onBlur={handleBlur} onChange={handleChange} value={'Female'} id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">Female</label>
              </div>
              {errors.gender && touched.gender ? <span className='text-danger'>{errors.gender}</span> : <></>}-
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
      </form>
      </Container>
    </div>
  )
}
