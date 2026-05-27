import './App.css';

//icone import
import { FaPhoneAlt, FaRegClock,FaTelegramPlane, FaFacebookF, FaHeadphonesAlt, FaHotjar, FaTwitter, FaGooglePlusG, FaInstagram, FaLongArrowAltRight, FaRegStar } from "react-icons/fa";
import { SlEqualizer } from "react-icons/sl";
import { PiUserCircleGearFill } from "react-icons/pi";
import { LiaWalletSolid } from "react-icons/lia";
import { IoMdMail } from "react-icons/io";
import { GoDotFill } from "react-icons/go";


// image import
import logo from './image/logo.png';
import simg from './image/s-img.jpeg';
import box1 from './image/box-1.jpeg';
import box2 from './image/box-2.jpeg';
import box3 from './image/box-3.jpeg';
import dis from './image/discover.jpeg';
import d from './image/dis.png';
import htour from './image/hot-tuor.jpeg';
import htour2 from './image/hot-tuor2.jpeg';
import psay from './image/p-say.png';


function App() {
  return (
    <div className="App">

      {/* top-header start */}

      <div className='top-hed'>
        <div className='container'>
          <div className='d-flex space-between align-center'>
            <div className='logo'>
              <a href=''>
                <img src={logo}></img>
              </a>
            </div>
            <div className='t-info d-flex align-center'>
              <p><FaRegClock className='icon' />09:00AM — 05:00PM</p>
              <p><FaPhoneAlt className='icon' />+1 323-913-4688</p>
              <button>Get a Free  Quote</button>
            </div>

          </div>
        </div>
      </div>

      {/* top-header end */}

      {/* main-header start */}
      <div className='main-hed'>
        <div className='container'>
          <div className='d-flex space-between align-center '>
            <ul className='main-manu d-flex'>
              <li><a href=''>Home</a></li>
              <li><a href=''>About</a></li>
              <li><a href=''>Our Tours</a></li>
              <li><a href=''>Gallry</a></li>
              <li><a href=''>Blog</a></li>
              <li><a href=''>Contact Us</a></li>
              <li><a href=''>Pages</a></li>
            </ul>
            <div className='m-icon'>
              <a href=''><FaFacebookF /></a>
              <a href=''><FaTwitter /></a>
              <a href=''><FaGooglePlusG /></a>
              <a href=''><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
      {/* main-header end */}

      {/* slider strat */}

      <div className='slider'>
        <div className='s-img'>
          <img src={simg}></img>
          <div className='s-info'>
            <div className='container '>
              <h3>Build your Next Holiday Trip with Us</h3>
              <h2><span>Create</span> Your Tour</h2>
              <button>Get in Touch</button>
            </div>
          </div>
        </div>
      </div>

      {/* slider End */}

      {/* box categories start */}

      <div className='box-cate'>
        <div className='container'>
          <div className='m-box space-between d-flex'>
            <div className='box'>
              <img src={box1}></img>
              <h2>Balloon Flights</h2>
            </div>
            <div className='box'>
              <img src={box2}></img>
              <h2>Mountain Holiday</h2>
            </div>
            <div className='box'>
              <img src={box3}></img>
              <h2>Beach Holidays</h2>
            </div>
          </div>
          <div className='box-info'>
            <p>Other Tours <FaLongArrowAltRight /></p>
          </div>

        </div>
      </div>

      {/* box categories End */}

      {/* Discover New Horizons start */}

      <div className='discover'>
        <div className='container'>
          <div className='dis-main d-flex'>
            <div className='dis-info'><img src={dis}></img></div>
            <div className='dis-info d-info'>
              <h2>Discover New Horizons</h2>
              <img src={d}></img>
              <p>Wonder Tour is committed to bringing our clients the best in value and quality travel arrangements. We are passionate about travel and sharing the world's wonders with you.</p>
              <button className='btn1'>Get in Touch</button>
              <button className='btn2'>Read More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Discover New Horizons End */}

      {/* Our Services start */}
      <div className='our-ser'>
        <div className='container'>
          <div className="our-hed">
            <h2>Our Services</h2>
          </div>
          <div className="our-sec d-flex space-between ">
            <div className="section">
              <a href=''><SlEqualizer className='o-icon' />Personalized Matching</a>
              <p>Our unique matching system lets you find just the tour you want for your next holiday.</p>
            </div>
            <div className="section">
              <a href=''><PiUserCircleGearFill className='o-icon' />Wide Variety of Tours</a>
              <p>We offer a wide variety of personally picked tours with destinations all over the globe.</p>
            </div>
            <div className="section">
              <a href=''><FaRegStar className='o-icon' />Highly Qualified Service</a>
              <p>Our tour managers are qualified, skilled, and friendly to bring you the best service.</p>
            </div>
            <div className="section">
              <a href=''><FaHeadphonesAlt className='o-icon' />Highly Qualified Service</a>
              <p>Our tour managers are qualified, skilled, and friendly to bring you the best service.</p>
            </div>
            <div className="section">
              <a href=''><FaHotjar className='o-icon' />Highly Qualified Service</a>
              <p>Our tour managers are qualified, skilled, and friendly to bring you the best service.</p>
            </div>
            <div className="section">
              <a href=''><LiaWalletSolid className='o-icon' />Highly Qualified Service</a>
              <p>Our tour managers are qualified, skilled, and friendly to bring you the best service.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Our Services Strat */}

      {/* Hot Tours End */}

      <div className="hot-tour">
        <div className="container">
          <h2>Hot Tours</h2>
          <div className="tour-box d-flex margin-x ">
            <div className="hot-sec">
              <img src={htour} alt="" />
            </div>
            <div className="hot-sec">
              <h3>Mauritius Island, Africa</h3>
              <h4><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar className='star' />5 customer reviews</h4>
              <p>The beautiful and inviting island nation of Mauritius is an ideal ‘flop and drop’ at the conclusion of your safari. Indulge in the delightful scents of the fragrant...</p>
              <button>Buy This Tour</button>
            </div>
          </div>
          <div className="tour-box d-flex margin-x ">
            <div className="hot-sec">
              <img src={htour2} alt="" />
            </div>
            <div className="hot-sec">
              <h3>Mauritius Island, Africa</h3>
              <h4><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar className='star' />5 customer reviews</h4>
              <p>The beautiful and inviting island nation of Mauritius is an ideal ‘flop and drop’ at the conclusion of your safari. Indulge in the delightful scents of the fragrant...</p>
              <button>Buy This Tour</button>
            </div>
          </div>
        </div>
      </div>

      {/* Hot Tours End */}

      {/* First-class Impressions strat */}

      <div className="firs-inpre">
        <div className="f-info">
          <h2>First-class Impressions</h2>
          <h3>are Waiting for You!</h3>
          <p>Our agency offers travelers various tours and excursions with destinations all over the world. Browse our website to find your dream tour!</p>
          <button>Book a Tour Now</button>
        </div>
      </div>

      {/* First-class Impressions End */}

      {/* What People Say Impressions start*/}

      <div className="psay">
        
          <img src={psay} alt="" />
        
      </div>

      {/* What People Say Impressions End */}


      {/* Page Footer Impressions start */}

        <div className="footer">
          <div className="container margin-x">
            <div className="d-flex">
              <div className="f-sec">
                <h2>CONTACT US</h2>
                <p><FaPhoneAlt className='f-icone'/>+1 323-913-4688</p>
                <p><IoMdMail className='f-icone'/>info@demolink.org</p>
                <p><FaTelegramPlane className='f-icone'/>4730 Crystal Springs Dr, Los Angeles, CA 90027</p>
              </div>
              <div className="f-sec">
                <h2>POPULAR NEWS</h2>
                <p className='f2-1'>Your Personal Guide to 5 Best Places to Visit on Earth</p>
                <p className='f2-2'>May 04, 2020</p>
                <p className='f2-1'>Top 10 Hotels: Rating by Wonder Tour Travel Experts</p>
                <p className='f2-2'>May 04, 2020</p>
              </div>
              <div className="f-sec f3">
                <h2>QUICK LINKS</h2>
                <div className="d-flex">
                  <p> <GoDotFill className='f3-i' />About us</p>
                  <p> <GoDotFill className='f3-i' />Our Tours</p>
                </div>
                <div className="d-flex">
                  <p> <GoDotFill className='f3-i' />Our Team</p>
                  <p> <GoDotFill className='f3-i' />Gallery</p>
                </div>
                <p> <GoDotFill className='f3-i' />Blog</p>
                <button>Get in Touch</button>
              </div>
            </div>
          </div>
        </div>

        <div className="b-foot">
          <div className="container">
            <div className="d-flex space-between align-center margin-x">
              <p>© 2023 Wonder Tour. All rights reserved.</p>
              <h2><FaFacebookF  className='b-i'/> <FaTwitter className='b-i' /><FaGooglePlusG className='b-i'/><FaInstagram className='b-i' /></h2>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>

      {/* Page Footer Impressions End */}


    </div>
  );
}

export default App;
