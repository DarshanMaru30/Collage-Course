import React from 'react'
import './Domain.css'
import Logo from './Logo'
import { Container, Row, Table } from 'react-bootstrap'

export default function Domain() {
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

      <section className='domain_table padding1'>
        <Container>
          <table class="table table_style">
            <thead>
              <tr>
                <th scope="col"><span>DOMAIN NAME</span></th>
                <th scope="col"><span>REGISTRATION COST/YEAR</span></th>
                <th scope="col"><span>RENEWAL COST/YEAR</span></th>
                <th scope="col"><span>TRANSFER COST</span></th>
                <th scope="col"><span>REGISTRATION PERIOD</span></th>
                <th scope="col"><span>GRACE PERIOD</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">.COM</td>
                <td>$15</td>
                <td>$15</td>
                <td>$15</td>
                <td>1-10 Years</td>
                <td>19 Days</td>
              </tr>
              <tr>
                <td scope="row">.NET</td>
                <td>$19</td>
                <td>$19</td>
                <td>$19</td>
                <td>1-10 Years</td>
                <td>19 Days</td>
              </tr>
              <tr>
                <td scope="row">.ORG</td>
                <td>$29</td>
                <td>$29</td>
                <td>$29</td>
                <td>1-10 Years</td>
                <td>19 Days</td>
              </tr>
              <tr>
                <td scope="row">.US</td>
                <td>$5</td>
                <td>$5</td>
                <td>$5</td>
                <td>1-10 Years</td>
                <td>19 Days</td>
              </tr>
              <tr>
                <td scope="row">.CO</td>
                <td>$11</td>
                <td>$11</td>
                <td>$11</td>
                <td>1-10 Years</td>
                <td>19 Days</td>
              </tr>
              <tr>
                <td scope="row">.UK</td>
                <td>$39</td>
                <td>$39</td>
                <td>$39</td>
                <td>1-10 Years</td>
                <td>19 Days</td>
              </tr>
              <tr>
                <td scope="row">.XYZ</td>
                <td>$13</td>
                <td>$13</td>
                <td>$13</td>
                <td>1-10 Years</td>
                <td>19 Days</td>
              </tr>
            </tbody>
          </table>
          {/* <Table className='table_style text-center'>
            <thead>
              <tr>
                <th className='p-2'><span>DOMAIN NAME</span></th>
                <th className='p-2'><span>REGISTRATION COST/YEAR</span></th>
                <th className='p-2'><span>RENEWAL COST/YEAR</span></th>
                <th className='p-2'><span>TRANSFER COST</span></th>
                <th className='p-2'><span>REGISTRATION PERIOD</span></th>
                <th className='p-2'><span>GRACE PERIOD</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>.COM</td>
                <td>$15</td>
                <td>$15</td>
                <td>$15</td>
                <td>1-10 Years</td>
                <td>19 Days</td>
              </tr>
              <tr>
                <td>.NET</td>
                <td>$19</td>
                <td>$19</td>
                <td>$19</td>
                <td>1-10 Years</td>
                <td>19 Days</td>
              </tr>
              <tr>
                <td>.ORG</td>
                <td>$29</td>
                <td>$29</td>
                <td>$29</td>
                <td>1-10 Years</td>
                <td>19 Days</td>
              </tr>
              <tr>
                <td>.US</td>
                <td>$5</td>
                <td>$5</td>
                <td>$5</td>
                <td>1-10 Years</td>
                <td>19 Days</td>
              </tr>
              <tr>
                <td>.CO</td>
                <td>$11</td>
                <td>$11</td>
                <td>$11</td>
                <td>1-10 Years</td>
                <td>19 Days</td>
              </tr>
              <tr>
                <td>.UK</td>
                <td>$39</td>
                <td>$39</td>
                <td>$39</td>
                <td>1-10 Years</td>
                <td>19 Days</td>
              </tr>
              <tr>
                <td>.XYZ</td>
                <td>$13</td>
                <td>$13</td>
                <td>$13</td>
                <td>1-10 Years</td>
                <td>19 Days</td>
              </tr>

            </tbody>
          </Table> */}
        </Container>
      </section>

      <Logo />
    </div>
  )
}
