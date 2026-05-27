import React from 'react'
import { Container, Row} from 'react-bootstrap'
import './Domain.css'

export default function Dom() {
    return (
        <div>
            <section className='domain align-center'>
                <Container>
                    <Row>
                        <div className='col-md-6 col-xs-12'>
                            <div className='dom_head'>
                                <h2>Find Your Perfect Domain</h2>
                                <h4>Starting from $1.99 per year!</h4>
                            </div>
                        </div>
                        <div className='col-md-6 col-xs-12 g-3'>
                            <form className='d-block'>
                                <div className='form_group g-5'>
                                    <div className='col-md-6 xs col-xs-12'>
                                        <input type='text' name='domain' placeholder='Enter Your Domain Name..' className='form_input'></input>
                                    </div>
                                    <div className='col-md-3 col-xs-12 xs'>
                                        <select className='form_input'>
                                            <option>.com</option>
                                            <option>.net</option>
                                            <option>.org</option>
                                            <option>.eu</option>
                                            <option>.eu</option>
                                            <option>.uk</option>
                                        </select>
                                    </div>
                                    <div className='col-md-3 col-xs-12 xs left'>
                                        <button className='submit'>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Row>
                </Container>
            </section>  
        </div>
    )
}
