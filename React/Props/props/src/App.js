import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TfiGoogle } from "react-icons/tfi";
import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube, FaWhatsapp, FaUniversity, FaHandPointRight } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

// import ss from './image/logo.svg'
// import ss2 from './image/logo2.svg'

import i8 from './image/ha.jpg'
import i10 from './image/10.png'
import i11 from './image/ca.PNG'
import i12 from './image/12.jpg'
import Header from './Header';
import Box from './Box';
import Head from './Head';
import About from './About';
import Why from './Why';
import Slider from './Slider';
import Image_slider from './Image_slider';
import Btn from './image/Btn';


function App() {

  const data = ['Home', ' Courses', 'Activities', 'Blog', 'Know Us', 'Get In touch', 'Student Zone']
  const logo = require('./image/logo.svg')

  const box = [
    {
      title: "Development Courses",
      button: "Know more",
      url: require('./image/1.webp')
    },
    {
      title: "Design Courses",
      button: "Know more",
      url: require('./image/2.webp')

    },
    {
      title: "Programming IT",
      button: "Know more",
      url: require('./image/4.webp')
    },
    {
      title: "Trendy Courses",
      button: "Know more",
      url: require('./image/5.webp')
    },
    {
      title: "Civil-Mech. Engineering",
      button: "Know more",
      url: require('./image/6.jpg')
    },
    {
      title: "Business Development",
      button: "Know more",
      url: require('./image/1.webp')
    },
  ]

  const nvbar = ['info@cdmi.in', ' Verify Certificate']
  const ab = {
    ab_title: 'ABOUT US',
    ab_con: 'IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!',
    ab_content: 'Creative Design & Multimedia Institute(CDMI)  is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields.Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.',
    ab_btn: 'Enroll Now..!',
    ab_img: require('./image/kex.webp')
  }

  const wh = [
    {
      wh_title : 'Industry Experts As Trainers',
      wh_con : 'Our trainers have 5+ years of industry experience coupled with extensive research and analysis.',
      wh_img : require('./image/12.jpg')
    },
    {
      wh_title : 'Industry Experts As Trainers',
      wh_con : 'Our trainers have 5+ years of industry experience coupled with extensive research and analysis.',
      wh_img : require('./image/12.jpg')
    },
    {
      wh_title : 'Industry Experts As Trainers',
      wh_con : 'Our trainers have 5+ years of industry experience coupled with extensive research and analysis.',
      wh_img : require('./image/12.jpg')
    },
    {
      wh_title : 'Industry Experts As Trainers',
      wh_con : 'Our trainers have 5+ years of industry experience coupled with extensive research and analysis.',
      wh_img : require('./image/12.jpg')
    },
    {
      wh_title : 'Industry Experts As Trainers',
      wh_con : 'Our trainers have 5+ years of industry experience coupled with extensive research and analysis.',
      wh_img : require('./image/12.jpg')
    },
    {
      wh_title : 'Industry Experts As Trainers',
      wh_con : 'Our trainers have 5+ years of industry experience coupled with extensive research and analysis.',
      wh_img : require('./image/12.jpg')
    }
  ]

  var slider = [
    {slide : require('./image/s-1.webp')},
    {slide : require('./image/s-2.webp')},
    {slide : require('./image/s-3.webp')},
    {slide : require('./image/s-4.webp')},
    {slide : require('./image/s-5.webp')},
  ]

  var part = [
    {p_url : require('./image/ss-1.png')},
    {p_url : require('./image/ss-2.png')},
    {p_url : require('./image/ss-3.jpg')},
    {p_url : require('./image/ss-4.png')},
    {p_url : require('./image/ss-5.png')},
    {p_url : require('./image/ss-6.png')},
    {p_url : require('./image/ss-7.png')},
    {p_url : require('./image/ss-8.jpg')},
    {p_url : require('./image/ss-9.png')},
    {p_url : require('./image/ss-10.png')},
  ]

  const btn = ['C++ Programming Language Training Institute', 'Latest technology course training institute in varachha', 'Autocad training institute in surat', 'Laravel training institute in Mota Varachha', 'computer institutes in yogichowk', 'Maya animation training institute', 'Advance Unity 3d training institute in surat', 'Game design training institute in varachha', 'Graphics design training in varachha', 'Maya 3d animation training institute in surat', '3ds max civil training course', 'Civil engineering training institute in varachha']

  return (
    <>
      <Head nvbar={nvbar} />
      <Header data={data} logo={logo} />
      <Slider simg = {slider}/>
      <Box data={box} />

      {/* About Us */}

      <About ab={ab} />

      {/* happy student */}

      <div className='happy-s'>
        <img src={i8}>
        </img>
        <div className='data'>
          <div className='container'>
            <div className='p1'>
              <h2>18000+</h2>
              <h3>HAPPY STUDENTS</h3>
            </div>
            <div className='p2'>
              <h2>10+</h2>
              <h3>CERTIFICATION APPROVAL</h3>
            </div>
            <div className='p3'>
              <h2>100+</h2>
              <h3>CERTIFIED TEACHERS</h3>
            </div>
            <div className='p4'>
              <h2>12000+</h2>
              <h3>STUDENTS PLACED</h3>
            </div>
          </div>
        </div>
      </div>


      {/* Alumni speak */}

      <div className='container'>
        <div className='speak d-flex'>
          <div className='s-one'>
            <h1>HAPPY STUDENTS </h1>
            <h2>ALUMNI SPEAK</h2>
            <img src={i11}></img>
            <p>I have joined creative multimedia institute for UI/UX Design course two months ago. Had a really great experience in learning the course. I am thankful to the sir who taught us really well with different approaches. This learning process gave me confidence on how to explore myself better with higher level of understanding. Thank you creative multimedia.</p>
            <div className='ee'>
              <img src={i12}></img>
              <div>
                <h1>KOLADIYA MANSi</h1>
                <div className='d-flex'>
                  <h2>UI/UX Designer </h2>
                  <h3> @ patoliya infotech</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='s-two'>
            <img src={i10}></img>
          </div>
        </div>
      </div>

      {/* why choice creative */}

      <Why wh = {wh}/>
      <Image_slider part = {part}/>

      {/* <div className='hello  '>
      <div className='container'>
      <div className=' choice  space '>
        <h1>READ OUR DIFFERENCE</h1>
        <h2>WHY CHOOSE CREATIVE</h2>
        <div className='crow-1 '>
          <div className='bo1 '>
            <img src={i12}></img>
            <h1>Industry Experts As Trainers</h1>
            <h2>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</h2>
          </div>
          <div className='bo1 '>
            <img src={i12}></img>
            <h1>Latest Curriculum</h1>
            <h2>We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.</h2>
          </div>
          <div className='bo1 '>
            <img src={i12}></img>
            <h1>Latest Technology</h1>
            <h2>We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</h2>
          </div>
          
        </div>
        <div className='crow-1 '>
          <div className='bo1 '>
            <img src={i12}></img>
            <h1>Interview Assistance</h1>
            <h2>At the end of each training,our training instructor will go through the possible technical questions you may be asked.</h2>
          </div>
          <div className='bo1 '>
            <img src={i12}></img>
            <h1>Free Upgradation</h1>
            <h2>We will be provided free upgradation for any newer version of the course you have.</h2>
          </div>
          <div className='bo1 '>
            <img src={i12}></img>
            <h1>Lifetime Support</h1>
            <h2>We will provide you lifetime support on all the courses you learned from us.</h2>
          </div>
          
        </div>
      </div>
      </div>
    </div> */}

      {/* student placement */}

      {/* <div className='container'>
        <div className='place'>
          <h1>STUDENT PLACEMENT</h1>
          <h2> OUR RECRUITMENT PARTNERS</h2>
          <div className='job d-flex'>
            <img src={i13}></img>
            <img src={i14}></img>
            <img src={i15}></img>
            <img src={i16}></img>
            <img src={i17}></img>
            <img src={i18}></img>
          </div>
        </div>
      </div> */}

      {/* OUR DEMAND */}

      <Btn btn = {btn}/>

      {/* Futter */}
      <div className='futter'>
        <div className='container'>
          <div className='foo d-flex'>
            <div className='f1'>
              {/* <img src={ss2}></img> */}
              <h1>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</h1>
              <h2>FOLLOW US ON</h2>
              <div className='icon'>
                <i><FaFacebookF /></i><i><FaTwitter /></i><i><TfiGoogle /></i><i><FaLinkedin /></i><i><TiSocialInstagram /></i><i><FaYoutube /></i><i><FaWhatsapp /></i>
              </div>
            </div>
            <div className='f2'>
              <h1>FEATURE LINKS</h1>
              <h2><FaHandPointRight /> About Us</h2>
              <h2><FaHandPointRight /> Blogs</h2>
              <h2><FaHandPointRight /> Join Us</h2>
              <h2><FaHandPointRight /> Company Login</h2>
              <h2><FaHandPointRight /> Certificate Verification</h2>
            </div>
            <div className='f3'>
              <h1>CONTACT US</h1>
              <h2>HEAD OFFICE - YOGICHOWK</h2>
              <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk,</p>
              <p> Varachha, Surat.</p>
              <div className='mo'>MO.<h3>+91 69594 98752</h3></div>
              <h4>OTHER BRANCHES</h4>
              <h5><FaUniversity /> Katargam</h5>
              <h5><FaUniversity />  Mota Varachha</h5>
              <h5><FaUniversity /> Adajan</h5>
              <h5><FaUniversity /> Navsari</h5>
            </div>
          </div>
        </div>
      </div>

      <div className='last'>
        <h1>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</h1>
      </div>


    </>
  )
}

export default App;
