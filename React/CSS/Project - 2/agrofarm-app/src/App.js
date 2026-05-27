import './App.css';
import { FaPhone, FaEnvelope, FaLocationDot, FaAngleDown, FaSkype } from "react-icons/fa6";
import { PiMagnifyingGlass } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaRegEnvelope } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { IoLogoGoogleplus } from "react-icons/io";

import head from './Images/top_logo.png'
import slider from './Images/slider.jpg'
import ab1 from './Images/ab1.jpg'
import ab2 from './Images/ab2.jpg'
import ab3 from './Images/ab3.jpg'
import ab4 from './Images/ab4.jpg'
import ab5 from './Images/ab5.jpg'
import s1 from './Images/se-1.png'
import s2 from './Images/se-2.png'
import s3 from './Images/se-3.png'
import s4 from './Images/se-4.png'
import of1 from './Images/of-1.png'
import of2 from './Images/of-2.png'
import of3 from './Images/of-3.png'
import of4 from './Images/of-4.png'
import our1 from './Images/our-1.jpg'
import our2 from './Images/our-2.jpg'
import our3 from './Images/our-3.jpg'
import team1 from './Images/team-1.jpg'
import team2 from './Images/tea.jpg'
import team3 from './Images/team-3.jpg'
import team4 from './Images/team-4.jpg'
import f1 from './Images/f-1.jpg'
import f2 from './Images/f-2.jpg'
import f3 from './Images/f-3.jpg'
import f4 from './Images/f-4.jpg'
import f5 from './Images/f-5.jpg'
import f6 from './Images/f-6.jpg'

// https://ld-wt73.template-help.com/wt_prod-31902/

function App() {
  return (
    <div>
      {/* Top_info start */}
      <div className='top_info'>
        <div className='container'>
          <ul className='flex'>
            <li><i><FaPhone></FaPhone></i><a href=''>1-800-1234-5671</a></li>
            <li><i><FaEnvelope></FaEnvelope></i><a href=''>info@demolink.org</a></li>
            <li><i><FaLocationDot></FaLocationDot></i><a href=''>2130 Fulton Street San Diego, CA 94117-1080 USA</a></li>
          </ul>
        </div>
      </div>
      {/* Top_info End */}

      {/* Main Header Start */}
      <div className='header'>
        <div className='container'>
          <div className='d-flex margin'>
            <div className='head_logo'>
              <img src={head}></img>
            </div>
            <div className='menu'>
              <ul className='d-flex center'>
                <li><a href=''>Home</a></li>
                <li><a href=''>About</a></li>
                <li><a href=''>Product</a><i><FaAngleDown></FaAngleDown></i></li>
                <li><a href=''>Blog</a><i><FaAngleDown></FaAngleDown></i></li>
                <li><a href=''>Pages</a><i><FaAngleDown></FaAngleDown></i></li>
                <li><a href=''>Contacts</a></li>
                <li><a href='' className='size'><PiMagnifyingGlass></PiMagnifyingGlass></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Main Header End */}

      {/* slider Start */}
      <div className='slider'>
        <div className='slide_img'>
          <img src={slider}></img>
        </div>
        <div className='slider_text'>
          <div className='container1'>
            <h1>Leading the Wheat Industry Forward</h1>
            <p>Ei solum iisque saperet quo, quot tamquam dissentiunt sea ne, ne pe</p>
            <a href=''>LEARN MORE</a>
          </div>
        </div>
      </div>
      {/* slider End */}

      {/* About Us Start */}
      <div className='about p-bottom p-top'>
        <div className='container d-flex'>
          <div className='about_img'>
            <img src={ab1} className='img1'></img>
            <div className='about_img2 d-flex'>
              <img src={ab2}></img>
              <img src={ab3}></img>
              <img src={ab4}></img>
              <img src={ab5}></img>
            </div>
          </div>
          <div className='about_text'>
            <p>Founded in 1999</p>
            <h2>Our Farm</h2>
            <h3>Who we are</h3>
            <ul className='about_tab d-flex'>
              <li>ABOUT</li>
              <li>OUR MISSION</li>
              <li>OUR VISION</li>
            </ul>
            <i></i>
            <div className='about_con'>
              <p>Chicken Good is a 100% American, family-owned and operated company, providing fresh shell eggs and egg products to supermarkets, restaurants and food manufacturers.</p>
            </div>
            <a href=''>READ MORE</a>
          </div>
        </div>
      </div>
      {/* About Us End */}

      {/* Services Start */}
      <div className='services p-top p-bottom'>
        <div className='container d-flex'>
          <div className='box box-1'>
            <img src={s1}></img>
            <h2>Natural feed</h2>
            <p>We use the best feeds with essential nutrients to raise the best chickens and turkeys.</p>
          </div>
          <div className='box box-2'>
            <img src={s2}></img>
            <h2>Own fields</h2>
            <p>We use our own farm fields for grazing hens and chickens to give them more fresh air and space.</p>
          </div>
          <div className='box box-3'>
            <img src={s3}></img>
            <h2>Modern farm</h2>
            <p>Our farm uses the latest incubation and feeding technologies to raise the best poultry in the state.</p>
          </div>
          <div className='box box-4'>
            <img src={s4}></img>
            <h2>100% Organic</h2>
            <p>We adhere to the organic philosophy, which implies the usage of natural feed for our chickens.</p>
          </div>
        </div>
      </div>
      {/* Services End */}

      {/* Offeer Start */}
      <div className='offer p-bottom p-top'>
        <div className='container'>
          <div className='offer_title'>
            <div className='off_sub'>
              <h4>What we offer</h4>
            </div>
            <div className='off_main'>
              <h2>Our Products</h2>
            </div>
          </div>
          <div className='offer_img d-flex'>
            <div className='off_img'>
              <img src={of1}></img>
              <h4>VEGETABLES</h4>
            </div>
            <div className='off_img'>
              <img src={of2}></img>
              <h4>GRAIN AND OILSEED</h4>
            </div>
            <div className='off_img'>
              <img src={of3}></img>
              <h4>FRUITS AND NUTS</h4>
            </div>
            <div className='off_img'>
              <img src={of4}></img>
              <h4>TOBACCO</h4>
            </div>
          </div>
        </div>
      </div>
      {/* Offeer End */}

      {/* Our Blog Start */}
      <div className='our'>
        <div className='our_title'>
          <div className='our_sub'>
            <h3>Latest News</h3>
          </div>
          <div className='our_main'>
            <h2>Our Blog</h2>
          </div>
        </div>
        <div className='our_box'>
          <div className='container  d-flex' style={{ gap: '20px' }}>
            <div className='our_box1 our_color'>
              <div className='our_img'>
                <img src={our1}></img>
              </div>
              <div className='our_tittle'>
                <p>August 9,2021</p>
                <h3>Can a Smoothin Supercharge Your Day?</h3>
                <p className='our-m'>Most of us would agree – mornings are hectic. Getting yourself and possibly others ready for the day ahead may...</p>
              </div>
            </div>
            <div className='our_box2 our_color'>
              <div className='our_img'>
                <img src={our2}></img>
              </div>
              <div className='our_tittle'>
                <p>August 9,2021</p>
                <h3>How to Make Your Breakfast Easy and Yummy</h3>
                <p className='our-m'>Overloading your breakfast with calories may not be the best idea but when you need a boost for the upcoming...</p>
              </div>
            </div>
            <div className='our_box3 our_color'>
              <div className='our_img'>
                <img src={our3}></img>
              </div>
              <div className='our_tittle'>
                <p>August 9,2021</p>
                <h3>Tips from Our Team: Making Yoghurts with Fresh Fruits</h3>
                <p className='our-m'>Combining milk and fruits is the best solution for your daily meal, whether it’s breakfast, lunch, or any other...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Blog End */}

      {/* Our Team start */}
      <div className='our_team p-bottom'>
        <div className='team_title'>
          <div className='team_sub'>
            <p>We are Experienced Farmers</p>
          </div>
          <div className='team_main'>
            <h2>Our team</h2>
          </div>
        </div>
        <div className='container'>
          <div className='team_img d-flex'>
            <div className='team_box'>
              <div className='inner_img'>
                <img src={team1} alt=""></img>
              </div>
              <div className='inner_text'>
                <a href="">Rebecca Martinez</a>
                <p>Rebecca is the Founder and CEO of Livedrink</p>
              </div>
              <div className="team_icon">
                <ul className="d-flex set">
                  <li><a href=""><FaFacebookF></FaFacebookF></a></li>
                  <li><a href=""><FaTwitter></FaTwitter></a></li>
                  <li><a href=""><ImInstagram></ImInstagram></a></li>
                  <li><a href="" className='big'><IoLogoGoogleplus></IoLogoGoogleplus></a></li>
                </ul>
              </div>
            </div>
            <div className='team_box'>
              <img src={team2} alt=""></img>
              <div className='inner_text'>
                <a href="">Peter McMillan</a>
                <p>Peter is the Head of Livedrink’s Supply Chain</p>
              </div>
              <div className="team_icon">
                <ul className="d-flex set">
                  <li><a href=""><FaFacebookF></FaFacebookF></a></li>
                  <li><a href=""><FaTwitter></FaTwitter></a></li>
                  <li><a href=""><ImInstagram></ImInstagram></a></li>
                  <li><a href="" className='big'><IoLogoGoogleplus></IoLogoGoogleplus></a></li>
                </ul>
              </div>
            </div>
            <div className='team_box'>
              <img src={team3} alt=""></img>
              <div className='inner_text'>
                <a href="">Jane Smith</a>
                <p>Jane Smith is our leading Customer Care specialist.</p>
              </div>
              <div className="team_icon">
                <ul className="d-flex set">
                  <li><a href=""><FaFacebookF></FaFacebookF></a></li>
                  <li><a href=""><FaTwitter></FaTwitter></a></li>
                  <li><a href=""><ImInstagram></ImInstagram></a></li>
                  <li><a href="" className='big'><IoLogoGoogleplus></IoLogoGoogleplus></a></li>
                </ul>
              </div>
            </div>
            <div className='team_box'>
              <img src={team4} alt=""></img>
              <div className='inner_text'>
                <a href="">Sam Williams</a>
                <p>Sam is our #1 expert in domestic Sales Management.</p>
              </div>
              <div className="team_icon">
                <ul className="d-flex set">
                  <li><a href=""><FaFacebookF></FaFacebookF></a></li>
                  <li><a href=""><FaTwitter></FaTwitter></a></li>
                  <li><a href=""><ImInstagram></ImInstagram></a></li>
                  <li><a href="" className='big'><IoLogoGoogleplus></IoLogoGoogleplus></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Team End */}

      {/* Footer Start */}
      <div className="footer p-top p-bottom">
        <div className="container d-flex">
          <div className="gallery">
            <h2>Gallery</h2>
            <div className="f-img">
              <img src={f1} alt="" />
              <img src={f2} alt="" />
              <img src={f3} alt="" />
            </div>
            <div className="f-img2">
              <img src={f4} alt="" />
              <img src={f5} alt="" />
              <img src={f6} alt="" />
            </div>
          </div>
          <div className="link">
            <div className="f-tittle">
              <h2>QUICK LINKS</h2>
            </div>
            <div className="f-text">
              <ul>
                <li><a href="">Our Team</a></li>
                <li><a href="">New Products</a></li>
                <li><a href="">Top Sellers</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href="">Contact Us</a></li>
              </ul>
              <ul>
                <li><a href="">Smoothies</a></li>
                <li><a href="">Energy Bowls</a></li>
                <li><a href="">Juices</a></li>
                <li><a href="">Ingredients</a></li>
                <li><a href="">Delivery</a></li>
              </ul>
            </div>
          </div>
          <div className="touch">
            <div className="f-tittle">
              <h2>GET IN TOUCH</h2>
            </div>
            <div className='footer-txt'>
              <i><FaLocationDot></FaLocationDot></i><p>523 Sylvan Ave, 5th Floor
                Mountain View, CA 94041<br></br>USA</p>
              <div className="f">
                <i><FaPhone></FaPhone></i>
                <p>
                  +1 (844) 123 456 78
                </p>
              </div>
              <div className="f">
                <i><FaRegEnvelope></FaRegEnvelope></i>
                <p>
                  info@demolink.org
                </p>
              </div>
              <div className="f1">
                <a href=""><FaFacebookF></FaFacebookF></a>
                <a href=""><FaTwitter></FaTwitter></a>
                <a href=""><ImInstagram></ImInstagram></a>
                <a href=""><IoLogoGoogleplus></IoLogoGoogleplus></a>
                <a href=""><FaSkype></FaSkype></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="down">
        <p>© 2023 AgroFarm. Privacy Policy. Design by Zemez</p>
      </div>
      {/* Footer End */}
    </div>
  );
}

export default App;
