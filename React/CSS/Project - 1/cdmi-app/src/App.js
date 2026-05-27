import './App.css';
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import { IoLogoLinkedin } from "react-icons/io5";
import { ImInstagram } from "react-icons/im";
import { AiOutlineYoutube } from "react-icons/ai";
import { SiWhatsapp } from "react-icons/si";
import { GoMail } from "react-icons/go";
import { FaCertificate } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaAngleLeft, FaAngleRight, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaHandPointRight, FaUniversity } from "react-icons/fa";


import d from './Image/c-logo.svg'
import k from './Image/slider.jpeg'
import w from './Image/web.webp'
import v from './Image/video.webp'
import j from './Image/java.webp'
import a from './Image/about.jpg'
import e from './Image/ethical.webp'
import u from './Image/auto.webp'
import t from './Image/tweet.webp'
import h from './Image/key.jpg'
import q from './Image/qute.png'
import ha from './Image/ss.png'
import ma from './Image/ui.jpg'
import wh1 from './Image/21.png'
import wh2 from './Image/22.png'
import wh3 from './Image/23.png'
import wh4 from './Image/24.png'
import wh5 from './Image/25.png'
import wh6 from './Image/26.png'
import st1 from './Image/1.png'
import st2 from './Image/2.png'
import st3 from './Image/3.png'
import st4 from './Image/4.png'
import st5 from './Image/5.png'
import st6 from './Image/6.png'
import d1 from './Image/footer.svg'
import n11 from './Image/11.png'
import n12 from './Image/12.png'
import n13 from './Image/13.png'
import n14 from './Image/14.png'


function App() {
  return (
    <div>
      {/* First Menu Start */}
      <div className='header'>
        <div className='container d-flex'>
          <div className='h_first d-flex'>
            <p><i><GoMail></GoMail></i>info@cdmi.in</p>
            <p><i><FaCertificate></FaCertificate></i>Verify Certificate</p>
          </div>
          <div className='h_second'>
            <p>HAVE ANY QUESTION ? +91 90333 16003</p>
          </div>
          <div className='h_third d-flex'>
            <p><FaFacebookF></FaFacebookF></p>
            <p><FaTwitter></FaTwitter></p>
            <p><TfiGoogle></TfiGoogle></p>
            <p><IoLogoLinkedin></IoLogoLinkedin></p>
            <p><ImInstagram></ImInstagram></p>
            <p><AiOutlineYoutube></AiOutlineYoutube></p>
            <p><SiWhatsapp></SiWhatsapp></p>
          </div>
        </div>
      </div>
      {/* Firrst Menu End */}

      {/* Main Menu Start */}
      <div className='main'>
        <div className='container d-flex'>
          <div className='logo'>
            <img src={d} className='h_image'></img>
          </div>
          <div className='h_menu'>
            <ul className='main_menu d-flex'>
              <li><a>Home</a></li>
              <li><a>Coures<i><FaAngleDown></FaAngleDown></i></a></li>
              <li><a>Activities<i><FaAngleDown></FaAngleDown></i></a></li>
              <li><a>Blog</a></li>
              <li><a>Know Us<i><FaAngleDown></FaAngleDown></i></a></li>
              <li><a>Get In Touch</a></li>
              <li><a>Student Zone<i><FaAngleDown></FaAngleDown></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Main Menu Start */}

      {/* Slider Start */}
      <div className='slider'>
        <img src={k}></img>
      </div>
      {/* Slider Start */}

      {/* Course Start */}
      <div className='course p-top p-bottom'>
        <div className='heading'>
          <div className='sub-heading'>
            <span></span><p>Creative Course</p>
          </div>
          <div className='main-heading'>
            <h1>Offerd Courses</h1>
          </div>
        </div>
        <div className='box'>
          <div className='container d-flex'>
            <div className='c_first'>
              <img src={w}></img>
              <h2 className='c_title'>Development Courses</h2>
              <div className='c_btn d-flex'>
                <h3 className='c_btn1 d-flex'>
                  <div><FaStar></FaStar></div>
                  <div><FaStar></FaStar></div>
                  <div><FaStar></FaStar></div>
                  <div><FaStar></FaStar></div>
                  <div><FaRegStarHalfStroke></FaRegStarHalfStroke></div>
                </h3>
                <button>Know More..!</button>
              </div>
            </div>
            <div className='c_third'>
              <img src={v}></img>
              <h2 className='c_title'>Design Courses</h2>
              <div className='c_btn d-flex'>
                <h3 className='c_btn1 d-flex'>
                  <div><FaStar></FaStar></div>
                  <div><FaStar></FaStar></div>
                  <div><FaStar></FaStar></div>
                  <div><FaStar></FaStar></div>
                  <div><FaRegStarHalfStroke></FaRegStarHalfStroke></div>
                </h3>
                <button>Know More..!</button>
              </div>
            </div>
            <div className='c_second'>
              <img src={j}></img>
              <h2 className='c_title'>Programming IT</h2>
              <div className='c_btn d-flex'>
                <h3 className='c_btn1 d-flex'>
                  <div><FaStar></FaStar></div>
                  <div><FaStar></FaStar></div>
                  <div><FaStar></FaStar></div>
                  <div><FaStar></FaStar></div>
                  <div><FaRegStarHalfStroke></FaRegStarHalfStroke></div>
                </h3>
                <button>Know More..!</button>
              </div>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='container d-flex'>
            <div className='c_first'>
              <img src={e}></img>
              <h2 className='c_title'>Trendy Courses</h2>
              <div className='c_btn d-flex'>
                <h3 className='c_btn1 d-flex'>
                  <div><FaStar></FaStar></div>
                  <div><FaStar></FaStar></div>
                  <div><FaStar></FaStar></div>
                  <div><FaStar></FaStar></div>
                  <div><FaRegStarHalfStroke></FaRegStarHalfStroke></div>
                </h3>
                <button>Know More..!</button>
              </div>
            </div>
            <div className='c_third'>
              <img src={u}></img>
              <h2 className='c_title'>Civil-Mech. Engineering</h2>
              <div className='c_btn d-flex'>
                <h3 className='c_btn1 d-flex'>
                  <div><FaStar></FaStar></div>
                  <div><FaStar></FaStar></div>
                  <div><FaStar></FaStar></div>
                  <div><FaStar></FaStar></div>
                  <div><FaRegStarHalfStroke></FaRegStarHalfStroke></div>
                </h3>
                <button>Know More..!</button>
              </div>
            </div>
            <div className='c_second'>
              <img src={t}></img>
              <h2 className='c_title'>Business Development</h2>
              <div className='c_btn d-flex'>
                <h3 className='c_btn1 d-flex'>
                  <div><FaStar></FaStar></div>
                  <div><FaStar></FaStar></div>
                  <div><FaStar></FaStar></div>
                  <div><FaStar></FaStar></div>
                  <div><FaRegStarHalfStroke></FaRegStarHalfStroke></div>
                </h3>
                <button>Know More..!</button>
              </div>
            </div>
          </div>
        </div>
        <div className='c_final'>
          <div>
            <button>View All Courses<i><FaArrowRightLong></FaArrowRightLong></i></button>
          </div>
        </div>
      </div>
      {/* Course End */}

      {/* About Us Start */}
      <div className='about d-flex p-bottom'>
        <div className='border'>
          <div className='text'>
            <div className='a_title'>
              <p>About Us</p>
            </div>
            <div className='a_sub'>
              <p>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</p>
            </div>
            <div className='a_sec'>
              <p>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
            </div>
            <div className='a_btn'>
              <button>Enroll Now..!<i><FaArrowRightLong></FaArrowRightLong></i></button>
            </div>
          </div>
        </div>
        <div className='pic'>
          <img src={a} className='a-pic'></img>
        </div>
      </div>
      {/* About Us End */}

      {/* Number Start */}
      <div className='number p-bottom'>
        <div className='num_pic'>
          <img src={h} className='n_pic'></img>
        </div>
        <div className='num-data'>
          <div className='container'>
            <div className='p1'>
              <img src={n11}></img>
              <h2>18000+</h2>
              <h3>HAPPY STUDENTS</h3>
            </div>
            <div className='p1'>
              <img src={n12}></img>
              <h2>10+</h2>
              <h3>CERTIFICATION APPROVAL</h3>
            </div>
            <div className='p1'>
              <img src={n13}></img>
              <h2>100+</h2>
              <h3>CERTIFIED TEACHERS</h3>
            </div>
            <div className='p1'>
              <img src={n14}></img>
              <h2>12000+</h2>
              <h3>STUDENTS PLACED</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Number End */}

      {/* Happy Student Start */}
      <div className='happy p-bottom'>
        <div className='container d-flex'>
          <div className='ha-left'>
            <div className='ha-title'>
              <h3 className='line'>HAPPY STUDENTS</h3>
              <h2>ALUMNI SPEAK</h2>
            </div>
            <div className='happy-text'>
              <div className='ha-text d-flex'>
                <div>
                  <img src={q}></img>
                </div>
                <div>
                  <i><FaAngleLeft></FaAngleLeft></i>
                  <i><FaAngleRight></FaAngleRight></i>
                </div>
              </div>
              <div className='ha-pra'>
                <p>I have joined creative multimedia institute for UI/UX Design course two months ago. Had a really great experience in learning the course. I am thankful to the sir who taught us really well with different approaches. This learning process gave me confidence on how to explore myself better with higher level of understanding. Thank you creative multimedia.</p>
              </div>
              <div className='ha-pro'>
                <div className='ha-pic'>
                  <img src={ma} className='ha-ma'></img>
                </div>
                <div className='pic-p'>
                  <h3>KOLADIYA MANSI</h3>
                  <div className='margin'>UI/UX Designer<span> @ Patoliya Infotech</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className='ha-right'>
            <div>
              <img src={ha} className='happy-pic'></img>
            </div>
          </div>
        </div>
      </div>
      {/* Happy Student End */}

      {/* Why Choose Start */}
      <div className='why p-bottom'>
        <div className='wh-title'>
          <div className='wh-sub'>
            <section>READ OUR DEFERENCE</section>
          </div>
          <div className='wh-main'>
            <h1>WHY CHOOSE CREATIVE</h1>
          </div>
        </div>
        <div className='wh-box'>
          <div className='container d-flex'>
            <div className='wh-1'>
              <div className='wh-pic'>
                <img src={wh1} className='wh-ima1'></img>
              </div>
              <div className='wh-til'>
                <h3>Industry Experts As Trainers</h3>
              </div>
              <div className='wh-pit'>
                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
              </div>
            </div>
            <div className='wh-2'>
              <div className='wh-pic'>
                <img src={wh2} className='wh-ima2'></img>
              </div>
              <div className='wh-til'>
                <h3>Latest Curriculum</h3>
              </div>
              <div className='wh-pit'>
                <p>We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.</p>
              </div>
            </div>
            <div className='wh-3'>
              <div className='wh-pic'>
                <img src={wh3} className='wh-ima3'></img>
              </div>
              <div className='wh-til'>
                <h3>Latest Technology</h3>
              </div>
              <div className='wh-pit'>
                <p>We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='wh-box'>
          <div className='container d-flex'>
            <div className='wh-1'>
              <div className='wh-pic'>
                <img src={wh4} className='wh-ima4'></img>
              </div>
              <div className='wh-til'>
                <h3>Interview Assistance</h3>
              </div>
              <div className='wh-pit'>
                <p>At the end of each training,our training instructor will go through the possible technical questions you may be asked.</p>
              </div>
            </div>
            <div className='wh-2'>
              <div className='wh-pic'>
                <img src={wh5} className='wh-ima5'></img>
              </div>
              <div className='wh-til'>
                <h3>Free Upgradation</h3>
              </div>
              <div className='wh-pit'>
                <p>We will be provided free upgradation for any newer version of the course you have.</p>
              </div>
            </div>
            <div className='wh-3'>
              <div className='wh-pic'>
                <img src={wh6} className='wh-ima6'></img>
              </div>
              <div className='wh-til'>
                <h3>Lifetime Support</h3>
              </div>
              <div className='wh-pit'>
                <p>We will provide you lifetime support on all the courses you learned from us.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose End */}

      {/* Student Placement Strat */}
      <div className='placement p-bottom'>
        <div className='pl-title'>
          <div className='pl-sub'>
            <section>STUDENTS PLACEMENT</section>
          </div>
          <div className='pl-main'>
            <h1>OUR RECRUITMENT PARTNERS</h1>
          </div>
        </div>
        <div className='st-logo'>
          <div className='container d-flex2'>
            <div className='st-1'>
              <img src={st1}></img>
            </div>
            <div className='st-2'>
              <img src={st2}></img>
            </div>
            <div className='st-3'>
              <img src={st3}></img>
            </div>
            <div className='st-4'>
              <img src={st4}></img>
            </div>
            <div className='st-5'>
              <img src={st5}></img>
            </div>
            <div className='st-6'>
              <img src={st6}></img>
            </div>
          </div>
        </div>
      </div>
      {/* Student Placement End */}

      {/* Our Course Start */}
      <div className='our'>
        <div className='container'>
          <div className='our-title'>
            <h2>Our Demanded Course - </h2>
          </div>
          <div className='our-btn'>
            <button>Unity Tradining 3D Course</button>
            <button>Best Multimedia Training Institute In Surat</button>
            <button>Blender 3d Cesign Course</button>
            <button>Civil Engineering Training Institute</button>
            <button>Codeigniter Training Institute In Surat</button>
            <button>Photoshop Training Course</button>
            <button>Game Development Training In Surat</button>
            <button>Android Training Institute In Katargam</button>
            <button>Best Web Development Training Institute</button>
            <button>Best Autocad Training Institute</button>
            <button>Google Sketchup Training Institute In Varachha</button>
            <button>Multimedia Training Course</button>
            <button>Web Development Training In Katargam</button>
            <button>Video Editing Training Institute In Mota Varachha</button>
            <button>Best Php Training In Mota Varachha</button>
          </div>
          <div className='our-text'>
            <section>Show More</section>
          </div>
        </div>
      </div>
      {/* Our Course End */}

      {/* Footer Start */}
      <div className='footer'>
        <div className='top_footer'>
          <div className='container d-flex'>
            <div className='col-1'>
              <div className='footer-lo'>
                <img src={d1}></img>
              </div>
              <div className='foo-text'>
                <section>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</section>
              </div>
              <div className='foo-link'>
                <section>FOLLOW US ON</section>
              </div>
              <div className='foo-tag'>
                <p><FaFacebookF></FaFacebookF></p>
                <p><FaTwitter></FaTwitter></p>
                <p><TfiGoogle></TfiGoogle></p>
                <p><IoLogoLinkedin></IoLogoLinkedin></p>
                <p><ImInstagram></ImInstagram></p>
                <p><AiOutlineYoutube></AiOutlineYoutube></p>
                <p><SiWhatsapp></SiWhatsapp></p>
              </div>
            </div>
            <div className='col-2'>
              <div className='col-2_title'>
                <h4>FEATURE LINKS</h4>
                {/* <ul> */}
                {/* <li><a><i><FaHandPointRight></FaHandPointRight></i>About Us</a></li> */}
                {/* </ul> */}
              </div>
              <div className='col-2_tex'>
                <p><i><FaHandPointRight></FaHandPointRight></i>About Us</p>
                <p><i><FaHandPointRight></FaHandPointRight></i>Blogs</p>
                <p><i><FaHandPointRight></FaHandPointRight></i>Join Us</p>
                <p><i><FaHandPointRight></FaHandPointRight></i>Company Login</p>
                <p><i><FaHandPointRight></FaHandPointRight></i>Certificate Verification</p>
              </div>
            </div>
            <div className='col-3'>
              <div className='col-3_title'>
                <h4>CONTACT US</h4>
                <h4 className='color'>HEAD OFFICE - YOGICHOWK</h4>
                <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
                <section>Mo : <i className='color'>+91 90333 16003</i></section>
              </div>
              <div className='other'>
                <h4 className='color'>OTHER BRANCHES</h4>
              </div>
              <div className='other_lo'>
                <p><i><FaUniversity></FaUniversity></i>Katargam</p>
                <p><i><FaUniversity></FaUniversity></i>Mota Varachha</p>
                <p><i><FaUniversity></FaUniversity></i>Adajan</p>
                <p><i><FaUniversity></FaUniversity></i>Navsari</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom_footer'>
        <div className='container'>
          <div className='last'>
            <p>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </div>
  );
}

export default App;
