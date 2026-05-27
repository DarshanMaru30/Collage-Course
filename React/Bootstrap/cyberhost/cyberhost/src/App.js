import './App.css';
import { BsEnvelope } from "react-icons/bs";
import { MdPhoneAndroid } from "react-icons/md";
import { FiFacebook, FiTwitter, FiDribbble, FiRss } from "react-icons/fi";
import { TfiGoogle } from "react-icons/tfi";
import { FaRegClock } from "react-icons/fa";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import log from './Images/log.png'
import log1 from './Images/logo-light.png'
import slider1 from './Images/slider-img-1.png'
import slider2 from './Images/slider-img-2.png'
import slider3 from './Images/slider-img-3.png'
import se1 from './Images/se-1.png'
import se2 from './Images/se-2.png'
import se3 from './Images/se-4.png'
import se4 from './Images/se-3.png'
import se5 from './Images/se-5.png'
import se6 from './Images/se-6.png'
import cta from './Images/cta.png'
import ss from './Images/ss.png'
import ss1 from './Images/ss1.png'
import w1 from './Images/w-1.png'
import pop1 from './Images/pop-1.png'
import pop2 from './Images/pop-2.png'
import pop3 from './Images/pop-3.png'
import b1 from './Images/blog-1.jpg'
import b2 from './Images/blog-2.jpg'
import b3 from './Images/blog-3.jpg'
import s1 from './Images/s-1.png'
import s2 from './Images/s-2.png'
import s3 from './Images/s-3.png'
import s4 from './Images/s-4.png'

// https://html.dynamiclayers.net/it/cyberhost/

function App() {
  return (
    <div>
      {/* Top_info Start */}
      <div className='top_info'>
        <Container className='back'>
          <Row >
            <Col className=''>
              <div className=''>
                <i><BsEnvelope></BsEnvelope></i><a href="">info@yourdomain.com</a>
                <i><MdPhoneAndroid></MdPhoneAndroid></i><a href="">+123 456 789</a>
              </div>
            </Col>
            <Col sm={2} className='asx'>
              <div className=''>
                <ul className='d-flex mb-2 ps-0'>
                  <li><a href=""><FiFacebook></FiFacebook></a></li>
                  <li><a href=""><FiTwitter></FiTwitter></a></li>
                  <li><a href=""><TfiGoogle></TfiGoogle></a></li>
                  <li><a href=""><FiDribbble></FiDribbble></a></li>
                  <li><a href=""><FiRss></FiRss></a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Top_info End */}

      {/* Header Start */}
      <Navbar expand="lg" className="bg-body-tertiary p-3 md">
        <Container className='cont w-md-100'>
          <Navbar.Brand href="#home">
            <img src={log} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              <Nav.Link href="#link">Services</Nav.Link>
              <Nav.Link href="#link">Domain</Nav.Link>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Pricing</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Register
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">FAQ Pages</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Login
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  404 Not Found
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blogs" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Blog Grid</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Blog sidebar
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Blog Details</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                {/* <NavDropdown.Item href="#action/3.4">
              Separated link
              </NavDropdown.Item>*/}
              </NavDropdown>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Header End */}

      {/* Slider Start */}
      <OwlCarousel className='owl-theme color' items={1} nav loop={true}>
        <Container>
          <div class='item'>
            <div className='slider1 d-flex'>
              <div className='item1_text'>
                <h2>Best for share hosting</h2>
                <ul className='d-flex p-0'>
                  <li><i><FaRegClock></FaRegClock></i>Simple</li>
                  <li className='margin'><i><FaRegClock></FaRegClock></i>Easy to use</li>
                  <li className='margin'><i><FaRegClock></FaRegClock></i>10x Faster</li>
                </ul>
                <p>Creating outstanding websites effortless & intuitive.Linax is the first Design <br></br> Driven html template with bullet-proof code.</p>
                <a href=''>Get Started Now</a>
              </div>
              <div className='slider-img'>
                <img src={slider1} className='w-100 d-none d-md-block'></img>
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <div class='item'>
            <div className='slider1 d-flex'>
              <div className='item1_text'>
                <h2>Best for share hosting</h2>
                <ul className='d-flex p-0'>
                  <li><i><FaRegClock></FaRegClock></i>Simple</li>
                  <li className='margin'><i><FaRegClock></FaRegClock></i>Easy to use</li>
                  <li className='margin'><i><FaRegClock></FaRegClock></i>10x Faster</li>
                </ul>
                <p>Creating outstanding websites effortless & intuitive.Linax is the first Design <br></br> Driven html template with bullet-proof code.</p>
                <a href=''>Get Started Now</a>
              </div>
              <div className='slider-img'>
                <img src={slider2} className='w-100 d-none d-md-block'></img>
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <div class='item'>
            <div className='slider1 d-flex'>
              <div className='item1_text'>
                <h2>Best for share hosting</h2>
                <ul className='d-flex p-0'>
                  <li><i><FaRegClock></FaRegClock></i>Simple</li>
                  <li className='margin'><i><FaRegClock></FaRegClock></i>Easy to use</li>
                  <li className='margin'><i><FaRegClock></FaRegClock></i>10x Faster</li>
                </ul>
                <p>Creating outstanding websites effortless & intuitive.Linax is the first Design <br></br> Driven html template with bullet-proof code.</p>
                <a href=''>Get Started Now</a>
              </div>
              <div className='slider-img'>
                <img src={slider3} className='w-100 d-none d-md-block'></img>
              </div>
            </div>
          </div>
        </Container>
      </OwlCarousel>
      {/* Slider Start */}

      {/* Domain Start */}
      <section className='domain padding bd-bottom align-center'>
        <Container>
          <Row>
            <Col className='col-md-6 col-sm-5 fix'>
              <div className='domain_head'>
                <h2>Find Your Perfect Domain</h2>
                <h4>Starting From $1.99 Per Year!</h4>
              </div>
            </Col>
            <Col className='col-md-6 col-sm-7 fix'>
              <form className='search_form fix'>
                <div className='form_group d-flex text-right'>
                  <div className='xs-padding col-sm-6 fix'>
                    <input type='text' name='domain' className='form-input' placeholder='Enter Your Domain Name...'></input>
                  </div>
                  <div className='xs-padding col-sm-3 fix'>
                    <select className='form-input'>
                      <option>.com</option>
                      <option>.net</option>
                      <option>.org</option>
                      <option>.eu</option>
                      <option>.uk</option>
                    </select>
                  </div>
                  <div className='xs-padding col-sm-3'>
                    <button type='submit' className='submit'>Search</button>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Domain End */}

      {/* Services start */}
      <section className='services bd-bottom  padding'>
        <Container>
          {/* <Row> */}
          <Col className=''>
            <div className='ser text-center m-auto service_heading'>
              <h2>Greate Bundle With Every Plan</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries
              </p>
            </div>
          </Col>
          {/* </Row> */}
          {/* <Row> */}
          <div className='ser_item_main d-flex'>
            <Col className='col-md-4'>
              <div className='ser_item'>
                <div className='box align-center text-center'>
                  <img src={se1}></img>
                  <h3>Disk Space & Bandwidth</h3>
                  <p>Lorem Ipsum is simply dummy business the smart printing and typesetting industry.</p>
                </div>
              </div>
            </Col>
            <Col className='col-md-4'>
              <div className='ser_item'>
                <div className='box align-center text-center'>
                  <img src={se2}></img>
                  <h3>Disk Space & Bandwidth</h3>
                  <p>Lorem Ipsum is simply dummy business the smart printing and typesetting industry.</p>
                </div>
              </div>
            </Col>
            <Col className='col-md-4'>
              <div className='ser_item'>
                <div className='box align-center text-center'>
                  <img src={se3}></img>
                  <h3>Disk Space & Bandwidth</h3>
                  <p>Lorem Ipsum is simply dummy business the smart printing and typesetting industry.</p>
                </div>
              </div>
            </Col>
            {/* </Row> */}
            {/* <Row> */}
            <Col className='col-md-4'>
              <div className='ser_item'>
                <div className='box align-center text-center'>
                  <img src={se4}></img>
                  <h3>Disk Space & Bandwidth</h3>
                  <p>Lorem Ipsum is simply dummy business the smart printing and typesetting industry.</p>
                </div>
              </div>
            </Col>
            <Col className='col-md-4'>
              <div className='ser_item'>
                <div className='box align-center text-center'>
                  <img src={se5}></img>
                  <h3>Disk Space & Bandwidth</h3>
                  <p>Lorem Ipsum is simply dummy business the smart printing and typesetting industry.</p>
                </div>
              </div>
            </Col>
            <Col className='col-md-4'>
              <div className='ser_item'>
                <div className='box align-center text-center'>
                  <img src={se6}></img>
                  <h3>Disk Space & Bandwidth</h3>
                  <p>Lorem Ipsum is simply dummy business the smart printing and typesetting industry.</p>
                </div>
              </div>
            </Col>
          </div>
          {/* </Row> */}
        </Container>
      </section>
      {/* Services End */}

      {/* Trust start */}
      <section className='trust padding'>
        <Container>
          <div className='trust_contant d-flex'>
            <div className='trust_con col-lg-6'>
              <h2>
                95,000 People trust CyberHost!<br></br> Be one of them today.
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>CyberHost is simply dummy text of the printing and industry. survived not only five more centuries
              </p>
              <a href='' className='mt-2'>Explore Now</a>
            </div>
            <div className='trust_img col-lg-6'>
              <img src={cta}></img>
            </div>
          </div>
        </Container>
      </section>
      {/* Trust End */}

      {/* Pricing start */}
      <section className='pricing padding'>
        <Container>
          <Row>
            <Col>
              <div className='pricing_head text-center'>
                <h2>Plans & Pricing</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              </div>
            </Col>
          </Row>
          <Row>
            <div className='pricing_item d-flex'>
              <Col className='col-lg-3 col-xs-6'>
                <div className='pri_box'>
                  <div className='pricing_top'>
                    <h5>Basic</h5>
                    <h3>$49
                      <span> / Month</span>
                    </h3>
                    <p className='mb-10'>CyberHost Pricing Table Design.</p>
                  </div>
                  <ul className='pricing_list'>
                    <li><i><img src={ss}></img></i>1 User</li>
                    <li><i><img src={ss}></img></i>1 Dashboard</li>
                    <li><i><img src={ss}></img></i>5 Projects</li>
                    <li><i><img src={ss1}></img></i>Custome Domain</li>
                  </ul>
                  <div className='pricing_footer'>
                    <a href=''>Start Now</a>
                  </div>
                </div>
              </Col>
              <Col className='col-lg-3 col-xs-6'>
                <div className='pri_box'>
                  <div className='pricing_top'>
                    <h5>Business</h5>
                    <h3>$99
                      <span> / Month</span>
                    </h3>
                    <p className='mb-10'>CyberHost Pricing Table Design.</p>
                  </div>
                  <ul className='pricing_list'>
                    <li><i><img src={ss}></img></i>1 User</li>
                    <li><i><img src={ss}></img></i>1 Dashboard</li>
                    <li><i><img src={ss}></img></i>5 Projects</li>
                    <li><i><img src={ss}></img></i>Custome Domain</li>
                  </ul>
                  <div className='pricing_footer'>
                    <a href=''>Start Now</a>
                  </div>
                </div>
              </Col>
              <Col className='col-lg-3 col-xs-6'>
                <div className='pri_box'>
                  <div className='pricing_top'>
                    <h5>Premium</h5>
                    <h3>$149
                      <span> / Month</span>
                    </h3>
                    <p className='mb-10'>CyberHost Pricing Table Design.</p>
                  </div>
                  <ul className='pricing_list'>
                    <li><i><img src={ss}></img></i>1 User</li>
                    <li><i><img src={ss}></img></i>1 Dashboard</li>
                    <li><i><img src={ss}></img></i>5 Projects</li>
                    <li><i><img src={ss}></img></i>Custome Domain</li>
                  </ul>
                  <div className='pricing_footer'>
                    <a href=''>Start Now</a>
                  </div>
                </div>
              </Col>
              <Col className='col-lg-3 col-xs-6' >
                <div className='pri_box'>
                  <div className='pricing_top'>
                    <h5>Ultimate</h5>
                    <h3>$199
                      <span> / Month</span>
                    </h3>
                    <p className='mb-10'>CyberHost Pricing Table Design.</p>
                  </div>
                  <ul className='pricing_list'>
                    <li><i><img src={ss}></img></i>1 User</li>
                    <li><i><img src={ss}></img></i>1 Dashboard</li>
                    <li><i><img src={ss}></img></i>5 Projects</li>
                    <li><i><img src={ss}></img></i>Custome Domain</li>
                  </ul>
                  <div className='pricing_footer'>
                    <a href=''>Start Now</a>
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </section>
      {/* Pricing End */}

      {/* Why Choose start */}
      <section className='why padding'>
        <Container>
          <Row>
            <Col className='col-sm-6 col-xs-12'>
              <div>
                <div className='why_con'>
                  <h2>Why Choose CyberHost?</h2>
                  <h3>We offer a full range of digital marketing services!</h3>
                  <ul className='why_list'>
                    <li><i><img src={w1}></img></i>How do I transfer my Web pages to your server?</li>
                    <li><i><img src={w1}></img></i>What kind of Web Hosting do I need?</li>
                    <li><i><img src={w1}></img></i>How does Web Hosting work?</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col className='col-sm-6 col-xs-12'>
              <div>
                <div className='why_con'>
                  <h2>How Is Works?</h2>
                  <h3>WE OFFER A FULL RANGE OF DIGITAL MARKETING SERVICES!</h3>
                  <ul className='why_list'>
                    <li><i><img src={w1}></img></i>How do I transfer my Web pages to your server?</li>
                    <li><i><img src={w1}></img></i>What kind of Web Hosting do I need?</li>
                    <li><i><img src={w1}></img></i>How does Web Hosting work?</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Why Choose End */}

      {/* People Start */}
      <section className='people padding bd-bottom'>
        <Container>
          <Row>
            <div className='pople_head text-center'>
              <h2>What People Says</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
          </Row>
          <Row>
            <Col>
              <div className='pople_box text-center col-xs-6'>
                <img src={pop1}></img>
                <p>Lorem ipsum dolor sit amet consetur adipisicing elit. Ullam vel iusto reicndis nesciunt laborum labsam nisi!</p>
                <h4>Jonathan Smith</h4>
                <ul className='d-flex rating'>
                  <li className='minus'><FaStar></FaStar></li>
                  <li><FaStar></FaStar></li>
                  <li><FaStar></FaStar></li>
                  <li><FaStar></FaStar></li>
                  <li><FaStar></FaStar></li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className='pople_box text-center col-xs-6'>
                <img src={pop2}></img>
                <p>Lorem ipsum dolor sit amet consetur adipisicing elit. Ullam vel iusto reicndis nesciunt laborum labsam nisi!</p>
                <h4>ANGELINA ROSE</h4>
                <ul className='d-flex rating'>
                  <li className='minus'><FaStar></FaStar></li>
                  <li><FaStar></FaStar></li>
                  <li><FaStar></FaStar></li>
                  <li><FaStar></FaStar></li>
                  <li><FaStarHalfAlt></FaStarHalfAlt></li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className='pople_box text-center col-xs-6'>
                <img src={pop3}></img>
                <p>Lorem ipsum dolor sit amet consetur adipisicing elit. Ullam vel iusto reicndis nesciunt laborum labsam nisi!</p>
                <h4>MICHEL BROWN</h4>
                <ul className='d-flex rating'>
                  <li className='minus'><FaStar></FaStar></li>
                  <li><FaStar></FaStar></li>
                  <li><FaStar></FaStar></li>
                  <li><FaStar></FaStar></li>
                  <li><FaStar></FaStar></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* People End */}

      {/* Blog Start */}
      <section className='blog padding bd-bottom'>
        <Container>
          <Row>
            <div className='blog_head text-center'>
              <h2>LATEST BLOG POSTS</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
          </Row>
          <Row>
            <Col>
              <div className='blog_box col-xs-6'>
                <img src={b1}></img>
                <div className='blog_con'>
                  <h3><a href=''>New Web Design Trends</a></h3>
                  <span>Jhon Doe 10 December</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing nulla illum aliquid assumenda.</p>
                  <a href=''>LEARN MORE</a>
                </div>
              </div>
            </Col>
            <Col>
              <div className='blog_box col-xs-6'>
                <img src={b2}></img>
                <div className='blog_con'>
                  <h3><a href=''>New Web Design Trends</a></h3>
                  <span>Jhon Doe 10 December</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing nulla illum aliquid assumenda.</p>
                  <a href=''>LEARN MORE</a>
                </div>
              </div>
            </Col>
            <Col>
              <div className='blog_box col-xs-6'>
                <img src={b3}></img>
                <div className='blog_con'>
                  <h3><a href=''>New Web Design Trends</a></h3>
                  <span>Jhon Doe 10 December</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing nulla illum aliquid assumenda.</p>
                  <a href=''>LEARN MORE</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Blog Emd */}

      {/* Logo start */}
      <Container>
        <OwlCarousel className='owl-theme img' items={5} loop={true} autoplay={true} loop margin={10} dots={false}>
          <div class='item'>
            <img src={s1}></img>
          </div>
          <div class='item'>
            <img src={s2}></img>
          </div>
          <div class='item'>
            <img src={s3}></img>
          </div>
          <div class='item'>
            <img src={s4}></img>
          </div>
        </OwlCarousel>
      </Container>
      {/* Logo End */}

      {/* Cta start */}
      <section className='cta_section d-flex padding'>
        <div className='cta_inner container d-flex'>
          <h2>Set Up Your Business Website Today.</h2>
          <a href='' className='white'>Start Now</a>
        </div>
      </section>
      {/* Cta End */}

      {/* Footer start */}
      <section className='footer bg-dark padding bd-bottom'>
        <Container>
          <Row>
            <Col className='col-6'>
              <img src={log1}></img>
              <p>
                Lorem Ipsum is simply dummy text of the printing <br></br>and typesetting industry. Lorem Ipsum has been the industry <br></br> standard dummy text ever since the 1500s.
              </p>
            </Col>
            <Col className='col-2'>
              <div className='footer1'>
                <h3>Company</h3>
                <ul className='p-0'>
                  <li>About Us</li>
                  <li>Pakage</li>
                  <li>Services</li>
                </ul>
              </div>
            </Col>
            <Col className='c0l-2'>
              <div className='footer1'>
                <h3>Useful Links</h3>
                <ul className='p-0'>
                  <li>Control Panel</li>
                  <li>My Plans</li>
                  <li>Quick Order</li>
                </ul>
              </div>
              </Col>
            <Col className='c0l-2'>
              <div className='footer1'>
                <h3>Follow Us</h3>
                <ul className='p-0'>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                </ul>
              </div>
              </Col>
          </Row>
        </Container>
      </section>
      {/* Footer End */}
      
      <section className='end'>
        <Container>
          <Row>
            <Col className='col-6'>
              <p>© 2018 CYBERHOST POWERED BY ICONICTHEMES.</p>
            </Col>
            <Col col-2>
              <p>TERMS OF SERVICE</p>
            </Col>
            <Col col-2>
              <p>PRIVACY POLICY</p>
            </Col>
            <Col col-2>
              <p>SITE MAP</p>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  );
}

export default App;
